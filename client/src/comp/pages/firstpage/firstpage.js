import React, { useState, Fragment, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../loading/loading';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import hww1 from './img/hww-1.png';
import hww2 from './img/hww-2.png';
import hww3 from './img/hww-3.png';
import hww4 from './img/hww-4.png';
import arrow from './img/arrow.svg';
import { useTranslation } from 'react-i18next';
import ReviewComp from '../reviews/comp/review-comp';

const Firstpage = () => {
  const [state, setState] = useState({
    review_loaded: false,
    reviews: [],
  });

  useEffect(() => {
    reviewsRender();
  }, []);

  const reviewsRender = async () => {
    let res = await axios.get('/api/review');
    setState({
      ...state,
      review_loaded: true,
      reviews: res.data,
    });
  };

  const { t } = useTranslation();

  return (
    <div className='firstpage'>
      <div className='common-block'>
        <div className='colum-2'>
          <div className='info-container info-1'>
            <div className='info-title'>{t('Firstpage.Info.1')}</div>
            <Link to='/licenses'>
              <div className='info-btn'>{t('Firstpage.Info.btn')}</div>
            </Link>
          </div>
        </div>

        <div className='colum-2'>
          <div className='info-container info-2'>
            <div className='info-title'>{t('Firstpage.Info.2')}</div>
            <Link to='/partners'>
              <div className='info-btn'>{t('Firstpage.Info.btn')}</div>
            </Link>
          </div>
        </div>
      </div>
      <div className='common-block'>
        <Row>
          <Col>
            <div className='block-title'>{t('Firstpage.HowWeWork.Title')}</div>
          </Col>
        </Row>
        <div className='colum-2'>
          <div className='hww-item-container'>
            <div className='hww-item'>
              <div className='hww-img'>
                <img src={hww1} alt='' />
              </div>
              <div className='hww-text-container'>
                <div className='hww-title'>
                  {t('Firstpage.HowWeWork.1.Title')}
                </div>
                {t('Firstpage.HowWeWork.1.Text')}
              </div>
            </div>
          </div>
        </div>
        <div className='colum-2'>
          <div className='hww-item-container'>
            <div className='hww-item'>
              <div className='hww-img'>
                <img src={hww2} alt='' />
              </div>
              <div className='hww-text-container'>
                <div className='hww-title'>
                  {t('Firstpage.HowWeWork.2.Title')}
                </div>
                {t('Firstpage.HowWeWork.2.Text')}
              </div>
            </div>
          </div>
        </div>
        <div className='colum-2'>
          <div className='hww-item-container'>
            <div className='hww-item'>
              <div className='hww-img'>
                <img src={hww3} alt='' />
              </div>
              <div className='hww-text-container'>
                <div className='hww-title'>
                  {t('Firstpage.HowWeWork.3.Title')}
                </div>
                {t('Firstpage.HowWeWork.3.Text')}
              </div>
            </div>
          </div>
        </div>
        <div className='colum-2'>
          <div className='hww-item-container'>
            <div className='hww-item'>
              <div className='hww-img'>
                <img src={hww4} alt='' />
              </div>
              <div className='hww-text-container'>
                <div className='hww-title'>
                  {t('Firstpage.HowWeWork.4.Title')}
                </div>
                {t('Firstpage.HowWeWork.4.Text')}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='common-block'>
        <Row>
          <Col>
            <div className='block-title'>{t('Firstpage.Review.Title')}</div>
          </Col>
        </Row>
        <div className='review-container'>
          <Fragment>
            {state.review_loaded ? (
              <Fragment>
                <ReviewComp data={state.reviews} amount={4} />
              </Fragment>
            ) : (
              <Fragment>
                <Loading />
              </Fragment>
            )}
          </Fragment>
        </div>
        <Row>
          <Col>
            <div className='reviews-btn-container'>
              <Link to='/reviews/'>
                <div className='review-btn-more noselect'>
                  {t('Firstpage.Review.Btns.1')}
                </div>
              </Link>
              <Link to='/reviews/write-form'>
                <div className='review-btn-write noselect'>
                  {t('Firstpage.Review.Btns.2')}
                </div>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
      <div className='common-block'>
        <Row>
          <Col>
            <div className='block-title'>{t('Firstpage.Useful.Title')}</div>
          </Col>
        </Row>
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
            <div className='useful-item useful-2'>
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
          </div>
        </div>
        <Row>
          <Col>
            <div className='useful-btn-container noselect'>
              <Link to='useful'>
                <div className='useful-btn-more'>
                  {t('Firstpage.Useful.Btn')}
                </div>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Firstpage;
