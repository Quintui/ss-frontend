import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { AppStateType } from '../../store';

const getAddAdvert = (state: AppStateType) => state.addAdvert;

export const getAddAdvertMake = createDraftSafeSelector(getAddAdvert, (state) => {
  if (state.make) {
    const make = state.make;
    const mappedMake = make.map((map) => {
      const mapped = map.make.map((c) => ({ name: c.name, id: c.id_car_make }));
      return {
        ...map,
        make: mapped,
      };
    });
    return mappedMake;
  }
});
