import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import QuoteCart from '@/components/QuoteCart'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Importamos uma fonte moderna e limpa do Google Fonts
const inter = Inter({ subsets: ['latin'] })

// Esta secção é crucial para o SEO. É o que vai aparecer no Google.
export const metadata: Metadata = {
  title: 'DKW Telecom | Soluções em Fibra Óptica',
  description: 'Catálogo profissional de produtos para provedores de internet: Caixas de emenda, ferragens, alças e isoladores.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      {/* O antialiased deixa as letras mais suaves no ecrã */}
      <body className={`${inter.className} antialiased bg-slate-50`}>
        {/* Aqui, mais tarde, vamos colocar o componente <Header /> (Menu) */}
        
        <Header />
        
        <main className="min-h-screen">
          {children}
        </main>

        <Footer />

        <QuoteCart />

        {/* Aqui, mais tarde, vamos colocar o componente <Footer /> (Rodapé) */}
      </body>
    </html>
  )
}