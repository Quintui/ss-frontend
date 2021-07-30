import React from 'react';
import { Paper, Title } from 'byh-components';
import { useDispatch, useSelector } from 'react-redux';
import { getAddAdvertGen } from '../../../../Store/ducks/addAdvert/addAdvertSelector';
import './AddAdvertGenerationPicker.scss';
import { BiCheckDouble } from 'react-icons/bi';
import { fetchAddAdvertSerie } from '../../../../Store/ducks/addAdvert/addAdvertReducer';
export const AddAdvertGenerationPicker = () => {
  const [selectedGen, setSelectedGen] = React.useState<number | null>(null);
  const dispatch = useDispatch();
  const generations = useSelector(getAddAdvertGen);
  React.useEffect(() => {
    dispatch(fetchAddAdvertSerie(selectedGen));
  }, [dispatch, selectedGen]);
  if (!generations) {
    return null;
  }

  return (
    <>
      <Title variant="primary" type={'ultraSmall'} style={{ marginBottom: 20 }}>
        4. Выбор поколения авто
      </Title>
      <Paper display={'grid'} className="addAdvertGenerationPicker__wrapper">
        {generations.map((gen) => (
          <Paper
            onClick={() => setSelectedGen(gen.id_car_generation)}
            display={'flex'}
            boxShadow={false}
            className="addAdvertGenerationPicker__card_wrapper"
            key={gen.id_car_generation}
            width={330}>
            <div>
              <p style={{ fontWeight: 'bold' }}>{gen.name}</p>
              <div className="addAdvertGenerationPicker__year-wrapper">
                <p>{gen.year_begin}</p>
                <span> - </span>
                <p>{gen.year_end}</p>
              </div>
            </div>
            {selectedGen === gen.id_car_generation && (
              <Paper
                display={'flex'}
                className="addAdvertGenerationPicker__selected-icon-wrapper"
                height={35}
                width={35}
                boxShadow={false}
                customBgColor={'#072832'}>
                <BiCheckDouble className="addAdvertGenerationPicker__selected-icon" />
              </Paper>
            )}
          </Paper>
        ))}
      </Paper>
    </>
  );
};
