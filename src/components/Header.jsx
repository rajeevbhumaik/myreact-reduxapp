import { useSelector } from "react-redux";
import logo from "../logo/images.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const data = useSelector((state) => state.reducer);
  console.log("Header", parseFloat(data.AllData.length));
  // const data = useSelector((state) => state.reducer);
  // console.log("Header", parseFloat(data.count));
  // let data = [];
  // data = props.data;
  // console.log("data", data.name);
  // data.map((val) => {
  // console.log("name", val.data);
  //});
  return (
    <>
      <header className="App-header">
        <div className="header-logo">
          <img src="https://img.icons8.com/cute-clipart/64/000000/shopping-cart.png" />

          {/* <img className="App-logo" src={logo} alt="logo" /> */}
        </div>
        <div className="logo-text">
          <h3>
            <span className="span-1">Doo</span>
            <span className="span-2">Kart</span>
          </h3>
        </div>
        <div className="cart-container">
          <NavLink
            className="home"
            activeClassName="active"
            activeStyle={{ color: "white" }}
            to="/"
          >
            Home
          </NavLink>
          <NavLink className="shop" activeClassName="active" to="/shop">
            Product
          </NavLink>

          <NavLink className="contact" activeClassName="active" to="/contact">
            Contact Us
          </NavLink>

          <NavLink className="about" activeClassName="active" to="/about">
            About Us
          </NavLink>
        </div>
        <div className="cart-icon">
          <NavLink to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-cart-plus-fill"
              viewBox="0 0 16 16"
            >
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
            </svg>
          </NavLink>
        </div>
        <div className="cart-count">
          <span>{parseFloat(data.AllData.length)}</span>
          {/* <span>{mystate.cardData.length}</span> */}
          {/* <span>{props.data.length}</span> */}
        </div>
      </header>
    </>
  );
};

export default Header;
