import { ADD_TO_CART, ADJUST_AMOUNT, REMOVE_ITEM } from "../actionTypes";

let initialState = {
  cartList: [],
};

const cartReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {
      // Xử lý phương thức thêm giỏ hàng
      // Clone trước state trước đó, vì tính bất biến của redux
      const cartListClone = [...state.cartList];

      // Tìm xem trong mảng có sản phẩm nào có id trùng với id action gửi lên hay không
      let index = cartListClone.findIndex((prod) => prod.id === payload.id);

      // Nếu như sản phẩm đã tồn tại trong giỏ hàng
      if (index !== -1) {
        cartListClone[index].amount += 1;
      } else {
        cartListClone.push(payload);
      }
      // Trả về mảng sản phẩm
      state.cartList = cartListClone;
      return { ...state };
    }

    case REMOVE_ITEM: {
      // Xử lý phương thức xóa giỏ hàng
      // Clone state trước đó, vì tính bất biến của redux và làm việc trên mảng đã clone ra
      const cartListClone = [...state.cartList];

      let index = cartListClone.findIndex((prod) => prod.id === payload);
      if (index !== -1) {
        cartListClone.splice(index, 1);
      }
      state.cartList = cartListClone;
      return { ...state };
    }

    case ADJUST_AMOUNT: {
      // Clone state trước
      const cartListClone = [...state.cartList];

      // Nếu là tăng ~ value = true
      if (payload.value) {
        cartListClone[payload.index].amount += 1;
      } else {
        if (cartListClone[payload.index].amount > 1) {
          cartListClone[payload.index].amount -= 1;
        }
      }
      // Gắn lại giỏ hàng clone vào state trước đó
      state.cartList = cartListClone;
      return { ...state };
    }

    default:
      return state;
  }
};

export default cartReducers;
