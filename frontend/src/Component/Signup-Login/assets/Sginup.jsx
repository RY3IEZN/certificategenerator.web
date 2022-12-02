import React from "react";
import { Link,  useNavigate} from "react-router-dom";
import { useState } from "react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  // AiOutlineUserAdd,
} from "react-icons/ai";
import "./Style.css";
import appleSVG from "./assets/apple.svg";
import googleSVG from "./assets/google.svg";
import cert from "./assets/Cert.png";
import emailSVG from "./assets/email.svg";
import keySVG from "./assets/key.svg";
// import { createNewUser } from "../api";
// import Login from "./Login";
import { signupUser } from "../api";


const Signup = ({ access, setAccess }) => {
  const navigate = useNavigate()
  const [type, setType] = useState("password");
  const [formData, setFormData] = React.useState({
    name: "",
    password: "",
    email: "",
    acceptTerms: false
  });
   

  const [useremail, setUserEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      };
    });
  }

  async function signupUser(email, password) {
    return fetch("https://certify-api.onrender.com/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: email, password: password })
    })
  }
   
  const handleSubmit = async e => {
    e.preventDefault();
    const response = await signupUser(useremail, password);
    const data = await response.json()
    .catch((error) => {
      setError('apiError', {message:error});
    });

    const token = data.token;
    setAccess(token);
    {
      data.token ? navigate("/") : navigate("/signup");
    }
    
    localStorage.setItem("token", token);
    localStorage.setItem("user", data.userId);
  };
 
  return (
    <div>
      <div className="authContainer">
        <div className="formDiv">
          <div id="heading">Welcome to Certgo</div>
          <span id="startGenerating">
            Start generating certificates by creating a Certgo account
          </span>
          <div id="signupG">
            <img alt="" src={googleSVG} id="img_id" />
            <a href="#">Signup using Google</a>
          </div>
          <div id="signupA">
            <img alt="" src={appleSVG} id="img_id" />
            <a href="#">Signup using Apple</a>
          </div>
          <div id="hrLine">
            <span id="or">or</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div id="email">
              <img alt="" src={emailSVG} />
              <input
                className="email_input"
                placeholder=" Email"
                type="text"
                required
                name="email"
                value={useremail}
                onChange={e => setUserEmail(e.target.value)}
              ></input>
            </div>
            <div id="pwd">
              <img alt="" src={keySVG} />
              <input
                id="input_id"
                placeholder="Create a password"
                type= "text"
                required
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <span onClick={handleToggle}>
                {type === "text" ? (
                  <AiOutlineEye size={25} className="eye" />
                ) : (
                  <AiOutlineEyeInvisible size={25} className="eye" />
                )}
              </span>
            </div>
            {error && <p className="login-error">Invalid Email or Password</p> }
            <div id="checkTerms">
              <input
                type="checkbox"
                id="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                name="acceptTerms"
              />
              <div className="termsOfUse">
                By creating an account, I declare that I have read and accepted
                Certawi’s <span id="coloredTerms"> Terms of Use</span> and
                <span id="coloredTerms"> Privacy Policy</span>
              </div>
            </div>
            <input
              type="submit"
              id="btn"
              value="Create Account"
              onClick={handleSubmit}
            />
          </form>
          <p className="haveAccount">
            Already have an account?{" "}
            <Link to="/login" id="coloredTerms">
              Login
            </Link>
          </p>
        </div>
        <div className="emptySpace">
          <img className="cert_img" alt="" src={cert} />
        </div>
      </div>
    </div>
   );
};
export default Signup;
