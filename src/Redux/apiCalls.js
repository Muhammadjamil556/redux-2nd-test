import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFeaturedArt = createAsyncThunk(
  "FeaturedArt/getFeaturedArt",
  async () => {
    try {
      const res = await axios.get(
        "http://boax.alshumaal.com/admin/admin/api/nfts/readFeaturedArt.php "
      );

      return res.data.nfts;
    } catch {
      console.log("Error fetching art");
    }
  }
);

export const getCreatorsData = createAsyncThunk(
  "getCreatorsData/CreatorsData",
  async () => {
    try {
      const res = await axios.get(
        "http://boax.alshumaal.com/admin/admin/api/Creators/readFeaturedCreators.php  "
      );
      console.log(res, "lkajsdlkasd");
      return res.data.Creators;
    } catch {
      console.log("Error fetching CreatorsData");
    }
  }
);

export const getCreatorsDataByName = createAsyncThunk(
  "getCountryName/country",
  async (payload) => {
    console.log(payload, "ekk");
    try {
      const res = await axios.get(
        `http://boax.alshumaal.com/api/Creators/Profile?username=${payload}`
      );
      console.log(res.data, "asdasd");
      return res.data;
    } catch {
      console.log("Error getting CreatorsData");
    }
  }
);
