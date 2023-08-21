import React, { useState,  useRef } from 'react';
import baseUrl from '../baseUrl';
import { useSelector } from 'react-redux';
import axios from 'axios';
import  useSWR  from 'swr';
import Design from './UserChat.module.css'
// import { useEffect } from 'react';


const fetcher=(url)=>{
  console.log(url)
  return axios.get(url).then((response)=>{
    if(response.data.status){
      return response.data.messages
    }
    return undefined
  })
}
const UserChat = () => {
  const [open, setOpen] = useState(false);
  const [disabled,setDisabled]=useState(false)
  const userMessage = useRef();
  
  const { loginUser: user } = useSelector((state) => state.login)
  const {data,error,isLoading}=useSWR(`${baseUrl}chat?userId=${user?._id}&single=true`,fetcher,{ refreshInterval: 10 })

  const [chats, setChats] = useState([])
  
   

  const sendMessage = () => {

    const data={
      message:userMessage.current.value,
      userFirstname: user.firstname,
      userLastname:user.lastname,
      image:user.imageLink,
      userid:user._id,
      from:user._id,
      to:"admin"
    }

    setDisabled(true)
    axios.post(baseUrl + "chat",data).then(
      res=>{
        if(res.data.status){
          userMessage.current.value=''
          return 
        }
      })
      .catch(err => {
        console.log(err);
    }).finally(()=>{
      setDisabled(false)
    })
  }

  const style = {
    width: "100%",
    height: '100%',
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    display: open ? 'flex' : 'none',
    backgroundColor: 'rgba(197, 197, 197, 0.438)',
    zIndex: 30000,
    transition: 'ease-out 2s'
  }

  return (
    <>
      <div style={style} >

        <div class="row w-100"  style={{ position: "relative" }} className={`${Design.SmallDevice} `}>
          <div class="col-lg-5  col-md-12" style={{ background: 'rgb(250, 246, 246)', height: "500px", position: "absolute", right: 0 }}>
            <div class="modal-header">
              <h5 class="modal-title text-center">Chat with the Manager</h5>
              <button type="button" class="close" onClick={() => setOpen(false)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body " style={{
              minHeight:"54vh",
              maxHeight:"54vh",
              overflowY:"scroll"
            }}>


              
              {data?.map((text) =>
                  <div class={`${text.from==user._id?'sent':'recieved'} my-1`}>
                  <p> {text.message}</p>
                </div>
                )}
              
              
            </div>
            <div class="modal-footer">
              <span>
                <input type='text' ref={userMessage} className='form-control w-100' placeholder='Drop your text here' />
              </span>
              <span>
                <button type="button" disabled={disabled} onClick={sendMessage} class="btn btn-primary">Send <i className='fa fa-send'></i> </button>
              </span>
            </div>
          </div>
        </div>

      </div>
      <div className='' style={{ position: 'absolute', border: "1px solid ", right: 10, bottom: 0, zIndex: 30000 }} >
        <button className="btn btn-outline-success" onClick={() => setOpen(!open)}>
          Chat with us <i className='fa fa-phone '></i>
        </button>
      </div>
    </>

  );
};

export default UserChat;


