import { Metadata } from "next"
// import { Button } from "components/Button/Button"
// import { LP_GRID_ITEMS } from "lp-items"

export const metadata: Metadata = {
  title: "Arawato Media",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

const FirstPage = () => {
  return (
    <div className="min-h-96 bg-primary-primary -mt-4 flex items-center justify-center rounded-lg p-6 text-white">
      <p className="font-mono text-4xl font-bold md:text-8xl">
        Transformamos la vida de las organizaciones en experiencias digitales.
      </p>
    </div>
  )
}

const SecondPage = () => {
  return (
    <div className="min-h-96 text-primary-base mb-10 mt-4 flex items-center justify-center rounded bg-white p-6 text-lg">
      <p className="font-mono text-4xl font-bold md:text-8xl">Desarrollo e implantación de proyectos de software.</p>
    </div>
  )
}

export default function Web() {
  return (
    <div className="min-h-96">
      <FirstPage />
      <SecondPage />
    </div>
  )
}
