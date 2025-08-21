import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    let body
    try {
      body = await request.json()
    } catch (parseError) {
      console.error("JSON parsing error:", parseError)
      return NextResponse.json({ error: "Invalid JSON format" }, { status: 400 })
    }

    const { name, email, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Create email content
    const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Message: ${message}

Sent from: Portfolio Website
Time: ${new Date().toISOString()}
    `

    // Here you would typically send the email using a service like:
    // - Nodemailer with SMTP
    // - SendGrid
    // - AWS SES
    // - Resend

    // For now, we'll simulate sending the email
    console.log("Email would be sent to clebertsabin@gmail.com:")
    console.log(emailContent)

    // In a real implementation, you would:
    // 1. Set up an email service
    // 2. Send the email to clebertsabin@gmail.com
    // 3. Handle any errors from the email service

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        error: "Internal server error. Please try again later.",
      },
      { status: 500 },
    )
  }
}
