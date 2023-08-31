import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import './RegisterUser.css'
import style from './RegisterUser.module.css'
import ola from '../images/bg.png'
import axios from 'axios'
import baseUrl from '../baseUrl'
import { useFormik } from "formik";
import * as yup from "yup";

const RegisterUser = () => {

    const navigate = useNavigate();

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    let lower = new RegExp(`(?=.*[a-z])`);
    let upper = new RegExp(`(?=.*[A-Z])`);
    let number = new RegExp(`(?=.*[0-9])`);
    let length = new RegExp(`(?=.{8,})`);
    const [Error, setError] = useState("");
    const [image,setImage]=useState('');
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
            lastname: "",
            email: "",
            phonenumber: "",
            address: "",
            password: "",
        },
        onSubmit: (values) => {
            const data= new FormData();
            data.append('picture',image);
            Object.entries(values).map(([key,value])=>{
                data.append(key,value)
            })
                axios.post(baseUrl + "register", data).then(
                res => {
                    if (res.data.success) {
                        // setIsLoading(false)
                        navigate("/user-login")
                    }
                    else {
                        setError(res.data.message);
                    }
                    setResult({
                        message: res.data.message,
                        status: res.data.success
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
             lastname: yup
                .string()
                .matches(/^[\w]{3,}$/, "Must be atleast 3 character")
                .required("Tis feild is required")
                .min(3, "Must be greater than 3"),
            email: yup
                .string()
                .email("Must be an email")
                .required("Email field is required")
                .min(5, "Must be greater than 5"),
            address: yup
                .string()
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
    //     firstname: "",
    //     lastname: "",
    //     email: "",
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

    // const sendUser = () => {
    //     const data = new FormData()
    //     data.append("firstname", user.firstname);
    //     data.append("lastname", user.lastname);
    //     data.append("email", user.email);
    //     data.append("address", user.address);
    //     data.append("phonenumber", user.phonenumber);
    //     data.append("picture", picture.current.files[0])
    //     data.append("password", user.password);
    //     setIsLoading(true);

    //     axios.post(baseUrl + "register", data).then(
    //         res => {
    //             setResult({
    //                 message: res.data.message,
    //                 status: res.data.success
    //             })
    //             // console.log(res);
    //             setIsLoading(false)
    //             navigate("/user-login")
    //         }).catch(err => {
    //             console.log(err);
    //             setIsLoading(false)
    //         })
    // }



    return (
        <div id={style.body} >
            <div className="container" >
                <div className="login-form col-md-6  offset-md-3 card " id={style.card}>

                    <center>
                        <img className='iii' src={ola} alt="myFace" />
                    </center>

                    <p>
                        <b className="text-danger">{Error}</b>
                    </p>

                    <div className={`alert alert-${result.status ? "success" : "danger"} text-center text-${result.status ?
                        "success" : "danger"} d-${result.message ? "block" : "none"} `}>{result.message}</div>

                    <div id={style.register}>
                        <form method="post" action="" onSubmit={formik.handleSubmit} >
                            <div className="form-group">
                                <label className='mx-5'>Firstname </label>
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
                            <div class="form-group">
                                <label className='mx-5'>Lastname </label>
                                <input
                                    type="text"
                                    title="Enter you Last name"
                                    className={
                                        formik.errors.lastname
                                            ? "form-control my-2 is-invalid"
                                            : "form-control my-2"
                                    }
                                    name="lastname"
                                    placeholder="Enter Your Last Name"
                                    onChange={formik.handleChange}
                                    value={formik.values.lastname}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.lastname && (
                                    <small className="text-danger">{formik.errors.lastname}</small>
                                )}
                            </div>
                            <div className="form-group">
                                <label className='mx-5'>Email </label>
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
                            <div class="form-group">
                                <label className='mx-5'>Image</label>
                                <input
                                    type="file"
                                    onChange={(e)=>setImage(e.target.files[0])}
                                    accept='image/*'
                                    name="picture"
                                    className='form-control my-2'
                                    
                                />
                            </div>
                            <div className="form-group">
                                <label className='mx-5'>Phone Number </label>
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
                                <div className='form-group'>
                                    <label className='mx-5'>Password </label>
                            <div className="d-flex  ">
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
                                <span id="toggle" ref={toggle} onClick={showHide}>
                                    <i ref={i} className="fa fa-eye" aria-hidden="true"></i>
                                </span>
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

                                    <button type="submit"  name="submit" className="btn btn text-dark bg-white m-3" >
                                        Register
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

export default RegisterUser;