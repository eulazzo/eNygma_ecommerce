import { Product } from "./pages/Product";
import { Home } from "./pages/Home";
import { ProductList } from "./pages/ProductList";
import { Register } from "./pages/Register";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { Pay } from "./pages/Pay";
import { Sucess } from "./pages/Sucess";
 
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/pay">
          <Pay />
        </Route>
        <Route path="/sucess">
          <Sucess />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
