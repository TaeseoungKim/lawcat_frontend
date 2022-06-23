import React, {useState} from "react"
import styled from "styled-components";
import axios from "axios";

const GETLIST = "";

const CsCard = () => {

  const getList = () => {
    axios.get(GETLIST).then(r => setListContent(r.data))
  }


  return (
      <>
      </>
  );
};

export default CsCard;
