import { Flex, SystemStyleObject } from "@chakra-ui/react";
import Link from "next/link";
import { CSSProperties, ReactNode } from "react";
import { useRouter } from "next/router";

export interface NavLinkProps {
  href: string;
  exact: boolean;
  children: ReactNode;
}

const beforeStyles: SystemStyleObject = {
  content: '""',
  position: "absolute",
  w: "100%",
  bottom: 0,
  height: "3px",
  bgColor: "gray.300",
  left: 0,
};
const hoverAndFocusStyles: SystemStyleObject = {
  bgColor: "gray.200",
};

const NavLink = ({ href, exact, children, ...props }: NavLinkProps) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);
  return (
    <Flex
      h="100%"
      position="relative"
      _before={isActive ? beforeStyles : undefined}
      alignItems="center"
      justifyContent="center"
      _hover={hoverAndFocusStyles}
      transition="background-color 250ms ease"
    >
      <Link
        href={href}
        {...props}
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          paddingLeft: "32px",
          paddingRight: "32px",
        }}
      >
        {children}
      </Link>
    </Flex>
  );
};

export default NavLink;
