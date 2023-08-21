import React from 'react'
import AdminNav from './AdminNav'
import ola from '../images/aaa.webp'
import { Link } from 'react-router-dom'

const EditProfile = () => {
    return (
        <div>
            <AdminNav />

            <div className='shadow-lg p-4 mb-5 bg-white rounded m-5 mx-auto' style={{ width: '70%' }}>
                <h2 className='text-center'>Edit Profile</h2> <br />
                <div>
                    <form>
                        <div className='row'>
                            <div className='col-md-4 offset-1'>
                                <div className="form-group mt-5">
                                    <img src={ola} width="120" className='circle' alt="myFace" />
                                </div><br />
                                <input type='file' name='picture' />
                            </div>
                            <div className='col-md-6'>
                                <div className="form-group m-2">
                                    <label className='mx-5 text-dark'>Firstname </label>
                                    <input type="text" name="lastname" className="border rounded" />
                                </div>
                                <div className="form-group m-2">
                                    <label className='mx-5 text-dark'>Lastname </label>
                                    <input type="email" name="email" className="border rounded" />
                                </div>
                                <div className="form-group m-2">
                                    <label className='mx-5 text-dark'>Email</label>
                                    <input type="email" name="email" className="border rounded" />
                                </div> <br />
                                <div className="form-group m-2">
                                    <Link to='/admin-profile' className='btn btn-success mx-5'>Update</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditProfile