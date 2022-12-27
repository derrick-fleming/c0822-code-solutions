import React from 'react';
import Header from './components/header';
import Catalog from './pages/catalog';
// import NotFound from './pages/not-found';
import ProductDetails from './pages/product-details';
import { parseRoute } from './lib';
import { Routes, Route } from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route exact path='/' element={<Catalog />} />
          <Route path='/products/:productId' element={<ProductDetails productId={this.state.route.params.get('productId')} />} />
        </Routes>
      </>
    );
  }
}
