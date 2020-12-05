import React, { useState, Fragment, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../loading/loading';
import { Link } from 'react-router-dom';
import arrow from './img/arrow.svg';
import { useTranslation } from 'react-i18next';
import Content from './comp/content';

const BlogPage = (props) => {
  const { t } = useTranslation();

  const [state, setState] = useState({
    loaded: false,
    title: '',
    data: [],
  });

  useEffect(() => {
    renderPage();
  }, []);

  const renderPage = async () => {
    let res = await axios.get(`/api/blog/${props.match.params.page}`);
    console.log(res.data);
    setState({
      ...state,
      loaded: true,
      title: res.data.main.title,
      preview: res.data.main.preview,
      data: res.data.data,
    });
  };

  return (
    <div className='blog-page'>
      <div className='page-blog-title'>
        <Fragment>
          {state.title ? (
            <Fragment>{t(state.title)}</Fragment>
          ) : (
            <Fragment></Fragment>
          )}
        </Fragment>
        <Link to='/useful'>
          <div className='back-arrow'>
            <img src={arrow} alt='' />
          </div>
        </Link>
      </div>
      <div className='page-blog-container'>
        <Fragment>
          {state.preview ? (
            <Fragment>
              <img src={require(`${state.preview}`)} alt='' />
            </Fragment>
          ) : (
            <Fragment></Fragment>
          )}
        </Fragment>
        <Fragment>
          {state.loaded ? (
            <Fragment>
              <Content data={state.data} />
            </Fragment>
          ) : (
            <Fragment>
              <Loading />
            </Fragment>
          )}
        </Fragment>
      </div>
    </div>
  );
};

export default BlogPage;
