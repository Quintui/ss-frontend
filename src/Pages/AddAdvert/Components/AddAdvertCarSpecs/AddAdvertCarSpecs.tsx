import { Title, ButtonGroup } from 'byh-components';
import React from 'react';
import { useSelector } from 'react-redux';
import { getAddAdvertSerie } from '../../../../Store/ducks/addAdvert/addAdvertSelector';

export const AddAdvertCarSpecs = () => {
  const serie = useSelector(getAddAdvertSerie);
  const mock = () => {};
  if (!serie) {
    return null;
  }
  return (
    <div>
      <Title type="ultraSmall"> 6. Выбор расположения руля</Title>
      <ButtonGroup callback={mock} width={1170} height={50} fontSize={24} buttons={serie} />
    </div>
  );
};
