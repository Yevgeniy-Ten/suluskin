'use client';
import {ClientCards} from "@/src/modules/Cards/ClientCards";
import {CategoriesFilter} from "@/src/modules/CategoriesFilter/CategoriesFilter";
import {useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import {InputSearch} from "@/src/modules/CategoriesFilter/InputSearch";

const MainPageCards = () => {
  const parms = useSearchParams()
  const router = useRouter()
  const [filter, setFilter] = useState(()=>{
    if(parms.get('category')){
      return {
        id: parms.get('category')
      }
    }
    return null
  })

  return (
    <section className="py-12 px-4 sm:px-0">
      <div className="container mx-auto flex gap-3 items-center mb-6 z-10">
        <div className={"flex gap-3 items-center"}>
          <h2 className="text-3xl font-semibold text-[#333]">Все товары</h2>
          <CategoriesFilter value={filter} setValue={category => {
            if (category) {
              router.push(`?category=${category.id}`)
            } else {
              router.push('/')
            }
            setFilter(category)
          }}/>
        </div>
      </div>
      <ClientCards category={filter?.id}/>

    </section>
  );
};

export default MainPageCards
