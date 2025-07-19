"use client"

import ProductGrid from "@/components/product-grid"
import BackgroundAnimation from "@/components/background_animation"
import { Button } from "@/components/ui/button"
import SharedHeader from "@/components/shared-header"
import SharedFooter from "@/components/shared-footer"

export default function ProductsPage() {
  return (
    <div className="min-h-screen relative">
      <BackgroundAnimation />
      <SharedHeader />
      <div className="container mx-auto py-16 px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Doughnut Collection</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handcrafted doughnuts made fresh daily. Each one is a journey to
            <span className="text-pink-600 font-semibold"> taste in a new dimension</span>.
          </p>
        </div>

        {/* Featured Categories */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Classic Favorites</h3>
            <p className="text-gray-600 text-sm">Traditional flavors with our signature twist</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Gourmet Creations</h3>
            <p className="text-gray-600 text-sm">Unique flavors that push boundaries</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-.1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Seasonal Specials</h3>
            <p className="text-gray-600 text-sm">Limited-time flavors for every season</p>
          </div>
        </div>

        <ProductGrid />

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Can't Decide?</h2>
          <p className="mb-6">Let us help you choose the perfect doughnuts for your taste buds!</p>
          <Button
            variant="secondary"
            onClick={() =>
              window.open(
                "https://wa.me/1234567890?text=Hi! I need help choosing doughnuts. What do you recommend?",
                "_blank",
              )
            }
            className="bg-white text-pink-600 hover:bg-gray-100"
          >
            Get Recommendations via WhatsApp
          </Button>
        </div>
      </div>
      <SharedFooter />
    </div>
  )
}
