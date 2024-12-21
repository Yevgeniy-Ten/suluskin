import MainPageCards from "@/src/modules/Cards/MainPageCards";
import {Suspense} from "react";
import {Loader} from "@/src/common/Loader";
import {InputSearch} from "@/src/modules/CategoriesFilter/InputSearch";


export default function Home() {
  return (
    <div>
      <section className="py-8 ">
        <div
          className="container mx-auto flex flex-col items-center bg-[#ADBFAD] rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-white mb-2">Акции месяца</h2>
          <p className="text-lg text-white mb-4">Не упустите шанс! Скидки на самые популярные
            товары.</p>
        </div>
      </section>
      <div className={"mx-auto px-2 container"}>
        <InputSearch/>
      </div>
      <Suspense fallback={<Loader/>}>
        <MainPageCards/>
      </Suspense>

    </div>
  )
}
