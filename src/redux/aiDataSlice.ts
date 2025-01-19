import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { AIData } from '../types/data';
import mockData from '../assets/data.json';

interface AIDataState {
  data: AIData | null;
  loading: boolean;
  error: string | null;
}

const initialState: AIDataState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchAIData = createAsyncThunk('aiData/fetch',
  async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return mockData as AIData;
  }
);

const aiDataSlice = createSlice({
  name: 'aiData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAIData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAIData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAIData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch AI data';
      });
  },
});

export default aiDataSlice.reducer;