import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      
      {/* Secção Hero (Banner Principal) */}
      <section className="w-full bg-[#003366] text-white py-24 px-6 text-center shadow-inner">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Soluções Completas para o seu Provedor
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-blue-100 font-light">
          Encontra caixas de emenda, ferragens e materiais de alta qualidade para infraestrutura de telecomunicações com os melhores preços do mercado.
        </p>
        <Link 
          href="/produtos" 
          className="bg-[#FF6600] hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-lg transition-all transform hover:scale-105 shadow-lg"
        >
          Ver Catálogo de Produtos
        </Link>
      </section>

      {/* Secção de Categorias */}
      <section className="max-w-7xl mx-auto py-20 px-6 w-full">
        <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">
          Nossas Categorias
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Mapeamento das categorias principais */}
          {['Caixas e Emendas', 'Ferragens e Fixação', 'Alças e Laços', 'Suportes e Isoladores'].map((categoria) => (
            <div 
              key={categoria} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all cursor-pointer group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full mb-4 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                 {/* Espaço para colocar um ícone no futuro */}
                 <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-lg font-semibold text-[#003366] mb-2">{categoria}</h3>
              <p className="text-[#FF6600] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Explorar &rarr;
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}