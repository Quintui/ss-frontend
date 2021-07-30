import { Title } from 'byh-components';
import React from 'react';
import { AddAdvertMakePicker } from '../Components/AddAdvertMakePicker/AddAdvertMakePicker';
import { AddAdvertSelectYear } from '../Components/AddAdvertSelectYear/AddAdvertSelectYear';

import './AddAdvert.scss';
const AddAdvert = () => {
  return (
    <main>
      <div className="addAdvert__title-wrapper">
        <Title type="large" variant="primary">
          Добавить новое объявление
        </Title>
      </div>
      <AddAdvertMakePicker />
      <AddAdvertSelectYear />
    </main>
  );
};

export { AddAdvert };
