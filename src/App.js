import React from 'react';
import Home from './components/Home/Home.js';
import Lawchat from './components/Lawchat/Lawchat.js';
import LawcatHeader from './components/LawcatHeader/LawcatHeader.js';
import Setting from './components/Setting/Setting.js';
import CustomerService from './components/CustomerService/CustomerService.js';
import VideoMeeting from "./components/VideoMeeting/VideoMeeting";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import home from './images/home.png';
import lawchat from './images/lawchat.png';
import setting from './images/setting.png';
import customerservice from './images/customerservice.png';
import CreateRoom from "./components/VideoMeeting/CreateRoom";

const App = () => {
  const MenuBox = [
    { link: '/', title: '홈' },
    { link: '/Lawchat', title: '법률 상담' },
    { link: '/Setting', title: '설정' },
    { link: '/CustomerService', title: '고객문의' },
    { link: '/VideoMeeting', title: '화상 상담' },
  ];

  const returnImgName = (title) => {
    if (title === '홈') {
      return home;
    } else if (title === '법률 상담') {
      return lawchat;
    } else if (title === '설정') {
      return setting;
    } else if (title === '고객문의') {
      return customerservice;
    }
  };

  const MenuList = MenuBox.map((menu, idx) => (
    <li className="App_MenuList" key={idx}>
      <NavLink
        className="App_MenuList_NavLink"
        exact
        to={menu.link}
        activeClassName="active"
      >
        <img
          className="App_MenuList_img"
          src={returnImgName(menu.title)}
          alt={menu.title}
        />
        {menu.title}
      </NavLink>
    </li>
  ));

  return (
    <>
      <BrowserRouter>
        <LawcatHeader></LawcatHeader>
        <div id="App_container">
          <ul className="App_tabs">{MenuList}</ul>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Lawchat/*" element={<Lawchat />}></Route>
            <Route path="/Setting/*" element={<Setting />}></Route>
            <Route
              path="/CustomerService/*"
              element={<CustomerService />}
            ></Route>
            <Route path="/VideoMeeting/*" element={<VideoMeeting />}></Route>
            {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
            <Route path="*" element={<Home />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
