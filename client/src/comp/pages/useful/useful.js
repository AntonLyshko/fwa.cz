import React from 'react';
import { Link } from 'react-router-dom';
import arrow from './img/arrow.svg';
import { useTranslation } from 'react-i18next';

const Useful = () => {
  const { t } = useTranslation();

  return (
    <div className='useful'>
      <div className='page-title align-left'>Полезная информация</div>
      <div className='page-container'>
        <div className='colum-2'>
          <div className='useful-item-container '>
            <Link to='/blog/rights-of-foreigners'>
              <div className='useful-item useful-1'>
                <div className='useful-text-container'>
                  <div className='useful-title'>
                    {t('Firstpage.Useful.1.Title')}
                  </div>
                  <div className='useful-text'>
                    {t('Firstpage.Useful.1.Text')}
                  </div>
                  <div className='more-link-useful noselect'>
                    {t('Firstpage.Review.More')} <img src={arrow} alt='' />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className='colum-2'>
          <div className='useful-item-container '>
            <Link to='/'>
              <div className='useful-item useful-3'>
                <div className='useful-text-container'>
                  <div className='useful-title'>
                    {t('Firstpage.Useful.2.Title')}
                  </div>
                  <div className='useful-text'>
                    {t('Firstpage.Useful.2.Text')}
                  </div>
                  <div className='more-link-useful noselect'>
                    {t('Firstpage.Review.More')} <img src={arrow} alt='' />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className='colum-2'>
          <div className='useful-item-container '>
            <Link to='/licenses'>
              <div className='useful-item useful-2'>
                <div className='useful-text-container'>
                  <div className='useful-title'>{t('Firstpage.Info.1')}</div>
                  <div className='useful-text'></div>
                  <div className='more-link-useful noselect'>
                    {t('Firstpage.Review.More')} <img src={arrow} alt='' />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className='colum-2'>
          <div className='useful-item-container '>
            <Link to='/partners'>
              <div className='useful-item useful-4'>
                <div className='useful-text-container'>
                  <div className='useful-title'>{t('Firstpage.Info.2')}</div>
                  <div className='useful-text'></div>
                  <div className='more-link-useful noselect'>
                    {t('Firstpage.Review.More')} <img src={arrow} alt='' />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Useful;
