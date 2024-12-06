import {create} from 'zustand'

export const useBacket = create((set,get) => ({
  products: [],
  addProduct: (product) => set(state => {
    if (state.products.find(p => p.id === product.id)) {
      return {
        products: state.products.map(p => p.id === product.id ? {
          ...p,
          count: p.count + 1
        } : p)
      }
    }
    return {products: [...state.products, {...product, count: 1}]}
  }),
  getProduct: (id) => get().products.find(product => product.id === id),
  removeProduct: (id) => set(state => {
    const product = state.products.find(p => p.id === id)
    if (product.count > 1) {
      return {
        products: state.products.map(p => p.id === id ? {
          ...p,
          count: p.count - 1
        } : p)
      }
    }
    return {products: state.products.filter(p => p.id !== id)}
  }),
  clearBacket: () => set({products: []}),
}))
