import React, { useEffect, useRef, useState } from 'react'
import UserNav from './UserNav'
import { useNavigate } from 'react-router-dom'
import { Reset, decrease, increase } from '../slices/UserSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import baseUrl from '../baseUrl'
import * as yup from "yup";
import { useFormik } from 'formik'

const UserCart = () => {
    const { loginUser: user } = useSelector((state) => state.login)
    const dispatch = useDispatch();


    const navigate = useNavigate();
    const [total, setTotal] = useState(0);
    const [products, setProducts] = useState([]);
    const [state, setState] = useState(1);
    const { product } = useSelector((state) => state.counter);
    // const [orderDetails, setOrderDetails] = useState({
    //     stateAddress: '',
    //     homeAddress: '',
    //     cardName: '',
    //     creditCard: '',
    //     expiry: '',
    //     cardPassword: '',
    // })

    // const inputChanging = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     setOrderDetails({ ...orderDetails, [name]: value })
    // }

    const add = (i) => setTotal((prev) => prev + i);
    const addProduct = (i) => setProducts((prev) => [...prev, i]);



    const formik = useFormik({
        initialValues: {
            stateAddress: '',
            homeAddress: '',
            cardName: '',
            creditCard: '',
            expiry: '',
            cardPassword: '',
        },
        onSubmit: (values) => {
            const time = new Date();
            const date = time.toLocaleDateString();
            axios.post(baseUrl + "foodOrdered", { ...values, date, products, userId: user._id, userfirstname: user.firstname })
                .then(res => {
                    dispatch(Reset(undefined))
                    navigate("/user-last")
                }).catch(err => {
                    console.log(err);
                })
        },
        validationSchema: yup.object({
            stateAddress: yup
                .string()
                .matches(/^[\w]{3,}$/, "Must be atleast 3 character")
                .required("State Address field is required")
                .min(3, "Must be greater than 2"),
            homeAddress: yup
                .string()
                .matches(/^[\w]{5,}$/, "Must be atleast 3 character")
                .required("Home Address field is required")
                .min(5, "Must be greater than 5"),
            cardName: yup
                .string()
                .matches(/^[\w]{3,}$/, "Must be atleast 3 character")
                .required("Home Address field is required")
                .min(3, "Must be greater than 2"),
            creditCard: yup
                .string()
                .matches(/^[\w]{7,}$/, "Must be atleast 7 character")
                .required("Credit card field is required")
                .max(8, "Credit Card is too long")
                .min(5, "Credit Card is not complete "),
            expiry: yup
                .string()
                .required("Expiry date field is required"),
            cardPassword: yup
                .string()
                .required("Card Password field is required")
                .max(4, "too long")
                .min(2, "too short")

        }),
    })


    return (
        <div>
            <UserNav />
            <div className='container shadow-lg mt-5  mb-5 bg-white rounded text-center'>
                <h2>Your Cart</h2>
                <table class="table table-borderless">
                    <tbody>
                        {
                            product.map((item, index) => (
                                <ChildCart id={item} key={index} add={add} addProduct={addProduct} />
                            ))
                        }

                    </tbody>
                </table>
                <div className='mx-auto m-5'>
                    <input type='text' className="m-2 border- rounded" disabled={true} value={`N${total}`} />
                    <input type='submit' value='Order' data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-success" />
                </div>
            </div>


            {/* modal */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <form onSubmit={formik.handleSubmit}>
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">{state == 1 ? 'Delivery Address' : 'Payment method'}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                {
                                    state == 1 ?
                                        <>
                                            {/* <input type='text' name='stateAddress' value={orderDetails.stateAddress} onChange={inputChanging} className="m-2 rounded-none form-control" placeholder='Enter State Address' /> */}
                                            <input
                                                type="text"
                                                title="Enter your name"
                                                className={
                                                    formik.errors.stateAddress
                                                        ? "form-control my-2 is-invalid"
                                                        : "form-control my-2"
                                                }
                                                name="stateAddress"
                                                placeholder="Enter Your State Delivery"
                                                onChange={formik.handleChange}
                                                value={formik.values.stateAddress}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.stateAddress && (
                                                <small className="text-danger">{formik.errors.stateAddress}</small>
                                            )}
                                            {/* <input type='text' name='homeAddress' value={orderDetails.homeAddress} onChange={inputChanging} className="m-2 rounded-none form-control" placeholder='Enter Home Address' /> */}
                                            <input
                                                type="text"
                                                className={
                                                    formik.errors.homeAddress
                                                        ? "form-control my-2 is-invalid"
                                                        : "form-control mx-auto"
                                                }
                                                name="homeAddress"
                                                placeholder="Enter Home Address"
                                                onChange={formik.handleChange}
                                                value={formik.values.homeAddress}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.touched.homeAddress && (
                                                <small className="text-danger">{formik.errors.homeAddress}</small>
                                            )}

                                        </> :
                                        <div className='container text-center  ' >
                                            <div className="" style={{ border: '1px solid gray' }}>

                                                <div className="form-group my-4 mx-auto">
                                                    {/* <input type="text" className="form-control" name="cardName" value={orderDetails.cardName} onChange={inputChanging} placeholder="Card Name" /> */}
                                                    <input
                                                        type="text"
                                                        className={
                                                            formik.errors.cardName
                                                                ? "form-control my-2 is-invalid"
                                                                : "form-control mx-auto"
                                                        }
                                                        name="cardName"
                                                        placeholder="Enter The Card Name"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.cardName}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                    {formik.touched.cardName && (
                                                <small className="text-danger">{formik.errors.cardName}</small>
                                            )}
                                                </div>
                                                <div className="form-group my-4 mx-auto">
                                                    {/* <input type="number" className="form-control" name="creditCard" value={orderDetails.creditCard} onChange={inputChanging} placeholder="Credit Card Number" /> */}
                                                    <input
                                                        type="number"
                                                        className={
                                                            formik.errors.creditCard
                                                                ? "form-control my-2 is-invalid"
                                                                : "form-control mx-auto"
                                                        }
                                                        name="creditCard"
                                                        placeholder="Enter The Card Number"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.creditCard}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                    {formik.touched.creditCard && (
                                                <small className="text-danger">{formik.errors.creditCard}</small>
                                            )}
                                                    
                                                </div>
                                                <div className="form-group my-4 mx-auto">
                                                    {/* <input type="date" className="form-control" name="expiry" value={orderDetails.expiry} onChange={inputChanging} placeholder="Expriration Date" /> */}
                                                    <input
                                                        type="date"
                                                        className={
                                                            formik.errors.expiry
                                                                ? "form-control my-2 is-invalid"
                                                                : "form-control mx-auto"
                                                        }
                                                        name="expiry"
                                                        placeholder="Enter The Expiry Date"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.expiry}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                    {formik.touched.expiry && (
                                                <small className="text-danger">{formik.errors.expiry}</small>
                                            )}
                                                </div>
                                                <div className="form-group my-4 mx-auto">
                                                    {/* <input type="text" className="form-control" name="cardPassword" value={orderDetails.cardPassword} onChange={inputChanging} placeholder="CVC" /> */}
                                                    <input
                                                        type="number"
                                                        className={
                                                            formik.errors.cardPassword
                                                                ? "form-control my-2 is-invalid"
                                                                : "form-control mx-auto"
                                                        }
                                                        name="cardPassword"
                                                        placeholder="Enter The Card Password"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.cardPassword}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                    {formik.touched.cardPassword && (
                                                <small className="text-danger">{formik.errors.cardPassword}</small>
                                            )}
                                                </div>
                                            </div>
                                        </div>
                                }
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" onClick={() => setState(2)} >Next</button>
                                <button type="button" class="btn btn-secondary" onClick={() => setState(1)} >Back</button>
                                <button type="submit" style={state != 2 ? { display: 'none' } : {}} class="btn btn-success" data-bs-dismiss="modal" aria-label="Close">Order</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default UserCart

