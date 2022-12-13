import { ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Container from "./Container";
import PageLogo from "./PageLogo";
import Navbar from "./Navbar";

interface LayoutProps {
  withFooter?: boolean;
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box minH="100vh" bgColor="gray.50">
      <Box h="80px" bgColor="gray.100" position="sticky" top={0} zIndex={1000}>
        <Container>
          <Flex align="center" alignItems="center" h="100%">
            <PageLogo />
            <Navbar />
          </Flex>
        </Container>
      </Box>
      <Container>{children}</Container>
    </Box>
  );
};

export default Layout;
