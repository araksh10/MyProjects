import React, { children } from 'react';
import '../styles/Button.css';

const Button = ({children, handle}) => {
  return (
    <div>
      <div className='pushButton' onClick={handle}>
        {children}
      </div>
    </div>
  )
}

export default Button;
