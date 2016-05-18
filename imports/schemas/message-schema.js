import { MESSAGE_TYPES } from '../libe/messages.js';

export const MessageSchema = new SimpleSchema({
  type: {
    type: String,
    allowedValues: [MESSAGE_TYPES.WHATSAPP_TO_ZOPIM, MESSAGE_TYPES.ZOPIM_TO_WHATSAPP]
  },
  phoneNumber: {
    type: String,
  },
  body: {
    type: String
  },
  contactName: {
    type: String
  },
  isSynced: {
    type: Boolean
  },
  syncedAt: {
    type: Date,
    optional: true
  }
});
