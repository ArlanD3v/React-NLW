'use client'

import './globals.css'
import { MousePointer2 } from 'lucide-react'
import { Montserrat, Oxanium } from 'next/font/google'
import Head from 'next/head'
import { useEffect, useState } from 'react'

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
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <html lang="pt-BR" className={`${oxanium.variable} ${montserrat.variable}`}>
      <Head>
        <title>Progress</title>
        <meta name="description" />
      </Head>
      <body className="bg-gray-900 text-gray-100 antialiased bg-[url(/Background.png)] bg-no-repeat bg-top md:bg-right-top">
        <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
          {children}
        </main>

        <MousePointer2
          className="fixed text-yellow-400 pointer-events-none"
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
            position: 'fixed',
            transform: 'translate(-50%, -50%)',
          }}
          size={25}
        />
      </body>
    </html>
  )
}
