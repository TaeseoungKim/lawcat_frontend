import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div id="Home_container1">
        <div id="Home_container1_left">
          <h1>
            법률 상담을 <br></br>
            AI 로캣으로 더욱 스마트하게
          </h1>
          법률 고양이 로캣은 법률 상담을 도와주는 AI 챗봇입니다.
          <NavLink exact to="/Lawchat" activeClassName="active">
            <div id="Home_experienceBtn">체험하기</div>
          </NavLink>
        </div>
        <div id="Home_container1_right"></div>
        이미지
      </div>
    </>
  );
};

export default Home;
