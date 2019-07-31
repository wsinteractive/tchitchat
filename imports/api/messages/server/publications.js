import { Meteor } from 'meteor/meteor';
import Messages from '..';

Meteor.publish('messages.lasts_by_roomId', ({ roomId }) => {
  return Messages.find({ roomId }, {
    fields: {
      userId: 1,
      roomId: 1,
      content: 1,
      createdAt: 1,
    },
    sort: { createdAt: 1 },
    limit: 10000,
  });
});
