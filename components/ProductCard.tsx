'use client'; // Necessário porque agora temos interatividade (clicar num botão que muda o estado)

import React from 'react';
import { useQuoteStore } from '@/store/useQuoteStore';

interface ProductCardProps {
  id: number; // Adicionámos o ID aqui
  name: string;
  category: string;
  price: string;
  imageUrl: string;
}

export default function ProductCard({ id, name, category, price, imageUrl }: ProductCardProps) {
  // Chamamos a função de adicionar do nosso cérebro
  const addItem = useQuoteStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({ id, name, price });
    alert(`"${name}" adicionado ao orçamento!`); // Um alerta simples para testarmos
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="h-56 bg-slate-50 p-4 flex items-center justify-center border-b border-slate-100 relative group">
        <img 
          src={imageUrl} 
          alt={name} 
          className="max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
        />
        <span className="absolute top-3 right-3 bg-blue-100 text-[#003366] text-xs font-bold px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2">
          {name}
        </h3>
        
        <div className="mt-auto pt-4">
          <p className="text-sm text-slate-500 mb-1">Preço unitário</p>
          <p className="text-2xl font-extrabold text-[#003366] mb-4">
            R$ {price}
          </p>
          
          {/* Novo botão que adiciona ao carrinho */}
          <button 
            onClick={handleAddToCart}
            className="w-full bg-[#003366] hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            Adicionar à Lista
          </button>
        </div>
      </div>
    </div>
  );
}