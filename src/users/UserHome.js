import axios from 'axios';
import React, { useEffect, useState } from 'react';
import baseUrl from '../baseUrl';
import UserNav from './UserNav';
import './UserHome.css';
import { useDispatch, useSelector } from 'react-redux';
import { increase } from '../slices/UserSlice';

const UserHome = () => {
  const [data, setdata] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios.get(baseUrl + "getfood")

      .then(data => {
        setdata(data.data.data);
        // console.log(data.data.data);
      })
      .catch(err => {
        console.log(err);
      })
  };

  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const add = (id) => {
    dispatch(increase(id))
    let found= state.product.find(val=>val.id==id)
    axios.post(baseUrl + "userOrder",{data:{id,status:found?true:false}} ).then(res => {
      // console.log(res);
    }).catch(err => {
      console.log(err);
    })

  }




  return (
    <div>
      <UserNav />

      <div className='container-fluid'>
        <div className='container'>
          <h2 className='mt-5 mx-auto'>Food Available</h2>
          <div className='shadow-lg p-3 mb-5 bg-white rounded text-center'>
            <div className='row'>
              {data.map((post) => (
                <div className='col-md-4' >
                  <div className='card' style={{ borderStyle: 'none' }}>
                    <div className="card-body">
                      <img src={post.imageLink} alt="postimage" id='img' style={{ height: '12em', width: '12em' }} />
                      <h5 className="card-text">A Plate Of {post.foodname} With Chicken</h5>
                      <p className="card-title"> N{post.price}</p>
                      <button onClick={() => add(post._id)} className="btn btn-primary">Order now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default UserHome;