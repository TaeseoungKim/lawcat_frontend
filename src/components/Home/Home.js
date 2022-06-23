import { NavLink } from 'react-router-dom';
import homeimg1 from '../../images/home_container1.png';
import homeimg2 from '../../images/home_container2.png';

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
          <div id="Home_experienceBtn">
            <NavLink exact to="/Login" activeClassName="active">
              <div id="Home_experienceBtn2">체험하기</div>
            </NavLink>
          </div>
          <img
            id="home_container_image2"
            src={homeimg2}
            alt="home_container_image2"
          ></img>
        </div>
        <div id="Home_container1_right"></div>
        <img
          id="home_container_image1"
          src={homeimg1}
          alt="home_container_image1"
        ></img>
      </div>
    </>
  );
};

export default Home;
