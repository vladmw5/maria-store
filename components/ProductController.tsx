import { ChangeEvent, useState } from "react";
import { Stack } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import sortModes from "../utils/sortModes";

interface ProductControllerProps {
  sortOrder: string | undefined;
  searchQuery: string;
  setSearchQuery: Function;
  setSortOrder: Function;
}

const initialState = {
  searchQuery: "",
  sortOrder: sortModes.DEF,
};

const ProductController = ({
  sortOrder,
  searchQuery,
  setSearchQuery,
  setSortOrder,
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
  };

  return (
    <Stack align="center" justifyContent="center" gap="40px">
      <SearchBar
        query={searchQuery}
        onChange={handleSearchInput}
        sortOrder={sortOrder}
        onSortSelect={handleSortSelection}
        onClearSettingClick={clearSettingsButtonClick}
      />
    </Stack>
  );
};

export default ProductController;
