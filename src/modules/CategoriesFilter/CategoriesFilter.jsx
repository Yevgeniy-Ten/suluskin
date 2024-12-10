'use client';
import {useEffect, useRef, useState} from "react";
import {service} from "@/src/api/api";
import classNames from "classnames";
import {useClickOutside} from "@/src/common/hooks/useClickOutside";

export const CategoriesFilter = ({value,setValue}) => {
  const [categories, setCategories] = useState([]);
  const [show, setShow] = useState(false);
  const ref = useRef()
  useClickOutside(ref, () => setShow(false))
  useEffect(() => {
    service.getAllCategories().then(setCategories)
  }, []);
  return (
    <div
      ref={ref}
      className={"relative"}>
      <div className={"cursor-pointer"}
           onClick={() => setShow(!show)}
      >
        <input type="text"
               value={value ? value?.name : "Все товары"}
               placeholder="Поиск по категориям"
               className="bg-white border px-4 py-1 rounded-lg font-medium"
               readOnly
        />
        <img src="/down-arrow-svgrepo-com.svg"
             className={classNames("w-4 h-4 absolute right-4 top-1/2 transform -translate-y-1/2", {
               "rotate-180": show
             })}
             alt=""/>
      </div>
      <div
        className={classNames("absolute flex flex-col left-0 right-0 transition-all bg-white border rounded-lg p-4 shadow-lg z-20", {
          "opacity-100 visible top-full": true,
          "opacity-0 invisible top-0": !show
        })}
      >
        <button
          className={"text-left py-2 border-b"}
          onClick={() => {
            setValue(null);
            setShow(false);
          }}>
          Все товары
        </button>
        {
          categories.map((category) => (
            <button
              className={"text-left py-2 border-b"}
              onClick={() => {
                setValue(category);
                setShow(false);
              }}
              key={category.id}>
              {category.name}
            </button>
          ))
        }
      </div>
    </div>
  );
};

