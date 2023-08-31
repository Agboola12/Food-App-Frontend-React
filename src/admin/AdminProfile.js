import React, { useEffect, useState } from 'react'
import AdminNav from './AdminNav'
import { useSelector } from 'react-redux'

const AdminProfile = () => {

  const { loginAdmin:user}  = useSelector((state) => state.admin)

    return (
        <div>
            <AdminNav />
            <div className="card bg-dark mx-auto mt-4" style={{color: 'white',width:'80%', overflowX:'auto'}}>
                <div className="card-block shadow-lg p-4 m-4" id="print">
                    <h2><center><b>Your Account Information</b></center></h2>  <br />
                    <div className="col-md-12">
                        <table className="table table-hover-white w-100" style={{color:'white', fontSize: '18px'}} id="show">
                            <tbody>
                                
                                <tr>
                                    <td>Name</td>
                                    <td>{user?.firstname}</td>
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
                                </tr><br/>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdminProfile