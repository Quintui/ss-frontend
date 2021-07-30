import { call, put, takeEvery } from 'redux-saga/effects';
import { CustomResponseType } from '../../../GlobalTypes/responseType';
import { PayloadAction } from '@reduxjs/toolkit';
import { LoadingState } from '../../commonType';
import { fetchAddAdvertMake, setAddAdvertLoadingState, setAddAdvertMake } from './addAdvertReducer';
import { carMakesResponse } from './@types';
import { AddAdvertApi } from '../../../api/AddAdvert';

function* GetMakeDbWorker() {
  try {
    const make: CustomResponseType<carMakesResponse[]> = yield call(AddAdvertApi.getAllMakes);
    yield put(setAddAdvertMake(make.data));
  } catch (error) {
    yield put(setAddAdvertLoadingState(LoadingState.ERROR));
  }
}

export function* AddAdvertSagaWatcher() {
  yield takeEvery(fetchAddAdvertMake.type, GetMakeDbWorker);
}
