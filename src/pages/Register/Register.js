import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Register = () => {
  return (
      <div>
        <h1>Create Account</h1>
          <a href='#' className='icon'>
              <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href='#' className='icon'>
              <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href='#' className='icon'>
              <FontAwesomeIcon icon={faInstagram} />
          </a>
      </div>
  );
};



export default Register