"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { useCart } from "@/hooks/use-cart"
import SharedHeader from "@/components/shared-header"
import SharedFooter from "@/components/shared-footer"

// Sample product data - in a real app, this would come from an API or database
const products = [
  {
    id: 1,
    name: "Chocolate Glazed",
    price: 2.99,
    image: "/placeholder.svg?height=600&width=600",
    description:
      "Our classic chocolate glazed doughnut is made with our signature dough, covered in a rich chocolate glaze that adds the perfect amount of sweetness.",
  },
  {
    id: 2,
    name: "Strawberry Sprinkle",
    price: 3.49,
    image: "/placeholder.svg?height=600&width=600",
    description:
      "A delightful doughnut with strawberry frosting and topped with colorful sprinkles. Perfect for those who love a fruity and fun treat.",
  },
  {
    id: 3,
    name: "Vanilla Cream",
    price: 3.29,
    image: "/placeholder.svg?height=600&width=600",
    description:
      "A light and fluffy doughnut with vanilla frosting and a creamy filling that melts in your mouth with every bite.",
  },
  {
    id: 4,
    name: "Maple Bacon",
    price: 4.49,
    image: "/placeholder.svg?height=600&width=600",
    description:
      "The perfect sweet and savory combination. Our doughnut is topped with a maple glaze and sprinkled with crispy bacon bits.",
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const { toast } = useToast()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const productId = Number.parseInt(params.id)
  const product = products.find((p) => p.id === productId)

  if (!product) {
    return (
      <div className="min-h-screen relative">
        <SharedHeader />
        <div className="container mx-auto py-16 px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-8">Sorry, we couldn't find the doughnut you're looking for.</p>
          <Link href="/products">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </Link>
        </div>
        <SharedFooter />
      </div>
    )
  }

  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity }
    addToCart(productWithQuantity)
    toast({
      title: "Added to cart",
      description: `${quantity} ${product.name} ${quantity > 1 ? "have" : "has"} been added to your cart.`,
    })
  }

  const redirectToWhatsApp = () => {
    const message = `Hi, I'd like to order ${quantity} ${product.name} doughnut${quantity > 1 ? "s" : ""} for a total of $${(product.price * quantity).toFixed(2)}.`

    // Replace with your actual WhatsApp number
    const phoneNumber = "1234567890"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen relative">
      <SharedHeader />
      <div className="container mx-auto py-16 px-4">
        <Link href="/products" className="inline-flex items-center mb-8 text-sm font-medium">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-semibold mt-2">${product.price.toFixed(2)}</p>
            <div className="mt-6">
              <p className="text-gray-700">{product.description}</p>
            </div>
            <div className="mt-8">
              <div className="flex items-center mb-6">
                <label htmlFor="quantity" className="mr-4 font-medium">
                  Quantity:
                </label>
                <div className="flex items-center border rounded-md">
                  <button
                    type="button"
                    className="px-3 py-1 border-r"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="px-4 py-1">{quantity}</span>
                  <button type="button" className="px-3 py-1 border-l" onClick={() => setQuantity(quantity + 1)}>
                    +
                  </button>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Button onClick={redirectToWhatsApp}>Buy Now</Button>
                <Button variant="outline" onClick={handleAddToCart}>
                  Add to Cart
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
