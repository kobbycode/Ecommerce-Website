import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import Rating from '../components/Rating';
import data from '../data';

function ProductScreen(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  if (!product) {
    return <div>Product Cannot Found</div>;
  }
  return (
    <div>
      <Link to="/">Home</Link>
      <div className="row up">
        <div className="col-1">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="col-2">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </li>
            <li>Price : GH₵{product.price}</li>
            <li>
              Description :<p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">GH₵{product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status : </div>
                  <div>
                    {product.countInstock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="error">Out Of Stock</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="btn bl block">Proceed To Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;
