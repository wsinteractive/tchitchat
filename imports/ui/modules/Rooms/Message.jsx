import React, { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import { Meteor } from "meteor/meteor";

const Message = ({ text, owner }) => {
  const [ username, setUsername ] = useState('');

  useEffect(() => {
    Meteor.call('users.name_by_id', { id: owner }, (err, result) => {
      if (err)
        toast.error(err.reason);
      else
        setUsername(result);
    });
  }, [ owner ]);

  return(    
    <div className="msgTxt">
      <p>{text}</p>
      <small>{username}</small>
    </div>
  );}

export default Message;
