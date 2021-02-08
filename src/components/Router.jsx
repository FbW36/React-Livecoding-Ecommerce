import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MyProvider from '../context/MyProvider';

import Login from './Login';
import Products from './Products';
import ProductDetail from './ProductDetail';
import OrderPlaced from './OrderPlaced';
import Cart from './Cart';
import Checkout from './Checkout';
import Footer from './Footer';
import NotFound from './NotFound';

const Routes = () => (
  <MyProvider>
    <Router>
      <main>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/products' exact component={Products} />
          <Route path='/productDetail' component={ProductDetail} />
          <Route path='/cart' component={Cart} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/orderPlaced' component={OrderPlaced} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </main>
    </Router>
  </MyProvider>
);

export default Routes;
