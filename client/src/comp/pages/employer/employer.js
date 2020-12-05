import React, { useState, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';
import { useTranslation } from 'react-i18next';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Employer = () => {
  const { t } = useTranslation();

  const [state, setState] = useState({
    company: '',
    email: '',
    vacancy: '',
    desc: '',
    redirect: false,
  });

  const onChange = async (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
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
      const { company, email, vacancy, desc } = state;
      const body = await JSON.stringify({
        company,
        email,
        vacancy,
        desc,
      });
      await axios.post('/api/email', body, config);
      setState({ ...state, redirect: true });
      $('.error-alert').fadeOut(100);
    }
    console.log(state);
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
      <div className='page-title'>{t('Employer.Title')}</div>
      <div className='page-container'>
        <form className='sing-up-form'>
          <label>
            {t('Employer.Input.1')} <text>*</text>
          </label>
          <input
            required
            name='company'
            onChange={(e) => onChange(e)}
            type='text'
            value={state.company}
            placeholder={t('Employer.Input.1')}
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
            <option value='ukraine'>{t('Registration.Country.3')}</option>
            <option value='ukraine'>{t('Registration.Country.4')}</option>
            <option value='ukraine'>{t('Registration.Country.5')}</option>
            <option value='ukraine'>{t('Registration.Country.6')}</option>
          </select>
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
          <label>
            {t('Employer.Input.2')} <text>*</text>
          </label>
          <input
            required
            onChange={(e) => onChange(e)}
            type='text'
            name='vacancy'
            value={state.vacancy}
            placeholder={t('Employer.Input.2')}
          />
          <label>{t('Employer.Input.3')}</label>
          <textarea
            onChange={(e) => onChange(e)}
            value={state.desc}
            placeholder={t('Employer.Input.3')}
            name='desc'
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

export default Employer;
