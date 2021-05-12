import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import shortid from "shortid";

const Cart = (props) => {
  const [checked, setChecked] = useState(true);

  const handleChecked = (e) => {
    if (e.target.checked) {
      props.addShipping();
    } else {
      props.substractShipping();
    }
  };
  const data = useSelector((state) => state.reducer);
  console.log("Cart Total Price", parseFloat(data.totalprice).toFixed(2));

  //////////////Craeting Cart Item List///////////////////////////
  let ItemsSelected = props.data.cardData.length ? (
    props.data.cardData.map((item, index) => {
      let addedItems = data.AllData.filter((items) => items.id === item.id);
      const id = new Date().getTime();
      //console.log("Cart addedItems.length", addedItems);
      return (
        <CartItem
          key={shortid.generate()}
          item={item}
          addedItems={addedItems}
          removeFromCartHandler={props.removeFromCartHandler}
          handleAddQuantity={props.handleAddQuantity}
          handleSubtractQuantity={props.handleSubtractQuantity}
        ></CartItem>
      );
    })
  ) : (
    <section className="cart">
      {/* cart div */}
      <div>
        {/* <h2>your bag</h2> */}
        <h4 className="empty-cart">is currently empty</h4>
      </div>
    </section>
  );
  return (
    <section className="cart">
      {/* cart div */}
      <div>
        <h2>your bag</h2>
      </div>
      {/* cart items */}
      <div>
        {ItemsSelected}
        {/* {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })} */}
      </div>
      <div className="cart-shipping-check">
        <label>
          <input
            type="checkbox"
            defaultChecked={false}
            onChange={handleChecked}
          />
          <span>Shipping(+6$)</span>
        </label>
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${parseFloat(data.totalprice).toFixed(2)}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => {
            props.handleClearCart();
          }}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default Cart;
