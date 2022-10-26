import React from 'react';

import { InputWrapper } from './index.styles';

const FormInputComp = ({ label, fieldName, ...otherProps }) => {
  return (
    <InputWrapper>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <input id={fieldName} {...otherProps} />
    </InputWrapper>
  );
};

export default FormInputComp;
