import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#003366] text-slate-300 pt-16 pb-8 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Coluna 1: Sobre a Empresa */}
        <div className="flex flex-col gap-4">
          {/* Você pode usar a logo branca aqui se tiver, ou apenas o texto */}
          <h3 className="text-2xl font-extrabold text-white tracking-tight">DKW Telecom</h3>
          <p className="text-sm leading-relaxed max-w-sm">
            Especialistas em soluções de infraestrutura para provedores de internet. 
            Fornecemos caixas de emenda, ferragens, alças e isoladores com a mais alta qualidade do mercado.
          </p>
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold text-white mb-2">Navegação</h4>
          <nav className="flex flex-col gap-3 text-sm">
            <Link href="/" className="hover:text-[#FF6600] transition-colors w-fit">Início</Link>
            <Link href="/produtos" className="hover:text-[#FF6600] transition-colors w-fit">Catálogo de Produtos</Link>
            <Link href="/contato" className="hover:text-[#FF6600] transition-colors w-fit">Fale Conosco</Link>
          </nav>
        </div>

        {/* Coluna 3: Contato */}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-bold text-white mb-2">Contato</h4>
          <ul className="flex flex-col gap-4 text-sm">
            
            {/* Informação de Operação Digital */}
            <li className="flex items-start gap-3">
              <span className="text-[#FF6600] text-lg">📍</span>
              <span className="leading-relaxed">
                Atendimento 100% Digital<br/>
                <span className="text-blue-300 text-xs">Envio para todo o Brasil</span>
              </span>
            </li>

            {/* CNPJ */}
            <li className="flex items-center gap-3">
              <span className="text-[#FF6600] text-lg">📄</span>
              <span className="text-blue-200">CNPJ: 00.000.000/0001-00</span>
            </li>

            {/* WhatsApp / Telefone */}
            <li className="flex items-center gap-3">
              <span className="text-[#FF6600] text-lg">📞</span>
              <span className="font-medium">(51) 99999-9999</span>
            </li>

            {/* E-mail */}
            <li className="flex items-center gap-3">
              <span className="text-[#FF6600] text-lg">✉️</span>
              <span>contato@dkwtelecom.com.br</span>
            </li>
            
          </ul>
        </div>

      </div>

      {/* Linha de Copyright */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-blue-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>&copy; {currentYear} DKW Telecom. Todos os direitos reservados.</p>
        <p>Desenvolvido com 💻 por <span className="text-white font-medium">Lorenzo Gutierrez</span></p>
      </div>
    </footer>
  );
}