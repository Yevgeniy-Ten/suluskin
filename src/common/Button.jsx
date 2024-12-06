import classNames from "classnames";
import Link from "next/link";

export const ButtonSizes = {
  default: 'px-8 py-3',
  sm: 'px-6 py-1.5',
  smm: 'px-6 py-2',
}
export const ButtonVariants = {
  filled: 'bg-[#98a88a] text-white border border-[#98a88a]',
  outlined: 'bg-white text-[#98a88a] border border-[#98a88a]',
}
export const Button = ({
                         children,
                         size = ButtonSizes.default,
                         variant = ButtonVariants.filled,
                         className,
                         As = 'button',
                         ...props
                       }) => {
  As = As === 'button' ? 'button' : Link;
  return (
    <As
      className={classNames("rounded-lg shadow-md transition duration-300 transform hover:scale-105", variant, size, className)}
      {...props}
    >
      {children}
    </As>
  );
};

