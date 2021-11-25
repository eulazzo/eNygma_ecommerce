import { Product } from "./pages/Product";
import { Home } from "./pages/Home";
import { ProductList } from "./pages/ProductList";
import { Register } from "./pages/Register";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  const dummyUser = true;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route exact path="/product/:id">
          <Product />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>

        <Route exact path="/login">
          {dummyUser ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route exact path="/register">
          {dummyUser ? <Redirect to="/" /> : <Register />}

          <Register />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
