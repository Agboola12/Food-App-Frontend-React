import React from 'react'
import { Link, useNavigate ,} from 'react-router-dom'
import ola from '../images/bg.png'
import './AdminNav.css'
import { useSelector } from 'react-redux'




const AdminNav = () => {
  const navigate = useNavigate();
  const { loginUser: user } = useSelector((state) => state.login)
  // const { loginAdmin:user}  = useSelector((state) => state.admin)

  const logOut =()=>{
    localStorage.removeItem("token");
    navigate("/admin-login",{replace:true})
  }

  

 
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <img src={ola} width="120" alt="myFace" />
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link text-light"  to='/admin/admin-profile'>Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light"  to='/admin/all-users'>Users</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-light"> <button className="btn btn-outline-success">Welcome {user.firstname}</button></Link>
              </li>
            {/* <li className="nav-item">
              <Link className="nav-link text-light" to='/admin/add-food'>Add Food</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link text-light" to='/admin/transaction'>Transaction</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to='/admin/admin-chat'>Chat</Link>
            </li>
            <li className="nav-item">
              <p className="nav-link text-light"  onClick={logOut}>LogOut</p>
            </li>
          </ul>
        </div>
      </div>
  </nav>

    {/* modal */}
    {/* <div id="modal_aside_left" class="modal fixed-left fade" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-aside" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-center">Chat with the Manager</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="sent">
                <p> Hi Dude!!!!. How are you</p>
              </div>

              <div class="recieved">
                <p >I am fine. I recently started learning web development
                   </p>
              </div>

            </div>
            <div class="modal-footer">
              <span>
                <input type='text' className='form-control w-100' placeholder='Drop your text here' />
                
              </span>
              <span>
                <button type="button"  class="btn btn-primary">Send <i className='fa fa-send'></i> </button>
              </span>
            </div>
          </div>
        </div>
      </div> */}
{/* /// */}
      {/* <div className='fixed-bottom' style={{ marginLeft: '90%' }}>
        <button className="btn btn-outline-success" data-toggle="modal" data-target="#modal_aside_left">
          Chat with us <i className='fa fa-phone '></i>
        </button>
      </div> */}
      {/* modal */}

    </div>
  )
}

export default AdminNav