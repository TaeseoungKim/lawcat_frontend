import React, { useState } from 'react';
// import styled from 'styled-components';
import axios from 'axios';
import styledcat from '../../images/styledcat.png';
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from 'react-toasts';

const POSTCUTOMMERSERVICE = '';

const CustomerService = () => {
  const [Author, setAuthor] = useState('');
  const [Phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [Title, setTitle] = useState('');
  const [Content, setContent] = useState('');

  const handleAuthor = (e) => {
    setAuthor(e.value);
  };

  const handlePhone = (e) => {
    setPhone(e.value);
  };

  const handleEmail = (e) => {
    setEmail(e.value);
  };

  const handleTitle = (e) => {
    setTitle(e.value);
  };

  const handleContent = (e) => {
    setContent(e.value);
  };

  const onclickSubmit = () => {
    setAuthor('');
    setPhone('');
    setEmail('');
    setTitle('');
    setContent('');
    ToastsStore.info('작성 되었습니다.\n빠른 시일내로 답변드릴게요!');
  };

  return (
    <>
      <div id="cs_container">
        <header id="cd_header">문의 작성</header>

        <div className="cs_th">
          <div className="cs_tag">작성자</div>
          <div className="cs_tag2">
            <input
              className="cs_input"
              value={Author}
              onChange={handleAuthor}
            ></input>
          </div>
        </div>
        <hr className="cs_hr" />

        <div className="cs_th">
          <div className="cs_tag">휴대전화</div>
          <div className="cs_tag2">
            <input
              className="cs_input"
              value={Phone}
              onChange={handlePhone}
            ></input>
          </div>
        </div>
        <hr className="cs_hr" />
        <div className="cs_th">
          <div className="cs_tag">이메일</div>
          <div className="cs_tag2">
            <input
              className="cs_input"
              value={Email}
              onChange={handleEmail}
            ></input>
          </div>
        </div>
        <hr className="cs_hr" />
        <div className="cs_th">
          <div className="cs_tag">제목</div>
          <div className="cs_tag2">
            <input
              placeholder="내용을 입력해주세요."
              className="cs_input"
              value={Title}
              onChange={handleTitle}
            ></input>
          </div>
        </div>
        <hr className="cs_hr" />
        <div id="q_inner" className="cs_th">
          <div className="cs_tag">문의내용</div>
          <div className="cs_tag2">
            <textarea
              placeholder="내용을 입력해주세요."
              className="cs_textarea"
              value={Content}
              onChange={handleContent}
            ></textarea>
          </div>
        </div>
        <div id="cs_submit">
          <p id="cs_text" onClick={onclickSubmit}>
            작성하기
          </p>
          <ToastsContainer
            position={ToastsContainerPosition.BOTTOM_CENTER}
            store={ToastsStore}
          />
        </div>
      </div>
    </>
  );
};

export default CustomerService;
