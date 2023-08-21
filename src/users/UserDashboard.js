import axios from 'axios';
import React, { useEffect, useState } from 'react';
import baseUrl from '../baseUrl';
import UserNav from './UserNav';

const UserDashboard = () => {

  const [data, setdata] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios.get(baseUrl + "getfood")

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
      <UserNav />


      {
        
        data.map((post) => (
          <div>
            <p>
              {post.foodname}
              {post.price}
              <img src={post.imageLink} alt="postimage" width={200} height={300} />
            </p>
          </div>
        ))
      }



    </div>
  )
}

export default UserDashboard;