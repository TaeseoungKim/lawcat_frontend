import React, { useEffect, useState } from 'react';
import styledcat from '../../images/lawchat_ai_styledcat.png';

const LawcatProfile = () => {
  return (
    <>
      <div
        id="Lawchat_lawcat"
        style={{
          margin: '8px 0px',
          padding: '0px',
          backgroundColor: '#FCFCFC',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20px',
          border: '1px solid #c4c4c420',
          boxShadow: '0px 1px 6px 0px rgba(0, 0, 0, 0.12)',

          // box-shadow: ;
          // align-items: 'center'
        }}
      >
        <img
          id="header_lawcat"
          src={styledcat}
          alt="styledcat"
          style={{
            height: '90px',
            width: '80px',
            margin: '20px',
            padding: '0px',
          }}
        ></img>
      </div>
    </>
  );
};

export default LawcatProfile;
