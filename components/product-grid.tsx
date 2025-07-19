"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { useCart } from "@/hooks/use-cart"

// Sample product data
const products = [
  {
    id: 1,
    name: "Chocolate Glazed",
    price: 2.99,
    image: "/placeholder.svg?height=250&width=250",
    description: "Classic chocolate glazed doughnut",
  },
  {
    id: 2,
    name: "Chocolate whipped creame",
    price: 3.49,
    image: "/placeholder.svg?height=250&width=250",
    description: "Chocolate whipped frosting",
  },
  {
    id: 3,
    name: "Milky Doughnut",
    price: 3.29,
    image: "/placeholder.svg?height=250&width=250",
    description: "Vanilla frosting with cream filling",
  },
  {
    id: 4,
    name: "Jam Doughnut",
    price: 4.49,
    image: "/placeholder.svg?height=250&width=250",
    description: "Jam doughnut topped",
  },
  {
    id: 5,
    name: "Powedered Sugar",
    price: 2.79,
    image: "/placeholder.svg?height=250&width=250",
    description: "Classic Powedered sugar coating",
  },
  {
    id: 6,
    name: "Ordinary Glaze Doughnut",
    price: 3.99,
    image: "/placeholder.svg?height=250&width=250",
    description: "Ordinary Glaze Doughnut",
  },
  {
    id: 7,
    name: "Ordinary Doughnut",
    price: 3.99,
    image: "/placeholder.svg?height=250&width=250",
    description: "Ordinary Doughnut",
  },
  {
    id: 8,
    name: "Filled Doughnut",
    price: 3.99,
    image: "/placeholder.svg?height=250&width=250",
    description: "Ordinary Glaze Doughnut",
  },
]

export default function ProductGrid() {
  const { toast } = useToast()
  const { addToCart } = useCart()

  const handleAddToCart = (product) => {
    addToCart(product)
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const redirectToWhatsApp = (product, isDirectBuy = false) => {
    const message = isDirectBuy
      ? `Hi, I'd like to order a ${product.name} for $${product.price}.`
      : `Hi, I'd like to inquire about the ${product.name}.`

    // Replace with your actual WhatsApp number
    const phoneNumber = "+2348174010260"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="w-4/5 mx-auto">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden flex flex-col h-full">
            <Link href={`/products/${product.id}`}>
              <div className="aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={250}
                  height={250}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
            </Link>
            <CardContent className="p-3 flex-grow">
              <h3 className="font-semibold text-sm">{product.name}</h3>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2">{product.description}</p>
              <p className="mt-2 font-medium text-lg">₦{product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter className="flex flex-col gap-2 p-3 pt-0 mt-auto">
              <Button
                className="w-full h-8 text-xs bg-pink-600 hover:bg-pink-700"
                onClick={() => redirectToWhatsApp(product, true)}
              >
                Buy Now
              </Button>
              <Button variant="outline" className="w-full h-8 text-xs" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
