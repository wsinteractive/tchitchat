import React from 'react';
import StyledInput from './StyledInput';

const Input = ({ update, ...rest }) => (
  <div>
    <StyledInput
      onChange={(e) =>
        update(e, e.target || {})
      }
      {...rest}
    />
  </div>
);

export default Input;
