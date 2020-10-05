import React, { Component } from "react";
import { connect } from "react-redux";

import { REMOVE_ITEM, ADJUST_AMOUNT } from "../../redux/actionTypes";

class CartModalRedux extends Component {
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Your Cart</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Amount</th>
                    <th>Price</th>
                  </thead>
                  <tbody>
                    {this.props.cartList.map((prod, index) => {
                      return (
                        <tr key={index}>
                          <td>{prod.id}</td>
                          <td>{prod.name}</td>
                          <td>
                            <img src={prod.img} width={64} height={64} />
                          </td>
                          <button
                            onClick={() => this.props.adjustAmount(index, true)}
                            className="btn btn-primary"
                          >
                            +
                          </button>
                          <td>{prod.amount}</td>
                          <button
                            onClick={() =>
                              this.props.adjustAmount(index, false)
                            }
                            className="btn btn-primary"
                          >
                            -
                          </button>

                          <td>{prod.price * prod.amount}</td>
                          <button
                            onClick={() => this.props.removeItem(prod.id)}
                            className="btn btn-danger"
                          >
                            Remove
                          </button>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr colspan="5">
                      <td>Total Price</td>
                      <td>
                        {this.props.cartList.reduce(
                          (totalPrice, prod, index) => {
                            return (totalPrice += prod.amount * prod.price);
                          },
                          0
                        )}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartList: state.cartReducers.cartList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // xóa prod
    removeItem: (id) => {
      const action = {
        type: REMOVE_ITEM,
        payload: id,
      };
      //Console log để test xem hàm này chạy chưa
      //console.log(action);
      dispatch(action);
    },

    // tăng giảm số lượng
    adjustAmount: (index, value) => {
      const action = {
        type: ADJUST_AMOUNT,
        payload: { index, value },
      };
      dispatch(action);
      console.log(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartModalRedux);
