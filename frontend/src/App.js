import data from './data';

function App() {
  return (
    <div classNameName="grid-container">
      <header className="row">
        <div>
          <a className="logo" href="index.html">
            K-Store
          </a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.htm">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.products.map((product) => (
            <div key={product._id} className="card">
              <a href="product.html">
                <img className="medium" src={product.image} alt="product" />
              </a>
              <div className="card-body">
                <a href="product.html">
                  <h2>{product.name}</h2>
                </a>
                <div className="rating">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star-half-stroke"></i>
                  </span>
                </div>
                <div className="price">GH₵ {product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="center row">All right reserved</footer>
    </div>
  );
}

export default App;
