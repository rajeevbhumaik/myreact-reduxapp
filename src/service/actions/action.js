import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  SUB_QUANTITY,
  CLEAR_CART,
  ADD_SHIPPING,
  SUB_SHIPPING,
  FETCH_DATA,
} from "../constants";
import { DATA_URL } from "../constants";

const RecievedData = (data, isloaded, error) => {
  return {
    type: FETCH_DATA,
    payload: {
      data: data,
      isLoaded: true,
      error: "",
    },
  };
};

const fetchAllData = () => {
  return (dispatch) => {
    fetch(DATA_URL)
      .then((res) => res.json())
      .then(
        (data) => {
          //console.log("action data", data);
          dispatch(RecievedData(data, true, ""));
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          dispatch(RecievedData([], true, error));
        }
      );
  };
};

const addShipping = () => {
  return {
    type: ADD_SHIPPING,
  };
};

const substractShipping = () => {
  return {
    type: SUB_SHIPPING,
  };
};

const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
const addToCart = (data, id) => {
  return {
    type: ADD_TO_CART,
    id: id,
    payload: data,
  };
};
const removeFromCart = (id, itemcount, price) => {
  return {
    type: REMOVE_FROM_CART,
    id: id,
    itemcount: itemcount,
    price: price,
  };
};
const addQuantity = (id, itemcount, price) => {
  return {
    type: ADD_QUANTITY,
    id: id,
    itemcount: itemcount,
    price: price,
  };
};
const subtractQuantity = (id, itemcount, price) => {
  return {
    type: SUB_QUANTITY,
    id: id,
    itemcount: itemcount,
    price: price,
  };
};

export default addToCart;
export {
  removeFromCart,
  addToCart,
  addQuantity,
  subtractQuantity,
  clearCart,
  substractShipping,
  addShipping,
  fetchAllData,
};
