import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LoadingState } from '../../commonType';
import {
  carGenerationResponse,
  carGenReq,
  carMakesResponse,
  carModelReq,
  carModelResponse,
  carSerieResponse,
  carTrimResponse,
} from './@types';
type initialStateType = {
  status: LoadingState;
  make: carMakesResponse[] | null;
  model: carModelResponse[] | null;
  generation: carGenerationResponse[] | null;
  serie: carSerieResponse[] | null;
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
    fetchAddAdvertModel(state, action: PayloadAction<carModelReq | null>) {
      state.status = LoadingState.LOADING;
    },
    fetchAddAdvertGeneration(state, action: PayloadAction<carGenReq | null>) {
      state.status = LoadingState.LOADING;
    },
    fetchAddAdvertSerie(state, action: PayloadAction<number | null>) {
      state.status = LoadingState.LOADING;
    },
    setAddAdvertSerie(state, action: PayloadAction<carSerieResponse[] | null>) {
      state.status = LoadingState.SUCCESS;
      state.serie = action.payload;
    },
    setAddAdvertGeneration(state, action: PayloadAction<carGenerationResponse[] | null>) {
      state.status = LoadingState.SUCCESS;
      state.generation = action.payload;
    },
    setAddAdvertMake(state, action: PayloadAction<carMakesResponse[] | null>) {
      state.status = LoadingState.SUCCESS;
      state.make = action.payload;
    },
    setAddAdvertModel(state, action: PayloadAction<carModelResponse[] | null>) {
      state.status = LoadingState.SUCCESS;
      state.model = action.payload;
    },
    setAddAdvertLoadingState(state, action: PayloadAction<LoadingState>) {
      state.status = LoadingState.SUCCESS;
      state.status = action.payload;
    },
  },
});

export const {
  fetchAddAdvertMake,
  setAddAdvertMake,
  setAddAdvertLoadingState,
  fetchAddAdvertModel,
  setAddAdvertModel,
  fetchAddAdvertGeneration,
  setAddAdvertGeneration,
  fetchAddAdvertSerie,
  setAddAdvertSerie,
} = addAdvertSlice.actions;
export default addAdvertSlice.reducer;
