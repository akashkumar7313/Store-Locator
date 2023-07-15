import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const getAllData = createAsyncThunk('storeData', async (args, rejectWithValue) => {
  try{
    const response = await fetch('http://localhost:4001/get/allstore');
    const result = await response.json();
    return result;
  }catch(error){
    return rejectWithValue(error);
  }
})

export const getDataCityWise = createAsyncThunk('getDataCityWise', async (id, rejectWithValue) => {
  try{
    const response = await fetch(`http://localhost:4001/get/get_stores/${id}`);
    const result = await response.json();
    return result;
  }catch(error){
    return rejectWithValue(error);
  }
})

const storeDataSlice = createSlice({
  name: 'store',
  initialState: {
    stores: [],
    loading: false,
    error: null,
  },

  extraReducers: {
    [getAllData.pending]: (state) => {
      state.loading = true
    },
    [getAllData.fulfilled]: (state, action) => {
      state.loading = false
      state.stores = action.payload;
    },
    [getAllData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [getDataCityWise.pending]: (state) => {
      state.loading = true
    },
    [getDataCityWise.fulfilled]: (state, action) => {
      state.loading = false
      state.stores = action.payload;
    },
    [getDataCityWise.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
});

export default storeDataSlice.reducer;
