import React from 'react';
import { useTranslation } from 'react-i18next';

const Partners = () => {
  const { t } = useTranslation();

  return (
    <div className='partners'>
      <div className='page-title align-left'>Наши партнеры</div>
      <div className='page-container'></div>
    </div>
  );
};

export default Partners;
