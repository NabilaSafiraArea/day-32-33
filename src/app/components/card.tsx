import React from 'react';

function Card({children}: any) {
  return (
    <div className='bg-slate-800 text-white rounded'>{children}</div>
  );
}

export default Card;
