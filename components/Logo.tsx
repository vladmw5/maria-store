import { Box } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";

const Logo = () => {
  return (
    <Box
      p={4}
      bgGradient="linear(to-tl, teal.200, pink.400)"
      w="fit-content"
      rounded="3xl"
      boxShadow="md"
    >
      <TriangleDownIcon w="100px" h="100px" color="white" />
    </Box>
  );
};

export default Logo;
