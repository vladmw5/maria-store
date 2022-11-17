import Link from "next/link";
import { CSSProperties, ReactNode } from "react";

interface NextLinkProps {
  href: string;
  children: ReactNode;
}

const linkStyles: CSSProperties = {
  textDecoration: "underline",
  color: "#6B46C1",
};

const NextLink = ({ href, children }: NextLinkProps) => {
  return (
    <Link href={href} style={linkStyles}>
      {children}
    </Link>
  );
};

export default NextLink;
