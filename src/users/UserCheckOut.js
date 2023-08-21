import React from 'react'
import UserNav from './UserNav'


const UserCheckOut = () => {

    return (
        <div>
            <UserNav />
            <div className='container text-center  my-5' >
                <div className="col-sm-6" style={{ border: '1px solid gray' }}>
                <h2>Payment method</h2>

                    <div className="form-group">
                        <label for="name">First-Name:</label>
                        <input type="text" className="form-control" id="fname" placeholder="Name on card" name="Fname"/>
                    </div>
                    <div className="form-group">
                        <label for="name">Last-Name:</label>
                        <input type="text" className="form-control" id="lname" placeholder="Credit Card Number" name="Lname"/>
                    </div>
                    <div className="form-group">
                        <label for="email">Email:</label>
                        <input type="date" className="form-control" id="email" placeholder="Expriration Date" name="email"/>
                    </div>
                    <div className="form-group">
                        <label for="pwd">Password:</label>
                        <input type="text" className="form-control" id="pwd" placeholder="CVC" name="pwd"/>
                    </div>
                    <center>
                        <button type="submit" className=" m-3 btn btn-success">Submit</button>
                    </center>



                </div>

            </div>


        </div>
    )
}

export default UserCheckOut