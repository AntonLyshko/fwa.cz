import React, { useState } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import check from './img/check.svg';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const WriteForm = () => {
  const { t } = useTranslation();

  const [state, setState] = useState({
    name: '',
    review: '',
  });

  const onChange = async (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSend = async () => {
    $('.thank-review').fadeIn(300);
    let data = {
      name: state.name,
      text: state.review,
    };
    await axios.post('/api/review', data);
    setTimeout(() => {
      $('.thank-review').fadeOut(300);
    }, 5000);
  };

  return (
    <div className='form-bg'>
      <Link to='/reviews'>
        <div className='close-bg'></div>
      </Link>
      <div className='write-form'>
        <div className='thank-review'>
          <img src={check} alt='' />
          <div className='thank-title'>Спасибо за отзыв</div>
          скоро отзыв появится на сайте
        </div>
        <div className='write-form-title'>Написать отзыв</div>
        <form className='review-form'>
          <input
            required
            name='name'
            onChange={(e) => onChange(e)}
            type='text'
            value={state.name}
            placeholder='Ваше имя'
          />
          <textarea
            onChange={(e) => onChange(e)}
            value={state.question}
            placeholder='Ваш отзыв'
            name='review'
            cols='30'
            rows='11'
          ></textarea>
          <div className='form-btn-container'>
            <div className='disclaimer'>
              Отправляя отзыв вы соглашаетесь с <text>Term of Service</text> и{' '}
              <text>Private Policy</text>
            </div>
            <div onClick={() => onSend()} className='form-btn'>
              Отправить
            </div>
          </div>
          <div className='error-alert'>Заполните все обязательные поля</div>
        </form>
      </div>
    </div>
  );
};

export default WriteForm;
