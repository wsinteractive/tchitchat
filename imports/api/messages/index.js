import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'simpl-schema';

const Messages = new Mongo.Collection('message');

const MessageSchema = new SimpleSchema({
  userId: {
    type: String,
  },
  roomId: {
    type: String,
  },
  content: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
});

Messages.attachSchema(MessageSchema);

export default Messages;
