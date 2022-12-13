import { Grid, GridItem } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

import { Product } from "../service/model";

export interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap="20px" pb="60px">
      {products?.map((product: any) => (
        <GridItem key={product._id}>
          <ProductCard product={product} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default ProductGrid;
