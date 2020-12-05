import React from 'react';
import { Link } from 'react-router-dom';
import address from './img/address.svg';
import $ from 'jquery';
import phone from './img/phone.svg';
import email from './img/email.svg';
import upload from './img/upload.svg';
import logo from './img/logo.svg';
import fb from './img/fb.svg';
import inst from './img/inst.svg';
import whatsapp from './img/whatsapp.svg';
import lin from './img/lin.svg';
import { useTranslation } from 'react-i18next';

const Footer = (props) => {
  const { t } = useTranslation();

  const changeLanguage = (lang, num) => {
    $('.language-item-mobile').removeClass('act');
    $('.language-item').removeClass('act');
    $('.li-' + num).addClass('act');
    props.changeLanguage(lang);
  };

  const handleChangeLanguage = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className='footer'>
      <div className='footer-bg'></div>
      <div className='top-footer'>
        <div className='colum-3-top-footer'>
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
        </div>
        <div className='colum-3-top-footer'>
          <div className='nav-footer-contacts'>
            <div className='colum-3'>
              <div className='nav-footer-contacts-item'>
                <Link to='/licenses'>
                  <li>{t('Navbar.1')}</li>
                </Link>
              </div>
              <div className='nav-footer-contacts-item'>
                <Link to='/partners'>
                  <li>{t('Navbar.2')}</li>
                </Link>
              </div>
            </div>
            <div className='colum-3'>
              <div className='nav-footer-contacts-item'>
                <Link to='/sing-up'>
                  <li>{t('Navbar.6')}</li>
                </Link>
              </div>
              <div className='nav-footer-contacts-item'>
                <Link to='/reviews'>
                  <li>{t('Navbar.3')}</li>
                </Link>
              </div>
            </div>
            <div className='colum-3'>
              <div className='nav-footer-contacts-item'>
                <Link to='/contacts'>
                  <li>{t('Navbar.4')}</li>
                </Link>
              </div>
              <div className='nav-footer-contacts-item'>
                <Link to='/about-us'>
                  <li>{t('Navbar.5')}</li>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='colum-3-top-footer'>
          <div className='language-and-btn'>
            <div className='btn-footer'>
              <Link to='sing-up'>
                <div className='nav-bar-btn-footer noselect'>
                  <img src={upload} alt='' />
                  {t('Navbar.Btn')}
                </div>
              </Link>
            </div>
            <div className='language-footer'>
              <div className='language-container float-right'>
                <select
                  name='language'
                  onChange={(e) => handleChangeLanguage(e)}
                >
                  <option value='ru'>Русский</option>
                  <option value='uk'>Український</option>
                  <option value='en'>English</option>
                  <option value='de'>Deutsch</option>
                  <option value='po'>Polskie</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-footer'>
        <div className='colum-3'>
          <div className='dummy'>1</div>
        </div>
        <div className='colum-3'>
          <div className='logo'>
            <Link to='/'>
              <img src={logo} alt='' />
            </Link>
          </div>
          <div className='social-media'>
            <li>
              <img src={fb} alt='' />
            </li>
            <li>
              <img src={inst} alt='' />
            </li>
            <li>
              <img src={whatsapp} alt='' />
            </li>
            <li>
              <img src={lin} alt='' />
            </li>
          </div>
          <div className='copyright'>{t('Footer.Copyright')}</div>
        </div>
        <div className='colum-3'>
          <div className='dummy'>1</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
