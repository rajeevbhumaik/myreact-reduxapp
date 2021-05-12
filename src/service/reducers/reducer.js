import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  SUB_QUANTITY,
  ADD_SHIPPING,
  SUB_SHIPPING,
  CLEAR_CART,
} from "../constants";

let initialState = {
  initialData: [],
  cardData: [],
  AllData: [],
  totalprice: 0,
  count: 0,
  productCount: 1,
  isLoaded: false,
  error: "",
};
//console.log("myState", mystate);
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.cardData.length > 0) {
        console.log("AllData-2", state.AllData);

        let existed_item = state.cardData.find((item) => item.id === action.id);
        if (existed_item) {
          return {
            cardData: [...state.cardData],
            AllData: [...state.AllData, { id: action.payload.id }],
            totalprice: state.totalprice + action.payload.price,
          };
        } else {
          return {
            ...state,
            cardData: [...state.cardData, action.payload],
            AllData: [...state.AllData, { id: action.payload.id }],
            totalprice: state.totalprice + action.payload.price,
          };
        }
      } else {
        return {
          cardData: [...state.cardData, action.payload],
          AllData: [...state.AllData, { id: action.payload.id }],
          totalprice: state.totalprice + action.payload.price,
        };
      }

    case REMOVE_FROM_CART:
      //console.log("Remove state", action.id);
      let Items = state.cardData.filter((item) => item.id !== action.id);
      let Items_count = state.AllData.filter((item) => item.id !== action.id);
      //console.log("Removed", Items);
      let updatedTotalPrice_remove =
        state.totalprice - action.price * action.itemcount;
      //console.log("updatedTotalPrice", updatedTotalPrice);
      return {
        totalprice: updatedTotalPrice_remove,
        cardData: [...Items],
        AllData: [...Items_count],
      };
    //break;

    case ADD_QUANTITY:
      //console.log("state.AllData", state.AllData);
      let updatedTotalPrice_add = state.totalprice + action.price;
      //console.log("updatedTotalPrice", updatedTotalPrice);
      return {
        ...state,
        totalprice: updatedTotalPrice_add,
        AllData: [...state.AllData, { id: action.id }],
      };
    //break;
    case SUB_QUANTITY:
      let index = state.AllData.findIndex((id) => id.id === action.id);
      console.log("index", index);
      if (index > -1) {
        state.AllData.splice(index, 1);
        console.log("state.AllData", state.AllData);
        // let Item_sub = state.AllData.filter(
        //   (item) => item.id === action.id
        // ).pop();
        let updatedTotalPrice_sub = state.totalprice - action.price;
        // //console.log("updatedTotalPrice", updatedTotalPrice);
        return {
          ...state,
          totalprice: updatedTotalPrice_sub,
          AllData: state.AllData,
        };
      } else {
        return {
          ...state,
          //totalprice: updatedTotalPrice_sub,
          AllData: state.AllData,
        };
      }

    //break;
    case ADD_SHIPPING:
      return {
        ...state,
        totalprice: state.totalprice + 6,
      };
    //break;
    case SUB_SHIPPING:
      return {
        ...state,
        totalprice: state.totalprice - 6,
      };
    //break;
    case CLEAR_CART:
      return {
        ...state,
        totalprice: 0,
        cardData: [],
        AllData: [],
      };
    //break;

    default:
      return state;
  }
};

export default reducer;
