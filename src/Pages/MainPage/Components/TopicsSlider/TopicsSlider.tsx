import React from 'react';
import { Title } from 'byh-components';

import './TopicSlider.scss';

import { CgShapeRhombus } from 'react-icons/cg';
import { topicSliderData } from '../../../../assets/topicData';
import { TopicPreview } from '../../../../Components/TopicPreview';
import { useTranslation } from 'react-i18next';

export const TopicsSlider = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = React.useState<number>(0);
  const length = topicSliderData.length;
  const allNav = Math.round(length / 2);
  const navCount = [];

  for (let i = 0; i < allNav; i++) {
    navCount.push(i);
  }
  const arr: any = [];
  let i,
    j,
    temparray,
    chunk = 2;
  for (i = 0, j = topicSliderData.length; i < j; i += chunk) {
    temparray = topicSliderData.slice(i, i + chunk);
    arr.push(temparray);
  }

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (currentSlide <= allNav - 2) {
        setCurrentSlide(currentSlide + 1);
      } else {
        setCurrentSlide(0);
      }
    }, 15000);

    return () => clearInterval(timer);
  }, [allNav, currentSlide]);

  return (
    <div data-testid="TopicsSlider-wrapper">
      <Title style={{ marginBottom: 20 }} variant="primary" type="medium">
        {t('mainPage:news')}
      </Title>
      <div>
        {arr.map((topic: any, index: number) => {
          if (index === currentSlide) {
            return (
              <div key={index} className={'active__slider'}>
                {topic.map((topic: any, index: any) => {
                  return (
                    <React.Fragment key={index}>
                      <TopicPreview
                        description={topic.description}
                        imageSrc={topic.imageSrc}
                        label={topic.label}
                        mainTag={topic.mainTag}
                        tags={topic.tags}
                      />
                    </React.Fragment>
                  );
                })}
              </div>
            );
          }
          return null;
        })}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {navCount.map((_, index) => {
          return (
            <CgShapeRhombus
              onClick={() => setCurrentSlide(index)}
              className={
                index === currentSlide
                  ? 'topic-slider__rhombus-active'
                  : 'topic-slider__rhombus-default'
              }
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};
