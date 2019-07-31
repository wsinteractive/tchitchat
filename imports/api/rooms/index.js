import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'simpl-schema';

const Rooms = new Mongo.Collection('rooms');

const RoomSchema = new SimpleSchema({
  ownerId: {
    type: String,
  },
  name: {
    type: String,
    max: 255,
  },
  createdAt: {
    type: Date,
  },
});

Rooms.attachSchema(RoomSchema);

export default Rooms;
