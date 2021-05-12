import About from "../components/About";
import { connect } from "react-redux";


const mapStateToProps = (state) => ({
  //data: state.reducer,
});

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(About);
