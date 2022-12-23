import { Stack, Text, Flex, Center, Image, Button } from "@chakra-ui/react";
import Layout from "../../components/Layout";
import useQueryParams from "../../hooks/useQueryParams";
import { useQuery } from "react-query";
import { getOrderByIdQuery } from "../../service/mariaAPI";
import ProductInOrder from "../../components/ProductInOrder";
import parseDate from "../../utils/parseDate";

const OrdersDetailPage = () => {
  const _id = useQueryParams({ variable: "_id" });
  const { data } = useQuery(["fetchProductById", _id], async () => {
    if (typeof _id === "string") {
      const data = await getOrderByIdQuery(_id);
      console.log(data);
      return data;
    }
  });
  console.log(data?.data.createdAt);
  return (
    <Layout>
      <Center py="30px">
        <Stack w="100%">
          <Stack
            align="center"
            bgColor="gray.200"
            py={10}
            px={8}
            rounded="3xl"
            boxShadow="lg"
            spacing={8}
          >
            <Text fontSize="3xl" as="b" color="blackAlpha.800">
              Order <Text as="samp"> {data?.data._id}</Text>
            </Text>
            <Flex w="100%" justifyContent="space-between">
              <Text fontSize="18px" as="b">
                {data?.data.createdAt && parseDate(data?.data.createdAt)}
              </Text>
              <Text fontSize="18px" as="b">
                {data?.data.userId.email}
              </Text>
              <Text fontSize="18px" as="b">
                {data?.data.totalPrice}$
              </Text>
            </Flex>
          </Stack>
          <Stack>
            {data?.data.items.length > 0 ? (
              data?.data.items.map((item: any) => (
                <ProductInOrder
                  key={item.productId}
                  id={item.productId}
                  quantity={item.quantity}
                />
              ))
            ) : (
              <Text fontSize="44px" as="b" color="gray.300" align="center">
                This order is empty
              </Text>
            )}
          </Stack>
        </Stack>
      </Center>
    </Layout>
  );
};

export default OrdersDetailPage;
