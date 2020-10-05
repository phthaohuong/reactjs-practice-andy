import React, { Component } from "react";
import ProductList from "./ProductList";
import ModalCart from "./ModalCart";

class BTCart extends Component {
  // Initial Modal State
  constructor(props) {
    super(props);
    this.state = {
      cartReducer: [],
    };
  }

  // Khi sản phẩm được click, lấy nguyên sản phẩm được click
  // Vì nút nhấn nằm trong ProdItem, nên phải truyền callbackfunction into ProdItem
  addItemToCart = (selectedProd) => {
    // console.log(selectedProd);
    // Khi thêm một sản phẩm viết lại state của giỏ hàng

    // Từ sản phẩm được chọn, tạo ra sản phẩm ở giỏ hàng
    const cartProd = {
      id: selectedProd.id,
      name: selectedProd.name,
      price: selectedProd.price,
      img: selectedProd.img,
      // số lượng mặc định khi click 1 lần là 1
      amount: 0,
    };

    // Kiểm tra sản phẩm được chọn có trong giỏ hàng hay chưa
    // Clone state giỏ hàng ban đầu và làm việc trên giỏ hàng clone
    let cartReducerClone = [...this.state.cartReducer];

    const index = cartReducerClone.findIndex((prod) => prod.id === cartProd.id);
    // Nếu sản phẩm đã có trong giỏ hàng
    if (index !== -1) {
      cartReducerClone[index].amount += 1;
    }
    // sản phẩm được click chưa có trong sản phẩm
    else {
      cartReducerClone.push(cartProd);
    }
    // setState để render lại
    this.setState({
      cartReducer: cartReducerClone,
    });
  };

  deleteItem = (selectedProdId) => {
    // Clone state cartReducer ban đầu
    // const cartReducerClone = [...this.state.cartReducer];

    // const index = cartReducerClone.findIndex(
    //   (prod) => prod.id === selectedProdId
    // );
    // if (index !== -1) {
    //   cartReducerClone.splice(index, 1);
    // }

    //Cách 2: Dùng hàm filter của es6
    const cartReducerClone = this.state.cartReducer.filter(
      (prod) => prod.id !== selectedProdId
    );
    this.setState({
      cartReducer: cartReducerClone,
    });
  };

  // Tăng giảm số lượng sản phẩm trong Cart Modal
  // Nhận vào 2 tham số: id của sản phẩm và giá trị boolean, tăng hay giảm (true or false)
  // value: true -> tăng số lượng, value: false: giảm số lượng, tuy nhiên không giảm quá 1, vì nếu giảm quá 1 thành xóa
  adjustAmount = (id, value) => {
    const cartReducerClone = [...this.state.cartReducer];
    const index = cartReducerClone.findIndex((prod) => prod.id === id);
    // Value = True or False
    if (value) {
      cartReducerClone[index].amount += 1;
    } else {
      if (cartReducerClone[index].amount > 1) {
        cartReducerClone[index].amount -= 1;
      }
    }
    this.setState({
      cartReducer: cartReducerClone,
    });
  };

  render() {
    // Database
    const phoneData = [
      {
        id: "sp_1",
        name: "iphoneX",
        price: 5000,
        screen: "screen_1",
        backCamera: "backCamera_1",
        frontCamera: "frontCamera_1",
        img:
          "https://sudospaces.com/mobilecity-vn/images/2019/12/iphonex-black.jpg",
        desc:
          "iPhone X features a new all-screen design. Face ID, which makes your face your password",
      },
      {
        id: "sp_2",
        name: "Note 7",
        price: 2000,
        screen: "screen_2",
        backCamera: "backCamera_2",
        frontCamera: "frontCamera_2",
        img:
          "https://www.xtmobile.vn/vnt_upload/product/01_2018/thumbs/600_note_7_blue_600x600.png",
        desc:
          "The Galaxy Note7 comes with a perfectly symmetrical design for good reason",
      },
      {
        id: "sp_3",
        name: "Vivo",
        price: 400,
        screen: "screen_3",
        backCamera: "backCamera_3",
        frontCamera: "frontCamera_3",
        img:
          "https://www.gizmochina.com/wp-content/uploads/2019/11/Vivo-Y19.jpg",
        desc:
          "A young global smartphone brand focusing on introducing perfect sound quality",
      },
      {
        id: "sp_4",
        name: "Blacberry",
        price: 7000,
        screen: "screen_4",
        backCamera: "backCamera_4",
        frontCamera: "frontCamera_4",
        img:
          "https://cdn.tgdd.vn/Products/Images/42/194834/blackberry-keyone-3gb-600x600.jpg",
        desc:
          "BlackBerry is a line of smartphones, tablets, and services originally designed",
      },
    ];

    // Total Amount
    const totalAmount = this.state.cartReducer.reduce((total, prod, index) => {
      return (total += prod.amount);
    }, 0);
    return (
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="my-3">Product List</h3>
          <div>
            <a
              className="text-bold"
              style={{ cursor: "pointer" }}
              data-toggle="modal"
              data-target="#modelId"
            >
              Your Cart ({totalAmount})
            </a>
          </div>
        </div>

        <ProductList addItemToCart={this.addItemToCart} phoneDB={phoneData} />
        <ModalCart
          adjustAmount={this.adjustAmount}
          deleteItem={this.deleteItem}
          cartReducer={this.state.cartReducer}
        />
      </div>
    );
  }
}

export default BTCart;
