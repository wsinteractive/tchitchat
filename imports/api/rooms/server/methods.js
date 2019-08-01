import { Meteor } from 'meteor/meteor';
import tests from '/imports/utils/tests';
import Rooms from '..';

Meteor.methods({
  'rooms.create': function ({ name }) {
    tests.isConnected();

    const id = Rooms.insert({
      name,
      ownerId: this.userId,
      createdAt: new Date(),
    });

    return Rooms.findOne(id, { fields: {
      name: 1,
      ownerId: 1,
    }});
  },

  'rooms.update': function ({ id, name }) {
    tests.isConnected();
    tests.isOwnerOfRoom({
      userId: this.userId,
      roomId: id,
    });

    Rooms.update(id, { $set: { name } });
  },

  'rooms.remove': function ({ id }) {
    tests.isConnected();
    tests.isOwnerOfRoom({
      userId: this.userId,
      roomId: id,
    });

    // Rooms.remove(id);
  },
 
  'rooms.name_by_id': function ({ roomId }) {
    tests.isConnected();
    const room = tests.roomExist({ roomId });

    return room.name;
  },
});
