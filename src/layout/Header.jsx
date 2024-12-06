import {Link} from "@/src/common/Link";
import {Button, ButtonSizes} from "@/src/common/Button";

export const Header = () => {
  return (
    <header className="bg-[#ADBFAD] py-5 fixed top-0 z-10 left-0 right-0">
      <div className="container mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <img src="/logo.svg" alt="" className={"w-40 -translate-y-2"}/>
        </Link>

        <nav className="space-x-6">
          <Link href="/">Главная</Link>
          <Link href="/about">О нас</Link>
          <Link href="/delivery">Доставка</Link>
        </nav>

        <div className="flex items-center space-x-7">
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
          <Button As={"link"} href={"/backet"} size={ButtonSizes.sm}
                  className={"flex items-center gap-3"}>
            <img src="/shopping-card.svg" alt="" className={"w-7"}/>
            Корзина
          </Button>
        </div>
      </div>
    </header>
  );
};

