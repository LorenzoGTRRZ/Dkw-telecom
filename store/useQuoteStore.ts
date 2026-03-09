import { create } from 'zustand';

// Definimos como é um item dentro do nosso carrinho
export interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
}

// Definimos as ações que o carrinho pode fazer
interface QuoteStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

// Criamos o gestor de estado (o nosso cérebro)
export const useQuoteStore = create<QuoteStore>((set) => ({
  items: [],
  
  // Função para adicionar um produto
  addItem: (newItem) => set((state) => {
    // Verifica se o produto já está no carrinho
    const existingItem = state.items.find(item => item.id === newItem.id);
    if (existingItem) {
      // Se já existir, apenas aumenta a quantidade
      return {
        items: state.items.map(item =>
          item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      };
    }
    // Se for novo, adiciona com quantidade 1
    return { items: [...state.items, { ...newItem, quantity: 1 }] };
  }),

  // Função para remover um produto
  removeItem: (id) => set((state) => ({
    items: state.items.filter(item => item.id !== id)
  })),

  // Função para limpar tudo
  clearCart: () => set({ items: [] })
}));