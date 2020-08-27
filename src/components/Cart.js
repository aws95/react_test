import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromCart, addQuantity, emptyCart } from "../actions/cartActions";

class Cart extends Component {
  addQuantity = (a) => {
    this.props.addQuantity(a);
  };
  removeFromCart = (a) => {
    this.props.removeFromCart(a);
  };
  emptyCart = (a) => {
    this.props.emptyCart(a);
  };
  render() {
    let catalogue = this.props.cart.map((item) => {
      return (
        <tbody>
          <tr class="center-align">
            <td>
              <div className="center-align">
                <img
                  style={{ height: "80px", width: "80px" }}
                  src={`http://localhost:5000/image/${item.product.img}`}
                />
              </div>
            </td>
            <td class="center-align">
              <span className="card-title black-text text-black darken-4 center-align">
                {item.product.product.toUpperCase()}
              </span>
            </td>
            <td class="center-align">
              <span className="card-title black-text text-black darken-4 center-align">
                {item.product.price}
              </span>
            </td>
            <td class="center-align">
              <span className="card-title black-text text-black darken-4 center-align">
                {item.quantity}
              </span>
            </td>
            <td class="center-align">
              <a
                class="btn-floating btn-large waves-effect waves-light green"
                onClick={() => {
                  this.addQuantity(item.product._id);
                }}
              >
                <i class="material-icons">add</i>
              </a>
            </td>
            {(() => {
              if (item.quantity > 1) {
                return (
                  <td class="center-align">
                    <a
                      class="btn-floating btn-large waves-effect waves-light red"
                      onClick={() => {
                        this.removeFromCart(item.product._id);
                      }}
                    >
                      <i class="material-icons">remove</i>
                    </a>
                  </td>
                );
              } else {
                return (
                  <td class="center-align">
                    <a
                      class="btn-floating btn-large waves-effect waves-light red disabled"
                      onClick={() => {
                        this.removeFromCart(item.product._id);
                      }}
                    >
                      <i class="material-icons">remove</i>
                    </a>
                  </td>
                );
              }
            })()}
            <td class="center-align">
              <span className="card-title black-text text-black darken-4 center-align">
                {item.quantity * item.product.price}
              </span>
            </td>
            <td class="center-align">
              <a
                class="btn-floating btn-large waves-effect waves-light red"
                onClick={() => {
                  this.emptyCart(item.product._id);
                }}
              >
                <i class="material-icons">delete</i>
              </a>
            </td>
          </tr>
        </tbody>
      );
    });
    return (
      <div className="container center-align">
        <div className="row">
          <div className="box">
            <table>
              <thead>
                <tr class="center-align">
                  <th class="center-align">Image</th>
                  <th class="center-align">Item</th>
                  <th class="center-align">Item Price</th>
                  <th class="center-align">Item Quantity</th>
                  <th class="center-align">Item ADD</th>
                  <th class="center-align">Item Remove</th>
                  <th class="center-align">Item Total Price</th>
                  <th class="center-align">Remove From Cart</th>
                </tr>
              </thead>
              {catalogue}
            </table>
            <br />
            <div class="right"></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};

export default connect(mapStateToProps, {
  addQuantity,
  removeFromCart,
  emptyCart,
})(Cart);
