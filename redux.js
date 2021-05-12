import createStore from "redux";

const initialState;
{
  itemcount: 0;
}

const AddToCart = (data) => {
  return { type: "ADD_TO_CART", payload: data };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return [...state, { itemcount: itemcount + 1 }];
    }
    default:
      return state;
  }
};

const store = createStore(reducer);
//store.subscribe(console.log();)
