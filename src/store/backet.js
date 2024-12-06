import {create} from 'zustand'

export const useBacket = create((set) => ({
  products: [],
  addProduct: (product) => set(state => ({products: [...state.products, product]})),
  removeProduct: (id) => set(state => ({products: state.products.filter(product => product.id !== id)})),
  clearBacket: () => set({products: []}),
}))
