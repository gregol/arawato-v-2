import "styles/tailwind.css"
import React from "react"
import { AppConfig } from "@/utils/AppConfig"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-w-72 w-full bg-primary-secondary antialiased">
          <div className="mx-auto">
            <header className="flex flex-row border-b bg-white px-2 md:px-10">
              <div className="mr-0 pb-8 pt-6 sm:mr-0">
                <img src="assets/images/logo_footer.png" width="250" alt="Arawato" />
              </div>
              <meta name="facebook-domain-verification" content="vexm3g1j6p059s2c6e2im60itj0s5f" />
            </header>

            <main>{children}</main>
            <footer className="item-center md:flex-rows flex flex-row justify-center border-t border-gray-300 py-8">
              <div className="item-center size-10 mr-6 h-10 w-10 justify-center rounded-full  bg-white">
                <img src="assets/images/mono_header.png" alt="Arawato" />
              </div>
              <div className="flex items-center justify-center">
                <p className="px-1 text-sm text-white">
                  © Copyright {new Date().getFullYear()} {AppConfig.name}.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <p className="px-1 text-sm text-white">Contact: admin@arawato.co +584265177411</p>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  )
}
