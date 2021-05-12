import About from "../components/About";
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
  //data: state.reducer,
});

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(About);
