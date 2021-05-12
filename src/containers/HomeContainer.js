import Home from "../components/Home";
import { connect } from "react-redux";


const mapStateToProps = (state) => ({
  //data: state.reducer,
});

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
