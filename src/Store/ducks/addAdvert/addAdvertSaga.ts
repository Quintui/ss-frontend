import { call, put, takeEvery } from 'redux-saga/effects';
import { CustomResponseType } from '../../../GlobalTypes/responseType';
import { PayloadAction } from '@reduxjs/toolkit';
import { LoadingState } from '../../commonType';
import {
  fetchAddAdvertGeneration,
  fetchAddAdvertMake,
  fetchAddAdvertModel,
  fetchAddAdvertSerie,
  setAddAdvertGeneration,
  setAddAdvertLoadingState,
  setAddAdvertMake,
  setAddAdvertModel,
  setAddAdvertSerie,
} from './addAdvertReducer';
import {
  carMakesResponse,
  carModelResponse,
  carModelReq,
  carGenReq,
  carGenerationResponse,
  carSerieResponse,
} from './@types';
import { AddAdvertApi } from '../../../api/AddAdvert';

function* GetMakeDbWorker() {
  try {
    const make: CustomResponseType<carMakesResponse[]> = yield call(AddAdvertApi.getAllMakes);
    yield put(setAddAdvertMake(make.data));
  } catch (error) {
    yield put(setAddAdvertLoadingState(LoadingState.ERROR));
  }
}
function* GetModelDbWorker(action: PayloadAction<carModelReq>) {
  try {
    const model: CustomResponseType<carModelResponse[]> = yield call(
      AddAdvertApi.getModelByYear,
      action.payload,
    );
    yield put(setAddAdvertModel(model.data));
  } catch (error) {
    yield put(setAddAdvertLoadingState(LoadingState.ERROR));
  }
}
function* GetGenDbWorker(action: PayloadAction<carGenReq>) {
  try {
    const gen: CustomResponseType<carGenerationResponse[]> = yield call(
      AddAdvertApi.getGenByYear,
      action.payload,
    );
    yield put(setAddAdvertGeneration(gen.data));
  } catch (error) {
    yield put(setAddAdvertLoadingState(LoadingState.ERROR));
  }
}
function* GetSerieDbWorker(action: PayloadAction<number>) {
  try {
    const gen: CustomResponseType<carSerieResponse[]> = yield call(
      AddAdvertApi.getSerieByGenId,
      action.payload,
    );
    yield put(setAddAdvertSerie(gen.data));
  } catch (error) {
    yield put(setAddAdvertLoadingState(LoadingState.ERROR));
  }
}

export function* AddAdvertSagaWatcher() {
  yield takeEvery(fetchAddAdvertMake.type, GetMakeDbWorker);
  yield takeEvery(fetchAddAdvertModel.type, GetModelDbWorker);
  yield takeEvery(fetchAddAdvertGeneration.type, GetGenDbWorker);
  yield takeEvery(fetchAddAdvertSerie.type, GetSerieDbWorker);
}
