import { ButtonGroup, Dropdown, Paper, Title } from 'byh-components';
import React, { Dispatch, SetStateAction } from 'react';
import { dropdownDataType } from '../../../../Components/CarSelectForm/Components/ModelForm/ModelForm';
import { createArrayObjectOfAllYears } from '../../../../services/allYears';
import { advertDataForDbType } from '../../AddAdvert/AddAdvert';
import './AddAdvertSelectYear.scss';

interface IProps {
  setAdvertDataForDb: Dispatch<SetStateAction<advertDataForDbType | undefined>>;
}
export const AddAdvertSelectYear: React.FC<IProps> = ({ setAdvertDataForDb }) => {
  const mockFunc = (data: any) => {
    setAdvertDataForDb((prev) => ({ ...prev, year: data.id }));
  };

  return (
    <>
      <Title style={{ marginBottom: 20 }} type="ultraSmall" variant="primary">
        {' '}
        2. Выбор года авто
      </Title>
      <Paper
        style={{ marginBottom: 65 }}
        height={70}
        display="flex"
        className="addAdvertSelectYear__content-wrapper">
        <div className="addAdvertSelectYear__content-wrapper">
          <ButtonGroup
            buttons={createArrayObjectOfAllYears('year', 2012)}
            width={934}
            height={49}
            fontSize={22}
            callback={mockFunc}
            defVariant={'secondary'}
          />
          <Dropdown
            height={48}
            variant={'primary'}
            width={195}
            labelFontSize={18}
            label={'Раньше'}
            callback={mockFunc}
            items={createArrayObjectOfAllYears('year', 1890, 2011)}
          />
        </div>
      </Paper>
    </>
  );
};
