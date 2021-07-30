import { List, Paper, Title } from 'byh-components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddAdvertMake } from '../../../../Store/ducks/addAdvert/addAdvertReducer';
import { getAddAdvertMake } from '../../../../Store/ducks/addAdvert/addAdvertSelector';
import './AddAdvertMakePicker.scss';
export const AddAdvertMakePicker = () => {
  const [clicked, setClicked] = React.useState<number>();
  const dispatch = useDispatch();
  const make = useSelector(getAddAdvertMake);

  React.useEffect(() => {
    dispatch(fetchAddAdvertMake());
  }, [dispatch]);
  return (
    <div>
      <Title variant="primary" className="makePicker__content-marginBottom" type="ultraSmall">
        1. Выбор марки автомобиля
      </Title>
      {make && (
        <Paper className="makePicker__content-wrapper">
          {make.map((m) => (
            <>
              <Title className="makePicker__content-marginBottom" variant="primary">
                {m.alphabet}
              </Title>
              <List
                fontSize={24}
                className="makePicker__content-marginBottom"
                setClicked={setClicked}
                clicked={clicked}
                list={m.make}
              />
            </>
          ))}
        </Paper>
      )}
    </div>
  );
};
