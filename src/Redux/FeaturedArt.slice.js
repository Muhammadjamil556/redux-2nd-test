import { createSlice } from "@reduxjs/toolkit";
import { getFeaturedArt } from "./apiCalls";

const initialState = {
  featuredArt: [],
  featuredArtLoading: false,
  featuredArtLoadedSucess: false,
  featuredArtLoadedfailure: false,
};

const FeaturedArt = createSlice({
  name: "FeaturedArt",
  initialState,
  reducers: {},
  extraReducers: {
    [getFeaturedArt.pending]: (state, action) => {
      state.featuredArtLoading = true;
    },
    [getFeaturedArt.fulfilled]: (state, action) => {
      state.featuredArtLoadedSucess = true;
      state.featuredArtLoading = false;
      state.featuredArt = action.payload;
    },
    [getFeaturedArt.failed]: (state, action) => {
      state.featuredArtLoadedfailure = true;
      state.featuredArtLoadedSucess = false;
      state.featuredArtLoading = false;
    },
  },
});

export default FeaturedArt.reducer;
