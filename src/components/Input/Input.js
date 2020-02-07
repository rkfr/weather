import React, { useState, createRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Input.scss';


export const Input = ({
  value,
  caption,
  onChange,
  onSubmit,
  defaultInputVisibility,
  className,
  isError,
  errorMessage,
}) => {
  const [isFocused, setFocus] = useState(false);
  const [isinputVisible, setInputVisibility] = useState(false);

  const inputRef = createRef();
  const focus = () => inputRef.current.focus();

  const handleFocus = () => setFocus(true);

  const handleBlur = () => setFocus(false);

  const handleinputVisibility = () => setInputVisibility(true);

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
    'control__input--error': isError,
  });


  return (
    <div className={containerClass}>
      {!isinputVisible && !defaultInputVisibility && (
        <>
          <p className="control__caption">{caption}</p>
          <button
            type="button"
            className="control__button draw"
            onClick={handleinputVisibility}
          >
            <img
              src="./images/search.svg"
              alt="Search icon"
              className="control__img"
            />
          </button>
        </>
      )}

      <div
        className={inputWrapperClass}
        onClick={focus}
        role="presentation"
      >

        <p className={labelClass}>Choose city...</p>
        <form onSubmit={onSubmit}>
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
          <button type="submit" className="control__search-button">
            Search
          </button>
        </form>
        {isError && (
        <p className="control__error">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  caption: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  defaultInputVisibility: PropTypes.bool,
  isError: PropTypes.bool,
  onSubmit: PropTypes.func,
};

Input.defaultProps = {
  caption: '',
  value: '',
  className: '',
  errorMessage: '',
  defaultInputVisibility: true,
  isError: false,
  onSubmit: () => {},
};
