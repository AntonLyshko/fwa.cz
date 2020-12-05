import React, { useState, Fragment } from 'react';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className='about-us'>
      <div className='page-title align-left'>{t('AboutUs.Title')}</div>
      <div className='page-container'>
        <div className='colum-2'>
          <div className='about-us-text'>
            {t('AboutUs.1')}
            <br />
            <br />
            {t('AboutUs.2')}
          </div>
        </div>
        <div className='colum-2'>
          <div className='about-us-text'>{t('AboutUs.3')}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
