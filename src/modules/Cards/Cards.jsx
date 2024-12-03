import {Card} from "@/src/modules/Cards/Card";

const Cards = () => {
  return (
    <section className="py-12 bg-[#f8f8f8]">
      <div className="container mx-auto flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold text-[#333]">Популярные товары</h2>
        <div className="flex items-center space-x-4">
          <button className="bg-[#ADBFAD] text-white px-6 py-2 rounded-lg">Все товары</button>
          <button className="bg-[#ADBFAD] text-white px-6 py-2 rounded-lg">Скидки</button>
          <button className="bg-[#ADBFAD] text-white px-6 py-2 rounded-lg">Новинки</button>
        </div>
      </div>
      <div
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card/>
      </div>
    </section>
  );
};

export default Cards
