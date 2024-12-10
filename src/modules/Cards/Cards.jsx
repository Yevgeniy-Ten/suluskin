'use client';
import {ClientCards} from "@/src/modules/Cards/ClientCards";
import {CategoriesFilter} from "@/src/modules/CategoriesFilter/CategoriesFilter";
import {useState} from "react";

const Cards = () => {
  const [filter, setFilter] = useState(null)
  return (
    <section className="py-12 px-4 sm:px-0">
      <div className="container mx-auto flex gap-3 items-center mb-6 z-10">
        <h2 className="text-3xl font-semibold text-[#333]">Все товары</h2>
        <CategoriesFilter value={filter} setValue={setFilter}/>
      </div>
      <ClientCards category={filter?.id}/>

    </section>
  );
};

export default Cards
