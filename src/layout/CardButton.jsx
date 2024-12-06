'use client';


import {Button, ButtonSizes} from "@/src/common/Button";
import {useBacket} from "@/src/store/backet";
import {useEffect} from "react";
import {useRouter} from "next/navigation";

export const CardButton = () => {
  const {products} = useBacket()
  const router = useRouter()
  const count = products.map(p => p.count).reduce((acc, el) => acc + el, 0)
  useEffect(() => {
    const callBack = function (e) {
      if (count > 0) {
        router.push("/backet")
        e.preventDefault();
        e.returnValue = 'Есть добавленные товары в корзину. Вы уверены, что хотите покинуть страницу?';
      }
    }
    window.addEventListener("beforeunload", callBack)
    return () => {
      window.removeEventListener("beforeunload", callBack)
    }
  }, [count]);
  return (
    <Button As={"link"} href={"/backet"} size={ButtonSizes.sm}
            className={"flex items-center gap-3 relative"}>
      <img src="/shopping-card.svg" alt="" className={"w-7 flex-shrink-0"}/>
      <span className={"hidden sm:block"}>
              Корзина
            </span>
      {
        count > 0 && <div
          className={"absolute -top-2 -left-1 bg-red-500 text-white text-sm w-5 h-5 flex justify-center items-center rounded-full"}>
          {count}
        </div>
      }
    </Button>
  );
};

