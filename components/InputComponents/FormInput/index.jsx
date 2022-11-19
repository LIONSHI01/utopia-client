import React, { useState } from 'react';
import { TogglePwButton } from '../../index';
import { InputWrapper } from './index.styles';

// add isPassword, showPassword, setShowPassword props
const FormInputComp = ({
  label,
  fieldName,
  inputType,
  isPasswordBtn,
  ...otherProps
}) => {
  const [showPassword, setShowPassword] = useState(false);
  if (isPasswordBtn) {
    return (
      <InputWrapper>
        {label && <label htmlFor={fieldName}>{label}</label>}
        <div className="pw_input_filed">
          <input
            id={fieldName}
            type={showPassword ? 'text' : 'password'}
            {...otherProps}
          />
          <div className="pw_icon">
            <TogglePwButton
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              size={18}
            />
          </div>
        </div>
      </InputWrapper>
    );
  }

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
