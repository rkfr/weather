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
      </div>
    </div>
  );
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  caption: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  defaultInputVisibility: PropTypes.bool,
  onSubmit: PropTypes.func,
};

Input.defaultProps = {
  caption: '',
  value: '',
  className: '',
  defaultInputVisibility: true,
  onSubmit: () => {},
};
