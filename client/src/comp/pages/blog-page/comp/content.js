import React, { useState, Fragment } from 'react';
import { useTranslation } from 'react-i18next';

const Content = (props) => {
  const { t } = useTranslation();
  const content = () => {
    let data = props.data;
    console.log(data);
    return data.map((item, index) => {
      return (
        <div key={index} className='acticle'>
          <Fragment>
            {item.img ? (
              <Fragment>
                <img src={require(`${item.img}`)} alt='' />
              </Fragment>
            ) : (
              <Fragment></Fragment>
            )}
          </Fragment>
          <Fragment>
            {item.li ? (
              <Fragment>
                <li className='acticle-li'>{t(`${item.li}`)}</li>
              </Fragment>
            ) : (
                <Fragment></Fragment>
              )}
          </Fragment>
          <Fragment>
            {item.title ? (
              <Fragment>
                <div className='acticle-title'>{t(`${item.title}`)}</div>
              </Fragment>
            ) : (
              <Fragment></Fragment>
            )}
          </Fragment>
          <Fragment>
            {item.text ? (
              <Fragment>
                <div className='acticle-text'>{t(`${item.text}`)}</div>
              </Fragment>
            ) : (
                <Fragment></Fragment>
              )}
          </Fragment>
        </div>
      );
    });
  };
  return <div className='blog-content'>{content()}</div>;
};

export default Content;
