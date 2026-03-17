'use client'; 
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  // Criamos o "estado" para controlar se o menu está aberto (true) ou fechado (false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappNumber = "5551999999999"; // Coloque o número real aqui

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-50 bg-white">
        
        {/* Lado Esquerdo: Logo da Empresa */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <img 
            src="/images/logo.png" 
            alt="DKW Telecom Logo" 
            className="h-12 w-auto object-contain" 
          />
        </Link>

        {/* Centro: Links de Navegação (PC) */}
        <nav className="hidden md:flex gap-8 font-medium text-slate-600">
          <Link href="/" className="hover:text-[#FF6600] transition-colors">Início</Link>
          <Link href="/produtos" className="hover:text-[#FF6600] transition-colors">Catálogo de Produtos</Link>
          <Link href="/contato" className="hover:text-[#FF6600] transition-colors">Contato</Link>
        </nav>

        {/* Lado Direito: Botões */}
        <div className="flex items-center gap-4">
          <a 
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex bg-[#003366] hover:bg-blue-800 text-white px-6 py-2 rounded-lg font-bold transition-colors shadow-sm"
          >
            Fale Conosco
          </a>
          
          {/* Botão do Hambúrguer (Celular) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} // <-- Ao clicar, ele inverte o estado
            className="md:hidden text-[#003366] hover:text-[#FF6600] transition-colors p-2"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                // Ícone de "X" quando o menu está aberto
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Ícone de Hambúrguer quando está fechado
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown do Menu Mobile (Só aparece se isMenuOpen for true) */}
      <div 
        className={`md:hidden absolute w-full bg-white border-b border-slate-200 shadow-xl transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'top-20 opacity-100 visible' : '-top-48 opacity-0 invisible'
        }`}
        style={{ zIndex: 40 }}
      >
        <nav className="flex flex-col px-6 py-4 gap-4 font-medium text-slate-600">
          {/* O onClick={...} faz o menu fechar sozinho depois que a pessoa clica em um link */}
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FF6600] transition-colors py-2 border-b border-slate-50">Início</Link>
          <Link href="/produtos" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FF6600] transition-colors py-2 border-b border-slate-50">Catálogo de Produtos</Link>
          <Link href="/contato" onClick={() => setIsMenuOpen(false)} className="hover:text-[#FF6600] transition-colors py-2 border-b border-slate-50">Contato</Link>
          
          <a 
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="bg-[#FF6600] text-white text-center py-3 rounded-lg font-bold mt-2 sm:hidden"
          >
            Falar pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}