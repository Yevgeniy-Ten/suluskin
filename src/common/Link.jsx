import NextLink from 'next/link'
import classNames from "classnames";

export const Link = ({href, children, className}) => {
  return (
    <NextLink
      className={classNames("text-white hover:text-[#333333]", className)}
      href={href}
    >
      {children}
    </NextLink>)
}
