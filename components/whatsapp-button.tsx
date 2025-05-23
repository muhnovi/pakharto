"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhatsAppButtonProps {
  phoneNumber: string
  message?: string
}

export default function WhatsAppButton({ phoneNumber, message = "" }: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    // Format the phone number (remove any non-digit characters)
    const formattedNumber = phoneNumber.replace(/\D/g, "")

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message)

    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 p-0 text-white shadow-lg hover:bg-green-600 md:h-16 md:w-16"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
      <span className="sr-only">Contact via WhatsApp</span>
    </Button>
  )
}
