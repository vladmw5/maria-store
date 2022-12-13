import useRefresh from "../hooks/useRefresh";
const Refresher = ({ children }: any) => {
  useRefresh();
  return children;
};

export default Refresher;
