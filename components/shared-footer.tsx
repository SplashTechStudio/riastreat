import Link from "next/link"

export default function SharedFooter() {
  return (
    <footer className="border-t w-full py-6 md:py-0 relative z-10">
      <div className="container flex mx-auto flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2025 Ria'streat. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">Taste in a new dimension</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/ria__treat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.315 0-.595-.122-.807-.315-.21-.21-.315-.49-.315-.807s.105-.595.315-.807c.21-.21.49-.315.807-.315s.595.105.807.315c.21.21.315.49.315.807s-.105.595-.315.807c-.21.193-.49.315-.807.315z" />
              </svg>
            </a>
            <a
              href="https://tiktok.com/@riastreat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/about" className="text-sm font-medium">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
