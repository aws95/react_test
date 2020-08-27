import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts , addToCart} from "../actions/cartActions";

class Home extends Component {
  componentWillMount() {
    this.props.fetchProducts();
  }
  addToCart = (item) => {
    this.props.addToCart(item);
  };
  render() {
    let catalogue = this.props.products.map((item) => {
      return (
        <div className="col m4">
          <div className="card">
            <div className="card-content white-text">
              <div className="card-image">
                <img src={`http://localhost:5000/image/${item.img}`} />
              </div>
              <div class="card-content center-align">
                <p>
                  <span className="card-title black-text text-black darken-4">
                    {item.product}
                  </span>
                  <span className="card-title black-text text-black darken-4">
                    {item.price}
                  </span>
                </p>
              </div>
            </div>
            <div className="card-action center-align">
              <Link className="black-text text-black darken-4" to={`/product/${item._id}`}>
                Check Product
              </Link>
              <a
                className="black-text text-black darken-4"
                to="/"
                onClick={() => {
                  this.addToCart(item);
                }}
              >
                <i class="tiny material-icons">add_shopping_cart</i>
              </a>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="container">
        <h3 className="center">Catalogue</h3>
        <div className="row">
          <div className="box">{catalogue}</div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.cart.items,
});

export default connect(mapStateToProps, { fetchProducts , addToCart})(Home);
