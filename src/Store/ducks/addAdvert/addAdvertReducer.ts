import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LoadingState } from '../../commonType';
import {
  carGenerationResponse,
  carMakesResponse,
  carModelResponse,
  carSerieResponse,
  carTrimResponse,
} from './@types';
type initialStateType = {
  status: LoadingState;
  make: carMakesResponse[] | null;
  model: carModelResponse | null;
  generation: carGenerationResponse | null;
  serie: carSerieResponse | null;
  trim: carTrimResponse | null;
};
const initialState = {
  status: LoadingState.NEVER,
  make: null,
  model: null,
  generation: null,
  serie: null,
  trim: null,
} as initialStateType;

const addAdvertSlice = createSlice({
  name: 'addAvertSlice',
  initialState,
  reducers: {
    fetchAddAdvertMake(state) {
      state.status = LoadingState.LOADING;
    },
    setAddAdvertMake(state, action: PayloadAction<carMakesResponse[] | null>) {
      state.make = action.payload;
    },
    setAddAdvertLoadingState(state, action: PayloadAction<LoadingState>) {
      state.status = action.payload;
    },
  },
});

export const { fetchAddAdvertMake, setAddAdvertMake, setAddAdvertLoadingState } =
  addAdvertSlice.actions;
export default addAdvertSlice.reducer;
