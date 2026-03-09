'use client';

import React, { useState } from 'react';
import { useQuoteStore } from '@/store/useQuoteStore';

export default function QuoteCart() {
  const [isOpen, setIsOpen] = useState(false);
  // Pegamos as informações do nosso "cérebro" (Zustand)
  const { items, removeItem, clearCart } = useQuoteStore();

  // Calcula quantos itens tem no total
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  // Função que monta a mensagem e envia para o WhatsApp
  const handleCheckout = () => {
    const telefone = "5551999999999"; // Coloque o número da empresa aqui
    let mensagem = "Olá! Acessei o site e gostaria de solicitar um orçamento para os seguintes itens:%0A%0A";

    items.forEach(item => {
      mensagem += `🔸 *${item.quantity}x* ${item.name}%0A`;
    });

    mensagem += "%0AAguardo o retorno com os valores e prazos. Obrigado!";

    // Abre o WhatsApp numa nova aba
    window.open(`https://wa.me/${telefone}?text=${mensagem}`, '_blank');
    
    // Limpa o carrinho depois de enviar
    clearCart();
    setIsOpen(false);
  };

  // Se o carrinho estiver vazio, o botão flutuante nem aparece
  if (totalItems === 0) return null;

  return (
    <>
      {/* Botão Flutuante no canto inferior direito */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-[#FF6600] hover:bg-orange-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center gap-2 z-50 transition-transform hover:scale-110"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
        <span className="font-bold">Ver Orçamento</span>
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
          {totalItems}
        </span>
      </button>

      {/* Fundo escuro quando a aba lateral abre */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Aba Lateral (Sidebar) */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Cabeçalho da Aba */}
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-[#003366] text-white">
          <h2 className="text-xl font-bold">Sua Lista de Orçamento</h2>
          <button onClick={() => setIsOpen(false)} className="hover:text-red-400 font-bold text-xl">
            &times;
          </button>
        </div>

        {/* Lista de Produtos */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-6 bg-slate-50 p-4 rounded-lg border border-slate-100">
              <div>
                <h4 className="font-semibold text-slate-800 text-sm">{item.name}</h4>
                <p className="text-slate-500 text-xs mt-1">Quantidade: {item.quantity}</p>
              </div>
              <button 
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700 text-sm font-medium ml-4"
              >
                Remover
              </button>
            </div>
          ))}
        </div>

        {/* Rodapé com o Botão de Enviar */}
        <div className="p-6 border-t border-slate-100 bg-white">
          <button 
            onClick={handleCheckout}
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 shadow-lg transition-colors"
          >
            Enviar para o WhatsApp
          </button>
          <button 
            onClick={clearCart}
            className="w-full text-center text-slate-400 hover:text-slate-600 text-sm mt-4"
          >
            Limpar lista
          </button>
        </div>
      </div>
    </>
  );
}