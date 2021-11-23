import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div classNameName="grid-container">
        <header className="row">
          <div>
            <a className="logo" href="/">
              K-Store
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/" component={HomeScreen} exact />
        </main>
        <footer className="row center">
          Kobbykode All right reserved &copy; 2021
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
