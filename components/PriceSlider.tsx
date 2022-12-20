import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Stack,
  Flex,
  Text,
} from "@chakra-ui/react";
import { initialState } from "../pages";
import { useState } from "react";

export interface PriceSliderProps {
  minPrice: number;
  maxPrice: number;
  setMinPrice: Function;
  setMaxPrice: Function;
}

const PriceSlider = ({
  setMinPrice,
  setMaxPrice,
  minPrice,
  maxPrice,
}: PriceSliderProps) => {
  const [minInternalPrice, setInternalMinPrice] = useState(minPrice);
  const [maxInternalPrice, setInternalMaxPrice] = useState(maxPrice);

  return (
    <>
      {minPrice && maxPrice && (
        <Stack pt="20px" w="80%" pb="40px">
          <Flex justifyContent="space-between">
            <Text>{minPrice}$</Text>
            <Text>{maxPrice}$</Text>
          </Flex>
          <RangeSlider
            defaultValue={[minPrice, maxPrice]}
            min={minPrice}
            max={maxPrice}
            onChangeEnd={(val: number[]) => {
              setMinPrice(val[0]);
              setMaxPrice(val[1]);
            }}
            onChange={(val: number[]) => {
              setInternalMinPrice(val[0]);
              setInternalMaxPrice(val[1]);
            }}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb
              position="relative"
              _after={{
                content: `"${minInternalPrice ?? minPrice}$"`,
                top: "10px",
                position: "absolute",
              }}
              index={0}
              bgColor="blue.400"
            />
            <RangeSliderThumb
              position="relative"
              _after={{
                content: `"${maxInternalPrice ?? maxPrice}$"`,
                top: "10px",
                position: "absolute",
              }}
              index={1}
              bgColor="blue.400"
            />
          </RangeSlider>
        </Stack>
      )}
    </>
  );
};

export default PriceSlider;
