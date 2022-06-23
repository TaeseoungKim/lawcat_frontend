import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import LawCatImg from '../../images/lawchat_ai_styledcat.png';
import LoginTest from './LoginTest';
import kakao from '../../images/kakao.png';
const Login = () => {
  const [userId, setUserId] = useState('');
  const [emptyId, setEmptyId] = useState(false);


  const handleLoginSubmit = (e) => {
    if (!userId) {
      e.preventDefault();
      setEmptyId(true);
      return;
    }

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
        {emptyId ? <H3>아이디를 입력해주세요</H3> : null}

        <div className="Login_input-box">
          <input id="password" type="password" placeholder="비밀번호"></input>
          <label htmlFor="password">비밀번호</label>
        </div>

        {/* <div id="Login_facebook">
              <img id="facebook_img" src={facebook} alt="facebook_img"></img>
              <p id="login_p">페이스북계정으로 로그인</p>
            </div> */}
        <div id="temp_div">
          <p
            id="temp_p"
            onClick={handleLoginSubmit}
            style={{ fontWeight: 'bold', color: '#091d36', margin: '5px' }}
          >
            로그인
          </p>
        </div>
        <p style={{ color: '#091d36', fontSize: '15px' }}>또는</p>
        <div id="Login_kakao">
          <img id="kakao_img" src={kakao} alt="kakao_img"></img>
          <p id="login_kakao_p">카카오 로그인</p>
        </div>
      </div>
    </>
  );
};

const H3 = styled.p`
  color: red;
`;
// const LoginBtn = styled.input`
//   margin: 5px 5px;
//   width: 30px;
//   height: 30px;
// `;
export default Login;
