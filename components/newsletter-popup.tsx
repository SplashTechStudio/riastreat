"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("newsletter-popup-seen")
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 5000) // Show after 5 seconds

      return () => clearTimeout(timer)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Send to WhatsApp
    const message = `Hi! I'd like to subscribe to your newsletter. Name: ${name}, Phone: ${phone}. Please keep me updated on new recipes and offers!`
    const phoneNumber = "+2348174010260"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    toast({
      title: "Subscription Successful!",
      description: "You'll be redirected to WhatsApp to complete your subscription.",
    })

    localStorage.setItem("newsletter-popup-seen", "true")
    setIsVisible(false)
    setIsSubmitting(false)
  }

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem("newsletter-popup-seen", "true")
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <X className="h-5 w-5" />
        </button>

        <div className="text-center mb-6">
          <div className="mb-4">
            <svg width="60" height="60" viewBox="0 0 60 60" className="mx-auto text-pink-600">
              <circle cx="30" cy="30" r="25" fill="currentColor" />
              <circle cx="30" cy="30" r="10" fill="white" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Stay Updated!</h2>
          <p className="text-gray-600">
            Be the first to know about new recipes and exclusive offers.
            <span className="block text-pink-600 font-semibold mt-1">Taste in a new dimension!</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <div>
            <Input
              type="tel"
              placeholder="Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700" disabled={isSubmitting}>
            {isSubmitting ? "Subscribing..." : "Subscribe Now"}
          </Button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          We'll contact you via WhatsApp to confirm your subscription
        </p>
      </div>
    </div>
  )
}
