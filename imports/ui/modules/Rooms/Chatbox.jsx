import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { toast } from 'react-toastify';

// Import Collections
import Messages from '/imports/api/messages';

// Import Components & Template for Messages
import Loader from '/imports/ui/components/Loader';
import MessageForm from './MessageForm';
import Message from './Message';

const Chatbox = ({ roomId, loading, messages }) => {
  const [ roomName, setRoomName ] = useState('');

  useEffect(() => {
    Meteor.call('rooms.name_by_id', { roomId }, (err, result) => {
      if (err)
        toast.error(err.reason)
      else
        setRoomName(result);
    });
  }, [ roomId ]);

  return (
    <section className="chatbox" >
      <h1>Bienvenue dans le salon : "{roomName}"</h1>
      <Loader
        loading={loading}
        render={messages.map(msg =>
          <Message
            key={msg._id}
            owner={msg.userId}
            text={msg.content}
          />
        )}
      />
      <MessageForm roomId={roomId} />
    </section>
  );
}

export default withTracker(({ roomId }) => {
  const messagesPublication = Meteor.subscribe('messages.by_roomId', { roomId });
  const loading = !messagesPublication.ready();
  const messages = Messages.find({ roomId }).fetch();
  return {
    loading,
    messages,
  }
})(Chatbox);
