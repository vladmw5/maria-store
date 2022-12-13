import { Measurement } from "../service/model";

const mapMeasurement = (m: Measurement) => {
  switch (m) {
    case "кг":
      return "Kg";
    case "шт":
      return "Unit";
    default:
      return "NaM";
  }
};

export default mapMeasurement;
