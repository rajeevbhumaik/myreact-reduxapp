import Contact from "../components/Contact";
import { connect } from "react-redux";
const mapStateToProps = (state) => ({
  // data: state.reducer,
});

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
