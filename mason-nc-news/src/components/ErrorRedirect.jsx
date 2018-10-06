import React from 'react';
import kitten from '../images/404kitten.jpg';
import './styling/ErrorRedirect.css';

const ErrorRedirect = props => {
  return (
    <div>
      <p>PAGE NOT FOUND... sowwy :( </p>
      <img className='kitten' src={kitten} alt="404 kitten" />
    </div>
  );
};


export default ErrorRedirect;