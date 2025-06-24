"use server"

import { sendEmailViaWeb3Forms } from "../lib/email-service"

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return {
      success: false,
      message: "All fields are required.",
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  try {
    // Method 1: Using Web3Forms (Free and reliable)
    const web3FormsSuccess = await sendEmailViaWeb3Forms({
      name,
      email,
      subject,
      message,
    })

    if (web3FormsSuccess) {
      return {
        success: true,
        message: "Thank you for your message! I'll get back to you within 24 hours.",
      }
    }

    // Method 2: Fallback using Formspree (also free)
    const formspreeResponse = await fetch("https://formspree.io/f/your_form_id", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject: `Portfolio Contact: ${subject}`,
        message: `
          Name: ${name}
          Email: ${email}
          Subject: ${subject}
          
          Message:
          ${message}
          
          Sent at: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
        `,
        _replyto: email,
      }),
    })

    if (formspreeResponse.ok) {
      return {
        success: true,
        message: "Thank you for your message! I'll get back to you within 24 hours.",
      }
    }

    // Method 3: Final fallback using Netlify Forms
    const netlifyResponse = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "contact",
        name,
        email,
        subject,
        message,
      }).toString(),
    })

    if (netlifyResponse.ok) {
      return {
        success: true,
        message: "Thank you for your message! I'll get back to you within 24 hours.",
      }
    }

    throw new Error("All email services failed")
  } catch (error) {
    console.error("Error sending email:", error)

    return {
      success: false,
      message:
        "Unable to send message at the moment. Please email me directly at abhishekghogare45@gmail.com or try again later.",
    }
  }
}
