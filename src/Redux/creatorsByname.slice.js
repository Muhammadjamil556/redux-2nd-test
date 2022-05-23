import { createSlice } from "@reduxjs/toolkit";

import { getCreatorsDataByName } from "./apiCalls";

const initialState = {
  CreatorsByNameData: [],
  CreatorsByNameDataLoading: false,
  CreatorsByNameDataLoadedSucess: false,
  CreatorsByNameDataLoadedfailure: false,
};

const CreatorsByName = createSlice({
  name: "CreatorsByName",
  initialState,
  reducers: {},
  extraReducers: {
    [getCreatorsDataByName.pending]: (state, action) => {
      state.CreatorsByNameDataLoading = true;
    },
    [getCreatorsDataByName.fulfilled]: (state, action) => {
      state.CreatorsByNameDataLoadedSucess = true;
      state.CreatorsByNameDataLoading = false;
      state.CreatorsByNameData = action.payload;
    },
    [getCreatorsDataByName.failed]: (state, action) => {
      state.CreatorsByNameDataLoadedfailure = true;
      state.CreatorsByNameDataLoadedSucess = false;
    },
  },
});

export default CreatorsByName.reducer;
