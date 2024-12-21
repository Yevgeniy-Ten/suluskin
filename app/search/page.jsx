'use client'
import {Suspense, useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";
import {service} from "@/src/api/api";
import {Cards} from "@/src/modules/Cards/ClientCards";

const Page = () => {

  return (
    <Suspense>
      <SearchPage/>
    </Suspense>
  );
};
export const SearchPage = () => {
  const params = useSearchParams()
  const search = params.get('search')
  const [products, setProducts] = useState([])
  const fetchProducts = async () => {
    try {
      const res = await service.searchProducts(search);
      setProducts(res.products)
    } catch (error) {
      return null;
    }
  };
  useEffect(() => {
    fetchProducts()
  }, [search]);
  return <div>
    <h1 className={"text-center text-3xl font-semibold mt-6 mb-10"}>
      Результаты поиска по запросу "{search}"
    </h1>
    <Cards products={products}/>
  </div>
}
export default Page;
