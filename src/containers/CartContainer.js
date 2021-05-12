import Cart from "../components/Cart";
import { connect } from "react-redux";
import {
  removeFromCart,
  addQuantity,
  subtractQuantity,
  clearCart,
  addShipping,
  substractShipping,
} from "../service/actions/action";

const mapStateToProps = (state) => ({
  data: state.reducer,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCartHandler: (id, itemcount, price) => {
    dispatch(removeFromCart(id, itemcount, price));
  },
  handleAddQuantity: (id, itemcount, price) => {
    dispatch(addQuantity(id, itemcount, price));
  },
  handleSubtractQuantity: (id, itemcount, price) => {
    dispatch(subtractQuantity(id, itemcount, price));
  },
  handleClearCart: () => {
    dispatch(clearCart());
  },
  addShipping: () => {
    dispatch(addShipping());
  },
  substractShipping: () => {
    dispatch(substractShipping());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
