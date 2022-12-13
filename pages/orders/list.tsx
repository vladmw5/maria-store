import Layout from "../../components/Layout";
import { Stack, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { getAllOrdersQuery } from "../../service/mariaAPI";
import Loader from "../../components/Loader";
import { OrderResponseObject } from "../../service/model";
import OrderCard from "../../components/orderCard";

const OrdersPage = () => {
  const { data, isLoading, error } = useQuery(
    "fetchOrders",
    async () => await getAllOrdersQuery()
  );

  return (
    <Layout>
      <Stack py="20px" gap="8px">
        {isLoading ? (
          <Loader />
        ) : (
          data?.data.map((order: OrderResponseObject) => (
            <OrderCard key={order._doc._id} order={order} />
          ))
        )}
      </Stack>
    </Layout>
  );
};

export default OrdersPage;
