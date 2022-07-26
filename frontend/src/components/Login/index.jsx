import React, { useState , useEffect} from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import logo from "./.././../assets/clg.jpg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Index = () => {
  const history = useHistory();
  // const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(()=>{
    const auth= localStorage.getItem('model');
    if(auth){
      history.push('/Timeline')
    }
  })

  const loginuser = async (e) => {
    e.preventDefault();

    let res = await fetch("http://localhost:8000/Login", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
     res = await res.json();
     console.log(res);
     if(res.email){
      localStorage.setItem('model',JSON.stringify(res));
      history.push('/Timeline')
     }else{
      toast.error("Invalid Credentials!!",{
        position:"top-center"
      });
     }
   };
  return (
    <div className="limiter">
      <div className="container-login">
        <div className="wrap-login">
          <form
            className="login-form form-group"
            method="POST"
            onSubmit={loginuser}
          >
            <span className="login-form-title mb-3">
              <h3>
                <u>Log in</u>
              </h3>
            </span>
            <span className="login-form-logo mt-3 mb-3">
              <img className="img-circle" src={logo} alt="logo" />
            </span>
            <div className="wrap-input">
              <input
                className="form-control"
                type="text"
                name="userid"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div className="wrap-input mb-2">
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>
            {/* <h6 className="error text-light mx-3">{this.state.error}</h6> */}
            <div className="login-form-btn text-center">
              <button className="btn btn-light" type="submit" >
                Login
              </button>
              
            </div>
            <div className="text-center mt-2">
              <a className="text-light forgotpassword"  href="/">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Index;
