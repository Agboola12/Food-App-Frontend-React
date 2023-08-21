import axios from 'axios'
import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import AdminLogin from './admin/AdminLogin'
import AdminProfile from './admin/AdminProfile'
import AllUsers from './admin/AllUsers'
import Transaction from './admin/Transaction'
import UserGuard from './guard/UserGuard'
import LandingUser from './LandingUser'
import RegisterUser from './users/RegisterUser'
import UserCart from './users/UserCart'
import UserCheckOut from './users/UserCheckOut'
import UserEditProfile from './users/UserEditProfile'
import UserLogin from './users/UserLogin'
import UserProfile from './users/UserProfile'
import UserHome from './users/UserHome'
import UserLast from './users/UserLast'
import AdminRegister from './admin/AdminRegister'
import AdminGuard from './guard/AdminGuard'
import UserTransaction from './users/UserTransaction'
import AdminChat from './admin/AdminChat'
import ChatMoment from './moment/ChatMoment'


axios.interceptors.request.use((value) =>{
  value.headers = {
    "Authorization" : localStorage.token
  };
  return value;
})


const Routing = () => {
  return (
    <Router>
      {/* <UserNav/> */}
      <Routes>
        <Route path='/' element={<LandingUser/>}/>
        <Route path='/' element={<UserGuard/>}>
        <Route path='user-home' element={ <UserHome/>}/>
         <Route path='user-editprofile' element={<UserEditProfile/>}/>
         <Route path='/user-cart' element={ <UserCart/>} />
         <Route path="/user-transaction" element={<UserTransaction/>}/>
         <Route path='/user-last' element={<UserLast/>}/> 
         <Route path='/user-profile' element={<UserProfile/>}/>
        </Route>

         <Route path='/user-login' element={<UserLogin/>} />
         <Route path='/user-register' element={<RegisterUser/>} />
         <Route path='/user-checkout' element={<UserCheckOut/>} />
          <Route path='/chat-moment' element={<ChatMoment/>}/>
         



            {/* Admin */}
                <Route path='/admin-register' element={<AdminRegister/>} />
                <Route path='/admin-login' element={<AdminLogin/>} />
            <Route path='admin' element={<AdminGuard/>}>
                <Route path='all-users' element={<AllUsers/>} />
                <Route path='admin-profile' element={<AdminProfile/>} />
                {/* <Route path='add-food' element={<AdminFood/>} /> */}
                <Route path='transaction' element={<Transaction/>} />
                <Route path='admin-chat' element={<AdminChat/>} />
            </Route>
      </Routes>
    </Router>
  )
}

export default Routing