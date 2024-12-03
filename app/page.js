import Image from "next/image";
import Cards from "@/src/modules/Cards/Cards";

export default function Home() {
  return (
    <div>
      <section className="py-8 bg-[#f8f8f8]">
        <div
          className="container mx-auto flex flex-col items-center bg-[#ADBFAD] rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-white mb-2">Акции месяца</h2>
          <p className="text-lg text-white mb-4">Не упустите шанс! Скидки на самые популярные
            товары.</p>
          <a href="#"
             className="bg-[#98a88a] text-white px-8 py-3 rounded-lg shadow-md hover:bg-[#88a77a] transition duration-300 transform hover:scale-105">
            Перейти в акции
          </a>
        </div>
      </section>

      <Cards/>

    </div>
  )
}
