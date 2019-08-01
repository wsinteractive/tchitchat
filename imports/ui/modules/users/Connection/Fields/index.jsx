import React from 'react';
import fields from './array';
import Input from '/imports/ui/components/Input';

const Fields = ({ update, state }) => {
  return fields.map(field => (
    <Input
      type={field.type}
      key={field.name}
      update={update}
      value={state[field.name]}
      placeholder={field.placeholder}
      name={field.name}
      color={field.color}
    />
  ))
}

export default Fields;
