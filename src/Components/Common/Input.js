import React from 'react';
import { BorderRadius, Colors } from '../../Config/styles';

// NOTE: This is modeled after an autocomplete component I use that uses react-places-autocomplete
const Input = (fieldProps) => {
  const {
    input,
    style,
    options,
    handleSelect,
  } = fieldProps;
  return (
    <div style={{
      textAlign: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      backgroundColor: Colors.white,
      position: 'relative',
      display: 'block',
      height: 54,
      borderRadius: options && options.length > 0 ? BorderRadius.small.top : BorderRadius.small.all,
      borderColor: Colors.transparent,
      alignContent: 'center'
    }}>
      <input
        {...input}
        type="text"
        style={{
          color: Colors.lightGreyText,
          borderColor: Colors.transparent,
          borderRadius: options && options.length > 0 ? BorderRadius.small.top : BorderRadius.small.all,
          alignSelf: 'center',
          alignItems: 'center',
          alignContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: Colors.white,
          fontSize: 14,
          paddingLeft: 10,
          position: 'relative',
          ...style
        }}
      />
      {options && options.length > 0 && (
      <div className="absolute left-0"
        style={{
          top: 54, paddingLeft: 10, paddingRight: 5, width: '100%', borderWidth: 2, borderRadius: BorderRadius.small.bottom, backgroundColor: Colors.white
        }}>
        {options.map(option => (
          <div
            style={styles.optionStyle}
            className="suggestion-item"
            onClick={() => handleSelect(option.id, option.name)}
            onKeyPress={() => handleSelect(option.id, option.name)}
            role="button"
            key={option.id}
      >
            <span
              style={styles.searchText}>
              {option.name}
            </span>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};


export default Input;

const styles = Object.freeze({
  searchText: {
    fontSize: 14,
    lineHeight: 2,
    color: Colors.lightGreyText,
    padding: 10
  },
  optionStyle: {
    cursor: 'pointer',
    textAlign: 'left',
    width: '100%',
  }
});
