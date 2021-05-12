import { useState, useEffect } from "react";
import { fetchData } from "../service/actions/action";
import { DATA_URL } from "../service/constants";

const Home = (props) => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const getData = await fetchData(DATA_URL);
    setData(await getData);
    console.log("ProductData", data);
  }, []);

  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Fetch Data", data);
    return data;
  };

  //let ProductData = [];

  // const [itemcount, setItemcount] = useState(0);

  // const sendDataToApp = (e) => {
  //   e.preventDefault();
  //   setItemcount(itemcount + 1);
  //   props.CallfromApp(itemcount);
  // };
  return (
    <>
      <div className="cart-item item">
        <div className="item-img item">
          <img src="data:image/jpeg;base64,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"></img>
        </div>
        <div className="item-info item">
          <span>I-Phone</span>
          <span>Price:12,000 INR </span>
        </div>
        <div className="btn-add-to-cart item">
          <button
            onClick={() => {
              props.addToCartHandler({ pice: 1000, name: "i phone 11" });
            }}
          >
            Add To Cart
          </button>
        </div>
        <div className="btn-remove-from-cart item">
          <button
            onClick={() => {
              props.removeFromCartHandler();
            }}
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
