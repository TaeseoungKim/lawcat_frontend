import React from 'react';
import LawcatProfile from './LawcatProfile.js';

const LawchatChannelList = (props) => {
  return (
    <>
      <div
        id="Lawchat_channelList"
        style={{
          backgroundColor: '#FCFCFC',
        }}
      >
        <LawcatProfile></LawcatProfile>
        <div>{props.children}</div>
      </div>
    </>
  );
};

export default LawchatChannelList;
