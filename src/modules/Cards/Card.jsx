import {Button, ButtonSizes, ButtonVariants} from "@/src/common/Button";

export const Card = ({product}) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 flex-col flex">
      <div className="relative">
        <img src={product.img} alt="Косметика"
             className="w-full h-64 object-contain"/>
        <div
          className="absolute top-4 left-4 bg-red-300 text-white text-sm font-bold px-3 py-1 rounded-full">
          Скидка 10%
        </div>
        <div
          className="absolute right-4 bottom-4 bg-green-100 text-white text-xs font-bold px-3 py-1 rounded-full">
          {product.category.name}
        </div>
      </div>
      <div className="p-6 flex-grow  flex flex-col">
        <div className={"flex justify-between gap-3"}>
          <h3 className="text-lg font-semibold text-[#333]">{product.name}</h3>
          <span className="text-lg text-nowrap font-bold text-[#ADBFAD]">{product.price} тг</span>
        </div>
        <p className="text-sm text-[#777] mt-2 line-clamp-3 flex-grow"
           dangerouslySetInnerHTML={{__html: product.text}}
        />
        <div className={"flex items-center justify-between gap-3 flex-wrap mt-4"}>
          <Button size={ButtonSizes.smm} className={"flex items-center gap-2"}>
            В корзину <img src="/shopping-card.svg" alt="" className={"w-6"}/>
          </Button>
          <Button As={"link"} href={`/${product.id}`} size={ButtonSizes.smm}
                  variant={ButtonVariants.outlined}>
            Подробнее
          </Button>
        </div>
      </div>
    </div>
  );
};

