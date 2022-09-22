import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PageState {
  page: number;
}

const initialState: PageState = {
  page: 1,
};

export const counterSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    nextPage: (state, action: PayloadAction<number>) => {
      state.page += action.payload;
    }
  },
});

export const { nextPage } = counterSlice.actions;

export default counterSlice.reducer;
