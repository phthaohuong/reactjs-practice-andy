import React, { Component } from "react";

class ModalCart extends Component {
  render() {
    const { cartReducer, deleteItem, adjustAmount } = this.props;
    return (
      /* Modal */
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
              <h5 className="modal-title">Your Item</h5>
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
                  <tr>
                    <th>iD</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cartReducer.map((prod, index) => {
                    return (
                      <tr>
                        <td>{prod.id}</td>
                        <td>
                          <img
                            src={prod.img}
                            style={({ width: "100px" }, { height: "100px" })}
                          />
                        </td>
                        <td>{prod.name}</td>
                        <td>{prod.price}</td>
                        <button onClick={() => adjustAmount(prod.id, true)}>
                          +
                        </button>
                        <td>{prod.amount}</td>
                        <button onClick={() => adjustAmount(prod.id, false)}>
                          -
                        </button>
                        <td>{prod.price * prod.amount}</td>
                        <button
                          onClick={() => deleteItem(prod.id)}
                          className="btn btn-danger align-middle"
                        >
                          Delete
                        </button>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="5"></td>
                    <td>Total Price</td>
                    <td>
                      {cartReducer.reduce((totalPrice, prod, index) => {
                        return (totalPrice += prod.amount * prod.price);
                      }, 0)}
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
    );
  }
}

export default ModalCart;
