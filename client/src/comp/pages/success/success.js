import React from 'react';
import { Row, Col } from 'react-bootstrap';
import arrow from './img/arrow.svg';
import { useTranslation } from 'react-i18next';

const SuccessPage = () => {
  const { t } = useTranslation();

  return (
    <div className='firstpage'>
      <div className='firstscreen'>
        <div className='fs-title'>{t('Success.1')}</div>
        <div className='fs-subtitle'>{t('Success.2')}</div>
      </div>
      <div className='common-block'>
        <Row>
          <Col>
            <div className='block-title'>Полезная инфомарция</div>
          </Col>
        </Row>
        <div className='colum-2'>
          <div className='useful-item-container '>
            <div className='useful-item useful-1'>
              <div className='useful-title'>Права иностранцев</div>
              <div className='useful-text'>
                Каустобиолит, как можно показать с помощью не совсем тривиальных
                вычислений, многопланово деформирует первоначальный
                гирогоризонт.
              </div>
              <div className='more-link-useful noselect'>
                Читать дальше <img src={arrow} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div className='colum-2'>
          <div className='useful-item-container '>
            <div className='useful-item useful-2'>
              <div className='useful-title'>Лицензия</div>
              <div className='useful-text'>
                Каустобиолит, как можно показать с помощью не совсем тривиальных
                вычислений, многопланово деформирует первоначальный
                гирогоризонт.
              </div>
              <div className='more-link-useful noselect'>
                Читать дальше <img src={arrow} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div className='colum-2'>
          <div className='useful-item-container '>
            <div className='useful-item useful-3'>
              <div className='useful-title'>Партнеры</div>
              <div className='useful-text'>
                Каустобиолит, как можно показать с помощью не совсем тривиальных
                вычислений, многопланово деформирует первоначальный
                гирогоризонт.
              </div>
              <div className='more-link-useful noselect'>
                Читать дальше <img src={arrow} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div className='colum-2'>
          <div className='useful-item-container '>
            <div className='useful-item useful-4'>
              <div className='useful-title'>Условия и обязанности</div>
              <div className='useful-text'>
                Каустобиолит, как можно показать с помощью не совсем тривиальных
                вычислений, многопланово деформирует первоначальный
                гирогоризонт.
              </div>
              <div className='more-link-useful noselect'>
                Читать дальше <img src={arrow} alt='' />
              </div>
            </div>
          </div>
        </div>
        <Row>
          <Col>
            <div className='useful-btn-container noselect'>
              <div className='useful-btn-more'>Больше полезной инфомарция</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SuccessPage;
