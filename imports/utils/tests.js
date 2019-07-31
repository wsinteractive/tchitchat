import { Meteor } from 'meteor/meteor';
import Rooms from '/imports/api/rooms';

export default {
  isConnected: () => {
    if (!Meteor.userId()) {
      throw new Meteor.Error('403', 'You must be connected');
    }
  },
  isOwnerOfRoom: ({ userId, roomId }) => {
    const room = Rooms.findOne(roomId);

    if (room.userId !== userId) {
      throw new Meteor.Error('403', 'You must be the owner of room');
    }
  }
}
