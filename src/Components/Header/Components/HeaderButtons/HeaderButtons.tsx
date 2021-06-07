import { Button } from 'byh-components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { CgFileDocument } from 'react-icons/cg';
import { RiAccountBoxLine } from 'react-icons/ri';
import './HeaderButtons.scss';
export const HeaderButtons = () => {
  const { t } = useTranslation();

  return (
    <div className="header-buttons" data-testid="header-buttons">
      <Button
        style={{ marginRight: 10 }}
        startIcon={<CgFileDocument />}
        height={35}
        width={237}
        label={t('header:ad')}
        paddingVertical={5}
        paddingHorizontal={10}
        variant="secondary"
        fontSize={18}
      />
      <Button
        startIcon={<RiAccountBoxLine />}
        height={35}
        width={170}
        paddingVertical={5}
        label={t('header:account')}
        variant="secondary"
        fontSize={18}
      />
    </div>
  );
};
