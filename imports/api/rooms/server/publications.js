import { Meteor } from 'meteor/meteor';
import Rooms from '..';

Meteor.publish('rooms.all', () => {
  return Rooms.find({}, {
    fields: {
      ownerId: 1,
      name: 1,
    },
    sort: { createdAt: 1 },
    limit: 10000,
  });
});
