import ProductCard from '@/components/ProductCard';

// Uma lista de produtos simulando o teu banco de dados
const productsData = [
  {
    id: 1,
    name: "Caixa de Emenda Conj. FO96",
    category: "Caixas e Emendas",
    price: "117,28",
    imageUrl: "/images/Caixa de Emenda Óptica.png", 
  },
  {
    id: 2,
    name: "Alça Preformada Amarração Final (3V)",
    category: "Alças e Laços",
    price: "1,33",
    imageUrl: "/images/ALÇA-BRANCA-PREFORMADA.png", 
  },
  {
    id: 3,
    name: "Fita de Aço Galvanizado 0,50 x 3/4 x 25M",
    category: "Ferragens e Fixação",
    price: "24,55",
    imageUrl: "/images/FITA-ACO-GALVANIZADO-E-INOX.png", 
  },
  {
    id: 4,
    name: "Anel AGFE 4MM",
    category: "Ferragens e Fixação",
    price: "0,38",
    imageUrl: "/images/ANEL-AGFE.png", 
  }
];

export default function ProdutosPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-[#003366] mb-4">Catálogo de Produtos</h1>
        <p className="text-lg text-slate-600">
          Encontra tudo o que precisas para a tua rede de fibra óptica. Clica no botão para falar diretamente connosco via WhatsApp.
        </p>
      </div>

      {/* Grelha de Produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {productsData.map((produto) => (
          <ProductCard 
            key={produto.id}
            id={produto.id}       
            name={produto.name}
            category={produto.category}
            price={produto.price}
            imageUrl={produto.imageUrl}
         />
        ))}
      </div>

    </div>
  );
}