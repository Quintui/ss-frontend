import { List, Paper, Title } from 'byh-components';
import React, { Dispatch, SetStateAction } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddAdvertMake } from '../../../../Store/ducks/addAdvert/addAdvertReducer';
import { getAddAdvertMake } from '../../../../Store/ducks/addAdvert/addAdvertSelector';
import { advertDataForDbType } from '../../AddAdvert/AddAdvert';
import './AddAdvertMakePicker.scss';

interface IProps {
  setAdvertDataForDb: Dispatch<SetStateAction<advertDataForDbType | undefined>>;
}

export const AddAdvertMakePicker: React.FC<IProps> = ({ setAdvertDataForDb }) => {
  const [clicked, setClicked] = React.useState<{ name: string; id: number }>();
  const dispatch = useDispatch();
  const make = useSelector(getAddAdvertMake);

  React.useEffect(() => {
    setAdvertDataForDb((prev) => ({ ...prev, id_car_make: clicked?.id }));
    dispatch(fetchAddAdvertMake());
  }, [clicked?.id, dispatch, setAdvertDataForDb]);
  return (
    <div style={{ marginBottom: 65 }}>
      <Title variant="primary" className="makePicker__content-marginBottom" type="ultraSmall">
        1. Выбор марки автомобиля
      </Title>
      {make && (
        <Paper className="makePicker__content-wrapper">
          {make.map((m) => (
            <React.Fragment key={Math.random().toString()}>
              <Title className="makePicker__content-marginBottom" variant="primary">
                {m.alphabet}
              </Title>
              <List
                fontSize={24}
                className="makePicker__content-marginBottom"
                setClicked={setClicked}
                clicked={clicked?.id}
                list={m.make}
              />
            </React.Fragment>
          ))}
        </Paper>
      )}
    </div>
  );
};
