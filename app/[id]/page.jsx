export default async function Page({params}) {
  const slug = (await params).id
  const res = await fetch('http://localhost:8080/products/' + slug)
  const product = await res.json()
  return <div
    className="container grid grid-cols-4 mx-auto p-8 bg-white  shadow mt-8 gap-12 items-start">
    {/* Изображение товара */}
    <div className={"col-span-1 relative"}>
      <div
        className="absolute top-4 left-4 bg-red-300 z-20 text-white text-sm font-bold px-3 py-1 rounded-full">
        Скидка 10%
      </div>
      <img
        className="w-full h-auto object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
        src={product.img} alt={product.name}/>
    </div>
    <div className={"col-span-3"}>
      <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
      <p className="text-lg text-gray-600 mt-2">Категория: <span
        className="font-semibold">{product.category.name}</span></p>

      {/* Цена */}
      <div className="mt-4 flex items-center">
        <span className="text-2xl font-semibold text-red-600">{product.price}₽</span>
        <span className="text-xl line-through text-gray-500 ml-4">5000₽</span> {/* пример скидки */}
      </div>

      {/* Описание товара */}
      <div className="mt-5">
        <h3 className="text-xl font-semibold text-gray-800">Описание</h3>
        <div className={`mt-2 text-gray-700`}
             dangerouslySetInnerHTML={{__html: product.text}}/>
      </div>
    </div>
  </div>
}
