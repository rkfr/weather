import React from 'react';
import './Loader.scss';

export const Loader = () => (
  <div className="loader__wrapper">
    <div className="loader lds-ripple">
      <div />
      <div />
    </div>
  </div>
);
