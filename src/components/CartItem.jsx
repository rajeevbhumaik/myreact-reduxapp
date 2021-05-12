const CartItem = (props) => {
  return (
    <>
      <article className="cart-item">
        <img src={props.item.image} alt={props.item.title} />
        <div>
          <h4>{props.item.title}</h4>
          <h4 className="item-price">${props.item.price}</h4>
          {/* remove button */}
          <button
            className="remove-btn"
            onClick={() => {
              props.removeFromCartHandler(
                props.item.id,
                props.addedItems.length,
                props.item.price
              );
            }}
          >
            remove
          </button>
        </div>
        <div>
          {/* increase amount */}
          <button
            className="amount-btn"
            onClick={() => {
              props.handleAddQuantity(
                props.item.id,
                props.addedItems.length,
                props.item.price
              );
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
            </svg>
          </button>
          {/* amount */}
          <p className="amount">{props.addedItems.length}</p>
          {/* decrease amount */}
          <button
            className="amount-btn"
            onClick={() => {
              props.handleSubtractQuantity(
                props.item.id,
                props.addedItems.length,
                props.item.price
              );
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
        </div>
      </article>
    </>
  );
};

export default CartItem;
