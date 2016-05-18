import { Meteor } from 'meteor/meteor';
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Messages } from '../../collections/messages.js';

class MessagesFromWhatsApp extends React.Component {
  render() {
    return (
      <div>
        <h1>Processing messages from WhatsApp...</h1>
      </div>
    );
  }
}

export default createContainer( () => {
  const messagesHandle = Meteor.subscribe('messages.from-whatsapp');
  const loading = !messagesHandle.ready();
  const messages = Messages.find().fetch();

  if(!loading) {
    _.each(messages, message => {
      $zopim(() => {
        // Force client to send to Zopim
        $zopim.livechat.say(message.body);

        // Mark message as synced
        Meteor.call('messages.sendWhatsApptoZopim', message._id);
      });
    });
  }

  return {
    messages: messages,
    loading: loading
  };
}, MessagesFromWhatsApp);
