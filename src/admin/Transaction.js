import React, { useEffect, useState } from 'react'
import AdminNav from './AdminNav'
import baseUrl from '../baseUrl';
import axios from 'axios';


const Transaction = () => {

    const [data, setdata] = useState([])

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        await axios.get(baseUrl + "usersTransaction")
            .then(data => {
                setdata(data.data.data);
                console.log(data.data.data);
            })
            .catch(err => {
                console.log(err);
            })
    };

    return (
        <div>
            <AdminNav />

            
            <div className="card bg-dark mx-auto mt-3 w-90" style={{ color: 'white', overflowX:'auto'  }}>
                <div className="card-block shadow-lg p-4 m-4" id="print">
                    <h2 className="text-center"><b>Transactions</b></h2>  <br />
                    <div className="col-md-12">
                        <table className="table table-hover-white w-100" style={{ color: 'white', fontSize: '18px' }} id="show">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Delivery Address</th>
                                    <th>State Delivery Address</th>
                                    <th >Food </th>
                                    {/* <th>Food Price</th> */}
                                    {/* <th>Quantity</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((post, _id) => (
                                    <tr>
                                        <td>{post.userfirstname}  </td>
                                        <td>{post.homeAddress}</td>
                                        <td>{post.stateAddress}</td>

                                        {post.products.map((product) => (
                                            <>
                                                <td>
                                                    <select>
                                                        <option>{product.price}</option>
                                                        <option>{product.foodname}</option>
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

export default Transaction