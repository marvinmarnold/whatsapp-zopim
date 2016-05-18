import { Meteor } from 'meteor/meteor';
import { Messages } from '../collections/messages.js';
import { MessageSchema } from '../schemas/message-schema.js';
import { sendZopimToWhatsApp } from '../lib/yowsup.js';

Meteor.methods({
  'messages.sendZopimToWhatsApp': (message) => {
    // Verify valid message format
    MessageSchema.validate(message);

    // Insert message into DB
    Messages.insert(message);

    // Send message over wire to whatsapp
    sendZopimToWhatsApp();
  }
});
