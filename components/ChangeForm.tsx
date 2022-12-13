import { useState, ChangeEvent, useEffect } from "react";
import {
  FormControl,
  Stack,
  FormErrorMessage,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";
import Input from "../components/Input";
import Button from "../components/Button";
import Select from "./Select";
import {
  TEMPLATE_IMAGE_URL,
  getProductByIdQuery,
  changeProductQuery,
} from "../service/mariaAPI";
import { Measurement, ProductSchema } from "../service/model";
import useQueryParams from "../hooks/useQueryParams";
import { useQuery, useMutation, useQueryClient } from "react-query";
import Loader from "./Loader";

const ChangeForm = () => {
  const queryClient = useQueryClient();
  const _id = useQueryParams({ variable: "_id" });
  const { data } = useQuery(["fetchProduct", _id], async () => {
    if (typeof _id === "string") {
      const data = await getProductByIdQuery(_id);
      return data;
    }
  });
  const [measurement, setMeasurement] = useState<Measurement>("кг");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stockAmount, setStockAmount] = useState(0);
  const [productBigImage, setProductBigImage] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    switch (e.target.name) {
      case "measurement":
        console.log(e.target.value);
        if (e.target.value === "кг" || e.target.value === "шт") {
          setMeasurement(e.target.value);
        } else {
          setMeasurement("кг");
        }
        break;
      case "name":
        setName(e.target.value);
        break;
      case "price":
        setPrice(Number(e.target.value));
        break;
      case "stockAmount":
        setStockAmount(Number(e.target.value));
        break;
      case "productBigImage":
        setProductBigImage(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "type":
        setType(e.target.value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setName(data?.data.name);
    setPrice(data?.data.price);
    setMeasurement(data?.data.measurement);
    setStockAmount(data?.data.setStockAmount);
    setProductBigImage(data?.data.productBigImage);
    setDescription(data?.data.description);
    setType(data?.data.type);
  }, [data]);

  const changeProductMutation = useMutation(
    async ({ id, product }: { id: string; product: ProductSchema }) => {
      await changeProductQuery(id, product);
    },
    {
      onError: () => {
        setError("Failed to change the product");
      },
      onSuccess: () => {
        setSuccess(true);
        queryClient.invalidateQueries("getProducts");
      },
      onSettled: () => {
        setIsLoading(false);
      },
    }
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (name === "" || price <= 0 || stockAmount < 0 || type === "") {
      setError("Invalid data provided");
      return;
    }

    if (typeof _id !== "string") {
      setError("Id is not a string");
      return;
    }

    setIsLoading(true);
    changeProductMutation.mutate({
      id: _id,
      product: {
        name,
        price,
        stockAmount,
        description,
        productBigImage: productBigImage || TEMPLATE_IMAGE_URL,
        type,
        measurement,
      },
    });
  };

  return (
    <FormControl isInvalid={error !== ""}>
      <Stack spacing={4} align="center" w="640px">
        <Input
          placeholder="Enter Product Name"
          value={name}
          onChange={handleChange}
          name="name"
        />
        <Input
          placeholder="Enter Product Price"
          value={price || ""}
          onChange={handleChange}
          name="price"
        />
        <Select
          placeholder="Measurement"
          value={measurement}
          onChange={handleChange}
          name="measurement"
        >
          <option value="кг">Kg</option>
          <option value="шт">Unit</option>
        </Select>
        <Input
          placeholder="Enter Initial Amount"
          value={stockAmount || data?.data.stockAmount}
          onChange={handleChange}
          name="stockAmount"
        />
        <Input
          placeholder="Product Image URL (optional)"
          value={productBigImage}
          onChange={handleChange}
          name="productBigImage"
        />
        <Input
          placeholder="Product Description (optional)"
          value={description}
          onChange={handleChange}
          name="description"
        />
        <Input
          placeholder="Product Category"
          value={type}
          onChange={handleChange}
          name="type"
        />
        <Stack spacing={2} align="center" w="100%">
          <Flex gap="10px">
            <Box w="fit-content">
              <Link href={"/"}>
                <Button bgColor="red.100" w="100%">
                  Discard Changes
                </Button>
              </Link>
            </Box>
            <Button type="submit" boxShadow="md" onClick={handleSubmit}>
              Apply Changes
            </Button>
          </Flex>

          {error && <FormErrorMessage>{error}</FormErrorMessage>}
          {success && <Text fontSize="10px">Product changed successfully</Text>}
          {isLoading && <Loader text="Sending Request" />}
        </Stack>
      </Stack>
    </FormControl>
  );
};

export default ChangeForm;
