import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

const LoginContainer = () => {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  return (
    <Rectangle>
      <h1>Login</h1>
      <Box>
        <span>
          <b>Login ID</b>
        </span>
        <TextBox type="text" placeholder="Enter Login ID" />
      </Box>
      <Box>
        <span>
          <b>Password</b>
        </span>
        <div>
          <TextBox
            type={type}
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={handleToggle}>
            <Icon icon={icon} size={25} />
          </span>
        </div>
      </Box>
      <FootBox>
        <span>
          <input type="checkbox" />
          <label>Remember me</label>
        </span>
        <span>
          <TextButton>Change Password</TextButton>
        </span>
      </FootBox>
      <FootBox>
        <span>
          <input type="checkbox" />
          <label>
            Agree to<TextButton>Terms & Conditions</TextButton>
          </label>
        </span>
      </FootBox>
      <LoginBtn>Login</LoginBtn>
      <NewAc>
        Don't have an account?
        <TextButton>
          <b>Create New Account</b>
        </TextButton>
      </NewAc>
    </Rectangle>
  );
};

const Rectangle = styled.div`
  display: flex;
  flex-direction: column;
  width: 55vw;
  height: 90vh;
  margin-top: 5vh;
  margin-left: 5vw;
  border: 2px solid lightgrey;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 992px) {
    width: 85vw;
    height: 80vh;
    margin-bottom: 10vh;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 40vw;
  margin-top: 3vh;
  @media (max-width: 992px) {
    width: 65vw;
  }
`;

const TextBox = styled.input`
  height: 30px;
  width: 35vw;
  border: 2px solid lightgrey;
  border-radius: 10px;
  margin-top: 5px;
  padding: 5px;
  padding-left: 20px;
  @media (max-width: 992px) {
    width: 50vw;
  }
`;

const FootBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40vw;
  margin-top: 3vh;
  @media (max-width: 992px) {
    width: 55vw;
  }
`;

const TextButton = styled.button`
  border: none;
  background-color: inherit;
  color: orange;
  cursor: pointer;
`;

const LoginBtn = styled.button`
  margin-top: 3vh;
  width: 28vw;
  height: 4vh;
  background-color: blue;
  color: white;
  font-weight: bolder;
  margin-bottom: 3vh;
`;

const NewAc = styled.span`
  font-weight: bold;
`;
export default LoginContainer;
