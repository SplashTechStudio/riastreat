"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Trash2, ArrowLeft, MinusCircle, PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { useToast } from "@/hooks/use-toast"
import SharedHeader from "@/components/shared-header"
import SharedFooter from "@/components/shared-footer"

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart()
  const { toast } = useToast()
  const [isProcessing, setIsProcessing] = useState(false)

  const handleQuantityChange = (id: number, newQuantity: number) => {
    updateQuantity(id, newQuantity)
  }

  const redirectToWhatsApp = () => {
    setIsProcessing(true)

    // Format the order message
    const orderItems = items
      .map((item) => `${item.quantity}x ${item.name} (₦${(item.price * (item.quantity || 1)).toFixed(2)})`)
      .join("\n")

    const message = `Hi, I'd like to place an order for:\n\n${orderItems}\n\nTotal: ₦${totalPrice.toFixed(2)}\n\nI live in ----`

    // Replace with your actual WhatsApp number
    const phoneNumber = "+2348174010260"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")

    // Clear the cart after redirecting
    clearCart()

    toast({
      title: "Order Sent",
      description: "You've been redirected to WhatsApp to complete your order.",
    })

    setIsProcessing(false)
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen relative">
        <SharedHeader />
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
          <div className="text-center py-16">
            <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Looks like you haven't added any doughnuts to your cart yet.</p>
            <Link href="/products">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
        <SharedFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen relative">
      <SharedHeader />
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-lg border shadow-sm">
              <div className="p-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center py-4 border-b last:border-0">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div className="flex justify-between text-base font-medium">
                        <h3>{item.name}</h3>
                        <p className="ml-4">₦{(item.price * (item.quantity || 1)).toFixed(2)}</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center">
                          <button
                            onClick={() => handleQuantityChange(item.id, (item.quantity || 1) - 1)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            <MinusCircle className="h-5 w-5" />
                          </button>
                          <span className="mx-2 w-8 text-center">{item.quantity || 1}</span>
                          <button
                            onClick={() => handleQuantityChange(item.id, (item.quantity || 1) + 1)}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            <PlusCircle className="h-5 w-5" />
                          </button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <Link href="/products">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <div className="rounded-lg border shadow-sm">
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₦{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>₦{totalPrice.toFixed(2)}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Final price and payment will be arranged via WhatsApp</p>
                  </div>
                </div>
                <Button className="w-full mt-6" onClick={redirectToWhatsApp} disabled={isProcessing}>
                  {isProcessing ? "Processing..." : "Continue to WhatsApp"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SharedFooter />
    </div>
  )
}
