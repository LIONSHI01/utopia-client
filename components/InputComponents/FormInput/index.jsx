import React from 'react';

import { InputWrapper } from './index.styles';

const FormInputComp = ({ label, fieldName, inputType, ...otherProps }) => {
  if (inputType === 'textarea') {
    return (
      <InputWrapper>
        {label && <label htmlFor={fieldName}>{label}</label>}
        <textarea id={fieldName} {...otherProps} />
      </InputWrapper>
    );
  }

  return (
    <InputWrapper>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <input id={fieldName} {...otherProps} />
    </InputWrapper>
  );
};

export default FormInputComp;
