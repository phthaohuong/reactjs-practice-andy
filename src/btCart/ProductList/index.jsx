import React, { Component } from "react";
import ProductItem from "../ProductItem";

class ProductList extends Component {
  render() {
    const { phoneDB, addItemToCart } = this.props;
    return (
      <>
        <div className="row">
          {phoneDB.map((phone, index) => {
            return (
              <div className="col-3">
                <ProductItem
                  addItemToCart={addItemToCart}
                  phone={phone}
                  key={index}
                />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default ProductList;
