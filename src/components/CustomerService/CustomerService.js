import React, {useState} from "react"
import styled from "styled-components";
import axios from "axios";
import CsCard from "./CsCard";

const POSTCUTOMMERSERVICE = "";

const CustomerService = () => {

  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");

  const handleContent = (e) => {
    setContent(e.value)
  }

  const handleEmail = (e) => {
    setEmail(e.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(POSTCUTOMMERSERVICE, {"content":content, "email": email})
  }

  return (
      <>
        <Container>
          <h1>고객 상담</h1>
          <Form action="" onSubmit={handleSubmit}>
            <ContentTextarea value={content} onChange={handleContent} placeholder="문의 내용" type="text"/> <br/>
            <EmailInput placeholder="이메일" value={email} onChange={handleEmail} type="email"/>
            <SubmitButton type="submit">제출하기</SubmitButton>
          </Form>
        </Container>
      </>
  );
};
const ContentTextarea = styled.textarea`
  width: 40vw;
  height: 40vh;
  font-size: 2em;
`

const EmailInput = styled.input`
  margin-top: 1vh;
  width: 20vw;
  height: 3vh;
  font-size: 2em;

`

const SubmitButton = styled.button`
  width: 10vw;
  margin-left: 10vw;
  height: 3vh;
  font-size: 2em;

`
const Form = styled.div`
  
`

const Container = styled.div`
  margin: 10vh;
`

export default CustomerService;
