import React from 'react';
import MessagesFromWhatsApp from './components/MessagesFromWhatsApp.jsx';

export default class App extends React.Component {
  componentDidMount() {
    $zopim(() => {
      $zopim.livechat.setOnUnreadMsgs( numMessages =>	{
        $('iframe').each((index, iframeContext) => {

          const messageSelector = '.meshim_widget_widgets_chatLogRenderer_ChatMessage';
          $(messageSelector, iframeContext.contentDocument).each((chatIndex, chatContext) => {
              console.log(chatContext.innerHTML);
          });
        });
      });

      $zopim.livechat.setName(Meteor.settings.public.ZOPIM_CLIENT_NAME);
      $zopim.livechat.setEmail(Meteor.settings.public.ZOPIM_CLIENT_EMAIL);
    });
  }

  handleSay() {
    console.log('saying something');
    $zopim(() => {
      $zopim.livechat.say("This is just a test.")
    });
  }

  render() {
    return (
      <div>
        <h1>Hello Zopim-WhatsApp</h1>
        <button onClick={this.handleSay}>Say something</button>
        <MessagesFromWhatsApp />
      </div>
    );
  }
}
