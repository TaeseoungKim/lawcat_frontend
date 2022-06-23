import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import LawCatImg from '../../images/lawchat_ai_styledcat.png';
import LoginTest from './LoginTest';
import kakao from '../../images/kakao.png';
const Login = () => {
  const [userId, setUserId] = useState('');

  const handleLoginSubmit = (e) => {
    axios
      .post('http://118.67.130.115/api/signIn', {
        userId: userId,
      })
      .then((e) => {
        console.log(e.data);
        localStorage.setItem('token', e.data.token);
        localStorage.setItem('userId', userId);
        window.location.replace('/');
      });
  };

  const handleUserId = (e) => {
    setUserId(e.target.value);
  };

  return (
    <>
      <div id="Login_container">
        <header>
          <h2 style={{ color: '#091d36' }}>Login</h2>
        </header>
        <form action="" method="POST">
          <div className="Login_input-box">
            <input
              id="username"
              type="text"
              name="username"
              placeholder="아이디"
              value={userId}
              onChange={handleUserId}
            ></input>
            <label htmlFor="username">아이디</label>
          </div>

          <div className="Login_input-box">
            <input
              id="password"
              type="password"
              name="password"
              placeholder="비밀번호"
            ></input>
            <label htmlFor="password">비밀번호</label>
          </div>
          <input
            type="submit"
            value="로그인"
            onClick={handleLoginSubmit}
          ></input>

          {/* <div id="Login_facebook">
              <img id="facebook_img" src={facebook} alt="facebook_img"></img>
              <p id="login_p">페이스북계정으로 로그인</p>
            </div> */}
          <div id="Login_kakao">
            <img id="kakao_img" src={kakao} alt="kakao_img"></img>
            <p id="login_p">카카오 로그인</p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
