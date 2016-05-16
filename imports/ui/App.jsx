import React from 'react';

export default class App extends React.Component {
  componentDidMount() {
    console.log('Calling zopim API');
    $zopim(() => {
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
      </div>
    );
  }
}
