import Shop from "../components/Shop";
import { addToCart, removeFromCart } from "../service/actions/action";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  // data:state.cardItems
});
const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data, id) => dispatch(addToCart(data, id)),
  removeFromCartHandler: (id) => dispatch(removeFromCart(id)),
  //fetchDataHandler: (url) => dispatch(fetchData(url)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
// export default Home;

//export default HomeContainer;
