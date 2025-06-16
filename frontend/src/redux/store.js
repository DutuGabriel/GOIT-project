import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./loader/loaderSlice";
import formReducer from "./form/formSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    loader: loaderReducer,
  },
});

export default store;
