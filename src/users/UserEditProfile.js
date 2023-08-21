import React, { useEffect, useState } from 'react'
import UserNav from './UserNav'
// import ola from '../images/aaa.webp'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import baseUrl from '../baseUrl'


const UserEditProfile = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        phonenumber: "",
        address: ""
    })


    useEffect(() => {
        fetchUser();
    }, [])

    const fetchUser = () => {
        axios.get(baseUrl + "getUser")
            .then(res => {
                if (res.data.success) {
                    setUser(res.data.data)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    const inputIsChanging = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUser({ ...user, [name]: value })
    }

    const editProfile = (_id) => {

        setIsLoading(true);
        axios.patch(baseUrl + `editUser/${_id}`, user).then(res => {
            console.log(user);
            console.log(res);
            setIsLoading(false);
            navigate("/user-profile")
        }).catch(err => {
            console.log(err);
            setIsLoading(false)
        })
    }

    return (
        <div>
            <UserNav />
            <div className='shadow-lg p-3 mb-5 bg-white rounded m-5 mx-auto' style={{ width: '50%' }}>
                <h2 className='text-center'>Edit Profile</h2> <br />
                <div>
                    <form>
                        <div className='row'>
                            <div className='col-md-4 offset-1'>
                                <div className="form-group mt-5">
                                    <img src={user?.imageLink} width="120" className='circle' alt="myFace" />
                                </div><br />
                            </div>
                            <div className='col-md-6'>
                                <div className="form-group m-2">
                                    <label className='mx-5 text-dark'>Firstname </label>
                                    <input type="text" name="firstname" onChange={inputIsChanging} value={user?.firstname} className="border rounded" />
                                </div>
                                <div className="form-group m-2">
                                    <label className='mx-5 text-dark'>Lastname </label>
                                    <input type="text" name="lastname" onChange={inputIsChanging} value={user?.lastname} className="border rounded" />
                                </div>
                                <div className="form-group m-2">
                                    <label className='mx-5 text-dark'>Email</label>
                                    <input type="email" name="email" onChange={inputIsChanging} value={user?.email} className="border rounded" />
                                </div> <br />
                                <div className="form-group m-2">
                                    <label className='mx-5 text-dark'>Phone Number </label>
                                    <input type="text" name="phonenumber" onChange={inputIsChanging} value={user?.phonenumber} className="border rounded" />
                                </div>
                                <div className="form-group m-2">
                                    <label className='mx-5 text-dark'>Address</label>
                                    <input type="text" name="address" onChange={inputIsChanging} value={user?.address} className="border rounded" />
                                </div> <br />
                                <div className="form-group m-2">
                                    <center>
                                        <button type="submit" disabled={isLoading} onClick={() => editProfile(user._id)} name="submit" className="btn btn-success " >
                                            <b>
                                                {isLoading ? "saving..." : "Update"}
                                            </b>
                                        </button>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserEditProfile