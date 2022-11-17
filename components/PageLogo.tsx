import { Text, Flex, Box } from "@chakra-ui/react";
import Link from "next/link";
import Logo from "./Logo";
import { LogoProps } from "./Logo";

const PageLogo = ({ size = "40px", rounded = "xl", p = 3 }: LogoProps) => {
  return (
    <Box mr="auto">
      <Link href="/">
        <Flex align="center" gap={4}>
          <Logo size={size} rounded={rounded} p={p} />
          <Text fontSize="2xl" as="b">
            Mriya Store
          </Text>
        </Flex>
      </Link>
    </Box>
  );
};

export default PageLogo;
