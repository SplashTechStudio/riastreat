"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import BackgroundAnimation from "@/components/background-animation"
import SharedHeader from "@/components/shared-header"
import SharedFooter from "@/components/shared-footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Send to WhatsApp
    const message = `Hi! Contact form submission from ${formData.name}:
    
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`

    const phoneNumber = "+2348174010260"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    toast({
      title: "Message Sent!",
      description: "You'll be redirected to WhatsApp to complete your inquiry.",
    })

    setFormData({ name: "", email: "", phone: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen relative">
      <BackgroundAnimation />
      <SharedHeader />
      <div className="container mx-auto py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Ria'streat</h1>
            <p className="text-xl text-gray-600">
              We'd love to hear from you! Taste in a new dimension starts with great conversation.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch with Victoria</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Pickup at our Store</h3>
                      <p className="text-gray-600">07 Kano street</p>
                      <p className="text-gray-600">Garki Abuja</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Call Us</h3>
                      <p className="text-gray-600">+2348174010260</p>
                      <p className="text-sm text-gray-500">WhatsApp orders preferred</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email Me</h3>
                      <p className="text-gray-600">riastreat20@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Opening Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                        <p>Saturday: 8:00 AM - 9:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Follow Our Journey</h3>
                <p className="text-gray-600 mb-4">
                  Stay updated with our latest creations, behind-the-scenes content, and special offers!
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/riastreat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-pink-600" />
                    <span className="font-medium">@riastreat</span>
                  </a>
                  <a
                    href="https://tiktok.com/@riastreat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                    <span className="font-medium">@riastreat</span>
                  </a>
                </div>
              </div>

              {/* Quick Order */}
              <div className="bg-pink-600 text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Chat with Victoria on WhatsApp</h3>
                <p className="mb-4">Get personal recommendations and place your order directly with me!</p>
                <Button
                  variant="secondary"
                  onClick={() => window.open("https://wa.me/+2348174010260?text=Hi! I'd like to place an order.", "_blank")}
                  className="bg-white text-pink-600 hover:bg-gray-100"
                >
                  Order on WhatsApp
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full"
                    placeholder="Tell us about your inquiry, special requests, or feedback..."
                  />
                </div>

                <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>

              <p className="text-sm text-gray-500 text-center mt-4">
                Your message will be sent via WhatsApp for faster response
              </p>
            </div>
          </div>
        </div>
      </div>
      <SharedFooter />
    </div>
  )
}
