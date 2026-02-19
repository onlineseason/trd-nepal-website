"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { PaymentSelector } from "@/components/payment-selector"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { services, type ServiceData } from "@/types/service" // Import from new types file

export default function PaymentPage() {
  const params = useParams()
  const router = useRouter()
  const [serviceData, setServiceData] = useState<ServiceData | null>(null)

  useEffect(() => {
    const service = services.find((s) => s.id === params.service)
    setServiceData(service || null)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [params.service])

  const handlePaymentSuccess = (paymentId: string, method: string) => {
    console.log(`Payment successful: ${paymentId} via ${method}`)
    // Here you would typically:
    // 1. Send confirmation email
    // 2. Create order in database
    // 3. Notify admin team
  }

  if (!serviceData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Button onClick={() => router.push("/services")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Button variant="outline" onClick={() => router.push("/services")} className="mb-6 bg-white hover:bg-gray-50">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Button>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">Complete Your Order</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{serviceData.description}</p>
        </div>

        {/* Payment Selector */}
        <PaymentSelector
          serviceType={serviceData.name}
          piPrice={serviceData.piPrice}
          fiatPrices={{
            npr: serviceData.nprPrice,
            inr: serviceData.inrPrice,
            usd: serviceData.usdPrice,
            euro: serviceData.euroPrice,
            pound: serviceData.poundPrice,
          }}
          onPaymentSuccess={handlePaymentSuccess}
        />

        {/* Additional Information */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4">What happens next?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">1️⃣</span>
              </div>
              <h4 className="font-semibold mb-2">Payment Confirmation</h4>
              <p className="text-sm text-gray-600">You'll receive an email confirmation with order details</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">2️⃣</span>
              </div>
              <h4 className="font-semibold mb-2">Expert Writing</h4>
              <p className="text-sm text-gray-600">Our expert writers will start working on your document</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">3️⃣</span>
              </div>
              <h4 className="font-semibold mb-2">Delivery</h4>
              <p className="text-sm text-gray-600">Receive your completed document within the specified timeframe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
