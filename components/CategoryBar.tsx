import { Grid, GridItem, Box } from "@chakra-ui/react";
import doesArrayHave from "../utils/doesArrayHave";

export interface CategoryBarProps {
  types: string[];
  setTypes: Function;
  allCategories: string[];
}

const CategoryBar = ({ types, setTypes, allCategories }: CategoryBarProps) => {
  const handleCategoryBoxClick = (e: any) => {
    const category = e.target.dataset.category;
    setTypes((types: string[]) =>
      doesArrayHave(types, category)
        ? types.filter((type: string) => type !== category)
        : [...types, category]
    );
  };
  return (
    <Grid templateColumns="repeat(10, 1fr)" gap="20px" pb="40px">
      {allCategories &&
        allCategories?.map((category: any) => (
          <GridItem key={category}>
            <Box
              as="button"
              bg={doesArrayHave(types, category) ? "blue.200" : "gray.200"}
              px="20px"
              py="8px"
              rounded="4px"
              data-category={category}
              onClick={handleCategoryBoxClick}
            >
              {category}
            </Box>
          </GridItem>
        ))}
    </Grid>
  );
};

export default CategoryBar;
