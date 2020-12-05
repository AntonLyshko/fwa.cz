import React from 'react';
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';

const Firstscreen = () => {
  const { t } = useTranslation();

  return (
    <div className='firstscreen'>
      <div className='fs-text-container'>
        <Fade bottom cascade duration={600}>
          <div>
            <div className='fs-title'>{t('Firstpage.Title.1')}</div>
            <div className='fs-subtitle'>{t('Firstpage.Title.2')}</div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Firstscreen;
