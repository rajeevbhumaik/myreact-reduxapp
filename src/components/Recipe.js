import { connect } from "react-redux";
// import { useEffect } from "react";
import { useSelector } from "react-redux";

const Recipe = (props) => {
  //   useEffect(() => {
  //     if (refs.shipping.checked) props.substractShipping();
  //   }, []);
  const data = useSelector((state) => state.reducer);
  //console.log("Recipe", parseFloat(data.totalprice).toFixed(2));

  const handleChecked = (e) => {
    if (e.target.checked) {
      props.addShipping();
    } else {
      props.substractShipping();
    }
  };
  return (
    <div className="container">
      <div className="collection">
        {/* <li className="collection-item">
          <label>
            <input type="checkbox" ref="shipping" onChange={handleChecked} />
            <span>Shipping(+6$)</span>
          </label>
        </li> */}
        <li className="collection-item">
          <b>No Of Products: {data.productCount} No</b>
        </li>
        <li className="collection-item">
          <b>Total: {parseFloat(data.totalprice).toFixed(2)} $</b>
        </li>
      </div>
      <div className="checkout">
        <button className="waves-effect waves-light btn">Checkout</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.reduce,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addShipping: () => {
      dispatch({ type: "ADD_SHIPPING" });
    },
    substractShipping: () => {
      dispatch({ type: "SUB_SHIPPING" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
