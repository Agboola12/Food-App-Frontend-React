import React, { useRef, useState } from 'react'
import './UserLogin.css'
import ola from '../images/bg.png'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom'
import axios from 'axios'
import baseUrl from '../baseUrl';

const UserLogin = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const [result, setResult] = useState({
    message: "",
    status: false
  })

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      email: email.current.value,
      password: password.current.value
    }

    axios.post(baseUrl + "login", data).then
      (res => {
        
        setResult({
          message: res.data.message,
          status: res.data.success
        })
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          navigate("/user-home")
        }
      }).catch(err => {
        console.log(err.message)
      })

  }


  return (
    <div id="bg-body">

      <div className="container">
        <div className="login-form col-md-6  offset-md-3 card " id='card'>
          <h1 align="center" className='mt-5' id='sign' >
            <strong style={{ color: 'white', width: '50%' }}> Login</strong>
          </h1>
          <center>
            <img className='iii' src={ola} alt="myFace" />
          </center>

          <div className={`alert alert-${result.status ? "success" : "danger"} text-center text-${result.status ? "success" : "danger"} d-${result.message ? "block" : "none"} `}>{result.message}</div>

          <div id="login">
            <form method="post" action="" enctype="multipart/form-data">
              <div className="form-group">
                <label className='mx-5'>Email </label>
                <input type="email" ref={email} name="email" className="form-control mx-auto" placeholder="Enter Email" />
              </div> <br />
              <div class="form-group">
                <label className='mx-5'>Password </label>
                <input type="password" ref={password} name="password" className="form-control mx-auto" placeholder="Enter Valid Password
                            "/>
              </div>
              <h5 className='mx-5'>
                <Link className='text-light' to='/user-register' >Create an account</Link> &nbsp;&nbsp;
                <Link className='text-light h5' to='/' style={{ textDecoration: 'none' }} >home</Link>
              </h5>

              <div class="form-group">
                <center><input type="submit" onClick={handleLogin} name="submit" value="Login" id='bbb' className="btn btn-primary" /></center>
              </div>
            </form>
          </div>
          {/* </div> */}
        </div>
      </div>


    </div>
  )
}

export default UserLogin