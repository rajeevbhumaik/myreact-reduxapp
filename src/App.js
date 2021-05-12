import "./App.css";
import HeaderContainer from "./containers/HeaderContainer";
import HomeContainer from "./containers/HomeContainer";
import CartContainer from "./containers/CartContainer";
import ShopContainer from "./containers/ShopContainer";
import ContactContainer from "./containers/ContactContainer";
import AboutContainer from "./containers/AboutContainer";
import { Switch, Route} from "react-router-dom";
// import Home from "./Product"
// import Header from "./Header"
// import Home from "./components/Home";

function App() {
  // const [itemcount,  setItemcount] = useState(0);
  
  // const getDatafromProduct = (data_from_product) => {
  //   setItemcount(data_from_product);
  //   //console.log(data_from_product);
  // };

  return (
    <div className="App">
      {/* <Header dataFromProduct={itemcount} />
      <Home CallfromApp={getDatafromProduct} /> */}
      <HeaderContainer />
      <div className="main-container">
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/shop" component={ShopContainer} />
          <Route exact path="/contact" component={ContactContainer} />
          <Route exact path="/about" component={AboutContainer} />
          <Route exact path="/cart" component={CartContainer} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
