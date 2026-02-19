"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PiPaymentReal } from "@/components/pi-payment-real"
import { Coins, CreditCard, CheckCircle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select" // Import Select components

interface PaymentSelectorProps {
  serviceType: string
  piPrice: number
  fiatPrices: {
    npr: number
    inr: number
    usd: number
    euro: number
    pound: number
  }
  onPaymentSuccess?: (paymentId: string, method: string) => void
}

export function PaymentSelector({ serviceType, piPrice, fiatPrices, onPaymentSuccess }: PaymentSelectorProps) {
  const [selectedMethod, setSelectedMethod] = useState("traditional")
  const [paymentCompleted, setPaymentCompleted] = useState(false)
  const [completedMethod, setCompletedMethod] = useState("")
  const [selectedFiatCurrency, setSelectedFiatCurrency] = useState<"npr" | "inr" | "usd" | "euro" | "pound">("npr")

  const getFormattedPrice = () => {
    const price = fiatPrices[selectedFiatCurrency]
    switch (selectedFiatCurrency) {
      case "npr":
        return `NPR ${price.toLocaleString()}`
      case "inr":
        return `INR ${price.toLocaleString()}`
      case "usd":
        return `$${price.toFixed(2)}`
      case "euro":
        return `€${price.toFixed(2)}`
      case "pound":
        return `£${price.toFixed(2)}`
      default:
        return `${price}`
    }
  }

  const handlePiPaymentSuccess = (paymentId: string) => {
    setPaymentCompleted(true)
    setCompletedMethod("Pi Network")
    onPaymentSuccess?.(paymentId, "pi-network")
  }

  const handleTraditionalPayment = (method: string) => {
    // For traditional payments, redirect to contact form with pre-selected service
    sessionStorage.setItem("selectedService", serviceType.toLowerCase().replace(/\s+/g, "-"))
    // Optionally, you could also pass the selected currency and amount to the contact form
    // sessionStorage.setItem("selectedCurrency", selectedFiatCurrency);
    // sessionStorage.setItem("selectedAmount", fiatPrices[selectedFiatCurrency].toString());
    window.location.href = "/contact#contact-form"
  }

  if (paymentCompleted) {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-6 text-center">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-green-800 mb-2">Payment Successful!</h3>
          <p className="text-green-700 mb-4">Your payment via {completedMethod} has been processed successfully.</p>
          <p className="text-sm text-green-600 mb-4">
            We'll start working on your {serviceType} right away! You'll receive a confirmation email shortly.
          </p>
          <Button onClick={() => window.location.reload()} variant="outline">
            Make Another Payment
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Choose Payment Method</CardTitle>
        <div className="flex items-center justify-center gap-4 mt-2">
          <Badge variant="outline">{serviceType}</Badge>
          <Badge className="bg-blue-600">{getFormattedPrice()}</Badge> {/* Display selected fiat price */}
        </div>
      </CardHeader>

      <CardContent>
        <Tabs value={selectedMethod} onValueChange={setSelectedMethod} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="traditional" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Traditional Methods
            </TabsTrigger>
            <TabsTrigger value="pi-network" className="flex items-center gap-2">
              <Coins className="h-4 w-4" />
              Pi Network
            </TabsTrigger>
          </TabsList>

          <TabsContent value="traditional" className="space-y-4 mt-6">
            <div className="flex items-center gap-2 mb-4">
              <label htmlFor="currency-select" className="text-sm font-medium text-gray-700">
                Select Currency:
              </label>
              <Select
                value={selectedFiatCurrency}
                onValueChange={(value: "npr" | "inr" | "usd" | "euro" | "pound") => setSelectedFiatCurrency(value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="npr">NPR (Nepali Rupee)</SelectItem>
                  <SelectItem value="inr">INR (Indian Rupee)</SelectItem>
                  <SelectItem value="usd">USD (US Dollar)</SelectItem>
                  <SelectItem value="euro">EURO (Euro)</SelectItem>
                  <SelectItem value="pound">GBP (British Pound)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleTraditionalPayment("esewa")}
              >
                <CardContent className="p-4 text-center">
                  <img src="/images/esewa-logo.png" alt="eSewa" className="h-8 w-auto mx-auto mb-2" />
                  <h4 className="font-semibold">eSewa</h4>
                  <p className="text-sm text-gray-600">Digital wallet payment</p>
                  <p className="text-lg font-bold text-blue-600 mt-1">{getFormattedPrice()}</p>
                </CardContent>
              </Card>

              <Card
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleTraditionalPayment("khalti")}
              >
                <CardContent className="p-4 text-center">
                  <img src="/images/khalti-logo.png" alt="Khalti" className="h-8 w-auto mx-auto mb-2" />
                  <h4 className="font-semibold">Khalti</h4>
                  <p className="text-sm text-gray-600">Mobile wallet service</p>
                  <p className="text-lg font-bold text-blue-600 mt-1">{getFormattedPrice()}</p>
                </CardContent>
              </Card>

              <Card
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleTraditionalPayment("connect-ips")}
              >
                <CardContent className="p-4 text-center">
                  <img src="/images/connect-ips-logo.png" alt="Connect IPS" className="h-8 w-auto mx-auto mb-2" />
                  <h4 className="font-semibold">Connect IPS</h4>
                  <p className="text-sm text-gray-600">Bank transfer</p>
                  <p className="text-lg font-bold text-blue-600 mt-1">{getFormattedPrice()}</p>
                </CardContent>
              </Card>

              <Card
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleTraditionalPayment("visa")}
              >
                <CardContent className="p-4 text-center">
                  <img src="/images/visa-logo.png" alt="Visa" className="h-8 w-auto mx-auto mb-2" />
                  <h4 className="font-semibold">Visa</h4>
                  <p className="text-sm text-gray-600">International cards</p>
                  <p className="text-lg font-bold text-blue-600 mt-1">{getFormattedPrice()}</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> For traditional payment methods, you'll be redirected to our contact form to
                complete your order. We'll provide payment instructions after confirming your requirements. The prices
                shown are indicative and subject to daily exchange rate fluctuations. For real-time daily updates, a
                backend service would be required.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="pi-network" className="mt-6">
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-yellow-800">Pi Network Price:</span>
                  <Badge className="bg-yellow-600">π {piPrice}</Badge>
                </div>
                <p className="text-sm text-yellow-700">
                  Pay instantly with Pi cryptocurrency. Fast, secure, and eco-friendly!
                </p>
              </div>

              <PiPaymentReal
                serviceType={serviceType}
                amount={piPrice}
                onPaymentSuccess={handlePiPaymentSuccess}
                onPaymentError={(error) => console.error("Payment error:", error)}
              />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
