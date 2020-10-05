import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    const { phone, addItemToCart } = this.props;
    return (
      <div>
        <div className="card">
          <img
            className="card-img-top"
            src={phone.img}
            alt={phone.name}
            style={({ width: "250px" }, { height: "300px" })}
          />
          <div className="card-body">
            <h4 className="card-title">{phone.name}</h4>
            <p className="card-text">
              {phone.desc.length > 50
                ? phone.desc.substr(0, 50) + "..."
                : phone.desc}
            </p>
            <button
              onClick={() => addItemToCart(phone)}
              className="btn btn-primary"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
