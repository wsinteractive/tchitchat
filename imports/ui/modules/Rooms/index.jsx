import React from 'react';
import Chatbox from './Chatbox';
import List from './List';

const Rooms = ({ match: { params: { roomId } } }) => {
  if (roomId)
    return (<Chatbox roomId={roomId} />)
    
  return (<List />)
};

export default Rooms;
