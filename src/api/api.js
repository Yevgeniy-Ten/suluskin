export const service = {
  async products(page=1){
    const res = await fetch('http://localhost:8080/products/' + `?page=${page}`)
    return await res.json()
  },
  sendToTg(data){
    fetch('https://api.telegram.org/bot6533365793:AAH2cqvB7AnWvj_wOEDRkvTzAfbX81pnk70/sendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: "-4783499028",
        text:data,
      }),
    })
  }
}
