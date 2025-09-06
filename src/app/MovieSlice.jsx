import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  randomData: [],
};

const MovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setRanData: (state, action) => {
      state.randomData = action.payload;
    },
  },
});

export const { setLoading, setRanData } = MovieSlice.actions;

export default MovieSlice.reducer;
