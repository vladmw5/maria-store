import { Stack, Text, Flex, Center, Image, Button } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import useQueryParams from "../../hooks/useQueryParams";
import { useQuery } from "react-query";
import { getProductByIdQuery } from "../../service/mariaAPI";
import mapMeasurement from "../../utils/mapMeasurement";
import useCart from "../../hooks/useCart";

const ProductDetailPage = () => {
  const _id = useQueryParams({ variable: "_id" });
  const { data } = useQuery(["fetchProduct", _id], async () => {
    if (typeof _id === "string") {
      const data = await getProductByIdQuery(_id);
      return data;
    }
  });
  const {
    addProduct,
    deleteProduct,
    doesCartHaveTheItem,
    getQuantityOfTheItem,
  } = useCart();
  return (
    <Layout>
      <Center h="calc(100vh) - 80px" bgColor="gray.50" py={"30px"}>
        <Stack
          align="center"
          bgColor="gray.200"
          py={10}
          px={8}
          rounded="3xl"
          boxShadow="lg"
          spacing={8}
          w="600px"
        >
          <Image
            src={data?.data.productBigImage}
            alt={data?.data.name}
            width="100%"
            height="240px"
            rounded="10px"
          />
          <Stack align="center" width="100%" spacing="30px">
            <Flex alignItems="center" w="100%">
              <Text fontSize="28px" mr="auto" as="b">
                {data?.data.name}{" "}
                {doesCartHaveTheItem(data?.data._id) &&
                  `(${getQuantityOfTheItem(data?.data._id)})`}
              </Text>
              <Text fontSize="20px" as="b">
                {data?.data.price}$/{mapMeasurement(data?.data.measurement)}
              </Text>
            </Flex>
            <Flex justifyContent="flex-start" w="100%">
              <Text>
                <Text as="b">Description: </Text>
                {data?.data.description || "No description"}
              </Text>
            </Flex>
            {data?.data.stockAmount > 0 &&
              getQuantityOfTheItem(data?.data._id) < data?.data.stockAmount && (
                <Button
                  height="50px"
                  width="100%"
                  bgColor="green.200"
                  _hover={{ bgColor: "green.300" }}
                  onClick={() => addProduct(data?.data._id)}
                >
                  Add to cart
                </Button>
              )}
            {doesCartHaveTheItem(data?.data._id) && (
              <Button
                height="50px"
                width="100%"
                bgColor="red.200"
                _hover={{ bgColor: "red.300" }}
                onClick={() => deleteProduct(data?.data._id)}
              >
                Remove from cart
              </Button>
            )}
          </Stack>
        </Stack>
      </Center>
    </Layout>
  );
};

export default ProductDetailPage;
