import { Meteor } from 'meteor/meteor';
import tests from '/imports/utils/tests';
import Rooms from '..';

Meteor.methods({
  'rooms.create': function (name) {
    tests.connected();

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
    tests.connected();
    tests.isOwnerOfRoom({
      userId: this.userId,
      roomId: id,
    });

    Rooms.update(id, { $set: { name } });
  },

  'rooms.remove': function (id) {
    tests.connected();
    tests.isOwnerOfRoom({
      userId: this.userId,
      roomId: id,
    });

    Rooms.remove(id);
  },

  'rooms.get': function () {
    tests.connected();

    return Rooms.find({}, {
      sort: { createdAt: -1 },
      limit: 50,
    }).fetch();
  },

  'room.getOne': function (id) {
    tests.connected();

    return Rooms.findOne(id);
  },


  'rooms.last': function () {
    tests.connected();

    return Rooms.findOne({}, {
      sort: { createdAt: -1 },
    });
  },

});
