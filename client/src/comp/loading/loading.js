import React from 'react';
import anim from './img/loading.svg';

const Loading = () => {
  return (
    <div className='loading'>
      <img src={anim} alt='' />
    </div>
  );
};

export default Loading;
