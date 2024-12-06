import {Card} from "@/src/modules/Cards/Card";
import {ClientCards} from "@/src/modules/Cards/ClientCards";
import {service} from "@/src/api/api";

const Cards = async () => {
  const products =await service.products()
  return (
    <section className="py-12 px-4 sm:px-0 bg-gray-100">
      <div className="container mx-auto flex justify-between items-center mb-6 bg-gray-100 z-10">
        <h2 className="text-3xl font-semibold text-[#333]">Все товары</h2>
        <div className="flex items-center space-x-4">
          <button className="bg-[#ADBFAD] text-white px-6 py-2 rounded-lg">Популярное</button>
          <button className="bg-[#ADBFAD] text-white px-6 py-2 rounded-lg">Скидки</button>
          <button className="bg-[#ADBFAD] text-white px-6 py-2 rounded-lg">Новинки</button>
        </div>
      </div>
      <div
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => {
          return <Card key={product.id} product={product}/>
        })}
        <ClientCards/>
      </div>
    </section>
  );
};

export default Cards
