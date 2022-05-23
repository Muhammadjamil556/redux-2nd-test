import { createSlice } from "@reduxjs/toolkit";
import { getCreatorsData } from "./apiCalls";
const initialState = {
  creatorsDataList: [],
  filterData: [],
  creatorsDataLoading: false,
  creatorsDataLoadedSucess: false,
  creatorsDataLoadedfailure: false,
};

const CreatorsData = createSlice({
  name: "creatorsData",
  initialState,
  reducers: {
    inputField: (state, action) => {
      if (action.payload != null) {
        console.log(action.payload);
        state.filterData = state.creatorsDataList.filter((value) => {
          if (value.fullName.toLowerCase().includes(action.payload)) {
            return value;
          }
        });
      }
    },
  },
  extraReducers: {
    [getCreatorsData.pending]: (state, action) => {
      state.creatorsDataLoading = true;
    },
    [getCreatorsData.fulfilled]: (state, action) => {
      state.creatorsDataLoadedSucess = true;
      state.creatorsDataLoading = false;
      state.creatorsDataList = action.payload;
    },
    [getCreatorsData.failed]: (state, action) => {
      state.creatorsDataLoadedfailure = true;
      state.creatorsDataLoadedSucess = false;
      state.creatorsDataLoading = false;
    },
  },
});

export const { inputField } = CreatorsData.actions;

export default CreatorsData.reducer;
