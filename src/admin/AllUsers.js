import React, { useEffect, useState } from 'react'
import AdminNav from './AdminNav'
import axios from 'axios'
import baseUrl from '../baseUrl'

const AllUsers = () => {

  const [data, setdata] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios.get(baseUrl + "users")

      .then(data => {
        setdata(data.data.data);
        console.log(data.data.data);
      })
      .catch(err => {
        console.log(err);
      })
  };

  const delUser = async (_id) => {
    try {
      await axios.delete(baseUrl + `delUser/${_id}`)
      fetchData();
    }
    catch (err) {

    }
  }

  return (
    <div>
      <AdminNav />
      <div className="card bg-dark mx-auto mt-3 w-90" style={{ color: 'white', overflowX:'auto' }}>
        <div className="card-block shadow-lg p-4 m-4" id="print">
          <h2 className="text-center"><b>Users</b></h2>  <br />
          <hr />
          <div className="col-md-12">
            <table className="table table-hover-white w-100" style={{ color: 'white', fontSize: '18px' }} id="show">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>FirstName</th>
                  <th>Lastname</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {data.map((post, _id) => (
                  <tr>
                    <td><img src={post.imageLink} width="120" className='rounded-circle' alt="myFace" /></td>
                    <td>{post.firstname + " " + post.lastname}  </td>
                    <td>{post.email}</td>
                    <td>{post.address}</td>
                    <td>{post.phonenumber}</td>
                    <td><button className="btn btn-danger" onClick={() => delUser(post._id)}>Delete</button></td>
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

export default AllUsers