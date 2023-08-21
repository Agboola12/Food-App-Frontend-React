import React from 'react'
import { Link } from 'react-router-dom'
import ola from './images/bg.png'
import one from './images/05.webp'
import two from './images/04.jfif'
import three from './images/06.jpg'
import four from './images/07.jpg'
import five from './images/14.webp'
import six from './images/15.jpg'
import seven from './images/16.jpg'
import eight from './images/17.jpg'
import './LandingUser.css';


const LandingUser = () => {
 
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{height:'5em'}}>
      <div className="container-fluid">
        <img src={ola} width="200" alt="myFace" className='p-3'/>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav " style={{marginLeft: '85%'}}>
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
          <input type="search" className='form-control text-center' id='input' placeholder='Search your recipe ...' />
          <h2>What are your favorite cuisines?</h2>
          <h3>ENJOY YOUR MEAL</h3>
        </div>
      </header>
      <div className='container-fluid'>
        <div className='container'>
          <h2 className='mt-5 mx-auto'>Categories</h2>
          <hr className='bg-danger' style={{width: "13em", height: "2px"}} />
          <div className='row shadow-lg p-3 mb-5 bg-white rounded text-center'>
            <div className='col-md-3'>
              <div className='card'>
                <div className="card-body">
                  <img src={one} alt="m" id='img' />
                  <h5 className="card-text">A Plate Of Rice With Chicken</h5>
                  <p className="card-title">#45</p>
                  <Link to="/" className="btn btn-primary">Order now</Link>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card'>
                <div className="card-body">
                  <img src={two} alt="m" id='img' />
                  <h5 className="card-text">A Plate Of Rice With Chicken and Dodo</h5>
                  <p className="card-title">#450</p>
                  <Link to="/" className="btn btn-primary">Order now</Link>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card'>
                <div className="card-body">
                  <img src={three} alt="m" id='img' />
                  <h5 className="card-text">Beef Shawarma</h5>
                  <p className="card-title">#1300</p>
                  <Link to="/" className="btn btn-primary">Order now</Link>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card'>
                <div className="card-body">
                  <img src={four} alt="m" id='img' />
                  <h5 className="card-text">Chicken Shawarma</h5>
                  <p className="card-title">#1300</p>
                  <Link to="/" className="btn btn-primary">Order now</Link>
                </div>
              </div>
            </div>
            <hr className='m-5' />
            <div className='col-md-3'>
              <div className='card'>
                <div className="card-body">
                  <img src={five} alt="m" id='img' />
                  <h5 className="card-title">Pizza #590</h5>
                  <p className="card-text">This is a pizza, hot one</p>
                  <Link to="/" className="btn btn-primary">Order now</Link>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card'>
                <div className="card-body">
                  <img src={six} alt="m" id='img' />
                  <h5 className="card-title">Pizza #789</h5>
                  <p className="card-text">This is a pizza, hot one</p>
                  <Link to="/" className="btn btn-primary">Order now</Link>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card'>
                <div className="card-body">
                  <img src={seven} alt="m" id='img' />
                  <h5 className="card-title">Pizza #789</h5>
                  <p className="card-text">This is a pizza, hot one</p>
                  <Link to="/" className="btn btn-primary">Order now</Link>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card'>
                <div className="card-body">
                  <img src={eight} alt="m" id='img' />
                  <h5 className="card-title">Pizza $60</h5>
                  <p className="card-text">This is a pizza, hot one</p>
                  <Link to="/" className="btn btn-primary">Order now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About us */}
      <div className='about-us text-center text-light'>
        <h1 className='mt-5 fs-1'>About Us</h1>
        <hr />
        <p className='word'>
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
                        <p class="mb-0">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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