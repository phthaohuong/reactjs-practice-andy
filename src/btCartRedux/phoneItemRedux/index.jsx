import React, { Component } from "react";
import { connect } from "react-redux";

import { ADD_TO_CART } from "../../redux/actionTypes";

class PhoneItemRedux extends Component {
  render() {
    const { phone } = this.props;
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={phone.img}
          alt={phone.name}
          style={({ width: "300px" }, { height: "250px" })}
        />
        <div className="card-body">
          <h4 className="card-title">{phone.name}</h4>
          <p className="card-text">
            {phone.desc.length > 50
              ? phone.desc.substr(0, 50) + "..."
              : phone.desc}
          </p>
          <button
            onClick={() => this.props.addToCart(phone)}
            className="btn btn-warning"
          >
            Add To Cart
          </button>
        </div>
      </div>
    );
  }
}

// Xây dựng hàm tạo ra props là hàm xử lý sự kiện => dispatch đưa lên store
const mapDispatchToProps = (dispatch) => {
  return {
    // Tạo ra props component (là function => đưa dữ liệu lên store)
    addToCart: (phone) => {
      // Tạo ra sản phẩm giỏ hàng
      const cartProd = {
        id: phone.id,
        name: phone.name,
        img: phone.img,
        price: phone.price,
        amount: 1,
      };

      // Tạo Action đưa dữ liệu lên reducer
      const action = {
        type: ADD_TO_CART,
        payload: cartProd,
      };

      // Dispatch Action lên Reducer
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(PhoneItemRedux);
