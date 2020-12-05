import React from 'react';
import $ from 'jquery';
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';

const ReviewComp = (props) => {
  const { t } = useTranslation();

  const popUp = (num) => {
    $('.pop-up-review').fadeOut(100);
    $('.bg-close').fadeIn(100);
    $('.pur-' + num).fadeIn(300);
  };

  const bgClose = () => {
    $('.pop-up-review').fadeOut(100);
    $('.bg-close').fadeOut(100);
  };

  const reviews = () => {
    let data = props.data;
    data.splice(3, 99);
    return data.map((item, index) => {
      let theClassName = `pop-up-review pur-${index}`;
      let delay = 100 * index;

      return (
        <Fade bottom cascade delay={delay} duration={600}>
          <div key={index} className='colum-3'>
            <div className='hww-item-container'>
              <div onClick={() => popUp(index)} className='review-item'>
                <div className='review-title'>{item.name}</div>
                <div className='review-text'>{item.text}</div>
                <div className='fader'></div>
              </div>
            </div>
            <div className={theClassName}>
              <div className='pop-up-review-title'>{item.name}</div>
              <div className='pop-up-review-text'>{item.text}</div>
            </div>
          </div>
        </Fade>
      );
    });
  };

  return (
    <div className='review-container'>
      {reviews()}
      <div onClick={() => bgClose()} className='bg-close'></div>
    </div>
  );
};

export default ReviewComp;
