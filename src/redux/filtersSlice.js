import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  filters: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    setFilterValue: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { setFilterValue } = filterSlice.actions;

export const selectFilter = (state) => state.filter.filters;

// export const filterReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "filter/setFilterValue": {
//       return { ...state, filters: action.payload };
//     }
//     default:
//       return state;
//   }
// };

// export const setFilterValue = (payload) => {
//   return {
//     type: "filter/setFilterValue",
//     payload: payload,
//   };
// };
