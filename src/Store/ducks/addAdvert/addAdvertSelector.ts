import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { AppStateType } from '../../store';

const getAddAdvert = (state: AppStateType) => state.addAdvert;

export const getAddAdvertMake = createDraftSafeSelector(getAddAdvert, (state) => {
  if (state.make) {
    const make = state.make;
    const mappedMake = make.map((m) => {
      const mapped = m.make.map((c) => ({ name: c.name, id: c.id_car_make }));
      return {
        ...m,
        make: mapped,
      };
    });
    return mappedMake;
  }
});
export const getAddAdvertModel = createDraftSafeSelector(getAddAdvert, (state) => {
  if (state.model) {
    const models = state.model;
    const mappedModel = models.map((model) => {
      return {
        ...model,
        id: model.id_car_model,
      };
    });
    return mappedModel;
  }
});
export const getAddAdvertGen = createDraftSafeSelector(getAddAdvert, (state) => {
  return state.generation;
});
export const getAddAdvertSerie = createDraftSafeSelector(getAddAdvert, (state) => {
  if (state.serie) {
    const serie = state.serie;
    const mappedSerie = serie.map((s) => {
      return {
        ...s,
        label: s.name,
        id: s.id_car_serie.toString(),
      };
    });
    return mappedSerie;
  }
});
