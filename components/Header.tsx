import Link from 'next/link';

export default function Header() {
  const whatsappNumber = "554199989303";
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Lado Esquerdo: Logo da Empresa */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          {/* Se a imagem for muito grande/pequena, ajuste o h-12 (altura) */}
          <img 
            src="/images/Logo_3.png" 
            alt="DKW Telecom Logo" 
            className="h-12 w-auto object-contain" 
          />
        </Link>

        {/* Centro: Links de Navegação (Escondidos no celular, visíveis no PC) */}
        <nav className="hidden md:flex gap-8 font-medium text-slate-600">
          <Link href="/" className="hover:text-[#FF6600] transition-colors">
            Início
          </Link>
          <Link href="/produtos" className="hover:text-[#FF6600] transition-colors">
            Catálogo de Produtos
          </Link>
          {/* Podemos criar esta página de contato depois */}
          <Link href="/contato" className="hover:text-[#FF6600] transition-colors">
            Contato
          </Link>
        </nav>

        {/* Lado Direito: Botão de Fale Conosco */}
        <div className="flex items-center gap-4">
          <a 
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex bg-[#003366] hover:bg-blue-800 text-white px-6 py-2 rounded-lg font-bold transition-colors shadow-sm"
          >
            Fale Conosco
          </a>
          
          {/* Ícone de Menu para Celular (Apenas visual por enquanto) */}
          <button className="md:hidden text-[#003366] hover:text-[#FF6600]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>

      </div>
    </header>
  );
}