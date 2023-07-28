import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filterContent: '' },
  reducers: {
    selectFilter(state, action) {
      state.filterContent = action.payload;
    },
  },
});

export const { selectFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
