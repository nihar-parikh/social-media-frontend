import styled from "styled-components";
// import { signUpUser } from "../redux/apiCalls";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { signUpUser } from "../redux/apicalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: teal;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin-top: 10px;
`;

const Signup = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({});

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  // console.log(userInfo);

  const handleClick = (e) => {
    e.preventDefault();

    console.log(userInfo);
    signUpUser(userInfo, dispatch);
    navigate("/profile");
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            type="text"
            name="name"
            placeholder="name"
            onChange={handleChange}
          />

          <Input
            type="email"
            name="email"
            placeholder="email"
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
        </Form>

        <Agreement>
          By creating an account, I accept the terms and conditions in
          accordance with the <b>PRIVACY POLICY</b>
        </Agreement>
        <Button onClick={handleClick}>CREATE</Button>
      </Wrapper>
    </Container>
  );
};

export default Signup;
