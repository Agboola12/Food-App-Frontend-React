import axios from 'axios'
import React, { useEffect, useState } from 'react'
import baseUrl from '../baseUrl'
import { Outlet, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setuser } from '../slices/loginSlice';
import { Reset } from '../slices/UserSlice';
import UserChat from '../users/UserChat'

const UserGuard = () => {
    const dispatch = useDispatch();
    const [component, setComponent] = useState(
        <div className='text-center d-flex justify-content-center align-items-center' style={{minHeight:"100vh", top:'50%'}}>
            <div className="spinner-grow text-dark" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.token){
            axios.get(baseUrl + "getUser").then(res => {
                if (res.data.success) {
                    dispatch(setuser(res.data.data));
                    dispatch(Reset(res.data.data.array_of_order))
                    setComponent( <div style={{position:"relative"}}>
                     <UserChat/>
                    <Outlet/>
                     </div>)
                }
            }).catch(err => {
                // if(!err?.response.data.success){
                    // }
                })
            }
            else{
                    navigate("/user-login")
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps

    }, [])

    return component

}


export default UserGuard