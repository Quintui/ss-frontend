import { Title } from 'byh-components';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchAddAdvertGeneration,
  fetchAddAdvertModel,
} from '../../../Store/ducks/addAdvert/addAdvertReducer';
import { AddAdvertCarSpecs } from '../Components/AddAdvertCarSpecs/AddAdvertCarSpecs';
import { AddAdvertGenerationPicker } from '../Components/AddAdvertGenerationPicker/AddAdvertGenerationPicker';
import { AddAdvertMakePicker } from '../Components/AddAdvertMakePicker/AddAdvertMakePicker';
import { AddAdvertModelPicker } from '../Components/AddAdvertModelPicker/AddAdvertModelPicker';
import { AddAdvertSelectYear } from '../Components/AddAdvertSelectYear/AddAdvertSelectYear';
import './AddAdvert.scss';
export type advertDataForDbType = {
  id_car_make?: number;
  id_car_model?: number;
  year?: string;
};
const AddAdvert = () => {
  const [advertDataForDb, setAdvertDataForDb] = React.useState<advertDataForDbType>();
  const dispatch = useDispatch();

  React.useEffect(() => {
    advertDataForDb?.id_car_make &&
      advertDataForDb.year &&
      dispatch(
        fetchAddAdvertModel({
          id_car_make: advertDataForDb.id_car_make,
          year: advertDataForDb.year,
        }),
      );
    advertDataForDb?.year &&
      advertDataForDb?.id_car_model &&
      dispatch(
        fetchAddAdvertGeneration({
          id_car_model: advertDataForDb.id_car_model,
          year: advertDataForDb.year,
        }),
      );
  }, [
    advertDataForDb?.id_car_make,
    advertDataForDb?.id_car_model,
    advertDataForDb?.year,
    dispatch,
  ]);
  return (
    <main>
      <div className="addAdvert__title-wrapper">
        <Title type="large" variant="primary">
          Добавить новое объявление
        </Title>
      </div>
      <AddAdvertMakePicker setAdvertDataForDb={setAdvertDataForDb} />
      <AddAdvertSelectYear setAdvertDataForDb={setAdvertDataForDb} />
      <AddAdvertModelPicker setAdvertDataForDb={setAdvertDataForDb} />
      <AddAdvertGenerationPicker />
      <AddAdvertCarSpecs />
    </main>
  );
};

export { AddAdvert };
