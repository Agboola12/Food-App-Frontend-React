import React, { useEffect, useState } from 'react'
import UserNav from './UserNav'
import { useSelector } from 'react-redux';
import axios from 'axios';
import baseUrl from '../baseUrl';

const UserTransaction = () => {
    const [data, setData] = useState([]);
    const { loginUser: user } = useSelector((state) => state.login)
    // console.log(user._id);

    useEffect(() => {
        fetchData();
    }, [user])

    const fetchData = () => {
        const aa = user._id;
        axios.post(baseUrl + "userHistory", { aa }).then(
            res => {
                if (res.data.status) {

                    setData(res.data.data);
                    //   console.log(res.data.data)
                }
            })
            .catch((err) => {
                console.log(err.message);
            }
            )
    }

    return (
        <div>
            <UserNav />
            <div className="card bg-dark mx-auto mt-3 w-90" style={{ color: 'white', overflowX:'auto' }}>
                <div className="card-block shadow-lg p-4 m-4" id="print">
                    <h2 className="text-center"><b>Transactions</b></h2>  <br />
                    <div className="col-md-12">
                        <table className="table table-hover-white w-100" style={{ color: 'white', fontSize: '18px' }} id="show">
                            <thead>
                                <tr>

                                    <th>Card Name</th>
                                    <th>Home Delivery</th>
                                    <th>State Delivery</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>foodname</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((info) => (

                                    <tr>
                                        <td>{info.cardName}</td>
                                        <td>{info.homeAddress}</td>
                                        <td>{info.stateAddress}</td>

                                        {info?.products.map((product) => (
                                            <>
                                                <td>
                                                    <select>
                                                        <option>Price &nbsp;{product.price}</option>
                                                        <option>Name &nbsp;{product.foodname}</option>
                                                        <option> Quantity &nbsp;{product.number}</option>
                                                    </select>
                                                </td>
                                            </>
                                        ))}
                                    </tr>

                                ))}



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserTransaction