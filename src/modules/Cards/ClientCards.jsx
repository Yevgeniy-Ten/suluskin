"use client";
import {useState, useEffect, useRef} from 'react';
import {service} from "@/src/api/api";
import {Loader} from "@/src/common/Loader";
import {Card} from "@/src/modules/Cards/Card";

export const ClientCards = () => {
  const [page, setPage] = useState(2);
  const [products, setProducts] = useState([]);
  const [isEnd, setIsEnd] = useState(false);
  const [loading, setLoading] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Элемент стал видимым, делаем fetch запрос
          service.products(page).then((data) => {
            if (!data) {
              observer.unobserve(divRef.current);
              setIsEnd(true);
              return;
            }
            setProducts([...products, ...data]);
            setPage(page + 1);
          });

        }
      });
    }, {
      rootMargin: '0px 0px 200px 0px' // Задаем область видимости с отступами
    });

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, [page]);

  return (
    <>
      {
        loading ? <Loader/> : <>
          {products.map((product) => {
            return <Card key={product.id} product={product}/>
          })}
          {
            !isEnd && <div ref={divRef} className={"mt-10"}>
              <Loader/>
            </div>
          }
        </>
      }
    </>
  );
};
