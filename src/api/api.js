export const service = {
  async products(page=1){
    const res = await fetch('http://localhost:8080/products/' + `?page=${page}`)
    return await res.json()
  },
  sendToTg(data){
    fetch('http://localhost:8080/tg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }
}
