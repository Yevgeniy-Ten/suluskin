'use client';
import "./index.css"
import {useEffect, useState} from "react";
import {Links, NavLinks} from "@/src/layout/Links";
import classNames from "classnames";
import {usePathname} from "next/navigation";

export const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <div className={"md:hidden"}>
      <input
        onChange={() => setOpen(!open)}
        type="checkbox" id="burger-checkbox" className="burger-checkbox" checked={open}/>
      <label className="burger" htmlFor="burger-checkbox"></label>
      <div
        className={classNames("absolute items-center gap-3 flex flex-col top-full bg-green-100 left-0 right-0 transition-all", {
          "h-0 invisible": !open,
          "h-auto px-3 py-5 visible": open
        })}>
        <NavLinks className={"border-b w-full text-center py-2"}/>
        <div className={"flex gap-10 justify-between w-64 mx-auto"}>
          <Links/>
        </div>
      </div>
    </div>
  );
};
