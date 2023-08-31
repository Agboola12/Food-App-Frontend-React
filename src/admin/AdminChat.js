import React, { useEffect, useRef, useState } from 'react'
import AdminNav from './AdminNav'
import Style from './AdminChat.module.css';
import axios from 'axios';
import baseUrl from '../baseUrl';
import  useSWR  from 'swr';
import { useSelector } from 'react-redux';
import ChatMoment from '../moment/ChatMoment';



const fetcher=(url)=>{
  console.log(url)
  return axios.get(url).then((response)=>{
    if(response.data.status){
      return response.data.messages
    }
    return undefined
  })
}


const AdminChat = () => {
  const adminMessage = useRef();
  const [user, setUser] = useState([]);
  const [chats, setChats] = useState([]);
  const [activeUser,setActiveUser]=useState('')
  const [userFirstname,setuserFirstname]=useState('')
  const [userLastname,setuserLastname]=useState('')
  const [userImage,setuserimage]=useState('')

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   await axios.get(baseUrl + "users")

  //     .then(data => {
  //       setUser(data.data.data);
  //       console.log(data.data.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // };


  const { loginAdmin:admin}  = useSelector((state) => state.admin)
  const {data,error,isLoading}=useSWR(`${baseUrl}chat`,fetcher,{ refreshInterval: 10 })


  const[users,setUsers]=useState([]);
  useEffect(()=>{
    if(data?.length>0){
      const usersId=data.map((o)=>o.userid)

      setUsers((prev)=>{
        let filteredUser=data.filter((item,index)=>!usersId.includes(item.userid,index+1))
        return filteredUser
      })
      if(activeUser!=''){
            const mychat=data.filter((item,index)=>item.userid===activeUser)
        setChats(mychat)
      }
    }

  },[data,activeUser])


  const sendMessage = ()=>{
    const data={
      message:adminMessage.current.value,
      userFirstname,
      userLastname,
      userid:activeUser,
      image:userImage,
      from:'admin',
      to:activeUser,
    }

    axios.post(baseUrl + "chat",data).then(
      res=>{
        adminMessage.current.value=''
        console.log(res);
      })
      .catch(err => {
        console.log(err);
    })
  }

  const chatUser=(userid)=>{
  
        setActiveUser(userid.userid)
        setuserFirstname(userid.userFirstname)
        setuserLastname(userid.userLastname)
        setuserimage(userid.image)
  }


  return (
    <div>
      <AdminNav />
      <section className={Style.gradientcustom}>
        <div className="container py-1">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-xl-5 mb-4 mb-md-0">

              <h5 className="font-weight-bold mb-3 text-center text-white">Member</h5>
              <div className={`card ${Style.maskcustom}`} >
                <div className="card-body" id={Style.card}>
                  <ul className="list-unstyled mb-0">
                    { users.map((post, _id) => {
                    
                    
                return(
                    <li className="p-2"  onClick={() => chatUser(post)}>
                      <p  className="d-flex justify-content-between link-light">
                        <div className="d-flex flex-row">
                          <img src={post?.image} alt="avatar"
                            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60" />
                          <div className="pt-1">
                            <p className="fw-bold mb-0">{post?.userFirstname +" " + post?.userLastname} </p>
                            <p className="small text-white">{post?.message}</p>
                          </div>
                        </div>
                        <div className="pt-1">
                          <p className="small text-white mb-1">5 mins ago</p>
                          <span className="text-white float-end"><i className="fas fa-check" aria-hidden="true"></i></span>
                        </div>
                      </p>
                      <hr/>
                    </li>
                    )}) }
                  </ul>

                </div>
              </div>

            </div>
            <div className="col-md-6 col-lg-7 col-xl-7">
              <ul className="list-unstyled text-white " id={Style.card}>
              {chats?.map((text) =>{

              if(text.from !=="admin"){
                return(
                  <li className="d-flex justify-content-between mb-4">
                  <img src={text?.image} alt="avatar"
                     className="rounded-circle d-flex align-self-start me-3 shadow-1-strong" width="60" /> 
                  <div className={`card  ${Style.maskcustom} mr-auto `}>
                    <div className="card-header d-flex justify-content-between p-3"
                      style={{ borderBottom: "1px solid rgba(255,255,255,.3)" }}>
                      <p className="fw-bold mb-0 mr-5">{text?.userFirstname}</p>
                      {/* <p className="text-light small mb-0"><i className="far fa-clock"></i> 12 mins ago</p> */}
                    </div>
                    <div className="card-body">
                      <p className="mb-0">
                      {text?.message}
                      
                      </p>
                    </div>
                  </div>
                </li>
                )
              }
              return(
                <li className="d-flex justify-content-between mb-4">
                  <div className={`card  ${Style.maskcustom} w-50 ml-auto`} >
                    <div className="card-header d-flex  justify-content-between p-3"
                      style={{ borderBottom: '1px solid rgba(255,255,255,.3)' }}>
                      <p className="fw-bold mb-0">Mr Admin</p>
                      {/* <p className="text-light small mb-0"><i className="far fa-clock"></i> 13 mins ago</p> */}
                    </div>
                    <div className="card-body">
                      <p className="mb-0">
                        {text.message}
                      </p>
                    </div>
                  </div>
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar"
                    className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong" width="60" />
                </li>
              )

                
              }
                )}

                

                {/* text area for input */}
              </ul>
            <div style={ activeUser?{display:"grid",gridTemplateColumns:"80% 15%"}:{display:'none',}} >

                <div className="mb-3">
                  <div className="form-outline form-white">
                    <textarea className="form-control" id="textAreaExample3" ref={adminMessage} placeholder='type here !!' rows="2"></textarea>
                  </div>
                </div>
                <button type="button" onClick={sendMessage} className="btn btn-light fs-6 fw-bold btn-rounded float-end">Send</button>
            </div>

            </div>

          </div>

        </div>
      </section>


    </div>
  )
}

export default AdminChat