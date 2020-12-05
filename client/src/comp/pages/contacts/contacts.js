import React, { useState, Fragment } from 'react';
import $ from 'jquery';
import Fade from 'react-reveal/Fade';
import axios from 'axios';
import address from './img/address.svg';
import phone from './img/phone.svg';
import email from './img/email.svg';
import check from './img/check.svg';
import { useTranslation } from 'react-i18next';

const Сontacts = () => {
  const { t } = useTranslation();

  const [state, setState] = useState({
    name: '',
    email: '',
    question: '',
  });

  const onChange = async (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSend = async () => {
    let name = state.name;
    let email = state.email;
    try {
      if (name.length < 3 || email.length < 6) {
        $('.error-alert').fadeIn(100);
      } else {
        $('.thank-contact').fadeIn(300);
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const { name, email, question } = state;
        const body = await JSON.stringify({
          name,
          email,
          question,
        });
        await axios.post('/api/email', body, config);

        setTimeout(() => {
          $('.thank-contact').fadeOut(300);
        }, 5000);
        $('.error-alert').fadeOut(100);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='contacts'>
      <div className='page-title-col-2 page-title-1'>
        {t('Contacts.Title.1')}
      </div>
      <div className='page-title-col-2 page-title-2'>
        {t('Contacts.Title.2')}
      </div>
      <div className='page-container'>
        <div className='contact-col contact-col-1'>
          <div className='thank-contact'>
            <img src={check} alt='' />
            <div className='thank-title'>{t('Contacts.Thank.1')}</div>
            {t('Contacts.Thank.2')}
          </div>
          <Fade left cascade duration={600}>
            <form className='contact-form'>
              <input
                required
                name='name'
                onChange={(e) => onChange(e)}
                type='text'
                value={state.name}
                placeholder={t('Contacts.Input.1')}
              />
              <input
                required
                onChange={(e) => onChange(e)}
                type='text'
                name='email'
                value={state.email}
                placeholder={t('Contacts.Input.2')}
              />
              <textarea
                onChange={(e) => onChange(e)}
                value={state.question}
                placeholder={t('Contacts.Input.3')}
                name='question'
                cols='30'
                rows='5'
              ></textarea>
              <div className='form-btn-container'>
                <div className='disclaimer'>{t('Contacts.Consent')}</div>
                <div onClick={() => onSend()} className='form-btn'>
                  {t('Contacts.Btn')}
                </div>
              </div>
              <div className='error-alert'>{t('Contacts.Error')}</div>
            </form>
          </Fade>
        </div>
        <div className='contact-col contact-col-2'>
          <Fade right cascade duration={600}>
            <div className='contacts'>
              <li>
                <img src={address} alt='' /> Krakovska 593/19, 11000 Praha 1
              </li>
              <li>
                <img src={phone} alt='' /> +420 771 140 411
              </li>
              <li>
                <img src={email} alt='' /> info@fwa.cz
              </li>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Сontacts;
