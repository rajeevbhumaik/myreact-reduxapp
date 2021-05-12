import { FETCH_DATA } from "../constants";

let initialState = {
  initialData: [],
  isLoaded: false,
  error: "",
};
//console.log("myState", mystate);
const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      console.log("action.type", action.type);
      console.log("action.payload.data", action.payload.data);
      return {
        ...state,
        initialData: action.payload.data,
        isLoaded: action.payload.isLoaded,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default fetchDataReducer;
