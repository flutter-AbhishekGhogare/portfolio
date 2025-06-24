// Simple email service with clean formatting
export async function sendEmailViaWeb3Forms(formData: {
  name: string
  email: string
  subject: string
  message: string
}) {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "935bb1f4-ca8f-484a-a62c-d31eb3840a0a",
        name: formData.name,
        email: formData.email,
        subject: `New Portfolio Contact: ${formData.subject}`,
        message: createSimpleEmailTemplate(formData),
        to: "abhishekghogare45@gmail.com",
        from: formData.email,
        replyTo: formData.email,
      }),
    })

    return response.ok
  } catch (error) {
    console.error("Web3Forms error:", error)
    return false
  }
}

function createSimpleEmailTemplate(formData: {
  name: string
  email: string
  subject: string
  message: string
}) {
  const currentDate = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  return `
📧 NEW PORTFOLIO CONTACT
═══════════════════════════════════════

👤 CONTACT INFORMATION:
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

💬 MESSAGE:
${formData.message}

📅 RECEIVED:
${currentDate} IST

═══════════════════════════════════════
This message was sent from your portfolio contact form.
Reply directly to this email to respond to ${formData.name}.
  `
}

// Alternative enhanced template for Resend
export async function sendEmailViaResend(formData: {
  name: string
  email: string
  subject: string
  message: string
}) {
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio <portfolio@yourdomain.com>",
        to: ["abhishekghogare45@gmail.com"],
        subject: `New Portfolio Contact: ${formData.subject}`,
        text: createSimpleEmailTemplate(formData),
        reply_to: formData.email,
      }),
    })

    return response.ok
  } catch (error) {
    console.error("Resend error:", error)
    return false
  }
}
