import {Link} from "@/src/common/Link";
import classNames from "classnames";

export const Links = () => {
  return (
    <>
      <a href="https://wa.me/77088395707"
         target="_blank">
        <img src="/wp.svg" alt=""
             className={"w-8 transition duration-300 transform hover:scale-105"}/>
      </a>

      <a href="https://www.instagram.com/suluskin/"
         target="_blank">
        <img src="/instagram.svg" alt=""
             className={"w-8 transition duration-300 transform hover:scale-105"}/>
      </a>
      <a href="https://www.instagram.com/suluskin/"
         target="_blank">
        <img src="/icons8-tiktok.svg" alt=""
             className={"w-8 transition duration-300 transform hover:scale-105"}/>
      </a>
    </>
  );
};


export const NavLinks = ({className})=> {
  return <>
    <Link href="/" className={className}>Главная</Link>
    <Link href="/about" className={className}>О нас</Link>
    <Link href="/delivery" className={className}>Доставка</Link>
  </>
}
