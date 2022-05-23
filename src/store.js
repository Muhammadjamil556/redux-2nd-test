import { configureStore } from "@reduxjs/toolkit";
import CreatorsData from "./Redux/creators.Slice";
import FeaturedArt from "./Redux/FeaturedArt.slice";
import CreatorsByName from "./Redux/creatorsByname.slice";
const store = configureStore({
  reducer: {
    FeaturedArt: FeaturedArt,
    CreatorsData: CreatorsData,
    CreatorsByName: CreatorsByName,
  },
});

export default store;