const ChildCart = (id) => {
    const dispatch = useDispatch();
    const [data, setdata] = useState();
    const { product } = useSelector((state) => state.counter);
    const { loginUser: user } = useSelector((state) => state.login)
    const ref = useRef(true)

    // console.log();


    useEffect(() => {
        fetchData();
        if (data != undefined && ref.current == true) {
            ref.current = false
            id.add(data.price * id.id.number);
            id.addProduct({
                price: data.price,
                foodname: data.foodname,
                id: id.id.id,
                number: id.id.number,
            })
        }
    }, [data]);

    const fetchData = async () => {
        await axios.get(baseUrl + "userGetFood/" + id.id.id)
            .then(data => {
                setdata(data.data.data);
            })
            .catch(err => {
                console.log(err.message);
            })
    };

    const add = () => {
        dispatch(increase(id.id.id))
        id.add(Number(data.price))
    }
    const minus = () => {
        dispatch(decrease(id.id.id))
        id.add(-Number(data.price))
    }

    const delFood = async () => {
        try {
            let data = product.filter(item => item.id != id.id.id);
            await axios.patch(baseUrl + `delFood/`, { data, userId: user._id })
            fetchData();
            dispatch(Reset(data));
        }
        catch (err) {

        }
    }
    return (

        <tr>
            <td> <img src={data && data.imageLink} alt="m" style={{ height: '4em', width: '4em' }} />     </td>
            <td><b>{data && data.foodname}</b></td>
            <td>
                &nbsp;&nbsp;
                <i className='fa fa-plus' onClick={add}></i> &nbsp;&nbsp;
                <i>{id.id.number}</i>&nbsp;&nbsp;
                <i className='fa fa-minus' onClick={minus}></i>
            </td>
            <td>${data && data.price}</td>
            <td>
                <i className='fa fa-trash' onClick={() => delFood()}></i>
            </td>
        </tr>
    )
}


