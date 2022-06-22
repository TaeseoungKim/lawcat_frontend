import React, { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import {
  Attachment,
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

const userToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZGVsaWNhdGUtcXVlZW4tMyJ9.VptwNgdDAgogyO6bG9y6_CdIi8rc3QcIv1BS7RME59E';

const filters = { type: 'messaging', members: { $in: ['delicate-queen-3'] } };
const sort = { last_message_at: -1 };

const attachments = [
  {
    image:
      'https://images-na.ssl-images-amazon.com/images/I/71k0cry-ceL._SL1500_.jpg',
    name: 'iPhone',
    type: 'product',
    url: 'https://goo.gl/ppFmcR',
  },
];

const CustomAttachment = (props) => {
  const { attachments } = props;
  const [attachment] = attachments || [];

  if (attachment?.type === 'product') {
    return (
      <div>
        Product:
        <a href={attachment.url} rel="noreferrer">
          <img alt="custom-attachment" height="100px" src={attachment.image} />
          <br />
          {attachment.name}
        </a>
      </div>
    );
  }

  return <Attachment {...props} />;
};

const AIchat = () => {
  const [chatClient, setChatClient] = useState(null);

  useEffect(() => {
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

      await channelResponse.sendMessage({
        text: 'Your selected product is out of stock, would you like to select one of these alternatives?',
        attachments,
      });

      setChatClient(client);
    };

    initChat();
  }, []);

  if (!chatClient) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <div id="AIchat_container">
        <Chat client={chatClient} theme="messaging light">
          <div id="AIchat_ChannelList_container">
            <ChannelList filters={filters} sort={sort} />
          </div>

          <div id="AIchat_Channel_container">
            <Channel Attachment={CustomAttachment}>
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
    </>
  );
};

export default AIchat;
