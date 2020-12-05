import React, { useState, Fragment, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import WriteForm from './comp/write-form.js';
import ReviewComp from './comp/review-comp';
import { useTranslation } from 'react-i18next';

const Reviews = () => {
  const { t } = useTranslation();

  const [state, setState] = useState({
    loaded: false,
    data: [],
  });

  useEffect(() => {
    reviewsRender();
  }, []);

  const reviewsRender = async () => {
    let res = await axios.get('/api/review');
    let data = res.data;
    setState({
      ...state,
      loaded: true,
      data: data,
    });
  };

  return (
    <div className='useful'>
      <Route path='/reviews/write-form' component={WriteForm} />
      <div className='page-title align-left'>
        Отзывы
        <Link to='/reviews/write-form'>
          <div className='btn-write-review'>Написать отзыв</div>
        </Link>
      </div>
      <div className='page-container'>
        <Fragment>
          {state.loaded ? (
            <Fragment>
              <ReviewComp data={state.data} amount={1} />
            </Fragment>
          ) : (
            <Fragment>Загрузка...</Fragment>
          )}
        </Fragment>
      </div>
    </div>
  );
};

export default Reviews;
