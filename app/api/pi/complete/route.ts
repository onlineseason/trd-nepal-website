import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { paymentId, txid, accessToken } = await request.json()

    console.log("Completing payment:", paymentId, "with txid:", txid)

    if (!paymentId) {
      return NextResponse.json({ error: "Missing paymentId" }, { status: 400 })
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
      // Complete the payment
      const completeUrl = `https://api.minepi.com/v2/payments/${paymentId}/complete`
      const completePayload = txid ? { txid: txid } : {}

      console.log("Completing payment with payload:", completePayload)

      const completeResponse = await fetch(completeUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(completePayload),
      })

      if (!completeResponse.ok) {
        const errorText = await completeResponse.text()
        console.error("Payment completion failed:", errorText)
        return NextResponse.json(
          { error: "Payment completion failed", details: errorText },
          { status: completeResponse.status },
        )
      }

      const completeData = await completeResponse.json()
      console.log("Payment completed successfully:", completeData)

      // Get user information if accessToken is provided
      let userData = null
      if (accessToken) {
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
      }

      // Here you would typically:
      // 1. Update your database with the completed payment
      // 2. Send confirmation email to user
      // 3. Trigger any post-payment workflows
      // 4. Create order in your system

      console.log("Payment completed successfully:", {
        paymentId,
        txid,
        user: userData?.username,
        amount: completeData.amount,
      })

      // Send confirmation email (you can implement this)
      try {
        await sendConfirmationEmail({
          paymentId,
          txid,
          user: userData,
          payment: completeData,
        })
      } catch (emailError) {
        console.warn("Failed to send confirmation email:", emailError)
      }

      return NextResponse.json({
        success: true,
        payment: completeData,
        user: userData,
        message: "Payment completed successfully",
        txid: txid,
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
    console.error("Payment completion error:", error)
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    )
  }
}

async function sendConfirmationEmail(data: {
  paymentId: string
  txid: string | null
  user: any
  payment: any
}) {
  // Mock email sending - replace with actual email service
  console.log("Sending confirmation email for payment:", data.paymentId)

  // Example email content
  const emailContent = {
    to: data.user?.email || "customer@example.com",
    subject: `Payment Confirmation - SOP TRD Nepal`,
    body: `
      Dear ${data.user?.username || "Customer"},
      
      Your payment has been successfully processed!
      
      Transaction Details:
      - Payment ID: ${data.paymentId}
      - Transaction ID: ${data.txid || "N/A"}
      - Amount: π ${data.payment?.amount || "N/A"}
      - Service: ${data.payment?.memo || "SOP Writing Service"}
      - Date: ${new Date().toLocaleString()}
      
      We'll start working on your order right away!
      You'll receive your completed document within the specified timeframe.
      
      Thank you for choosing SOP TRD Nepal!
      
      Best regards,
      SOP TRD Nepal Team
      
      Contact: soptrd@gmail.com
      WhatsApp: +977-9704565262
    `,
  }

  // In a real application, you would use an email service like:
  // - SendGrid
  // - Mailgun
  // - AWS SES
  // - Nodemailer

  return Promise.resolve(emailContent)
}
