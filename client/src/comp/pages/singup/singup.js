import React, { useState, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';
import { useTranslation } from 'react-i18next';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SingUp = () => {
  const { t } = useTranslation();

  const [state, setState] = useState({
    name: '',
    country: '',
    date: new Date(),
    email: '',
    skills: '',
    exp: '',
    lang: '',
    prefs: '',
    redirect: false,
  });

  const onChange = async (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const dataPicker = (date) => {
    setState({ ...state, date: date });
  };

  const onSend = async () => {
    if (
      state.name.length < 3 ||
      state.country.length < 0 ||
      state.email.length < 5
    ) {
      $('.error-alert').fadeIn(100);
    } else {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const {
        name,
        country,
        date,
        phone,
        email,
        skills,
        exp,
        lang,
        prefs,
      } = state;
      const body = await JSON.stringify({
        name,
        phone,
        country,
        date,
        email,
        skills,
        exp,
        lang,
        prefs,
      });
      await axios.post('/api/email', body, config);
      setState({ ...state, redirect: true });
      $('.error-alert').fadeOut(100);
    }
  };

  return (
    <div className='sing-up-page'>
      <Fragment>
        {state.redirect ? (
          <Fragment>
            <Redirect to='/success' />
          </Fragment>
        ) : (
          <Fragment></Fragment>
        )}
      </Fragment>
      <div className='page-title'>{t('Registration.Title')}</div>
      <div className='page-container'>
        <form className='sing-up-form'>
          <label>
            {t('Registration.Input.1')} <text>*</text>
          </label>
          <input
            required
            name='name'
            onChange={(e) => onChange(e)}
            type='text'
            value={state.name}
            placeholder={t('Registration.Placeholder.1')}
          />
          <label>
            {t('Registration.Input.2')} <text>*</text>
          </label>
          <select required name='country' onChange={(e) => onChange(e)}>
            <option className='placeholder-option'>
              {t('Registration.Country.Title')}
            </option>
            <option value='russia'>{t('Registration.Country.1')}</option>
            <option value='ukraine'>{t('Registration.Country.2')}</option>
          </select>
          <label>
            {t('Registration.Input.3')} <text>*</text>
          </label>
          <DatePicker
            selected={state.date}
            onChange={(date) => dataPicker(date)}
          />
          <label>
            {t('Registration.Input.5')} <text>*</text>
          </label>
          <input
            required
            onChange={(e) => onChange(e)}
            type='text'
            name='email'
            value={state.email}
            placeholder='email'
          />
          <label>{t('Registration.Input.6')}</label>
          <textarea
            onChange={(e) => onChange(e)}
            value={state.exp}
            placeholder={t('Registration.Placeholder.6')}
            name='exp'
            cols='30'
            rows='5'
          ></textarea>
          <label>{t('Registration.Input.7')}</label>
          <textarea
            onChange={(e) => onChange(e)}
            placeholder={t('Registration.Placeholder.7')}
            value={state.skills}
            name='skills'
            cols='30'
            rows='5'
          ></textarea>
          <label>{t('Registration.Input.8')}</label>
          <textarea
            placeholder={t('Registration.Placeholder.8')}
            onChange={(e) => onChange(e)}
            value={state.lang}
            name='lang'
            cols='30'
            rows='5'
          ></textarea>
          <label>{t('Registration.Input.9')}</label>
          <textarea
            placeholder={t('Registration.Placeholder.9')}
            onChange={(e) => onChange(e)}
            value={state.prefs}
            name='prefs'
            cols='30'
            rows='5'
          ></textarea>
          <div className='form-btn-container'>
            <div className='disclaimer'>{t('Registration.Consent')}</div>
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

export default SingUp;
