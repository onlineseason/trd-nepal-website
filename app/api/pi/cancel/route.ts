import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { paymentId } = await request.json()

    if (!paymentId) {
      return NextResponse.json({ error: "Missing paymentId" }, { status: 400 })
    }

    // Build headers for Pi API
    const headers = {
      Authorization: `Bearer ${process.env.PI_API_KEY}`,
      "Content-Type": "application/json",
    }

    // Cancel the payment
    const cancelUrl = `https://api.minepi.com/v2/payments/${paymentId}/cancel`
    const cancelResponse = await fetch(cancelUrl, {
      method: "POST",
      headers: headers,
    })

    if (!cancelResponse.ok) {
      const errorText = await cancelResponse.text()
      console.error("Payment cancellation failed:", errorText)
      return NextResponse.json(
        { error: "Payment cancellation failed", details: errorText },
        { status: cancelResponse.status },
      )
    }

    const cancelData = await cancelResponse.json()

    console.log("Payment cancelled:", paymentId)

    return NextResponse.json({
      success: true,
      payment: cancelData,
      message: "Payment cancelled successfully",
    })
  } catch (error) {
    console.error("Payment cancellation error:", error)
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    )
  }
}
