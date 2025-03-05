'use client'

import './globals.css'
import { MousePointer2 } from 'lucide-react'
import { Montserrat, Oxanium } from 'next/font/google'
import { useCursor } from '../app/hooks/useCursor'

const oxanium = Oxanium({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font-oxanium',
})

const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { cursorPos, isClient } = useCursor()

  return (
    <html lang="pt-BR" className={`${oxanium.variable} ${montserrat.variable}`}>
      <head>
        <title>Rank Dev</title>
        <link rel="shortcut icon" href="/d.ico" type="image/x-icon" />
        <meta name="description" content="Descrição da página" />
      </head>
      <body className="bg-gray-900 text-gray-100 antialiased bg-[url(/Background.png)] bg-no-repeat bg-top md:bg-right-top">
        <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
          {children}
        </main>

        {isClient && (
          <MousePointer2
            className="fixed text-[#b3eba8] pointer-events-none hidden md:block"
            style={{
              left: cursorPos.x,
              top: cursorPos.y,
              position: 'fixed',
              transform: 'translate(-50%, -50%)',
            }}
            size={25}
          />
        )}
      </body>
    </html>
  )
}