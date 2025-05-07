import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    cart: {}
  },
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload.id;
      if (state.cart[id]) {
        state.cart[id].quantity += 1;
      } else {
        state.cart[id] = { ...action.payload, quantity: 1 };
      }
    },
    increment: (state, action) => {
      const id = action.payload;
      if (state.cart[id]) {
        state.cart[id].quantity += 1;
      }
    },
    decrement: (state, action) => {
      const id = action.payload;
      if (state.cart[id]) {
        state.cart[id].quantity -= 1;
        if (state.cart[id].quantity <= 0) {
          delete state.cart[id];
        }
      }
    }
  }
});

export const { addToCart, increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
