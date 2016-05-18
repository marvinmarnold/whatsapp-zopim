import { MessageSchema } from '../schemas/message-schema.js';

export const Messages = new Mongo.Collection("Messages");
Messages.attachSchema(MessageSchema);
