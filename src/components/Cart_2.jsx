import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Recipe from "../components/Recipe";
import { useState } from "react";
const Cart = (props) => {
  const [qty, setQty] = useState(0);
  const data = useSelector((state) => state.reducer);
  //console.log("Cart", parseFloat(data.AllData.length));
  //let addedItems = props.data.length;
  // let addedItems = props.data.cardData.length ? (
  //   props.data.cardData.map((item, index) => {
  //     return (
  //       <li key={index}>
  //         <h1>{item.id}</h1>
  //         <h1>{item.name}</h1>
  //         <h1>{item.price}</h1>
  //       </li>
  //     );
  //   })
  // ) : (
  //   <p>Nothing.</p>
  // );
  // console.log("Data", props.data.cardData.length);
  let addedItems = props.data.cardData.length ? (
    props.data.cardData.map((item, index) => {
      let addedItems = data.AllData.filter((items) => items.id === item.id);
      //console.log("Cart addedItems.length", addedItems);

      return (
        <li className="collection-item avatar" key={index}>
          <div className="item-img">
            <img src={item.image} alt={item.image} className="" />
          </div>

          <div className="item-desc">
            <span className="title">{item.title}</span>

            <p>
              <b>Price: {item.price}$</b>
            </p>
            {/* <p>
              <b>Quantity: {addedItems.length}</b>
            </p> */}
            <div className="add-remove">
              <p>
                <b>Quantity:</b>
              </p>
              <Link to="/cart">
                <i
                  className="material-icons"
                  onClick={() => {
                    props.handleAddQuantity(
                      item.id,
                      addedItems.length,
                      item.price
                    );
                  }}
                >
                  arrow_drop_up
                </i>
              </Link>
              <p>
                <b>{addedItems.length}</b>
              </p>
              {/* <input
                className="qty"
                type="text"
                value={qty}
                name="Qty"
                placeholder={addedItems.length}
                onChange={(e) => setQty(e.target.value)}
              ></input> */}
              <Link to="/cart">
                <i
                  className="material-icons"
                  onClick={() => {
                    props.handleSubtractQuantity(
                      item.id,
                      addedItems.length,
                      item.price
                    );
                  }}
                >
                  arrow_drop_down
                </i>
              </Link>
            </div>
            <button
              className="waves-effect waves-light btn pink remove"
              onClick={() => {
                props.removeFromCartHandler(
                  item.id,
                  qty,
                  //addedItems.length,
                  item.price
                );
              }}
            >
              Remove
            </button>
          </div>
        </li>
      );
    })
  ) : (
    <p>Nothing.</p>
  );
  return (
    <div className="container">
      <div className="cart">
        <h5>You have ordered:</h5>
        <ul className="collection">{addedItems}</ul>
      </div>
      <Recipe />
    </div>
  );
};

export default Cart;
