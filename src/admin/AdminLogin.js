import React, { useRef, useState } from 'react'
import ola from '../images/bg.png'
import axios from 'axios'
import baseUrl from '../baseUrl'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const AdminLogin = () => {
    // const navigate = useNavigate();

    // const [user, setUser] = useState({
    //     email: "",
    //     password: "",
    // })

    // const [result,setResult]=useState({
    //     message:'',
    //     status:false
    // })
    // const handleInput = (e) => {
    //     setUser({ ...user, [e.target.name]: e.target.value })
    // }

    
    // const handleLogin = (e) => {
    //     e.preventDefault();
    //     axios.post(baseUrl + "adminLogin", user).then(
    //         res => {
    //             setResult({
    //                 message:res.data.message,
    //                 status:res.data.status
    //             })
    //             navigate("/admin-profile")
    //         }).catch(err => {
    //             console.log(err);
    //         })

    // }

    
    const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)


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
    setIsLoading(true);
    axios.post(baseUrl + "AdminLogin", data).then
    (res => {
        setResult({
            message: res.data.message,
            status: res.data.status
        })
        setIsLoading(false)

        if (res.data.status) {
          localStorage.setItem("token", res.data.token);
          navigate("/admin/admin-profile");
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
                        <strong style={{ color: 'white', width: '50%' }}> Admin</strong>
                    </h1>

                    <center>
                        <img className='iii' src={ola} alt="myFace" />
                    </center>
                    
                    <div className={`alert alert-${result.status?"success":"danger"} text-center text-${result.status?
                        "success":"danger"} d-${result.message?"block":"none"} `}>{result.message}</div>

                    <div id="login">
                        <form method="post" action="" enctype="multipart/form-data">
                            <div className="form-group">
                                <label className='mx-5'>Email </label>
                                <input type="email" name="email" className="form-control mx-auto" ref={email} placeholder="Enter Email" />
                            </div> <br />
                            <div class="form-group">
                                <label className='mx-5'>Password </label>
                                <input type="password" name="password" className="form-control mx-auto" ref={password} placeholder="Enter Valid Password
                            "/>
                            </div>
                            <h5 className='mx-5'>
                <Link className='text-light' to='/admin-register' >Create an account</Link> &nbsp;&nbsp;
                <Link className='text-light h5' to='/' style={{ textDecoration: 'none' }} >home</Link>
              </h5>
                            <div class="form-group">
                                <center>
                                    {/* <input type='submit' value="Login" disabled={isLoading} onClick={handleLogin} className="btn btn-primary m-3 " /> */}
                                    <button type="submit" disabled={isLoading} name="submit" onClick={handleLogin}  className="btn btn-primary m-3" >
                                        <b>
                                            {isLoading ? "LoggingIn..." : "Login"}
                                        </b>
                                    </button>
                                </center>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AdminLogin