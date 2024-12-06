export const service = {
  async products(page=1){
    const res = await fetch('http://localhost:8080/products/' + `?page=${page}`)
    return await res.json()
  }
}
