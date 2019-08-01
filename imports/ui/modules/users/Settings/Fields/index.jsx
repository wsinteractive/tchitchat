import React from 'react';
import Input from '/imports/ui/components/Input';
import fields from './array';

const Fields = ({ update, state }) => {
  return fields.map(field => (
    <Input
      type={field.type}
      key={field.name}
      update={update}
      value={state[field.name]}
      placeholder={field.placeholder}
      name={field.name}
    />
  ))
}

export default Fields;
