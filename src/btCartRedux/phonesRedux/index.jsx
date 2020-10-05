import React, { Component } from "react";
import { connect } from "react-redux";
import PhoneItemRedux from "../phoneItemRedux";

class PhonesRedux extends Component {
  render() {
    return (
      <div className="row">
        {this.props.phonesList.map((phone, index) => {
          return (
            <div className="col-3" key={index}>
              <PhoneItemRedux phone={phone} />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    phonesList: state.phonesReducer.phonesList,
  };
};

export default connect(mapStateToProps, null)(PhonesRedux);
