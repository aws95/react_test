import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchProducts, addToCart } from "../actions/cartActions";

class Product extends Component {
  componentWillMount() {
    this.props.fetchProducts();
  }
  addToCart = (item) => {
    this.props.addToCart(item);
  };
  render() {
    let product = this.props.products.map((item) => {
      if (item._id == this.props.match.params._id) {
        return (
          <div class="col s12 m12 l12">
            <div class="card horizontal">
              <div class="card-image hoverable">
                <img src={`http://localhost:5000/image/${item.img}`} />
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <h2 class="header center-align">
                    {item.product.toUpperCase()}{" "}
                  </h2>
                  <p class="header"> Price {item.price} $ </p>
                  <p class="header"> Quantiy available : {item.qty} </p>
                  <p class="header">
                    Available Sizes : {item.sizes.toUpperCase()}
                  </p>
                  <p class="header">
                    Available in our {item.stock.toUpperCase()} Boutique
                  </p>
                  <div class="header"> You may also like :</div>
                  <div class="divider"></div>
                  <br />
                  <br />
                  <div class="row">
                    <div class="col s3 center-align">
                      <Link
                        className="black-text text-black darken-4"
                        to={`/product/5f4224c014b22c1c0add1cfc`}
                      >
                        <img
                          style={{ height: "80px", width: "80px" }}
                          src={`http://localhost:5000/image/9584ae68b9ecf346791fd52ade1856c6.jpg`}
                        />
                      </Link>
                    </div>
                    <div class="col s3 center-align">
                      <Link
                        className="black-text text-black darken-4"
                        to={`/product/5f4224e514b22c1c0add1d02`}
                      >
                        <img
                          style={{ height: "80px", width: "80px" }}
                          src={`http://localhost:5000/image/7d01602855c68977646d704935f19f9f.jpg`}
                        />
                      </Link>
                    </div>
                    <div class="col s3 center-align">
                      <Link
                        className="black-text text-black darken-4"
                        to={`/product/5f4224cf14b22c1c0add1cff`}
                      >
                        <img
                          style={{ height: "80px", width: "80px" }}
                          src={`http://localhost:5000/image/00e378e2cb60e85475e5f99569551b41.jpg`}
                        />
                      </Link>
                    </div>
                    <div class="col s3 center-align">
                      <Link
                        className="black-text text-black darken-4"
                        to={`/product/5f4224f314b22c1c0add1d05`}
                      >
                        <img
                          style={{ height: "80px", width: "80px" }}
                          src={`http://localhost:5000/image/1e295723927b3deeee191b4be2473156.jpg`}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="card-action right-align">
                  <a
                    className="black-text text-black darken-4"
                    to="/"
                    onClick={() => {
                      this.addToCart(item);
                    }}
                  >
                    <i class="meduim material-icons">add_shopping_cart</i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      }
    });
    return (
      <div className="container">
        <div className="row">
          <div className="box">{product}</div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.cart.items,
  cart: state.cart.cart,
});


export default connect(mapStateToProps, { fetchProducts, addToCart })(Product);
