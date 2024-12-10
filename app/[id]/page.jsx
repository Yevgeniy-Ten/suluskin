import {CardTags} from "@/src/modules/Cards/CardTags";
import {ToCardButton} from "@/src/common/ToCardButton";

export default async function Page({params}) {
  const slug = (await params).id
  const res = await fetch('http://localhost:8080/products/' + slug)
  if(!res) return <div>404</div>
  const product = await res.json()
  return <div
    className="container grid grid-cols-4 mx-auto p-8   mt-8 gap-12 items-start">
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
      <div className={"flex justify-between items-center"}>
        <div>
          <h1 className="text-3xl font-bold text-gray-900"
              dangerouslySetInnerHTML={{__html: product.name}}
          />
          <div className={"mt-2 flex items-center gap-3"}>
            <p className="text-lg text-gray-600">Категория: <span
              className="font-semibold">{product.category.name}</span></p>
            <CardTags tags={
              product.subcategories || []
            }/>
          </div>
        </div>
        <ToCardButton product={product}/>
      </div>

      <div className="mt-4 flex items-center">
        <span className="text-2xl font-semibold text-green-600">{product.price} т</span>
        {/*<span className="text-xl line-through text-gray-500 ml-4">5000₽</span> /!* пример скидки *!/*/}
      </div>

      <div className="mt-5">
        <h3 className="text-xl font-semibold text-gray-800">Описание</h3>
        <div className={`mt-2 text-gray-700`}
             dangerouslySetInnerHTML={{__html: product.text}}/>
      </div>
    </div>
  </div>
}
