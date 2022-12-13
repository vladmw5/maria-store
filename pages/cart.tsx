import { useState } from "react";
import Layout from "../components/Layout";
import { Stack, Text } from "@chakra-ui/react";
import Button from "../components/Button";
import useCart from "../hooks/useCart";
import ProductInCart from "../components/ProductInCart";
import { useMutation, useQueryClient } from "react-query";
import useAuth from "../hooks/useAuth";
import { sendOrderQuery } from "../service/mariaAPI";
import { Order } from "../service/model";
import Loader from "../components/Loader";

const Cart = () => {
  useAuth();
  const queryClient = useQueryClient();
  const { items, clearCart } = useCart();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const createOrderMutation = useMutation(
    async (order: Order) => {
      const data = await sendOrderQuery(order);
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("fetchOrders");
        setSuccess(true);
        clearCart();
      },
      onError: () => {
        setError("Failed to Create an Order");
      },
      onSettled: () => {
        setIsLoading(false);
      },
    }
  );
  return (
    <Layout>
      <Stack py="40px">
        <Button onClick={() => clearCart()}>Clear Cart</Button>
        <Stack>
          {items.length > 0 ? (
            items.map((item) => (
              <ProductInCart
                key={item._id}
                id={item._id}
                quantity={item.quantity}
              />
            ))
          ) : (
            <Text fontSize="44px" as="b" color="gray.300" align="center">
              You have nothing ordered yet
            </Text>
          )}
        </Stack>
        <Button
          onClick={() => {
            setSuccess(false);
            setError("");
            if (items.length === 0) {
              setError("You are trying to create an empty order");
              return;
            }
            setIsLoading(true);
            createOrderMutation.mutate({ items });
          }}
        >
          Create Order
        </Button>
        {success && <Text fontSize="10px">Successfully created Order</Text>}
        {isLoading && <Loader text="Sending request" />}
        {error && (
          <Text color="red.400" fontSize="10px">
            {error}
          </Text>
        )}
      </Stack>
    </Layout>
  );
};

export default Cart;
