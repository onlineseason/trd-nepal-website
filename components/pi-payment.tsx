"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Loader2, Coins, CheckCircle, XCircle, AlertCircle } from "lucide-react"

declare global {
  interface Window {
    Pi: any
  }
}

interface PaymentData {
  amount: number
  memo: string
  metadata: {
    serviceType: string
    orderId: string
  }
}

interface PiPaymentProps {
  serviceType: string
  amount: number
  onPaymentSuccess?: (paymentId: string) => void
  onPaymentError?: (error: string) => void
}

export function PiPayment({ serviceType, amount, onPaymentSuccess, onPaymentError }: PiPaymentProps) {
  const [isInitialized, setIsInitialized] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success" | "error" | "cancelled">("idle")
  const [paymentMessage, setPaymentMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Load Pi SDK
    const script = document.createElement("script")
    script.src = "https://sdk.minepi.com/pi-sdk.js"
    script.async = true
    script.onload = initializePi
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  const initializePi = () => {
    if (window.Pi) {
      window.Pi.init({
        version: "2.0",
        sandbox: true, // Set to false for production
      })
      setIsInitialized(true)
    }
  }

  const authenticateUser = async () => {
    if (!window.Pi) return

    setIsLoading(true)
    try {
      const authResult = await window.Pi.authenticate(["payments", "username"], (payment: any) => {
        console.log("Incomplete payment found:", payment)
        handleIncompletePayment(payment)
      })

      setIsAuthenticated(true)
      setUser(authResult.user)
      setIsLoading(false)
    } catch (error) {
      console.error("Authentication failed:", error)
      setIsLoading(false)
      onPaymentError?.("Authentication failed")
    }
  }

  const createPayment = async () => {
    if (!window.Pi || !isAuthenticated) return

    setPaymentStatus("processing")
    setIsLoading(true)

    const paymentData: PaymentData = {
      amount: amount,
      memo: `Payment for ${serviceType} - SOP TRD Nepal`,
      metadata: {
        serviceType: serviceType,
        orderId: `ORDER_${Date.now()}`,
      },
    }

    const paymentCallbacks = {
      onReadyForServerApproval: async (paymentId: string) => {
        console.log("Payment ready for server approval:", paymentId)
        try {
          const response = await fetch("/api/pi/approve", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              paymentId: paymentId,
              accessToken: window.Pi.accessToken,
            }),
          })

          if (!response.ok) {
            throw new Error("Server approval failed")
          }
        } catch (error) {
          console.error("Server approval error:", error)
          setPaymentStatus("error")
          setPaymentMessage("Payment approval failed")
        }
      },

      onReadyForServerCompletion: async (paymentId: string, txid: string) => {
        console.log("Payment ready for completion:", paymentId, txid)
        try {
          const response = await fetch("/api/pi/complete", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              paymentId: paymentId,
              txid: txid,
              accessToken: window.Pi.accessToken,
            }),
          })

          if (response.ok) {
            // Record the transaction
            await fetch("/api/pi/transaction", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                paymentId: paymentId,
                txid: txid,
                amount: amount,
                serviceType: serviceType,
                userId: user?.uid || "anonymous",
              }),
            })

            setPaymentStatus("success")
            setPaymentMessage("Payment completed successfully!")
            onPaymentSuccess?.(paymentId)
          } else {
            throw new Error("Payment completion failed")
          }
        } catch (error) {
          console.error("Payment completion error:", error)
          setPaymentStatus("error")
          setPaymentMessage("Payment completion failed")
        }
        setIsLoading(false)
      },

      onCancel: (paymentId: string) => {
        console.log("Payment cancelled:", paymentId)
        setPaymentStatus("cancelled")
        setPaymentMessage("Payment was cancelled")
        setIsLoading(false)
      },

      onError: (error: any, paymentId: string) => {
        console.error("Payment error:", error, paymentId)
        setPaymentStatus("error")
        setPaymentMessage("Payment failed: " + (error.message || "Unknown error"))
        setIsLoading(false)
        onPaymentError?.(error.message || "Payment failed")
      },
    }

    try {
      await window.Pi.createPayment(paymentData, paymentCallbacks)
    } catch (error) {
      console.error("Create payment error:", error)
      setPaymentStatus("error")
      setPaymentMessage("Failed to create payment")
      setIsLoading(false)
    }
  }

  const handleIncompletePayment = async (payment: any) => {
    console.log("Handling incomplete payment:", payment)
    try {
      const response = await fetch("/api/pi/complete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentId: payment.identifier,
          txid: payment.transaction?.txid,
          accessToken: window.Pi.accessToken,
        }),
      })

      if (response.ok) {
        setPaymentStatus("success")
        setPaymentMessage("Previous payment completed!")
        onPaymentSuccess?.(payment.identifier)
      }
    } catch (error) {
      console.error("Incomplete payment handling error:", error)
    }
  }

  const resetPayment = () => {
    setPaymentStatus("idle")
    setPaymentMessage("")
  }

  if (!isInitialized) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="p-6 text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p>Loading Pi Network SDK...</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center mb-2">
          <Coins className="h-8 w-8 text-yellow-600 mr-2" />
          <CardTitle>Pi Network Payment</CardTitle>
        </div>
        <Badge variant="secondary" className="mx-auto">
          {serviceType} - π {amount}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4">
        {!isAuthenticated ? (
          <div className="text-center space-y-4">
            <p className="text-gray-600">Connect your Pi Network account to proceed with payment</p>
            <Button
              onClick={authenticateUser}
              disabled={isLoading}
              className="w-full bg-yellow-600 hover:bg-yellow-700"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Connecting...
                </>
              ) : (
                <>
                  <Coins className="h-4 w-4 mr-2" />
                  Connect Pi Wallet
                </>
              )}
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-sm text-gray-600">Welcome, {user?.username || "Pi User"}!</p>
              <Badge variant="outline" className="mt-1">
                Connected
              </Badge>
            </div>

            {paymentStatus === "idle" && (
              <Button onClick={createPayment} disabled={isLoading} className="w-full bg-yellow-600 hover:bg-yellow-700">
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Coins className="h-4 w-4 mr-2" />
                    Pay π {amount}
                  </>
                )}
              </Button>
            )}

            {paymentStatus === "processing" && (
              <div className="text-center space-y-2">
                <Loader2 className="h-8 w-8 animate-spin mx-auto text-yellow-600" />
                <p className="text-sm text-gray-600">Processing payment...</p>
              </div>
            )}

            {paymentStatus === "success" && (
              <div className="text-center space-y-2">
                <CheckCircle className="h-8 w-8 mx-auto text-green-600" />
                <p className="text-sm text-green-600 font-medium">{paymentMessage}</p>
                <Button onClick={resetPayment} variant="outline" size="sm">
                  Make Another Payment
                </Button>
              </div>
            )}

            {paymentStatus === "error" && (
              <div className="text-center space-y-2">
                <XCircle className="h-8 w-8 mx-auto text-red-600" />
                <p className="text-sm text-red-600 font-medium">{paymentMessage}</p>
                <Button onClick={resetPayment} variant="outline" size="sm">
                  Try Again
                </Button>
              </div>
            )}

            {paymentStatus === "cancelled" && (
              <div className="text-center space-y-2">
                <AlertCircle className="h-8 w-8 mx-auto text-orange-600" />
                <p className="text-sm text-orange-600 font-medium">{paymentMessage}</p>
                <Button onClick={resetPayment} variant="outline" size="sm">
                  Try Again
                </Button>
              </div>
            )}
          </div>
        )}

        <div className="text-xs text-gray-500 text-center">
          <p>Secure payment powered by Pi Network</p>
          <p>Sandbox mode - No real Pi will be charged</p>
        </div>
      </CardContent>
    </Card>
  )
}
