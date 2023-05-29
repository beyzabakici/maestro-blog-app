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

export const fetchData = createAsyncThunk(
  "get/fetchData",
  async (page: number) => {
    const response = await axios.get<MainResponseType>(
      `${BASE_URL}?page=${page}&count=5`
    );
    return response.data;
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addFavorites: (state, action: PayloadAction<number>) => {
      state.favoriteIdList.push(action.payload);
    },
    removeFavorites: (state, action: PayloadAction<number>) => {
      state.favoriteIdList = state.favoriteIdList.filter(
        (item) => item !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      const maxPage = Math.ceil(
        action.payload.totalCount / action.payload.result.length
      );
      state.data =
        action.meta.arg === 1 || action.meta.arg > maxPage
          ? action.payload
          : {
              ...state.data,
              result: [...state.data?.result, ...action.payload.result],
            };
      state.loading = false;
    });
    builder.addCase(fetchData.rejected, (state) => {
      state.loading = false;
      state.error = "An Unexpected Error";
    });
  },
});

export const { addFavorites, removeFavorites } = blogSlice.actions;
export default blogSlice.reducer;
