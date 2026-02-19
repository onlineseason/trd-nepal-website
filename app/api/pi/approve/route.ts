import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { paymentId, accessToken } = await request.json()

    console.log("Approving payment:", paymentId)

    if (!paymentId || !accessToken) {
      return NextResponse.json({ error: "Missing paymentId or accessToken" }, { status: 400 })
    }

    if (!process.env.PI_API_KEY) {
      console.error("PI_API_KEY not configured")
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
    }

    // Build headers for Pi API
    const headers = {
      Authorization: `Bearer ${process.env.PI_API_KEY}`,
      "Content-Type": "application/json",
    }

    const userHeaders = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    }

    try {
      // Get payment details first
      const paymentUrl = `https://api.minepi.com/v2/payments/${paymentId}`
      const paymentResponse = await fetch(paymentUrl, {
        method: "GET",
        headers: headers,
      })

      if (!paymentResponse.ok) {
        const errorText = await paymentResponse.text()
        console.error("Failed to get payment details:", errorText)
        return NextResponse.json(
          { error: "Failed to get payment details", details: errorText },
          { status: paymentResponse.status },
        )
      }

      const paymentDetails = await paymentResponse.json()
      console.log("Payment details:", paymentDetails)

      // Approve the payment
      const approveUrl = `https://api.minepi.com/v2/payments/${paymentId}/approve`
      const approveResponse = await fetch(approveUrl, {
        method: "POST",
        headers: headers,
      })

      if (!approveResponse.ok) {
        const errorText = await approveResponse.text()
        console.error("Payment approval failed:", errorText)
        return NextResponse.json(
          { error: "Payment approval failed", details: errorText },
          { status: approveResponse.status },
        )
      }

      const approveData = await approveResponse.json()
      console.log("Payment approved successfully:", approveData)

      // Get user information
      let userData = null
      try {
        const userUrl = "https://api.minepi.com/v2/me"
        const userResponse = await fetch(userUrl, {
          method: "GET",
          headers: userHeaders,
        })

        if (userResponse.ok) {
          userData = await userResponse.json()
          console.log("User data retrieved:", userData.username)
        }
      } catch (userError) {
        console.warn("Failed to get user data:", userError)
      }

      return NextResponse.json({
        success: true,
        payment: approveData,
        paymentDetails: paymentDetails,
        user: userData,
        message: "Payment approved successfully",
      })
    } catch (apiError) {
      console.error("Pi API error:", apiError)
      return NextResponse.json(
        {
          error: "Pi API communication failed",
          details: apiError instanceof Error ? apiError.message : "Unknown API error",
        },
        { status: 502 },
      )
    }
  } catch (error) {
    console.error("Payment approval error:", error)
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    )
  }
}
