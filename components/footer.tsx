"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <Link
            href="/"
            className="flex   text-white font-bold text-xl hover:opacity-90 transition-opacity"
          >
            <div className="w-35  h-14 relative  backdrop-blur-md border-none flex items-center justify-center shadow-2xl border border-white/30">
           
            <img src="/Zimnext solutions.png" className="h-full w-full absolute object-cover" alt="" />
            </div>
        
          </Link>
            <p className="text-slate-400 text-sm">
              Transforming ideas into digital reality with cutting-edge technology solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-slate-400 hover:text-white transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/web-development" className="text-slate-400 hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/mobile-apps" className="text-slate-400 hover:text-white transition-colors">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link href="/ios-development" className="text-slate-400 hover:text-white transition-colors">
                  iOS Development
                </Link>
              </li>
              <li>
                <Link href="/android-development" className="text-slate-400 hover:text-white transition-colors">
                  Android Development
                </Link>
              </li>
              <li>
                <Link href="/marketing" className="text-slate-400 hover:text-white transition-colors">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-slate-400 ">zimnextsolutions@
                gmail.com</li>
              <li className="text-slate-400">+263 777 187 003</li>
              <li className="text-slate-400">+263 775 306 263</li>
              <li className="text-slate-400">+263 785 882 474</li>
              <li className="text-slate-400">Zimbabwe, Harare</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">© 2025 zimnextsolutions . All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
