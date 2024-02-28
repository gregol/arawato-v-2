import "styles/tailwind.css"
import { AppConfig } from "@/utils/AppConfig"

interface LayoutProps {
  children: React.ReactNode
  leftNav?: React.ReactNode
  rightNav?: React.ReactNode
}
export default function RootLayout({ children, leftNav, rightNav }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className="min-w-72 bg-primary-secondary w-full antialiased">
          <div className="mx-auto">
            <header className="flex flex-row border-b bg-white px-2 md:px-10">
              <div className="mr-0 pb-8 pt-6 sm:mr-0">
                <img src="assets/images/logo_footer.png" width="250" alt="Arawato" />
              </div>
              <div className="hidden justify-between">
                {leftNav && (
                  <nav>
                    <ul className="flex flex-wrap gap-x-5 text-xl">{leftNav}</ul>
                  </nav>
                )}
                {rightNav && (
                  <nav>
                    <ul className="flex flex-wrap gap-x-5 text-xl">{rightNav}</ul>
                  </nav>
                )}
              </div>
            </header>

            <main>{children}</main>
            <footer className="item-center md:flex-rows flex justify-center border-t border-gray-300 py-8">
              <div className="item-center size-10 mr-6 justify-center rounded-full  bg-white">
                <img src="assets/images/mono_header.png" width="40" alt="Arawato" />
              </div>
              <div>
                <p className="px-1 text-sm text-white">
                  © Copyright {new Date().getFullYear()} {AppConfig.name}.
                </p>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  )
}
