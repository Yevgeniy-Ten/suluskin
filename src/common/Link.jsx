import NextLink from 'next/link'
import classNames from "classnames";

export const Link = ({href, children, className}) => {
  return (
    <NextLink
      className={classNames("text-white hover:text-gray-200", className)}
      href={href}
    >
      {children}
    </NextLink>)
}
