import React, { useEffect } from 'react'
import UserNav from './UserNav'
import { useSelector } from 'react-redux'
import './UserLast.css'
import baseUrl from '../baseUrl'
import axios from 'axios'



const UserLast = () => {
  const { loginUser: user } = useSelector((state) => state.login)

  useEffect(() => {
    clearCart();
  }, []);

  const clearCart = () => {
    const aa = user._id;
    axios.post(baseUrl + "ClearCart", { aa }).then(
      res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div>
      <UserNav />
      <div>
        <h1 className='congrat'>Congratulation </h1>
        <p className='food'>{user?.firstname} <br />
          Your food has been ordered
        </p>

      </div>
    </div>
  )
}

export default UserLast
