import React from 'react'
import { Link } from 'react-router-dom'
import ola from './images/bg.png'
import six from './images/15.jpg'
import './LandingUser.css';


const LandingUser = () => {
 
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-light bg-dark" >
        <div className="container-fluid">
          <img src={ola} width="100" alt="myFace"  />

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto" >
            <li className="nav-item">
              <Link className="nav-link text-light"  to='/admin-login'>Admin</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to='/user-login'  >User</Link>
            </li>
            </ul>
          </div>
        </div>
      </nav>

   <header>
        <div className='container text-center mx-auto text-light '>
          <h2 style={{marginTop: "3em"}}>What is your favorite cuisines?</h2>
          <h3>ENJOY YOUR MEAL</h3>
        </div>
   </header>

   <div className="container-fluid " id='contact'>
	<h1 className=" pt-5 text-center fs-1" style={{color: "#001d47"}}><b>Contact Details</b></h1>
		<div className="container mt-3 pb-5" >
		  <ul className="nav nav-tabs" role="tablist">
		    <li className="nav-item">
		      <a className="nav-link active" data-bs-toggle="tab" href="#head" style={{color: "#001d47"}}><b>Office Address</b></a>
		    </li>
		    <li className="nav-item">
		      <a className="nav-link" data-bs-toggle="tab" href="#firstcontact" style={{color: "#001d47"}}><b>Help Desk</b></a>
		    </li>
		  </ul>
		  <div className="tab-content" style={{backgroundColor: "white"}}>
		    <div id="head" className="container tab-pane active p-2" style={{color: "grey"}}><br/>
		      <h5>Blackman Nigeria Ltd.</h5>
		      <h5>Head Office Address</h5>
		      <address>
		      	Agboola House <br/>35 Marina <br/> P.O. Box 1998, <br/>Ibadan, <br/>Nigeria.
		      </address>
		    </div>
		    <div id="firstcontact" className="container tab-pane fade p-2" style={{color: 'grey'}}><br/>
		      <h5>Blackman Food Ltd</h5><br/>
		      <p>Tel: +234 813 701 4717</p>
		      <p>Tel: +234 907 068 4164 </p>
		      <p>Email : agboolaelijah077@gmail.com</p>
		      <p>Help Desk: Jbn_help on twitter </p>
		    </div>
		    </div>
		  </div>
		</div>
     

      {/* About us */}
      <div className='about-us text-center text-light'>
        <h1 className='mt-4'>About Us</h1>
        <hr className='mx-auto ' id='bg-danger' />
        <p className='word p-2 fs-7'>
          We make delicious healthy meals for busy people who want<br />  to enjoy home made food without the hassle of cooking.
          Why would you cook <br /> when you don't have to?   The Hot Plate makes it easy to eat
          your favorite home cooked food <br /> anywhere you want. You deserve to eat great food,
          whether you're at home or on the go.
        </p>
      </div>

      {/* Word on the street */}
      <div className='street-talk container-fluid p-5 text-center' id='olawale'>
        <h1 className='mt-2'>Word on the street</h1>

        {/*  */}
        <div class="container my-5 py-3">
          <div class="row d-flex justify-content-center">
            
            <div class="col-md-4 ">
              <div class="card text-dark">
                <div class="card-body p-4">
                  <div class="d-flex flex-start">
                    <img class="rounded-circle shadow-1-strong me-3"
                      src={six} alt="avatar" width="60"
                      height="60" />
                    <div>
                      <h6 class="fw-bold mb-1">Maggie Marsh</h6>
                      <div class="d-flex align-items-center mb-3">
                        <p class="mb-0">
                          April 07, 2021
                        </p>
                      </div>
                      <p class="mb-0">
                        The food maggi is too much, reduce it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div class="col-md-4 ">
              <div class="card text-dark">
                <div class="card-body p-4">
                  <div class="d-flex flex-start">
                    <img class="rounded-circle shadow-1-strong me-3"
                      src={six} alt="avatar" width="60"
                      height="60" />
                    <div>
                      <h6 class="fw-bold mb-1">Felix Adeboyega</h6>
                      <div class="d-flex align-items-center mb-3">
                        <p class="mb-0">
                          January 07, 2023
                        </p>
                      </div>
                      <p class="mb-0">
                        I enjoyed the food, keep it up
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 ">
              <div class="card text-dark">
                <div class="card-body p-4">
                  <div class="d-flex flex-start">
                    <img class="rounded-circle shadow-1-strong me-3"
                      src={six} alt="avatar" width="60"
                      height="60" />
                    <div>
                      <h6 class="fw-bold mb-1">Maggie Marsh</h6>
                      <div class="d-flex align-items-center mb-3">
                        <p class="mb-0">
                          March 07, 2021
                        </p>
                      </div>
                      <p class="mb-0">
                        Lorem Ipsum is simply dummy text of the .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row d-flex mt-5 justify-content-center">
            <div class="col-md-4 ">
              <div class="card text-dark">
                <div class="card-body p-4">
                  <div class="d-flex flex-start">
                    <img class="rounded-circle shadow-1-strong me-3"
                      src={six} alt="avatar" width="60"
                      height="60" />
                    <div>
                      <h6 class="fw-bold mb-1">Maggie Marsh</h6>
                      <div class="d-flex align-items-center mb-3">
                        <p class="mb-0">
                          April 07, 2021
                        </p>
                      </div>
                      <p class="mb-0">
                        The food maggi is too much, reduce it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div class="col-md-4 ">
              <div class="card text-dark">
                <div class="card-body p-4">
                  <div class="d-flex flex-start">
                    <img class="rounded-circle shadow-1-strong me-3"
                      src={six} alt="avatar" width="60"
                      height="60" />
                    <div>
                      <h6 class="fw-bold mb-1">Felix Adeboyega</h6>
                      <div class="d-flex align-items-center mb-3">
                        <p class="mb-0">
                          January 07, 2023
                        </p>
                      </div>
                      <p class="mb-0">
                        I enjoyed the food, keep it up
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/*  */}
      </div>
{/* footer */}
<div class="container-fluid bg-dark text-light" id="footer">
			<ul class="icon text-right" id="social">
				<li><i className="fa fa-facebook-square "></i></li>
				<li><i className=" fa fa-twitter "></i></li>
				<li><i className=" fa fa-instagram "></i></li>
				<li><i className="fa fa-youtube "></i></li>
				<li><i className="fa fa-linkedIn "></i></li>
	        </ul>
			<hr/>
			<div className="row text-light"  id="foot">
				<div className="col-md-3">
					<ul >
            <li className='h3'>Blackman</li>
						<li className='h4'>Contact</li>
						<li>agboolaelijah077@gmail.com</li>
						<li>+234907 068 4164</li>
						<li>+23481 370 14717</li>
	        </ul>
				</div>
				<div className="col-md-3">
					<ul>
					    <li className='h4'>Company</li>
						<li>Careers</li>
						<li> FAQS</li>
						<li> User Policy</li>
						<li> Support</li>
					</ul>	
				</div>
				<div className="col-md-3">
					<ul>
					    <li className='h4'>Location</li>
						<li>Abuja</li>
						<li>Oojo</li>
						<li>Lekki </li>
						<li>Ilorin</li>
						<li>Ibadan</li>
						<li>Ogbomoso</li>
					</ul>	
				</div>
				<div className="col-md-3" >
					<ul>
					    <li className='h4'>Brands</li>
						<li>lala_messi</li>
						<li>Samloko</li>
						<li>Elijay </li>
						<li>Gucci</li>
					</ul>	
				</div>
			</div>
			<hr/>
			<p id="last">@2023.Blackman of Nigeria Ltd. An BLMHoldings Company</p>
		</div>

    </div>
  )
}

export default LandingUser