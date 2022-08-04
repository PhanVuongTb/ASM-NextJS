import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import productReducer from "../features/products/product.slice";
import categoryReducer from "../features/category/category.slice"
import cartReducer from "../features/Cart/CartSlice"

export const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    cart: cartReducer
  },
});



export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
