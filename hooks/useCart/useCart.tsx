import { useSelector, useDispatch } from "react-redux";
import * as cartSelectors from "../../redux/cart/cart.selectors";
import * as cartOperations from "../../redux/cart/cart.operations";

const useCart = () => {
  const items = useSelector(cartSelectors.getCartItems);
  const dispatch = useDispatch();

  const addProduct = (_id: string) => {
    dispatch(cartOperations.addProductToCart({ _id }));
  };

  const removeProduct = (_id: string) => {
    dispatch(cartOperations.removeProductFromCart({ _id }));
  };

  const deleteProduct = (_id: string) => {
    dispatch(cartOperations.deleteProductFromCart({ _id }));
  };

  const clearCart = () => {
    dispatch(cartOperations.clearCart());
  };

  const doesCartHaveTheItem = (_id: string) => {
    for (const item of items) {
      if (item._id === _id) {
        return true;
      }
    }
    return false;
  };

  const getQuantityOfTheItem = (_id: string) => {
    for (const item of items) {
      if (item._id === _id) {
        return item.quantity;
      }
    }
    return 0;
  };

  return {
    items,
    addProduct,
    removeProduct,
    deleteProduct,
    clearCart,
    doesCartHaveTheItem,
    getQuantityOfTheItem,
  };
};

export default useCart;
