import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import baseUrl from '../baseUrl';
import UserNav from './UserNav'

const UserProfile = () => {

    const [user, setUser] = useState({})
    useEffect(() => {
        fetchUser();
    }, [])

    const fetchUser = () => {
        axios.get(baseUrl + "getUser",)
            .then(res => {
                if (res.data.success) {
                    setUser(res.data.data)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>

            <UserNav />
            <div className="card bg-dark mx-auto mt-4" style={{ color: 'white', width: '80%' }}>
                <div className="card-block shadow-lg p-4 m-4" id="print">
                    <h2><center><b>Your Account Information</b></center></h2>  <br />
                    <div className="col-md-12">
                        <table className="table table-hover-white w-100" style={{ color: 'white', fontSize: '18px' }} id="show">
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>{user?.firstname} &nbsp; {user?.lastname}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td> {user?.email}</td>
                                </tr>
                                <tr>
                                    <td>Phone Number</td>
                                    <td> {user?.phonenumber}</td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td>{user?.address}</td>
                                </tr><br />
                            </tbody>
                        </table>
                        <Link to='/user-editprofile' className='btn btn-success '>Edit Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile