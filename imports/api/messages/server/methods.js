import { Meteor } from 'meteor/meteor';
import tests from '/imports/utils/tests';
import Messages from '..';

Meteor.methods({
  "message.create": function({ content, roomId }) {
    tests.isConnected();
    tests.isOwnerOfRoom({
      userId: this.userId,
      roomId,
    });
    
    Messages.insert({
      content,
      roomId,
      userId : this.userId,
      createdAt: new Date(),
    });
  }
});
