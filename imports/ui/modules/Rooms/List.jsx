import React, { useMemo } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import ManageRoomsForm from './ManageRoomsForm';

// Import de la collection mongo 'Rooms'
import Rooms from '/imports/api/rooms';

// Import des components d'affichage
import Loader from '/imports/ui/components/Loader';
import Room from './Room';

const List = ({ userId, rooms, loading }) => {
  const { ownedRooms, notOwnedRooms } = useMemo(() => {
    return rooms.reduce((accu, room) => {
      if (room.ownerId === userId ) {
        accu.ownedRooms.push(room);
      } else {
        accu.notOwnedRooms.push(room);
      }
      return accu;
    }, { ownedRooms: [], notOwnedRooms: [] });
  }, [ userId, rooms ]);

  return (
    <div>
      <section>
        <h2>ROOMS</h2>
        <h3>Créer un salon</h3>
        <ManageRoomsForm create='true' />
        <h3>Mes Salons</h3>
        <Loader
          loading={loading}
          render={ownedRooms.map(room =>
            <Room
              key={room._id}
              userId={userId}
              room={room}
            />
          )}
        />
        <h3>Tous les Salons</h3>
        <Loader
          loading={loading}
          render={notOwnedRooms.map(room =>
            <Room
              key={room._id}
              room={room}
            />
          )}
        />
      </section>
    </div>
  )
};

export default withTracker(() => {
  const roomsPublication = Meteor.subscribe('rooms.all');
  const loading = !roomsPublication.ready();
  const rooms = Rooms.find().fetch();
  return {
    userId: Meteor.userId(),
    user: Meteor.user() || {},
    loading,
    rooms,
  }
})(List);
