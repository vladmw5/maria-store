import { Box, Flex, Text } from "@chakra-ui/react";
import { OrderResponseObject } from "../service/model";

export interface OrderCardProps {
  order: OrderResponseObject;
}

const OrderCard = ({ order }: OrderCardProps) => {
  return (
    <Box h="40px" px="20px" py="4px">
      <Flex justifyContent="space-between">
        <Text fontSize="18px" as="b">
          {order._doc.createdAt}
        </Text>
        <Text fontSize="18px" as="b">
          {order._doc.userId.email}
        </Text>
        <Text fontSize="18px" as="b">
          {order.totalPrice}$
        </Text>
      </Flex>
    </Box>
  );
};

export default OrderCard;
