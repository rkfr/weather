import React, { useState, createRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Input.scss';


export const Input = ({
  value,
  onChange,
  onSubmit,
  defaultInputVisibility,
  className,
}) => {
  const [isFocused, setFocus] = useState(false);
  const [isinputVisible, setInputVisibility] = useState(false);

  const inputRef = createRef();
  const focus = () => inputRef.current.focus();

  const handleFocus = () => setFocus(true);

  const handleBlur = () => setFocus(false);

  const handleinputVisibility = () => setInputVisibility(true);

  const handleClick = () => {
    onSubmit();
    handleinputVisibility();
  };

  const containerClass = classNames('control', {
    [className]: className,
  });

  const labelClass = classNames('control__label', {
    'control__label--focused': isFocused || value,
  });

  const inputWrapperClass = classNames('control__input-wrapper', {
    'control__input-wrapper--visible': isinputVisible || defaultInputVisibility,
  });

  const inputClass = classNames('control__input', {
    'control__input--focused': isFocused,
  });


  return (
    <label className={containerClass}>
      <button
        type="button"
        className="control__button draw"
        onClick={handleClick}
      >
        <img
          src="./images/search.svg"
          alt="Search icon"
          className="control__img"
        />
      </button>


      <div
        className={inputWrapperClass}
        onClick={focus}
        role="presentation"
      >

        <p className={labelClass}>Choose city...</p>
        <input
          type="text"
          name="name"
          value={value}
          ref={inputRef}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={inputClass}
        />

      </div>
    </label>
  );
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  className: PropTypes.string,
  defaultInputVisibility: PropTypes.bool,
};

Input.defaultProps = {
  value: '',
  className: '',
  defaultInputVisibility: true,
};
