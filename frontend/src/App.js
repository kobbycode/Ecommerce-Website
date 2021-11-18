function App() {
  return (
    <div className="grid-container">
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
          <div className="card">
            <a href="product.html">
              <img className="medium" src="./images/p1.jpg" alt="product" />
            </a>
            <div className="card-body">
              <a href="product.html">
                <h2>Men Sport Pant Black</h2>
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
              <div className="price">GH₵ 55</div>
            </div>
          </div>
          <div className="card">
            <a href="product.html">
              <img className="medium" src="./images/p2.jpg" alt="product" />
            </a>
            <div className="card-body">
              <a href="product.html">
                <h2>Men T-Shirt and Pant</h2>
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
                  <i className="fa fa-star"></i>
                </span>
              </div>
              <div className="price">GH₵ 35</div>
            </div>
          </div>
          <div className="card">
            <a href="product.html">
              <img className="medium" src="./images/p3.jpg" alt="product" />
            </a>
            <div className="card-body">
              <a href="product.html">
                <h2>Men Sport Pant Black and Gray</h2>
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
                  <i className="fa fa-star"></i>
                </span>
              </div>
              <div className="price">GH₵ 60</div>
            </div>
          </div>
          <div className="card">
            <a href="product.html">
              <img className="medium" src="./images/p4.jpg" alt="product" />
            </a>
            <div className="card-body">
              <a href="product.html">
                <h2>Men Sport Pant Grey</h2>
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
                  <i className="fa fa-star"></i>
                </span>
              </div>
              <div className="price">GH₵ 45</div>
            </div>
          </div>
          <div className="card">
            <a href="product.html">
              <img className="medium" src="./images/p5.jpg" alt="product" />
            </a>
            <div className="card-body">
              <a href="product.html">
                <h2>Three In One T-Shirt</h2>
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
                  <i className="fa fa-star"></i>
                </span>
              </div>
              <div className="price">GH₵ 45</div>
            </div>
          </div>
          <div className="card">
            <a href="product.html">
              <img className="medium" src="./images/p6.jpg" alt="product" />
            </a>
            <div className="card-body">
              <a href="product.html">
                <h2>Men Red Shirt</h2>
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
                  <i className="fa fa-star"></i>
                </span>
              </div>
              <div className="price">GH₵ 50</div>
            </div>
          </div>
        </div>
      </main>
      <footer className="center row">All right reserved</footer>
    </div>
  );
}

export default App;
