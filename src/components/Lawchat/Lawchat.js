import React, { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import {
  Chat,
  Channel,
  ChannelHeader,
  ChannelList,
  LoadingIndicator,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from 'stream-chat-react';
import 'stream-chat-react/dist/css/index.css';

import LawchatChannelList from './LawchatChannelList.js';
// import '@stream-io/@stream-io/stream-chat-css/dist/css/index.css';

const userToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZGVsaWNhdGUtcXVlZW4tMyJ9.VptwNgdDAgogyO6bG9y6_CdIi8rc3QcIv1BS7RME59E';

const filters = { type: 'messaging', members: { $in: ['delicate-queen-3'] } };
const sort = { last_message_at: -1 };

const Lawchat = () => {
  const [chatClient, setChatClient] = useState(null);

  const CustomList = (props) => {
    const {
      children,
      error,
      loading,
      LoadingErrorIndicator,
      LoadingIndicator,
    } = props;

    if (error) {
      return <LoadingErrorIndicator type={'connection'} />;
    }

    if (loading) {
      return <LoadingIndicator />;
    }
    // console.log('name!!!!!!!!:', props.children.props.channel.data.name);
    // console.log(
    //   'name!!!!!!!!:',
    //   props.children.props.children.props.channel.data,
    // );

    return (
      <>
        <div>{children}</div>
        {/* <LawchatChannelList children={children}></LawchatChannelList> */}
      </>
    );
  };

  useEffect(() => {
    console.log('client', chatClient);
    const initChat = async () => {
      const client = StreamChat.getInstance('agrd5n72s7ea');

      await client.connectUser(
        {
          id: 'delicate-queen-3',
          name: 'delicate-queen-3',
          image:
            'https://getstream.io/random_png/?id=delicate-queen-3&name=delicate-queen-3',
        },
        userToken,
      );

      const [channelResponse] = await client.queryChannels(filters, sort);

      // await channelResponse.sendMessage({
      //   text: 'Your selected product is out of stock, would you like to select one of these alternatives?',
      // });

      setChatClient(client);
    };

    initChat();
  }, []);

  if (!chatClient) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <div id="App_container">
        <div id="Lawchat_container">
          <Chat client={chatClient} theme="messaging light">
            <div id="Lawchat_ChannelList_container">
              <ChannelList filters={filters} sort={sort} />
            </div>

            <div id="Lawchat_Channel_container">
              <Channel>
                <Window>
                  <ChannelHeader />
                  <MessageList />
                  <MessageInput />
                </Window>
                <Thread />
              </Channel>
            </div>
          </Chat>
        </div>
      </div>
    </>
  );
};

export default Lawchat;
