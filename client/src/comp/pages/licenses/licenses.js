import React from 'react';
import { useTranslation } from 'react-i18next';
import license from './license.jpg';

const Licenses = () => {
  const { t } = useTranslation();

  return (
    <div className='licenses'>
      <div className='page-title align-left'>Наши лицензии</div>
      <div className='page-container'>
        <div className='license-block'>
          <img src={license} alt='' />
          <div className='file-download-link'>
            <a href='https://fwa.cz/license/license.pdf'>License PDF</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Licenses;
