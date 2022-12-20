import { ChangeEvent, useState } from "react";
import { Stack } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import PriceSlider from "./PriceSlider";
import { initialState } from "../pages";
import CategoryBar from "./CategoryBar";

interface ProductControllerProps {
  sortOrder: string | undefined;
  searchQuery: string;
  setSearchQuery: Function;
  setSortOrder: Function;
  minPrice: number;
  setMinPrice: Function;
  maxPrice: number;
  setMaxPrice: Function;
  isOnlyAvailable: boolean;
  setIsOnlyAvailable: Function;
  types: string[];
  setTypes: Function;
  allCategories: string[];
}

const ProductController = ({
  sortOrder,
  searchQuery,
  setSearchQuery,
  setSortOrder,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  isOnlyAvailable,
  setIsOnlyAvailable,
  types,
  setTypes,
  allCategories,
}: ProductControllerProps) => {
  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSortSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  const clearSettingsButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSearchQuery(initialState.searchQuery);
    setSortOrder(initialState.sortOrder);
    setMinPrice(initialState.minPrice);
    setMaxPrice(initialState.maxPrice);
    setIsOnlyAvailable(initialState.isOnlyAvailable);
    setTypes(initialState.types);
  };

  return (
    <Stack align="center" justifyContent="center">
      <SearchBar
        query={searchQuery}
        onChange={handleSearchInput}
        sortOrder={sortOrder}
        onSortSelect={handleSortSelection}
        onClearSettingClick={clearSettingsButtonClick}
        isOnlyAvailable={isOnlyAvailable}
        setIsOnlyAvailable={setIsOnlyAvailable}
      />
      <PriceSlider
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />
      <CategoryBar
        types={types}
        setTypes={setTypes}
        allCategories={allCategories}
      />
    </Stack>
  );
};

export default ProductController;
