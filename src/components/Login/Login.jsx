import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BgImage, CoveredDiv, FormDiv, FormDivDown, FormDivUp } from "./Login.Styled";

function Login({control}) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [confidential, setConfidential] = useState(JSON.parse(localStorage.getItem("confidential")))

  const SignIn = (e) => {
    e.preventDefault();
    const User = { userName: userName, password: password };
    console.log(User);
    console.log(confidential);
    if ((User["userName"] === confidential["userName"]) && ((User["password"] === confidential["password"]))){
      navigate("/recipes");
      control()
      alert("Welcome to Recipe App :)")
    }else{
      navigate("*");
    };
        
    }
  
  const SignUp = (e) => {
    e.preventDefault();
    const User = { userName: userName, password: password };
  if ((User["userName"]&& User["password"])){
    localStorage.setItem("confidential", JSON.stringify(User))
    alert("You have successfully signed up :) Welcome to Recipe App")
    navigate("/recipes");
    control()
    console.log(confidential);
  }else{
    navigate("*");
  }
   
  };
  useEffect(()=>{
    setUserName(userName)
    setPassword(password)
    setConfidential(confidential)
  },[userName,password,confidential])

  return (
 <>
      <CoveredDiv>
        <h1>Welcome to Recipe App</h1>
        <h5>Please enter your username and password or sign up</h5>
        <FormDiv>
          <form>
            <FormDivUp>
            <input
              type="text"
              id="title"
              placeholder="User name..."
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <input
              type="text"
              id="title"
              placeholder="Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            </FormDivUp>
           <FormDivDown>
           <button type="submit" onClick={SignIn}>
              Sign In
            </button>
          <button type="submit" onClick={SignUp}>
              Sign Up
            </button>
           </FormDivDown>
       
          </form>
        </FormDiv>
        <BgImage src="https://cdn.dribbble.com/users/2556713/screenshots/7569532/media/266e0452b1ce6ebebee6d3d8871d6ddd.gif"/>
        
        

      </CoveredDiv>
    
      </>
  );
}

export default Login;
