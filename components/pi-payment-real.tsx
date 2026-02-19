"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Loader2, Coins, CheckCircle, XCircle, AlertCircle, User } from "lucide-react"

declare global {
  interface Window {
    Pi: any
  }
}

interface PiUser {
  uid: string
  username: string
}

interface PaymentData {
  amount: number
  memo: string
  metadata: {
    serviceType: string
    orderId: string
    userId: string
  }
}

interface PiPaymentRealProps {
  serviceType: string
  amount: number
  onPaymentSuccess?: (paymentId: string, txid: string) => void
  onPaymentError?: (error: string) => void
}

export function PiPaymentReal({ serviceType, amount, onPaymentSuccess, onPaymentError }: PiPaymentRealProps) {
  const [isInitialized, setIsInitialized] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<PiUser | null>(null)
  const [accessToken, setAccessToken] = useState<string>("")
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success" | "error" | "cancelled">("idle")
  const [paymentMessage, setPaymentMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [paymentId, setPaymentId] = useState<string>("")
  const [txid, setTxid] = useState<string>("")

  useEffect(() => {
    // Load Pi SDK
    const script = document.createElement("script")
    script.src = "https://sdk.minepi.com/pi-sdk.js"
    script.async = true
    script.onload = initializePi
    script.onerror = () => {
      console.error("Failed to load Pi SDK")
      setPaymentMessage("Failed to load Pi Network SDK")
    }
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  const initializePi = () => {
    if (window.Pi) {
      try {
        window.Pi.init({
          version: "2.0",
          sandbox: false, // Set to true for testing, false for production
        })
        setIsInitialized(true)
        console.log("Pi SDK initialized successfully")
      } catch (error) {
        console.error("Pi SDK initialization failed:", error)
        setPaymentMessage("Failed to initialize Pi Network")
      }
    }
  }

  const authenticateUser = async () => {
    if (!window.Pi) {
      setPaymentMessage("Pi Network SDK not available")
      return
    }

    setIsLoading(true)
    setPaymentMessage("Connecting to Pi Network...")

    try {
      // Define scopes for authentication
      const scopes = ["payments", "username"]

      // Handle incomplete payments
      const onIncompletePaymentFound = (payment: any) => {
        console.log("Incomplete payment found:", payment)
        if (payment && payment.identifier && payment.transaction?.txid) {
          setPaymentId(payment.identifier)
          setTxid(payment.transaction.txid)
          handleIncompletePayment(payment.identifier, payment.transaction.txid)
        }
      }

      // Authenticate user
      const authResult = await window.Pi.authenticate(scopes, onIncompletePaymentFound)

      if (authResult && authResult.accessToken && authResult.user) {
        setAccessToken(authResult.accessToken)
        setUser({
          uid: authResult.user.uid,
          username: authResult.user.username,
        })
        setIsAuthenticated(true)
        setPaymentMessage("")
        console.log("Authentication successful:", authResult.user.username)
      } else {
        throw new Error("Authentication failed - invalid response")
      }
    } catch (error) {
      console.error("Authentication failed:", error)
      setPaymentMessage("Authentication failed. Please try again.")
      onPaymentError?.("Authentication failed")
    } finally {
      setIsLoading(false)
    }
  }

  const createPayment = async () => {
    if (!window.Pi || !isAuthenticated || !user || !accessToken) {
      setPaymentMessage("Please authenticate first")
      return
    }

    setPaymentStatus("processing")
    setIsLoading(true)
    setPaymentMessage("Preparing payment...")

    const orderId = `ORDER_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    const paymentData: PaymentData = {
      amount: amount,
      memo: `${serviceType} - SOP TRD Nepal`,
      metadata: {
        serviceType: serviceType,
        orderId: orderId,
        userId: user.uid,
      },
    }

    const paymentCallbacks = {
      onReadyForServerApproval: async (paymentId: string) => {
        console.log("Payment ready for server approval:", paymentId)
        setPaymentId(paymentId)
        setPaymentMessage("Approving payment...")

        try {
          const response = await fetch("/api/pi/approve", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              paymentId: paymentId,
              accessToken: accessToken,
            }),
          })

          const result = await response.json()

          if (!response.ok) {
            throw new Error(result.error || "Server approval failed")
          }

          console.log("Server approval successful:", result)
          setPaymentMessage("Payment approved, completing transaction...")
        } catch (error) {
          console.error("Server approval error:", error)
          setPaymentStatus("error")
          setPaymentMessage(`Approval failed: ${error instanceof Error ? error.message : "Unknown error"}`)
          setIsLoading(false)
        }
      },

      onReadyForServerCompletion: async (paymentId: string, txid: string) => {
        console.log("Payment ready for completion:", paymentId, txid)
        setTxid(txid)
        setPaymentMessage("Completing payment...")

        try {
          const response = await fetch("/api/pi/complete", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              paymentId: paymentId,
              txid: txid,
              accessToken: accessToken,
            }),
          })

          const result = await response.json()

          if (response.ok) {
            // Record the transaction
            await recordTransaction(paymentId, txid, orderId)

            setPaymentStatus("success")
            setPaymentMessage("Payment completed successfully!")
            onPaymentSuccess?.(paymentId, txid)
            console.log("Payment completed successfully")
          } else {
            throw new Error(result.error || "Payment completion failed")
          }
        } catch (error) {
          console.error("Payment completion error:", error)
          setPaymentStatus("error")
          setPaymentMessage(`Completion failed: ${error instanceof Error ? error.message : "Unknown error"}`)
        } finally {
          setIsLoading(false)
        }
      },

      onCancel: (paymentId: string) => {
        console.log("Payment cancelled:", paymentId)
        setPaymentStatus("cancelled")
        setPaymentMessage("Payment was cancelled by user")
        setIsLoading(false)
      },

      onError: (error: any, paymentId: string) => {
        console.error("Payment error:", error, paymentId)
        setPaymentStatus("error")
        setPaymentMessage(`Payment failed: ${error.message || error.type || "Unknown error"}`)
        setIsLoading(false)
        onPaymentError?.(error.message || "Payment failed")
      },
    }

    try {
      console.log("Creating payment with data:", paymentData)
      await window.Pi.createPayment(paymentData, paymentCallbacks)
    } catch (error) {
      console.error("Create payment error:", error)
      setPaymentStatus("error")
      setPaymentMessage(`Failed to create payment: ${error instanceof Error ? error.message : "Unknown error"}`)
      setIsLoading(false)
    }
  }

  const handleIncompletePayment = async (paymentId: string, txid: string) => {
    console.log("Handling incomplete payment:", paymentId, txid)
    setPaymentMessage("Completing previous payment...")

    try {
      const response = await fetch("/api/pi/complete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentId: paymentId,
          txid: txid,
          accessToken: accessToken,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        await recordTransaction(paymentId, txid, `RECOVERED_${Date.now()}`)
        setPaymentStatus("success")
        setPaymentMessage("Previous payment completed successfully!")
        onPaymentSuccess?.(paymentId, txid)
      } else {
        console.error("Incomplete payment completion failed:", result)
      }
    } catch (error) {
      console.error("Incomplete payment handling error:", error)
    }
  }

  const recordTransaction = async (paymentId: string, txid: string, orderId: string) => {
    try {
      const response = await fetch("/api/pi/transaction", {
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
          orderId: orderId,
        }),
      })

      if (!response.ok) {
        console.error("Failed to record transaction")
      } else {
        console.log("Transaction recorded successfully")
      }
    } catch (error) {
      console.error("Transaction recording error:", error)
    }
  }

  const resetPayment = () => {
    setPaymentStatus("idle")
    setPaymentMessage("")
    setPaymentId("")
    setTxid("")
  }

  if (!isInitialized) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="p-6 text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-yellow-600" />
          <p className="text-gray-600">Loading Pi Network SDK...</p>
          <p className="text-xs text-gray-500 mt-2">Make sure you're using Pi Browser</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto border-yellow-200">
      <CardHeader className="text-center bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="flex items-center justify-center mb-2">
          <Coins className="h-8 w-8 text-yellow-600 mr-2" />
          <CardTitle className="text-yellow-800">Pi Network Payment</CardTitle>
        </div>
        <Badge className="mx-auto bg-yellow-600 hover:bg-yellow-700">
          {serviceType} - π {amount}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4 p-6">
        {!isAuthenticated ? (
          <div className="text-center space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-blue-800 font-medium mb-2">Connect Your Pi Wallet</p>
              <p className="text-sm text-blue-600">Authenticate with Pi Network to proceed with secure payment</p>
            </div>

            <Button
              onClick={authenticateUser}
              disabled={isLoading}
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white"
              size="lg"
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

            {paymentMessage && <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">{paymentMessage}</p>}
          </div>
        ) : (
          <div className="space-y-4">
            {/* User Info */}
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center justify-center mb-2">
                <User className="h-5 w-5 text-green-600 mr-2" />
                <span className="font-medium text-green-800">Welcome, {user?.username}!</span>
              </div>
              <Badge variant="outline" className="mx-auto block w-fit border-green-300 text-green-700">
                Wallet Connected
              </Badge>
            </div>

            {/* Payment Status */}
            {paymentStatus === "idle" && (
              <div className="space-y-3">
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <div className="text-center">
                    <p className="font-semibold text-yellow-800 mb-1">Ready to Pay</p>
                    <p className="text-sm text-yellow-700">
                      π {amount} for {serviceType}
                    </p>
                  </div>
                </div>

                <Button
                  onClick={createPayment}
                  disabled={isLoading}
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white"
                  size="lg"
                >
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
              </div>
            )}

            {paymentStatus === "processing" && (
              <div className="text-center space-y-3">
                <Loader2 className="h-12 w-12 animate-spin mx-auto text-yellow-600" />
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-medium text-blue-800">Processing Payment</p>
                  <p className="text-sm text-blue-600 mt-1">{paymentMessage}</p>
                </div>
                {paymentId && <p className="text-xs text-gray-500">Payment ID: {paymentId}</p>}
              </div>
            )}

            {paymentStatus === "success" && (
              <div className="text-center space-y-3">
                <CheckCircle className="h-12 w-12 mx-auto text-green-600" />
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="font-medium text-green-800 mb-1">Payment Successful!</p>
                  <p className="text-sm text-green-600">{paymentMessage}</p>
                  {txid && <p className="text-xs text-green-500 mt-2 break-all">Transaction: {txid}</p>}
                </div>
                <Button onClick={resetPayment} variant="outline" size="sm">
                  Make Another Payment
                </Button>
              </div>
            )}

            {paymentStatus === "error" && (
              <div className="text-center space-y-3">
                <XCircle className="h-12 w-12 mx-auto text-red-600" />
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="font-medium text-red-800 mb-1">Payment Failed</p>
                  <p className="text-sm text-red-600">{paymentMessage}</p>
                </div>
                <Button onClick={resetPayment} variant="outline" size="sm">
                  Try Again
                </Button>
              </div>
            )}

            {paymentStatus === "cancelled" && (
              <div className="text-center space-y-3">
                <AlertCircle className="h-12 w-12 mx-auto text-orange-600" />
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <p className="font-medium text-orange-800 mb-1">Payment Cancelled</p>
                  <p className="text-sm text-orange-600">{paymentMessage}</p>
                </div>
                <Button onClick={resetPayment} variant="outline" size="sm">
                  Try Again
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Footer Info */}
        <div className="text-xs text-gray-500 text-center space-y-1 pt-4 border-t">
          <p className="flex items-center justify-center">
            <Coins className="h-3 w-3 mr-1" />
            Secure payment powered by Pi Network
          </p>
          <p>Production mode - Real Pi transactions</p>
        </div>
      </CardContent>
    </Card>
  )
}
