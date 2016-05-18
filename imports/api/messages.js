import { Meteor } from 'meteor/meteor';
import { Messages } from '../collections/messages.js';
import { MessageSchema } from '../schemas/message-schema.js';
import { sendZopimToWhatsApp } from '../lib/yowsup/yowsup.js';
import { MESSAGE_TYPES } from '../lib/messages.js';

Meteor.methods({
  'messages.sendZopimToWhatsApp': (message) => {
    // Verify valid message format
    MessageSchema.validate(message);

    // Insert message into DB
    Messages.insert(message);

    // Send message over wire to whatsapp
    sendZopimToWhatsApp();
  },
  'messages.sendWhatsApptoZopim': (messageId) => {
    const message = Messages.findOne(messageId);
    if(message) {
      Messages.update(messageId, {$set: {
        isSynced: true,
        syncedAt: new Date()
      }})
    }
  }
});

Meteor.publish("messages.from-whatsapp", function() {
  return Messages.find({
    type: MESSAGE_TYPES.WHATSAPP_TO_ZOPIM,
    isSynced: false
  });
});
