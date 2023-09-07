import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Categories } from "../../utils/typeUtil";
const name = "catagories";

const catagoriesSlice = createSlice({
  name,
  initialState: {
    categories: [] as Categories[],
    isLoading: false,
    error: null as Error | null,
  },
  reducers: {
    fetchCatagoriesStart(state) {
      state.isLoading = true;
    },
    fetchCatagoriesSuccess(state, action: PayloadAction<Categories[]>) {
      state.categories = action.payload;
      state.isLoading = false;
    },
    fetchCatagoriesFailed(state, action: PayloadAction<Error>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default catagoriesSlice;
