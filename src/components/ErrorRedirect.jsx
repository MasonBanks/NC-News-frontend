import React from 'react';
import kitten from '../images/404kitten.jpg';

export default function ErrorRedirect(props) {
  return (
    <div className="errorHandler">
      <img className='kitten' src={kitten} alt="404 kitten" />
      <p>{`Error ${props.location.state.code}!`}</p>
      <p>{props.location.state.message}</p>
      <p>Sorry, that page isn't here!</p>
    </div>
  );
};
