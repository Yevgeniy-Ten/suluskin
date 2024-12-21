"use client";
import {useEffect, useRef, useState} from 'react';
import {service} from "@/src/api/api";
import {Loader} from "@/src/common/Loader";
import {Card} from "@/src/modules/Cards/Card";
import {Pagination} from "@/src/common/Pagination/Pagination";

export const ClientCards = ({category}) => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await service.products(page, category);
      setProducts(res.products)
      setTotalPages(res.total)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    } catch (error) {
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page, category]);
  useEffect(() => {
    setPage(1);
  }, [category]);

  return (
    <>
      <Cards products={products}/>
      <div className="container mx-auto mt-6">
        {
          !products.length && <div className={"text-center w-full"}>Нет товаров</div>
        }
        {
          loading && <div className={"text-center col-span-12"}>
            <Loader/>
          </div>
        }
        {
          !category && <Pagination setPage={setPage} totalPages={totalPages} currentPage={page}/>
        }
      </div>
    </>
  );
};
export const Cards = ({products})=> {
  return <div
    className={"container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"}>
    {
      products.map((product) => {
        return <Card key={product.id} product={product}/>
      })
    }
  </div>
}
