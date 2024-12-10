import {Button, ButtonSizes, ButtonVariants} from "@/src/common/Button";
import {ToCardButton} from "@/src/common/ToCardButton";
import {Tag} from "@/src/common/Tag";
import {CardTags} from "@/src/modules/Cards/CardTags";

export const Card = ({product}) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 flex-col flex">
      <div className="relative">
        <img src={product.img} alt="Косметика"
             className="w-full h-64 object-contain"/>
        <div
          className="absolute top-4 left-4 bg-red-300 text-white text-sm font-bold px-3 py-1 rounded-full">
          На первый заказ -10%
        </div>
        <div
          className="absolute right-4 bottom-4 bg-green-100 text-white text-xs font-bold px-3 py-1 rounded-full">
          {product.category.name}
        </div>
      </div>
      <div className="p-6 flex-grow  flex flex-col">
        <div className={"flex justify-between gap-3"}>
          <h3 className="text-lg font-semibold text-[#333]"
          dangerouslySetInnerHTML={{__html: product.name}}
          />
          <span className="text-lg text-nowrap font-bold text-[#ADBFAD]">{+product.price} ₸</span>
        </div>
        <CardTags tags={product.subcategories}/>
        <div className={"flex-grow"}>
          <p className="text-sm text-[#777] mt-2 line-clamp-3 "
             dangerouslySetInnerHTML={{__html: product.text}}
          />
        </div>
        <div className={"flex items-center justify-between gap-3 flex-wrap mt-4"}>
          <ToCardButton product={product}/>
          <Button As={"link"} href={`/${product.id}`} size={ButtonSizes.smm}
                  variant={ButtonVariants.outlined}>
            Подробнее
          </Button>
        </div>
      </div>
    </div>
  );
};

