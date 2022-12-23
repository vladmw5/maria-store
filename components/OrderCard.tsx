import { Box, Flex, Text } from "@chakra-ui/react";
import { OrderResponseObject } from "../service/model";
import Link from "next/link";
import parseDate from "../utils/parseDate";

export interface OrderCardProps {
  order: OrderResponseObject;
}

const OrderCard = ({ order }: OrderCardProps) => {
  return (
    <Box h="40px" px="20px" py="4px">
      <Link href={`/orders/detail?_id=${order?._id}`}>
        <Flex justifyContent="space-between">
          <Text fontSize="18px" as="b">
            {parseDate(order?.createdAt)}
          </Text>
          <Text fontSize="18px" as="b">
            {order?.userId.email}
          </Text>
          <Text fontSize="18px" as="b">
            {order?.totalPrice}$
          </Text>
        </Flex>
      </Link>
    </Box>
  );
};

export default OrderCard;
