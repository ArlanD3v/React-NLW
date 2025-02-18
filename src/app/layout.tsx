import './globals.css'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UnU Pyt",
  description: "Powered By - Jarlan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className='bg-black text-white text-4xl'>{children}</body>
    </html>
  );
}
