import kakao from '../../images/kakao.png';
import facebook from '../../images/facebook.png';

const LoginTest = () => {
  return (
      <>
        <div id="Login_container">
          <header>
            <h2>Login</h2>
          </header>
          <form action="" method="POST">
            <div className="Login_input-box">
              <input
                  id="username"
                  type="text"
                  name="username"
                  placeholder="아이디"
              ></input>
              <label for="username">아이디</label>
            </div>

            <div className="Login_input-box">
              <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="비밀번호"
              ></input>
              <label for="password">비밀번호</label>
            </div>
            <input type="submit" value="로그인"></input>

            {/* <div id="Login_facebook">
              <img id="facebook_img" src={facebook} alt="facebook_img"></img>
              <p id="login_p">페이스북계정으로 로그인</p>
            </div> */}
            <div id="Login_kakao">
              <img id="kakao_img" src={kakao} alt="kakao_img"></img>
              <p id="login_p">카카오계정으로 로그인</p>
            </div>
          </form>
        </div>
      </>
  );
};

export default LoginTest;
