import React, { useState, useCallback } from 'react';
import { Meteor } from 'meteor/meteor';
import { toast } from 'react-toastify';

const MessageForm = ({ roomId }) =>{
  const [content, setContent] = useState("");

  const clearState = () => {
    setContent("");
  };
    

  const update = useCallback((e) => {
    const { name, value } = e.target;
    if (name === "content")
      setContent(value);
  });

  const send = useCallback(() => {
    Meteor.call("messages.create", { roomId, content }, (err) => {
      if (err)
        toast.error(err.reason);
      else
        clearState();
    });
  }, [ content ]);

  return (
    <section>
      <input 
        id="msgInput"
        type="textarea"
        name="content"
        value={content}
        placeholder="Ecrivez votre message ici..."
        onChange={update}
      />
      <button onClick={send}>Envoyer</button>
    </section>
  )
};

export default MessageForm;
