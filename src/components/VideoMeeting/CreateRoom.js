import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const CreateRoom = () => {

  const createRoom = () => {
    console.log("asdasd");
  }

  return (
      <>
          <Link onClick={createRoom} to={'/VideoMeeting'}>aaaaaa</Link>
      </>
  )
}

const MakeVideoRoom = styled.button`
  
`

export default CreateRoom;