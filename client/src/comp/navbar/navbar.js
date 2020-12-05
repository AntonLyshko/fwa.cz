import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Link, Switch, Route } from 'react-router-dom';
import upload from './img/upload.svg';
import logo from './img/logo.svg';
import logoMobile from './img/logo-mobile.svg';
import $ from 'jquery';
import { useTranslation } from 'react-i18next';

const NavBar = (props) => {
  const [state, setState] = useState({
    menuMobile: false,
  });

  const { t, i18n } = useTranslation();

  const menuTrigger = () => {
    let menuMobile = !state.menuMobile;
    setState({ ...state, menuMobile: menuMobile });
    $('.menu-toggle').toggleClass('act');
    $('.mobile-menu').toggleClass('act');
  };

  const menuTriggerBlue = () => {
    let menuMobile = !state.menuMobile;
    setState({ ...state, menuMobile: menuMobile });
    $('.menu-toggle-blue').toggleClass('act');
    $('.mobile-menu').toggleClass('act');
  };

  const handleNavLink = (num) => {
    $('.nav-link-underline').removeClass('act');
    $('.nvl-' + num).addClass('act');
  };

  const handleChangeLanguage = (e) => {
    props.changeLanguage(e.target.value);
  };

  const closeMenu = () => {
    setState({ ...state, menuMobile: false });
    $('.menu-toggle').removeClass('act');
    $('.menu-toggle-blue').removeClass('act');
    $('.mobile-menu').removeClass('act');
  };

  return (
    <div className='navbar_c'>
      <div className='nav-bar-desktop'>
        <div className='nav-top'>
          <div className='nav-top-item float-left'>
            {t('Navbar.TopNavbar.1')}:<text>+420 771 140 411</text>
          </div>
          <div className='nav-top-item float-right'>
            <div className='language-container'>
              <select name='language' onChange={(e) => handleChangeLanguage(e)}>
                <option value='cz'>Český</option>
                <option value='ru'>Русский</option>
                <option value='uk'>Український</option>
                <option value='en'>English</option>
                <option value='de'>Deutsch</option>
                <option value='po'>Polskie</option>
              </select>
            </div>
          </div>
          <div className='nav-top-item float-right employment'>
            <Link to='/employer'>{t('Navbar.TopNavbar.2')}</Link>
          </div>
        </div>
        <div className='nav-bar'>
          <div onClick={() => handleNavLink(0)} className='nav-bar-logo'>
            <Link to='/'>
              <img src={logo} alt='' />
            </Link>
          </div>
          <div className='nav-bar-item'>
            <Link to='/licenses'>
              <div
                onClick={() => handleNavLink(1)}
                className='nav-bar-item-text-container'
              >
                {t('Navbar.1')}
                <div className='nav-link-underline nvl-1'></div>
              </div>
            </Link>
          </div>
          <div className='nav-bar-item'>
            <Link to='/partners'>
              <div
                onClick={() => handleNavLink(2)}
                className='nav-bar-item-text-container'
              >
                {t('Navbar.2')}
                <div className='nav-link-underline nvl-2'></div>
              </div>
            </Link>
          </div>
          <div className='nav-bar-item'>
            <Link to='/reviews'>
              <div
                onClick={() => handleNavLink(3)}
                className='nav-bar-item-text-container'
              >
                {t('Navbar.3')}
                <div className='nav-link-underline nvl-3'></div>
              </div>
            </Link>
          </div>
          <div className='nav-bar-item'>
            <Link to='/contacts'>
              <div
                onClick={() => handleNavLink(4)}
                className='nav-bar-item-text-container'
              >
                {t('Navbar.4')}
                <div className='nav-link-underline nvl-4'></div>
              </div>
            </Link>
          </div>
          <div className='nav-bar-item'>
            <Link to='/about-us'>
              <div
                onClick={() => handleNavLink(5)}
                className='nav-bar-item-text-container'
              >
                {t('Navbar.5')}
                <div className='nav-link-underline nvl-5'></div>
              </div>
            </Link>
          </div>
          <Link to='/sing-up'>
            <div className='nav-bar-btn'>
              <img src={upload} alt='' />
              {t('Navbar.Btn')}
            </div>
          </Link>
        </div>
      </div>
      <div className='nav-bar-mobile'>
        <div className='nav-mobile'>
          <div className='mobile-logo'>
            <Switch>
              <Route exact path='/'>
                <Link to='/'>
                  <img src={logoMobile} alt='' />
                </Link>
              </Route>
              <Route path='/'>
                <Link to='/'>
                  <img src={logo} alt='' />
                </Link>
              </Route>
            </Switch>
          </div>
          <Switch>
            <Route exact path='/'>
              <div onClick={() => menuTrigger()} class='mobile-trigger'>
                <button class='menu-toggle'></button>
              </div>
            </Route>
            <Route path='/'>
              <div onClick={() => menuTriggerBlue()} class='mobile-trigger'>
                <button class='menu-toggle-blue'></button>
              </div>
            </Route>
          </Switch>
        </div>
        <div className='mobile-menu'>
          <div onClick={() => closeMenu()} className='menu-logo'>
            <Link to='/'>
              <img src={logoMobile} alt='' />
            </Link>
          </div>

          <div className='nav-top-mobile'>
            <li>+420 771 140 411</li>
          </div>
          <Fade bottom cascade when={state.menuMobile}>
            <div className='nav-mobile'>
              <div onClick={() => closeMenu()} className='nav-mobile-item'>
                <Link to='/employer'>{t('Navbar.TopNavbar.2')}</Link>
              </div>
              <div onClick={() => closeMenu()} className='nav-mobile-item'>
                <Link to='/licenses'>{t('Navbar.1')}</Link>
              </div>
              <div onClick={() => closeMenu()} className='nav-mobile-item'>
                <Link to='/partners'>{t('Navbar.2')}</Link>
              </div>
              <div onClick={() => closeMenu()} className='nav-mobile-item'>
                <Link to='/reviews'>{t('Navbar.3')}</Link>
              </div>
              <div onClick={() => closeMenu()} className='nav-mobile-item'>
                <Link to='/contacts'>{t('Navbar.4')}</Link>
              </div>
              <div onClick={() => closeMenu()} className='nav-mobile-item'>
                <Link to='/about-us'>{t('Navbar.5')}</Link>
              </div>
            </div>
          </Fade>
          <div className='nav-languages'>
            <div className='language-container'>
              <select name='language' onChange={(e) => handleChangeLanguage(e)}>
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
  );
};

export default NavBar;
