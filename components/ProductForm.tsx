import { useState, ChangeEvent, useEffect } from "react";
import { FormControl, Stack, FormErrorMessage, Text } from "@chakra-ui/react";
import Input from "../components/Input";
import Button from "../components/Button";
import Select from "./Select";
import { createProductQuery, TEMPLATE_IMAGE_URL } from "../service/mariaAPI";
import Loader from "./Loader";
import { Measurement } from "../service/model";

const ProductForm = () => {
  const [measurement, setMeasurement] = useState<Measurement>("кг");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stockAmount, setStockAmount] = useState(0);
  const [productBigImage, setProductBigImage] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [submit, setSubmit] = useState(false);

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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (name === "" || price <= 0 || stockAmount < 0 || type === "") {
      setError("Invalid data provided");
      return;
    }

    setSubmit(true);
  };

  useEffect(() => {
    if (!submit) {
      return;
    }
    createProductQuery({
      name,
      price,
      stockAmount,
      description,
      productBigImage: productBigImage || TEMPLATE_IMAGE_URL,
      type,
      measurement,
    })
      .then(() => {
        setSuccess(true);
      })
      .catch(() => {
        setError("Failed to create a product");
      })
      .finally(() => {
        setSubmit(false);
      });
  }, [
    submit,
    stockAmount,
    description,
    productBigImage,
    type,
    measurement,
    name,
    price,
  ]);

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
          value={stockAmount || ""}
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
          <Button type="submit" boxShadow="md" w="100%" onClick={handleSubmit}>
            Create Product
          </Button>
          {error && <FormErrorMessage>{error}</FormErrorMessage>}
          {success && <Text fontSize="10px">Product created successfully</Text>}
          {submit && <Loader text="Sending Request" />}
        </Stack>
      </Stack>
    </FormControl>
  );
};

export default ProductForm;
