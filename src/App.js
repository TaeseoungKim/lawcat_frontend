import React from 'react';
import Home from './components/Home/Home.js';
import Lawchat from './components/Lawchat/Lawchat.js';
import LawcatHeader from './components/LawcatHeader/LawcatHeader.js';
import CustomerService from './components/CustomerService/CustomerService.js';
import Login from './components/Login/Login.js';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div id="App_header">
          <LawcatHeader></LawcatHeader>
        </div>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Lawchat/*" element={<Lawchat />}></Route>

          <Route
            path="/CustomerService/*"
            element={<CustomerService />}
          ></Route>
          <Route path="/Login/*" element={<Login />}></Route>
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
