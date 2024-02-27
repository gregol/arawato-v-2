import "styles/tailwind.css"
import { AppConfig } from "@/utils/AppConfig"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-w-72 bg-primary-secondary w-full antialiased">
      <div className="mx-auto">
        <header className="flex flex-row border-b bg-white px-2 md:px-10">
          <div className="mr-0 pb-8 pt-6 sm:mr-0">
            <img src="assets/images/logo_footer.png" width="250" alt="Arawato" />
          </div>
        </header>

        <main className="min-h-screen px-4 md:px-10	 ">{children}</main>

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
  )
}
