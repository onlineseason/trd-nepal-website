"use client"

import { useState } from "react"
import { PiPaymentReal } from "@/components/pi-payment-real"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Coins, ArrowLeft, CheckCircle, Info } from "lucide-react"
import Link from "next/link"
import { services } from "@/types/service" // Import from new types file

export default function PiPaymentPage() {
  const [selectedService, setSelectedService] = useState("")
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [completedOrder, setCompletedOrder] = useState<{
    paymentId: string
    txid: string
    service: string
  } | null>(null)

  const selectedServiceData = services.find((s) => s.id === selectedService)

  const handlePaymentSuccess = (paymentId: string, txid: string) => {
    setPaymentSuccess(true)
    setCompletedOrder({
      paymentId,
      txid,
      service: selectedServiceData?.name || "Unknown Service",
    })
    console.log("Payment successful:", { paymentId, txid })
  }

  const handlePaymentError = (error: string) => {
    console.error("Payment error:", error)
    // You could show a toast notification or error modal here
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Button variant="outline" className="mb-6 bg-white hover:bg-gray-50">
            <Link href="/pricing" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Pricing
            </Link>
          </Button>

          <div className="flex items-center justify-center mb-4">
            <Coins className="h-12 w-12 text-yellow-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Pi Network Payment</h1>
          </div>
          <p className="text-lg text-gray-600 mb-4">Pay for your SOP writing services using Pi cryptocurrency</p>
          <Badge className="bg-green-600 hover:bg-green-700">Production Mode - Real Pi Transactions</Badge>
        </div>

        {/* Important Notice */}
        <Card className="mb-8 border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <div className="flex items-start">
              <Info className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Important: Use Pi Browser</h3>
                <p className="text-blue-800 text-sm">
                  To make Pi Network payments, you must access this page through the <strong>Pi Browser app</strong> on
                  your mobile device. Regular web browsers don't support Pi Network transactions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Service Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Select Your Service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select value={selectedService} onValueChange={setSelectedService}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a service..." />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.id} value={service.id}>
                      {service.name} - π {service.piPrice} ({service.originalPriceDisplay})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {selectedServiceData && (
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-2">{selectedServiceData.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-700">Pi Price:</span>
                      <Badge className="bg-yellow-600">π {selectedServiceData.piPrice}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-700">NPR Price:</span>
                      <span className="text-sm text-gray-600">NPR {selectedServiceData.nprPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-700">INR Price:</span>
                      <span className="text-sm text-gray-600">INR {selectedServiceData.inrPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-700">USD Price:</span>
                      <span className="text-sm text-gray-600">${selectedServiceData.usdPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-700">EURO Price:</span>
                      <span className="text-sm text-gray-600">€{selectedServiceData.euroPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-700">GBP Price:</span>
                      <span className="text-sm text-gray-600">£{selectedServiceData.poundPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-700">Delivery:</span>
                      <span className="text-sm text-gray-600">3-5 business days</span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Payment Component */}
          <div>
            {selectedService ? (
              <PiPaymentReal
                serviceType={selectedServiceData!.name}
                amount={selectedServiceData!.piPrice}
                onPaymentSuccess={handlePaymentSuccess}
                onPaymentError={handlePaymentError}
              />
            ) : (
              <Card>
                <CardContent className="p-6 text-center">
                  <Coins className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Please select a service to proceed with payment</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Success Message */}
        {paymentSuccess && completedOrder && (
          <Card className="mt-8 border-green-200 bg-green-50">
            <CardContent className="p-6">
              <div className="text-center">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-green-800 mb-2">Payment Successful!</h2>
                <p className="text-green-700 mb-4">
                  Your payment for <strong>{completedOrder.service}</strong> has been processed successfully.
                </p>

                <div className="bg-white p-4 rounded-lg border border-green-200 mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Transaction Details</h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      <strong>Payment ID:</strong> {completedOrder.paymentId}
                    </p>
                    <p>
                      <strong>Transaction ID:</strong> {completedOrder.txid}
                    </p>
                    <p>
                      <strong>Service:</strong> {completedOrder.service}
                    </p>
                    <p>
                      <strong>Status:</strong> <span className="text-green-600">Completed</span>
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
                  <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
                  <div className="text-sm text-blue-800 text-left space-y-1">
                    <p>✅ You'll receive a confirmation email shortly</p>
                    <p>✅ Our expert writers will start working on your document</p>
                    <p>✅ You'll receive your completed document within 3-5 business days</p>
                    <p>✅ 2 free revisions are included to ensure your satisfaction</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button onClick={() => window.location.reload()} variant="outline">
                    Make Another Payment
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Link href="/contact">Contact Support</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Information */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Coins className="h-5 w-5 mr-2 text-yellow-600" />
              About Pi Network Payments
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Why Pi Network?</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Secure blockchain payments</li>
                  <li>• Low transaction fees</li>
                  <li>• Fast processing times</li>
                  <li>• Eco-friendly cryptocurrency</li>
                  <li>• Mobile-first experience</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Payment Process</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Open in Pi Browser app</li>
                  <li>• Connect your Pi wallet</li>
                  <li>• Confirm payment details</li>
                  <li>• Authorize transaction</li>
                  <li>• Receive instant confirmation</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-800 mb-2">Production Environment</h4>
              <p className="text-sm text-yellow-700">
                This is a live production environment. Real Pi will be charged for transactions. Make sure you're ready
                to proceed before confirming payment.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Need Help?</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <p>📧 Email: soptrd@gmail.com</p>
                <p>📱 WhatsApp: +977-9704565262</p>
                <p>🌐 Website: https://trd.com.np</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
