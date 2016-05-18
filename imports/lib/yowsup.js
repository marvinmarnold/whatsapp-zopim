import { Messages } from '../collections/messages.js';
import { MESSAGE_TYPES } from './messages.js';

export function sendZopimToWhatsApp() {
  const messages = Messages.find({
    type: MESSAGE_TYPES.ZOPIM_TO_WHATSAPP,
    isSynced: false
  });

  _.each(messages, message => {
    console.log('Send message');
    // send message using python script
    // set as sent
  });
}
