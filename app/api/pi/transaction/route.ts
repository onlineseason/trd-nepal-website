import { type NextRequest, NextResponse } from "next/server"

interface TransactionData {
  paymentId: string
  txid: string | null
  amount: number
  serviceType: string
  userId: string
  orderId: string
  status: "completed" | "pending" | "failed"
  timestamp: string
  userInfo?: {
    username: string
    uid: string
  }
}

// In a real application, you would store this in a database
const transactions: TransactionData[] = []

export async function POST(request: NextRequest) {
  try {
    const { paymentId, txid, amount, serviceType, userId, orderId } = await request.json()

    console.log("Recording transaction:", { paymentId, txid, amount, serviceType, userId, orderId })

    if (!paymentId || !amount || !serviceType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create transaction record
    const transaction: TransactionData = {
      paymentId,
      txid: txid || null,
      amount,
      serviceType,
      userId: userId || "anonymous",
      orderId: orderId || `ORDER_${Date.now()}`,
      status: "completed",
      timestamp: new Date().toISOString(),
    }

    // Store transaction (in real app, save to database)
    transactions.push(transaction)

    console.log("Transaction recorded successfully:", transaction)

    // Here you would typically:
    // 1. Save to database (PostgreSQL, MongoDB, etc.)
    // 2. Send confirmation email
    // 3. Notify admin team
    // 4. Create order in your system
    // 5. Update user account
    // 6. Trigger workflow automation

    // Example database save (uncomment and modify for your database):
    /*
    await db.transactions.create({
      data: transaction
    });
    */

    // Send confirmation email
    try {
      await sendTransactionConfirmation(transaction)
    } catch (emailError) {
      console.warn("Failed to send transaction confirmation:", emailError)
    }

    // Notify admin team
    try {
      await notifyAdminTeam(transaction)
    } catch (notifyError) {
      console.warn("Failed to notify admin team:", notifyError)
    }

    return NextResponse.json({
      success: true,
      transaction,
      message: "Transaction recorded successfully",
    })
  } catch (error) {
    console.error("Transaction recording error:", error)
    return NextResponse.json(
      { error: "Failed to record transaction", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const paymentId = searchParams.get("paymentId")
    const userId = searchParams.get("userId")
    const orderId = searchParams.get("orderId")

    let filteredTransactions = transactions

    if (paymentId) {
      filteredTransactions = transactions.filter((t) => t.paymentId === paymentId)
    } else if (userId) {
      filteredTransactions = transactions.filter((t) => t.userId === userId)
    } else if (orderId) {
      filteredTransactions = transactions.filter((t) => t.orderId === orderId)
    }

    return NextResponse.json({
      success: true,
      transactions: filteredTransactions,
      count: filteredTransactions.length,
    })
  } catch (error) {
    console.error("Transaction retrieval error:", error)
    return NextResponse.json({ error: "Failed to retrieve transactions" }, { status: 500 })
  }
}

async function sendTransactionConfirmation(transaction: TransactionData) {
  console.log("Sending transaction confirmation for:", transaction.paymentId)

  const emailContent = {
    to: "customer@example.com", // Get from user data
    subject: `Order Confirmation - ${transaction.serviceType}`,
    body: `
      Dear Customer,
      
      Your order has been confirmed and payment processed successfully!
      
      Order Details:
      - Order ID: ${transaction.orderId}
      - Service: ${transaction.serviceType}
      - Amount: π ${transaction.amount}
      - Payment ID: ${transaction.paymentId}
      - Transaction ID: ${transaction.txid || "Processing"}
      - Date: ${new Date(transaction.timestamp).toLocaleString()}
      
      What happens next:
      1. Our expert writers will start working on your ${transaction.serviceType}
      2. You'll receive your completed document within 3-5 business days
      3. We'll send you an email when your document is ready
      4. You get 2 free revisions to ensure your satisfaction
      
      Need help? Contact us:
      - Email: soptrd@gmail.com
      - WhatsApp: +977-9704565262
      - Website: https://trd.com.np
      
      Thank you for choosing SOP TRD Nepal!
      
      Best regards,
      SOP TRD Nepal Team
    `,
  }

  // Implement actual email sending here
  return Promise.resolve(emailContent)
}

async function notifyAdminTeam(transaction: TransactionData) {
  console.log("Notifying admin team about new order:", transaction.orderId)

  const adminNotification = {
    type: "new_order",
    orderId: transaction.orderId,
    serviceType: transaction.serviceType,
    amount: transaction.amount,
    paymentId: transaction.paymentId,
    timestamp: transaction.timestamp,
    message: `New ${transaction.serviceType} order received - π ${transaction.amount}`,
  }

  // Here you could:
  // 1. Send email to admin team
  // 2. Send Slack notification
  // 3. Create task in project management system
  // 4. Update dashboard
  // 5. Send SMS notification

  return Promise.resolve(adminNotification)
}
