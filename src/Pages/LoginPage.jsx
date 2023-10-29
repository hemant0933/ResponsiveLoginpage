// import React from "react";
import styled from "styled-components";
import login from "../assets/login.svg";

const Box = styled.div`
  width: 100%;
  height: 100vh;
  background: #ffff;
  padding: 3rem 6rem;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Mobile (portrait) ----------- */
  @media only screen 
    and (min-device-width : 320px) 
    and (max-device-width : 480px) {
    flex-direction:column;   
    width:100vh; 
    height:100%;
  }

  @media only screen 
    and (max-width : 320px) {
    // background:red;
    padding: 5%;
 }
    @media (max-width:900px){
        flex-direction:column;  
        padding:0;
        overflow:hidden;
    }
`;

const LeftWrapper = styled.div`
  width: 40%;
  color: white;
  display: flex;
  padding: 4%;
  justify-content: center;
  align-items: center;
  @media only screen 
    and (min-device-width : 320px) 
    and (max-device-width : 480px) {
        display:none;
  }
  @media only screen 
    and (max-width : 320px) {
     display:none;
}
@media (max-width:900px){
    display:none;
}
  
`;
const RightWrapper = styled.div`
  width: 60%;
  height: 100%;
  color: black;
  display: flex;
  padding: 4rem;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  @media only screen 
    and (min-device-width : 320px) 
    and (max-device-width : 480px) {
    border: none;
  }
  @media only screen 
    and (max-width : 320px) {
     border:none;
     width:100%;
     font-size:5%;
}
@media (max-width:900px){
    width:100%;
}
`;

const HeadText = styled.h1`
  font-size: 2rem;
  width: 160px;
  padding: 2rem;
  font-weight: 700;
  line-height: 10px;
  text-align: center;
  margin-bottom: 10px;
`;
const InputHolder = styled.div`
  width: 550px;
  padding: 16px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: left;
  flex-direction: column;
  gap: 25px;
    @media only screen 
    and (max-width : 320px) {
    //  border:none;
    width:100%;
    }

    /* iPads (portrait) ----------- */
    @media only screen 
    and (min-device-width : 768px) 
    and (max-device-width : 1024px) {
    width:100%;
    }

    @media (max-width:900px){
        width:100%;
    }

`;
const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  text-align: left;
  flex-direction: column;
`;
const Label1 = styled.label`
  font-size: 16px;
  font-weight: 500;
  line-height: 10px;
  text-align: left;
  padding: 1rem 0rem;
  @media only screen 
`;
const Label2 = styled.label`
  font-size: 16px;
  line-height: 10px;
  text-align: left;
  color: #737b86;
`;
const Input = styled.input`
  width: 100%;
  color: #737b86;
  font-size: 16px;
  line-height: 10px;
  text-align: left;
  padding: 0.5rem 0.8rem;
  border-radius: 5px;
  border: 0.5px solid black;

  &:hover {
    background-color: #d1d1d1; /* Change the background color on hover */
  }

  &:focus {
    outline: none;
    border: 0.9px solid #737b86;
    // box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const Button = styled.button`
  width: 70%;
  background: #1575a7;
  color: #fff;
  font-size: 16px;
  padding: 0.5rem 0;
  border-radius: 5px;
  border: none;
  cursor:pointer;

  &:hover{
    background:#105478;
  }
`;

const LoginPage = () => {
  return (
    <Box>
      <LeftWrapper>
        <img
          src={login}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          alt="svg"
        />
      </LeftWrapper>
      <RightWrapper>
        <HeadText>Login</HeadText>
        <form>
          <InputHolder>
            <InputWrapper>
              <Label1 htmlFor="loginId">Login ID</Label1>
              <Input type="text" id="loginId" placeholder="Enter Login ID" />
            </InputWrapper>
            <InputWrapper>
              <Label1>Password</Label1>
              <Input type="password" placeholder="Enter Password" />
            </InputWrapper>
            <div 
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "5px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <input type="checkbox" name="rememberme" id="rememberme" />
                <Label2 htmlFor="rememberme">Remember Me</Label2>
              </div>
              <div>
                <a href="#">Change Password</a>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <input type="checkbox" name="Agree" id="Agree" />
              <Label2 htmlFor="Agree">
                Agree to{" "}
                <a href="#" style={{ textDecoration: "underline solid 1px" }}>
                  Terms and Conditions
                </a>
              </Label2>
            </div>

            <Button type="submit">Login</Button>

            <div style={{ display: "flex" }}>
              <p>
                Dont't have an account?{" "}
                <a href="#" style={{ textDecoration: "underline solid 1px" }}>
                  Register Here
                </a>
              </p>
            </div>
          </InputHolder>
        </form>
      </RightWrapper>
    </Box>
  );
};

export default LoginPage;
