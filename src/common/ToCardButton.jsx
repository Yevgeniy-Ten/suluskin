'use client';
import {Button, ButtonSizes, ButtonVariants} from "@/src/common/Button";
import {useBacket} from "@/src/store/backet";
import classNames from "classnames";

export const ToCardButton = ({product,className}) => {
  const backet = useBacket()
  const productInfo = backet.getProduct(product.id)
  const handleClick = () => {
    backet.addProduct(product)
  }
  return (
    <div className={classNames("flex items-center gap-2",className)}>
      <Button onClick={handleClick} size={productInfo ? ButtonSizes.xs : ButtonSizes.smm}
              className={classNames("flex items-center gap-2", {
                "text-sm": !!productInfo
              })}>
        <span className={"text-nowrap"}>В корзину</span> <img src="/shopping-card.svg" alt="" className={"w-6"}/>
      </Button>
      {
        productInfo && <>
          <Button
            onClick={() => backet.removeProduct(product.id)}
            size={ButtonSizes.xs} variant={ButtonVariants.gray} className={"w-9"}>-</Button>
          <span className="text-lg font-semibold text-[#333]">
            {productInfo.count}
          </span>
          <Button
            onClick={() => backet.addProduct(product)}
            size={ButtonSizes.xs} variant={ButtonVariants.gray} className={"w-9"}>+</Button>
        </>
      }
    </div>
  );
};

