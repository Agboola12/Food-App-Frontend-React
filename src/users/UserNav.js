// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
// import baseUrl from '../baseUrl'
import ola from '../images/bg.png'
import './UserNav.css'


const UserNav = () => {
  const navigate = useNavigate();

  const state = useSelector((state) => state.counter)
  const { loginUser: user } = useSelector((state) => state.login)

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/user-login", { replace: true })
  }

  // const userMessage = useRef();

  // const sendMessage = () => {

  // }

  return (
    <div>





      <nav className="navbar navbar-expand-lg navbar-light bg-dark" >
        <div className="container-fluid">
          <img src={ola} width="120" alt="myFace" className='p-3' />

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto" >
              <li className="nav-item">
                <Link className="nav-link text-light" to='/user-home'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to='/user-profile'>Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to='/user-cart'><i className="fas fa-shopping-cart"></i>
                  &nbsp;{state?.product?.length !== 0 && state?.product?.length}
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-light" to='/user-transaction'> Transactions</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link text-light" to='/user-chat'> Chat</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link text-light"> <button className="btn btn-outline-success">Welcome {user?.firstname}</button></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light">  <img src={user.imageLink} width="120" alt="myFace" className='p-3 rounded-circle' /></Link>
              </li>

              <li className="nav-item">
                <p className="nav-link text-light" onClick={logOut} >LogOut</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* modal */}


    </div>
  )
}

export default UserNav