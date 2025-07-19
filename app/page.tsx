import PromoBanner from "@/components/promo-banner"
import ProductGrid from "@/components/product-grid"
import BackgroundAnimation from "@/components/background-animation"
import NewsletterPopup from "@/components/newsletter-popup"
import SharedHeader from "@/components/shared-header"
import SharedFooter from "@/components/shared-footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex w-full min-h-screen flex-col relative">
      <BackgroundAnimation />
      <NewsletterPopup />
      <SharedHeader />
      <main className="flex-1 relative z-10">
        <PromoBanner />
        <section className="container mx-auto py-8 md:py-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Delicious Handcrafted Pasteries
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Explore our selection of freshly made pasteries.{" "}
                <span className="text-pink-600 font-semibold">Taste in a new dimension</span> with every bite.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/products">
                <Button className="bg-pink-600 hover:bg-pink-700">Shop Now</Button>
              </Link>
            </div>
          </div>
        </section>
        <section className=" w-full py-8 md:py-12">
          <div className="container mx-auto">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-center">Our Recipe</h2>
          <ProductGrid />
          </div>
        </section>
        <section className="bg-muted w-full py-8 md:py-12">
          <div className="container mx-auto">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-pink-600"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                  <div className="space-y-1">
                    <h3 className="font-bold">Fresh Ingredients</h3>
                    <p className="text-sm text-gray-500">We use only the freshest ingredients in our doughnuts.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-pink-600"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <div className="space-y-1">
                    <h3 className="font-bold">Handcrafted Daily</h3>
                    <p className="text-sm text-gray-500">Our doughnuts are made fresh every day.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-pink-600"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <div className="space-y-1">
                    <h3 className="font-bold">Easy Ordering</h3>
                    <p className="text-sm text-gray-500">Order directly through WhatsApp for convenience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SharedFooter />
    </div>
  )
}
