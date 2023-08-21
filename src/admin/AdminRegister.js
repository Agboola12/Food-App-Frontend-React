import React, { useRef, useState } from 'react'
import ola from '../images/bg.png'
import aa from './AdminRegister.module.css'
import { useNavigate } from 'react-router';
import axios from 'axios';
import baseUrl from '../baseUrl';
import { Link } from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from "yup";

function AdminRegister() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    let lower = new RegExp(`(?=.*[a-z])`);
    let upper = new RegExp(`(?=.*[A-Z])`);
    let number = new RegExp(`(?=.*[0-9])`);
    let length = new RegExp(`(?=.{8,})`);
    const [Error, setError] = useState("");
    const toggle = useRef();
    const password = useRef();
    const i = useRef();
    const showHide = () => {
        if (password.current.type === "password") {
            password.current.setAttribute("type", "text");
            toggle.current.classList.add("hide");
            i.current.classList = "fa fa-eye-slash";
        } else {
            password.current.setAttribute("type", "password");
            i.current.classList = "fa fa-eye";
            toggle.current.classList.remove("hide");
        }
    };
    const formik = useFormik({
        initialValues: {
            firstname: "",
            email: "",
            phonenumber: "",
            address: "",
            password: "",
        },
        onSubmit: (values) => {
            console.log(values);
            setIsLoading(true);
            axios.post(baseUrl + "adminRegister", values).then(
                res => {
                    if (res.data.status) {
                        // console.log(res);
                        setIsLoading(false)
                        navigate("/admin-login")
                    }
                    else {
                        setError(res.data.message);
                    }
                    setResult({
                        message: res.data.message,
                        status: res.data.status
                    })
                })
                .catch((err) => {
                    console.log(err.message);
                });
        },
        onReset: (values) => {
            console.log(values);
        },
        validationSchema: yup.object({
            firstname: yup
                .string()
                .matches(/^[\w]{3,}$/, "Must be atleast 3 character")
                .required("Name field is required")
                .min(3, "Must be greater than 3"),

            email: yup
                .string()
                .email("Must be an email")
                .required("Email field is required")
                .min(5, "Must be greater than 5"),
            address: yup
                .string()
                // .matches(/^[\w]{7,}$/, "Must be atleast 7 character")
                // .matches("Must be atleast 7 character")
                .required("Address field is required")
                .min(5, "Must be greater than 6"),
            phonenumber: yup
                .string()
                .required("required")
                .matches(phoneRegExp, 'Phone number is not valid')
                .min(10, "too short")
                .max(10, "too long"),
            password: yup
                .string()
                .matches(lower, "Must include lowercase character")
                .matches(upper, "Must include uppercase character")
                .matches(number, "Must include number")
                .matches(length, "Must be atleast 8 character")
                .required("This field is required")
                .min(6, "Must be greater than 6"),
        }),
    });


    // const [user, setUser] = useState({
    //     firstname : "",
    //     email:"",
    //     password: "",
    //     phonenumber: "",
    //     address: ""
    // })

    const [result, setResult] = useState({
        message: "",
        status: false
    })

    // const inputIsChanging = (e) => {
    //     const name = e.target.name
    //     const value = e.target.value
    //     setUser({ ...user, [name]: value })
    // }

    // const sendAdmin=()=>{

    //     setIsLoading(true);
    //         axios.post(baseUrl + "adminRegister", user).then(
    //             res => {
    //                 setResult({
    //                     message: res.data.message,
    //                     status: res.data.status
    //                 })
    //             // console.log(res);
    //             setIsLoading(false)
    //             navigate("/admin-login")
    //         }).catch(err => {
    //             console.log(err);
    //             setIsLoading(false)
    //         })
    // }


    return (
        <div className={aa.bg}>
            <div className="container">
                <div className="login-form col-md-6  offset-md-3 card " id='card'>
                    <center>
                        <img className='iii' src={ola} alt="myFace" />
                    </center>
                    <p>
                        <b className="text-danger">{Error}</b>
                    </p>
                    <div className={`alert alert-${result.status ? "success" : "danger"} text-center text-${result.status ?
                        "success" : "danger"} d-${result.message ? "block" : "none"} `}>{result.message}</div>

                    <div id="register">
                        <form onSubmit={formik.handleSubmit}>

                            <div className="form-group">
                                <label className='mx-5'>Name </label>
                                {/* <input type="text" name="firstname" value={user.firstname} onChange={inputIsChanging}  className="form-control mx-auto" placeholder="Enter your name" /> */}
                                <input
                                    type="text"
                                    title="Enter your name"
                                    className={
                                        formik.errors.firstname
                                            ? "form-control my-2 is-invalid"
                                            : "form-control my-2"
                                    }
                                    name="firstname"
                                    placeholder="Enter Your Name"
                                    onChange={formik.handleChange}
                                    value={formik.values.firstname}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.firstname && (
                                    <small className="text-danger">{formik.errors.firstname}</small>
                                )}
                            </div>

                            <div className="form-group">
                                <label className='mx-5'>Email </label>
                                {/* <input type="email" name="email" value={user.email} onChange={inputIsChanging} className="form-control mx-auto" placeholder="Enter Email" /> */}
                                <input
                                    type="email"
                                    className={
                                        formik.errors.email
                                            ? "form-control my-2 is-invalid"
                                            : "form-control my-2"
                                    }
                                    name="email"
                                    placeholder="Email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && (
                                    <small className="text-danger">{formik.errors.email}</small>
                                )}
                            </div>
                            <div className="form-group">
                                <label className='mx-5'>Address </label>
                                {/* <input type="text" name="address" value={user.address} onChange={inputIsChanging} className="form-control mx-auto" placeholder="Enter Contact Addre" /> */}
                                <input
                                    type="text"
                                    className={
                                        formik.errors.address
                                            ? "form-control my-2 is-invalid"
                                            : "form-control my-2"
                                    }
                                    name="address"
                                    placeholder="Enter Your Address"
                                    onChange={formik.handleChange}
                                    value={formik.values.address}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.address && (
                                    <small className="text-danger">{formik.errors.address}</small>
                                )}
                            </div>
                            <div className="form-group">
                                <label className='mx-5'>Phone Number </label>
                                {/* <input type="number" name="phonenumber" value={user.phonenumber} onChange={inputIsChanging} className="form-control mx-auto" placeholder="Enter Phone Number" /> */}
                                <input
                                    type="number"
                                    className={
                                        formik.errors.phonenumber
                                            ? "form-control my-2 is-invalid"
                                            : "form-control my-2"
                                    }
                                    name="phonenumber"
                                    placeholder="Enter Your Phone Number"
                                    onChange={formik.handleChange}
                                    value={formik.values.phonenumber}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.phonenumber && (
                                    <small className="text-danger">{formik.errors.phonenumber}</small>
                                )}
                            </div>
                            <div class="form-group">
                                <label className='mx-5'>Password </label>
                                {/* <input type="password" name="password" value={user.password} onChange={inputIsChanging} className="form-control mx-auto" placeholder="Enter Password" /> */}
                                <input
                                    type="password"
                                    className={
                                        formik.errors.password
                                            ? "form-control my-2 is-invalid"
                                            : "form-control my-2"
                                    }
                                    name="password"
                                    placeholder="Password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    onBlur={formik.handleBlur}
                                    ref={password}
                                />
                                {formik.touched.password && (
                                    <small className="text-danger">
                                        {formik.errors.password}
                                    </small>
                                )}
                                <div id="toggle" ref={toggle} onClick={showHide}>
                                    <i ref={i} className="fa fa-eye" aria-hidden="true"></i>
                                </div>
                            </div>
                            <h5 className='mx-5'><Link className='text-light' to='/user-login' >Already have an account</Link></h5>
                            <div class="form-group">
                                <center>
                                    <button
                                        className="btn btn-danger  w-25"
                                        type="reset"
                                        onClick={formik.handleReset}
                                        style={{ backgroundColor: "red" }}
                                    >
                                        Reset
                                    </button>

                                    <button type="submit" disabled={isLoading} name="submit" className="btn btn text-dark bg-white m-3" >
                                        <b>
                                            {isLoading ? "Saving post..." : "Register"}
                                        </b>
                                    </button>
                                </center>
                            </div>

                        </form>

                    </div>
                </div>
            </div>


        </div>


    )
}

export default AdminRegister