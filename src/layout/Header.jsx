import {Link} from "@/src/common/Link";
import {Button, ButtonSizes} from "@/src/common/Button";
import {BurgerMenu} from "@/src/layout/BurgerMenu";
import {Links, NavLinks} from "@/src/layout/Links";


export const Header = () => {
  return (
    <header className="bg-[#ADBFAD] py-5 fixed top-0 z-10 left-0 right-0">
      <div className="container mx-auto flex items-center justify-between px-3">
        <Link href={"/"} className={"flex-shrink-0 w-40"}>
          <img src="/logo.svg" alt="" className={"w-40 -translate-y-2"}/>
        </Link>
        <nav className={"space-x-6 md:block hidden"}>
          <NavLinks/>
        </nav>

        <div className="flex items-center space-x-7">
          <div className={"items-center gap-7 md:flex hidden"}>
            <Links/>
          </div>
          <Button As={"link"} href={"/backet"} size={ButtonSizes.sm}
                  className={"flex items-center gap-3"}>
            <img src="/shopping-card.svg" alt="" className={"w-7 flex-shrink-0"}/>
            <span className={"hidden sm:visible"}>
              Корзина
            </span>
          </Button>
          <BurgerMenu/>
        </div>
      </div>
    </header>
  );
};

