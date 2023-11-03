import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
  cartTotalAmount: 0,
  cartTotalQantity: 0,
}
const PopularSlice = createSlice({
  initialState,
  name: "PopularSlice",
  reducers: {
    AddToCart: (state, action) => {
      const findProduct = state.cartItems.findIndex((product) => {
        return product.id === action.payload.id;
      });
      if (findProduct >= 0) {
        state.cartItems[findProduct].quantity += 1
      } else {
        const clonedProduct = { ...action.payload, quantity: 1 };
        state.cartItems.push(clonedProduct);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    increaseAmount: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    decreaseAmount: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    clearCart: (state, action) => {
      state.cartItems = []
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    deleteItem : (state, action) => {
      const removeItem = state.cartItems.filter((item) => {
        return item.id !== action.payload.id
      })
      state.cartItems = removeItem;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setGetTotals: (state, action) => {
      let { totalAmount, totalQTY } = state.cartItems.reduce((cartTotal, cartItem)=> {
        const { price, quantity } = cartItem;
        const totalPrice = price * quantity;
        cartTotal.totalAmount += totalPrice;
        cartTotal.totalQTY += quantity;

        return cartTotal;
      }, {
        totalAmount: 0,
        totalQTY: 0,
      });

      state.cartTotalAmount = totalAmount;
      state.cartTotalQantity = totalQTY;
    },
  },
});

export const { AddToCart, increaseAmount, decreaseAmount, clearCart, deleteItem, setGetTotals } =
  PopularSlice.actions;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectTotalQTY = (state) => state.cart.cartTotalQantity;
export default PopularSlice.reducer;
