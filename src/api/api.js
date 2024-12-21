export const service = {
  async getAllCategories() {
    const res = await fetch('/api/category')
    return await res.json()
  },
  async createCategory(data) {
    const res = await fetch('/api/category', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return await res.json()
  },
  async getAllBrands() {
    const res = await fetch('/api/brands')
    return await res.json()
  },
  async createBrand(data) {
    const res = await fetch('/api/brands', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return await res.json()
  },
  async deleteBrand(id) {
    await fetch('/api/brands/' + id, {
      method: 'DELETE',
    })
  },
  async deleteCategory(id) {
    await fetch('/api/category/' + id, {
      method: 'DELETE',
    })
  },
  async products(page = 1, category) {
    let host = 'http://localhost:8080'
    if (typeof window === 'undefined') {
      host = 'http://localhost:8080'
    } else {
      host = "/api"
    }
    let url = host + '/products' + `?page=${page}`
    if (category) {
      url += `&category=${category}`
    }
    const res = await fetch(url)
    return await res.json()
  },
  async searchProducts(searchValue){
    const res = await fetch('/api/products?search=' + searchValue)
    return await res.json()
  },
  async getAllSubCategories() {
    const res = await fetch('/api/subcategory')
    return await res.json()
  },
  async createSubCategory(data) {
    const res = await fetch('/api/subcategory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return await res.json()
  },
  async deleteSubCategory(id) {
    await fetch('/api/subcategory/' + id, {
      method: 'DELETE',
    })
  },
  async createProduct(data) {
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return await res.json()
  },
  async addSubCategory(data) {
    const res = await fetch('/api/products/subcategories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return await res.json()
  },
  async updateProduct(data) {
    const res = await fetch('/api/products/' + data.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return await res.json()
  },
  async getAllProducts(categoryFilter) {
    const res = await fetch('/api/products/all' + (categoryFilter ? `?category=${categoryFilter}` : ''))
    return await res.json()
  },
  deleteProduct(id) {
    fetch('/api/products/' + id, {
      method: 'DELETE',
    })
  },
  sendToTg(data) {
    fetch('https://api.telegram.org/bot6533365793:AAH2cqvB7AnWvj_wOEDRkvTzAfbX81pnk70/sendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: "-4783499028",
        text: data,
      }),
    })
  }
}
