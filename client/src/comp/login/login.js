import React, { useState, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import $ from 'jquery';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation();

  const [state, setState] = useState({
    login: '',
    pass: '',
    redirect: false,
  });

  const onChange = async (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSend = () => {
    setState({ ...state, redirect: true });
  };

  return (
    <div className='login-page'>
      <Fragment>
        {state.redirect ? (
          <Fragment>
            <Redirect to='/' />
          </Fragment>
        ) : (
          <Fragment></Fragment>
        )}
      </Fragment>
      <div className='page-title'>Login</div>
      <div className='page-container'>
        <form className='sing-up-form'>
          <input
            required
            name='login'
            onChange={(e) => onChange(e)}
            type='text'
            value={state.login}
            placeholder='login'
          />
          <input
            required
            onChange={(e) => onChange(e)}
            type='password'
            name='pass'
            value={state.pass}
          />
          <div onClick={() => onSend()} className='btn-login'>
            Send
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
