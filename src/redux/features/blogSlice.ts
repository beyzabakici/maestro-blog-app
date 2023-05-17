import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Constants from "expo-constants";
import { AppConfig } from "../../../app.config";
import { MainResponseType } from "../../utils";

const { BASE_URL } = Constants.manifest?.extra as AppConfig;

const initialState: {
  data: MainResponseType ;
  error: string;
  loading: boolean;
} = {
  data: undefined,
  error: "",
  loading: false,
};

export const fetchData = createAsyncThunk("get/fetchData", async () => {
  const response = await axios.get<MainResponseType>(`${BASE_URL}`);
  return response.data;
});

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      return {
        ...state,
        loading: true,
        error: "",
      };
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    });
    builder.addCase(fetchData.rejected, (state) => {
      return {
        ...state,
        loading: false,
        error: "An Unexpected Error",
      };
    });
  },
});

export default blogSlice.reducer;
