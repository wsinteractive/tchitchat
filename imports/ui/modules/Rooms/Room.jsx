import React from 'react';
import { Link } from 'react-router-dom';
import ManageRoomsForm from './ManageRoomsForm';

const Room = ({ room, userId }) => (
  <div>
    <article className="roomLink">
      <h4>{room.name}</h4>
      {room.ownerId === userId && (
        <div>
          <ManageRoomsForm roomId={room._id} roomName={room.name} />
        </div>
      )}
      <Link to={`/rooms/${room._id}`}>
                Let's tchat
      </Link>
    </article>
  </div>
);

export default Room;