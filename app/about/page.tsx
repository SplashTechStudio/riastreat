import Image from "next/image"
import BackgroundAnimation from "@/components/background-animation"
import SharedHeader from "@/components/shared-header"
import SharedFooter from "@/components/shared-footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen relative">
      <BackgroundAnimation />
      <SharedHeader />
      <div className="container mx-auto py-16 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About Ria'streat</h1>
            <p className="text-xl text-gray-600">Taste in a new dimension</p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 items-center mb-16">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Victoria Omole - Founder of Ria'streat"
                width={400}
                height={400}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Meet Victoria Omole</h2>
              <p className="text-gray-700 leading-relaxed">
                Hi, I'm Victoria Omole, the founder and head baker behind Ria'streat. What started as a passion project
                in my home kitchen has blossomed into a dream come true - creating extraordinary doughnuts that redefine
                what a treat can be.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My journey began with a simple belief: every doughnut should be an experience, not just a snack. I spent
                countless hours perfecting recipes, experimenting with unique flavor combinations, and developing
                techniques that would make each bite memorable.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, Ria'streat represents my commitment to quality, creativity, and the joy that comes from sharing
                something truly special with others. Every doughnut is handcrafted with love, using only the finest
                ingredients.
              </p>
            </div>
          </div>

          <div className="bg-pink-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">My Mission</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality First</h3>
                <p className="text-gray-600">Using only the finest ingredients to create exceptional doughnuts</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">Constantly creating new flavors and experiences</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-600">Building connections through shared love of great food</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">My Story</h2>
            <div className="bg-white rounded-lg shadow-lg p-8 text-left">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  <strong>The Beginning:</strong> It all started in 2020 when I was experimenting with baking during the
                  lockdown. What began as a way to satisfy my sweet tooth quickly became an obsession with perfecting
                  the art of doughnut making.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>The Breakthrough:</strong> After months of trial and error, I created my first signature
                  flavor - the Maple Bacon doughnut. Friends and family couldn't get enough, and I knew I had something
                  special.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>The Vision:</strong> Ria'streat was born from my desire to share these unique creations with
                  the world. Each recipe is carefully crafted to deliver not just taste, but an experience that
                  transports you to a new dimension of flavor.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Today:</strong> I continue to push boundaries, creating seasonal specials and limited-edition
                  flavors while maintaining the quality and care that started it all. Every doughnut is still made by
                  hand, with the same passion that started this journey.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Join My Journey</h2>
            <p className="text-lg mb-6">
              Follow me on social media to see behind-the-scenes content, new flavor reveals, and the daily magic that
              happens in my kitchen!
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://instagram.com/riastreat"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-200 transition-colors"
              >
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.315 0-.595-.122-.807-.315-.21-.21-.315-.49-.315-.807s.105-.595.315-.807c.21-.21.49-.315.807-.315s.595.105.807.315c.21.21.315.49.315.807s-.105.595-.315.807c-.21.193-.49.315-.807.315z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@riastreat"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-200 transition-colors"
              >
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <SharedFooter />
    </div>
  )
}
