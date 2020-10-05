import React, { Component } from "react";
import CartModalRedux from "./cartModalRedux";
import PhonesRedux from "./phonesRedux";

class BTCartRedux extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center my-3">BT Redux</h3>
        <div className="text-right my-4">
          <a data-toggle="modal" data-target="#modelId">
            <span className="text-bold " style={{ cursor: "pointer" }}>
              Your Cart (0)
            </span>
          </a>
        </div>
        <PhonesRedux />
        <CartModalRedux />
      </div>
    );
  }
}

export default BTCartRedux;
