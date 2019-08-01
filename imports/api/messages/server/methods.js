import { Meteor } from 'meteor/meteor';
import tests from '/imports/utils/tests';
import Messages from '..';

Meteor.methods({
  "messages.create": function ({ content, roomId }) {
    tests.isConnected();
    tests.roomExist({
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
