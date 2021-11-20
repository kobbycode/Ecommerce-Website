import Product from './components/Product';
import data from './data';

function App() {
  return (
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
        <div className="row center">
          {data.products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </main>
      <footer className="center row">All right reserved</footer>
    </div>
  );
}

export default App;
