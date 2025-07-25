import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    height: "",
    age: "",
    currentWeight: "",
    desiredWeight: "",
    bloodType: "1",
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
    },
  },
});

export const { updateFormData } = formSlice.actions;
export default formSlice.reducer;
