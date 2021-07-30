import React, { Dispatch, SetStateAction } from 'react';
import { getAddAdvertModel } from '../../../../Store/ducks/addAdvert/addAdvertSelector';
import { useDispatch, useSelector } from 'react-redux';
import { List, Paper, Title } from 'byh-components';
import './AddAdvertModelPicker.scss';
import { advertDataForDbType } from '../../AddAdvert/AddAdvert';
interface IProps {
  setAdvertDataForDb: Dispatch<SetStateAction<advertDataForDbType | undefined>>;
}
export const AddAdvertModelPicker: React.FC<IProps> = ({ setAdvertDataForDb }) => {
  const [clicked, setClicked] = React.useState<{ name: string; id: number }>();
  const models = useSelector(getAddAdvertModel);
  React.useEffect(() => {
    setAdvertDataForDb((prev) => ({ ...prev, id_car_model: clicked?.id }));
  }, [clicked?.id, setAdvertDataForDb]);
  if (!models) {
    return null;
  }

  return (
    <div style={{ marginBottom: 65 }}>
      <Title type="ultraSmall" variant="primary" style={{ marginBottom: 20 }}>
        3. Выбор модели авто
      </Title>
      <Paper display="grid" className="addAdvertModelPicker__wrapper">
        <List
          distanceBetweenLi={20}
          className="addAdvertModelPicker__list-wrapper"
          fontSize={22}
          clicked={clicked?.id}
          setClicked={setClicked}
          list={models}
        />
      </Paper>
    </div>
  );
};
