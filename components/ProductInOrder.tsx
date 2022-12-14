import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { getProductByIdQuery } from "../service/mariaAPI";
import Loader from "./Loader";

export interface ProductInCartProps {
  id: string;
  quantity: number;
}

const ProductInOrder = ({ id, quantity }: ProductInCartProps) => {
  const { data, isLoading } = useQuery(["fetchProduct", id], async () => {
    if (typeof id === "string") {
      const data = await getProductByIdQuery(id);
      return data;
    }
  });
  return (
    <Box height="60px" bgColor="gray.200" px="40px" py="4px">
      <Flex alignItems={"center"} h="100%" justifyContent="space-between">
        {isLoading ? (
          <Loader text="Fetching product data..." />
        ) : (
          <>
            <Flex alignItems={"center"} gap="8px">
              <Image
                src={data?.data.productBigImage}
                alt={data?.data.name}
                w="60px"
                h="40px"
                rounded="4px"
              />
              <Text fontSize="18px" as="b">
                {data?.data.name} x {quantity}
              </Text>
            </Flex>
            <Flex gap="20px" alignItems="center">
              <Text fontSize="18px" as="b">
                {data?.data.price * quantity}$
              </Text>
            </Flex>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default ProductInOrder;
