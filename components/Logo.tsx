import { Box } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";

export interface LogoProps {
  size?: string | number;
  rounded?: string | number;
  p?: string | number;
}

const Logo = ({ size = "100px", rounded = "3xl", p = 4 }: LogoProps) => {
  return (
    <Box
      p={p}
      bgGradient="linear(to-tl, teal.200, pink.400)"
      w="fit-content"
      rounded={rounded}
      boxShadow="md"
    >
      <TriangleDownIcon w={size} h={size} color="white" />
    </Box>
  );
};

export default Logo;
