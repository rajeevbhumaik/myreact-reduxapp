import { useEffect } from "react";
// import { DATA_URL } from "../service/constants";
import Items from "./Items";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllData } from "../service/actions/action";

const Shop = (props) => {
  const data = useSelector((state) => state.fetchDataReducer);
  const dispatch = useDispatch();

  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(data.isLoaded);
  // const [items, setItems] = useState([{ title: "rajeev", price: 1000 }]);
  //const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    dispatch(fetchAllData());
    // console.log("data.initialData", data.initialData);
    // setItems(data.initialData);
    // console.log("data.isLoaded", data.isLoaded);
    // setIsLoaded(data.isLoaded);
    // console.log("data.error", data.error);
    // setError(data.error);
    // fetch(DATA_URL)
    //   .then((res) => res.json())
    //   .then(
    //     (result) => {
    //       setIsLoaded(true);
    //       setItems(result);
    //       //console.log(items);
    //     },
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     (error) => {
    //       setIsLoaded(true);
    //       setError(error);
    //     }
    //   );
  }, []);

  // console.log("data.initialData", data.initialData);
  // console.log("data.isLoaded", data.isLoaded);
  // console.log("data.error", data.error);

  if (data.error) {
    return <div>Error: {data.error.message}</div>;
  } else if (!data.isLoaded) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  } else {
    
    //console.log("Loaded items", data.initialData);
    
    return (
      <div className="Item-list">
        {data.initialData.map((item, index) => {
          return (
            <Items
              key={index}
              item={item}
              
              addToCartHandler={props.addToCartHandler}
              removeFromCartHandler={props.removeFromCartHandler}
            ></Items>
          );
        })}
      </div>
    );
  }
};

export default Shop;
