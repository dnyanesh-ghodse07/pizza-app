import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      pizzaId: 12,
      name: "Mediterranean",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      //payload = newItem
      const itemId = action.payload.pizzaId;
      const isAlreadyPresent = state.cart.find(
        (item) => item.pizzaId === itemId
      );

      if (isAlreadyPresent?.pizzaId === itemId) {
        state.cart = state.cart.map((item) => {
          if (item.pizzaId === itemId) {
            item.quantity++;
          }
          return item;
        });
      } else {
        state.cart.push(action.payload);
      }
    },
    deleteItem: (state, action) => {
      //payload = pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item.quantity < 10) {
        item.quantity++;
      }
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item.quantity > 1) {
        item.quantity--;
      }
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  clearCart,
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} = cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartPrice = (state) =>
  state?.cart.cart.reduce((acc, cur) => acc + cur.totalPrice, 0);

export const getTotalCartQuantity = (state) =>
  state?.cart.cart.reduce((acc, cur) => acc + cur.quantity, 0);
