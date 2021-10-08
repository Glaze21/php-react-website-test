import "./Styles/css/App.css";
import HeaderProductList from "./Components/HeaderProductList";
import HeaderProductAdd from "./Components/HeaderProductAdd";
import Footer from "./Components/Footer";
import ProductPage from "./Pages/productList";
import AddProduct from "./Pages/productAdd";
import NotFound from "./Pages/error404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "/api";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HeaderProductList />
            <ProductPage />
          </Route>
          <Route exact path="/add-product">
            <HeaderProductAdd />
            <AddProduct />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
