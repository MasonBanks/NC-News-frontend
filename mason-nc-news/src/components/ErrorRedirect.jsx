import React from 'react';
import kitten from '../images/404kitten.jpg';
import './styling/ErrorRedirect.css';

export default function ErrorRedirect({ props }) {
  return (
    <div>
      <p>{`${props}`}</p>
      <img className='kitten' src={kitten} alt="404 kitten" />
    </div>
  );
};
