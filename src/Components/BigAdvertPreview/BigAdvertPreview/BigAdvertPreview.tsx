import { ImageComponent, Paper, Title } from 'byh-components';
import React from 'react';
import { convertKwToHP } from '../../../services/calculateHP';
import {
  translateBodyType,
  translateEngineType,
  translateGearboxType,
  translateStateType,
  translateTransmitionType,
} from '../../../services/carTranslators';
import { numberWithSeparators } from '../../../services/numberWithSeparator';
import { priceFormatter } from '../../../services/priceFormaters';
import './BigAdvertPreview.scss';
import { BigAdvertPreviewProps } from './BigAdvertPreviewTypes';
import { BsPlug } from 'react-icons/bs';
import { BiTrendingUp } from 'react-icons/bi';

export const BigAdvertPreview: React.FC<BigAdvertPreviewProps> = ({ src, car }) => {
  return (
    <Paper className={'bigAdvertPreview__wrapper'}>
      <ImageComponent src={src} width={431} height={267} />
      <div className="bigAdertPreview__content">
        <div style={{ marginBottom: 15 }}>
          <div style={{ marginBottom: '0' }} className="bigAdertPreview__content__leftRightPos">
            <Title>{car.name}</Title>
            <p className="bigAdertPreview__content__year">{car.year} год</p>
          </div>
        </div>
        <div className="bigAdertPreview__content__leftRightPos">
          <p className="bigAdertPreview__content__param">
            {translateEngineType(car.engineType)} / {convertKwToHP(car.power)} л.с
          </p>
          <p className="bigAdertPreview__content__param bigAdertPreview__content__param--bold">
            {translateStateType(car.state)}
          </p>
        </div>
        <div className="bigAdertPreview__content__leftRightPos">
          <p className="bigAdertPreview__content__param">{translateGearboxType(car.gearbox)}</p>
          <p className="bigAdertPreview__content__param bigAdertPreview__content__param--bold">
            {numberWithSeparators(car.mileage)} км
          </p>
        </div>
        <div className="bigAdertPreview__content__leftRightPos">
          <p className="bigAdertPreview__content__param">{translateBodyType(car.carBody)}</p>
        </div>
        <div className="bigAdertPreview__content__leftRightPos">
          <p className="bigAdertPreview__content__param">
            {translateTransmitionType(car.transmissionType)}
          </p>
        </div>
        <div className="bigAdertPreview__content__tagsAndButtons">
          <div className="bigAdertPreview__content__tags">
            {car.engineType === 'electric' && (
              <Paper
                className="bigAdertPreview__content__tagWrapper bigAdertPreview__content__boostTag"
                width={153}
                height={34}
                customBgColor="#00A3FF">
                <BsPlug className="bigAdvertPreview__content__tagIcon" />
                <p className="bigAdertPreview__content___tagText">Электрокар</p>
              </Paper>
            )}
            <Paper
              className="bigAdertPreview__content__tagWrapper bigAdertPreview__content__boostTag"
              width={150}
              height={34}
              customBgColor="#4FFFAA">
              <BiTrendingUp className="bigAdvertPreview__content__tagIcon" />
              <p className="bigAdertPreview__content___tagText">Выгодно</p>
            </Paper>
          </div>
          <Paper
            className="bigAdertPreview__content__tagWrapper"
            width={200}
            height={44}
            customBgColor="#072832">
            <p className="bigAdertPreview__content__price">{priceFormatter(car.price)}</p>
          </Paper>
        </div>
      </div>
    </Paper>
  );
};
