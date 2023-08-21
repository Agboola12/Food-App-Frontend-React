import React, { useRef, useState } from 'react'
import AdminNav from './AdminNav'
import axios from 'axios'
import {  useNavigate } from 'react-router';
import baseUrl from '../baseUrl'

const AdminFood = () => {
    const navigate = useNavigate();
    const picture  = useRef()
    const [food, setFood] = useState({
        foodname : "",
        price: "",
        quantity:""
    })

    const FoodChanging = (e) => {
        const name = e.target.name
        const value = e.target.value
        setFood({ ...food, [name]: value })
    }

    const addFood = () => {
           
        const data = new FormData()
        data.append("foodname", food.foodname);
        data.append ("price", food.price);
        data.append("quantity", food.quantity);
        data.append("picture", picture.current.files[0])

        axios.post(baseUrl + "addfood", data)
        .then(res => {
            // console.log(res);
            navigate("/user-dashboard")
        }).catch(err => {
            console.log(err);
        })
    }


    return (
        <div>
            <AdminNav />

            <div className='shadow-lg p-4 mb-5 bg-white rounded m-5 mx-auto' style={{ width: '50%' }}>
                <h2 className='text-center'>Add Food</h2> <br />
                <div>
                    <form>
                    <div className='row'>
                            <div className='col-md-4 offset-1'>
                                <input type='file' ref={picture} name='picture' />
                            </div>
                            <div className='col-md-6'>
                                <div className="form-group m-2">
                                    <label className='mx-5 text-dark'>Food Name </label>
                                    <input type="text" name="foodname" value={food.foodname} onChange={FoodChanging}  className="border rounded" />
                                </div>
                                <div className="form-group m-2">
                                    <label className='mx-5 text-dark'>Price </label>
                                    <input type="number" name="price" value={food.price} onChange={FoodChanging} className="border rounded" />
                                </div>
                                <div className="form-group m-2">
                                    <label className='mx-5 text-dark'>Quantity</label>
                                    <input type="number" name="quantity" value={food.quantity} onChange={FoodChanging} className="border rounded" />
                                </div> <br />
                                <div className="form-group m-2">
                                    <button  onClick={addFood} className='btn btn-success mx-5'>Update</button>
                                </div>
                            </div>
                        </div>



                    </form>
                </div>

            </div>
        </div>
    )
}

export default AdminFood