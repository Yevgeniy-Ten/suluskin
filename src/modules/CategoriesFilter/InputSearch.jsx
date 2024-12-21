'use client';
import {useEffect, useRef, useState} from "react";
import {useDebounce} from "@/src/common/hooks/useDebounce";
import {service} from "@/src/api/api";
import {toast} from "react-toastify";
import {Loader} from "@/src/common/Loader";
import {useClickOutside} from "@/src/common/hooks/useClickOutside";
import {useRouter} from "next/navigation";
import Link from "next/link";

export const InputSearch = () => {
  const [search, setSearch] = useState('');
  const debounceValue = useDebounce(search, 500)
  const [open, setOpen] = useState(false)
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useRouter()
  useEffect(() => {
    if (!debounceValue) {
      setProducts([])
      setOpen(false)
      return;
    }
    setLoading(true)
    service.searchProducts(debounceValue).then((res) => {
      setProducts(res.products || [])
      setOpen(true)
    }).catch(() => {
      toast.error("Обратитесь к администратору")
    }).finally(() => {
      setLoading(false)
    })
  }, [debounceValue]);
  const inputRef = useRef()
  useClickOutside(inputRef, () => setOpen(false))
  return (
    <div ref={inputRef} className="relative">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Поиск товаров"
        className="w-full border border-gray-300 rounded-lg py-2 pl-3 pr-10"
      />
      <button
        onClick={() => {
          setOpen(!open)
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2">
        {
          open ? <img src="/icons8-closeGray.svg" alt="" className={"w-5 h-5"}/> :
            <img src="/icons8-search.svg" alt="" className={"w-5 h-5"}/>
        }
      </button>
      {
        open && (
          <div
            className="absolute w-full bg-white border border-gray-300 z-50 rounded-lg mt-1">
            {
              loading ? <div className={"flex justify-center py-2"}>
                <Loader/>
              </div> : <div className="p-2">
                {
                  !products.length ? <div className={"text-center"}>Не найдено</div> :
                    <>
                      <div className={"max-h-60 overflow-scroll "}>
                        {
                          products.map((product) => (
                            <div
                              onClick={() => {
                                navigate.push(`/${product.id}`)
                                setOpen(false)
                              }}
                              key={product.id}
                              className={"p-2 cursor-pointer flex items-start gap-3 hover:bg-gray-200 border-b border-gray-300"}>
                              <img src={product.img} alt=""
                                   className={"w-10 object-cover rounded-lg"}/>
                              <div>
                                <div dangerouslySetInnerHTML={{__html: product.name}}/>
                                <div className={"text-gray-500 font-medium"}>{product.price}тг</div>
                              </div>
                            </div>
                          ))
                        }
                      </div>
                      <div
                        className={"p-1.5 border-t-2 border-gray-300"}>
                        <Link href={`/search?search=${search}`} className={"text-blue-600 underline"}>Показать
                          все результаты</Link>
                      </div>
                    </>
                }
              </div>
            }
          </div>
        )
      }
    </div>
  );
};

