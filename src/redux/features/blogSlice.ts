import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import Constants from "expo-constants";
import { AppConfig } from "../../../app.config";
import { MainResponseType } from "../../utils";

const { BASE_URL } = Constants.manifest?.extra as AppConfig;

interface BlogState {
  data?: MainResponseType;
  error: string;
  loading: boolean;
  favoriteIdList: number[];
}

const initialState: BlogState = {
  data: undefined,
  error: "",
  loading: false,
  favoriteIdList: [],
};

export const fetchData = createAsyncThunk("get/fetchData", async () => {
  const response = await axios.get<MainResponseType>(`${BASE_URL}`);
  return response.data;
});

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addFavorites: (state, action: PayloadAction<number>) => {
      state.favoriteIdList.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.loading = false;
      state.error = "An Unexpected Error";
    });
  },
});

export const { addFavorites } = blogSlice.actions;
export default blogSlice.reducer;
