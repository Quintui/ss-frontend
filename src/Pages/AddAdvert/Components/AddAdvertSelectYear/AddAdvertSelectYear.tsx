import { ButtonGroup, Paper } from 'byh-components';
import React from 'react';
import { createArrayObjectOfAllYears } from '../../../../services/allYears';

export const AddAdvertSelectYear = () => {
  const mockFunc = () => {};
  return (
    <>
      <Paper>
        <ButtonGroup
          buttons={createArrayObjectOfAllYears('year', 2012)}
          width={934}
          height={49}
          fontSize={22}
          callback={mockFunc}
        />
      </Paper>
    </>
  );
};
