import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      phone,
      currentCountry,
      preferredCountry,
      academicQualification,
      ieltsScore,
      pteScore,
      message,
    } = body

    // Create transporter with explicit SMTP configuration
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "soptrd@gmail.com",
      subject: `New Study Abroad Counseling Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Study Abroad Counseling Request
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Personal Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Current Country:</strong> ${currentCountry}</p>
          </div>

          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Study Abroad Details</h3>
            <p><strong>Preferred Study Country:</strong> ${preferredCountry}</p>
            <p><strong>Academic Qualification:</strong> ${academicQualification}</p>
            ${ieltsScore ? `<p><strong>IELTS Score:</strong> ${ieltsScore}</p>` : ""}
            ${pteScore ? `<p><strong>PTE Score:</strong> ${pteScore}</p>` : ""}
          </div>

          ${
            message
              ? `
            <div style="background-color: #fefce8; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">Additional Message</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          `
              : ""
          }

          <div style="background-color: #1e40af; color: white; padding: 15px; border-radius: 8px; text-align: center; margin-top: 30px;">
            <p style="margin: 0;">This request was submitted through the SOP TRD Nepal website.</p>
            <p style="margin: 5px 0 0 0; font-size: 14px;">Please respond within 24 hours.</p>
          </div>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email",
      },
      { status: 500 },
    )
  }
}
