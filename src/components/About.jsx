
import React from "react";
import "../css/About.css";
import aboutimage from '../images/man-phone-red-shirt-bean.png'
import aboutimage2 from '../images/about.jpg'
import team1 from '../images/team1.jpeg'


const About = () => {
  return (
    <>

<section className="common__section mt-5">
      <div className="container text-center">
        <h1 className="text-light">About E-Auction</h1>
      </div>
    </section>
       <section
      className="about__section"
      style={{marginTop: "5rem"}}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="about__section-content">
              <h2 className="section__title">Welcome to E-Auction Website</h2>
              <p className="section__description">
                LET US HELP YOU FIND THE RIGHT VEHICLE FOR YOUR BUDGET.
                GUARANTEED THE MOST AFFORDABLE AUTO RENTAL AND LEASING PROGRAM
                YOU’LL FIND!
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                </svg> Competitive Pricing
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                </svg> Convenience
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                </svg> Transparent Process
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                </svg> Secure Transactions
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="about__img">
              <img src={aboutimage} alt="" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </section>

      <section className="about__page-section mt-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="about__page-img mt-5">
                <img
                  src={aboutimage2}
                  alt=""
                  className="w-100 rounded-3"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Ride Solutions
                </h2>

                <p className="section__description">
                Welcome to our premier e-auction website, where the excitement of traditional auctions seamlessly merges with the convenience and accessibility of the digital world. Prepare to embark on a captivating journey that combines the thrill of bidding with the ease of online transactions.
                </p>

                <p className="section__description">
                Our platform is meticulously designed to create an immersive and engaging auction experience. From the moment you enter our virtual auction house, you will be greeted by an elegant and intuitive interface, showcasing a vast array of exquisite items awaiting your discovery.
                </p>

                <p className="section__description">
                Embracing a global community of passionate collectors and enthusiasts, our platform transcends geographical boundaries, allowing bidders from around the world to connect and engage. Immerse yourself in a vibrant community of like-minded individuals, where you can share your expertise, discover new perspectives, and forge lasting connections.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i className="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+962-789-308-028</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
{/* 
      <BecomeDriverSection /> */}

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12  text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </div>
  {/* End */}
  <div className="container mt-5">
    <div className="row text-center">
      {/* Team item */}
      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4">
          <img
            src={team1}
            alt=""
            width={100}
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <h5 className="mb-0">Amro Alkhazaleh</h5>
          <span className="small text-uppercase text-muted">Electrical Engineer</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item">
              <a href="#" className="social-link">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="social-link">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="social-link">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/amro-alkhazaleh-3097b9219/" className="social-link">
                <i className="fab fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* End */}
      {/* Team item */}
      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4">
          <img
            src="https://media.licdn.com/dms/image/D4D03AQGEGEEKAzKH9w/profile-displayphoto-shrink_400_400/0/1678305859430?e=1692230400&v=beta&t=FDtNm7Zj7NCVsQiINA1It84b9lCeB9a6EStD2E59nQM"
            alt=""
            width={100}
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <h5 className="mb-0">Hala Obeidat</h5>
          <span className="small text-uppercase text-muted">Capacity Building Expert</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item">
              <a href="#" className="social-link">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="social-link">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="social-link">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="social-link">
                <i className="fab fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* End */}
      {/* Team item */}
      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4">
          <img
            src="https://media.licdn.com/dms/image/D5603AQHTlzRZeQlO4w/profile-displayphoto-shrink_400_400/0/1673369280616?e=1692230400&v=beta&t=GBmb9Z6utWHkGdllH8r36snhsL72miAzffhgnemGskQ"
            alt=""
            width={100}
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <h5 className="mb-0">Rawan Abuseini</h5>
          <span className="small text-uppercase text-muted">Software Engineer</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item">
              <a href="#" className="social-link">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="social-link">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="social-link">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/rawan-abuseini-4b75ab38/" className="social-link">
                <i className="fab fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* End */}
      {/* Team item */}
      <div className="col-xl-3 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4">
          <img
            src="https://media.licdn.com/dms/image/D4E03AQHm1V8-15-CnA/profile-displayphoto-shrink_400_400/0/1668666792526?e=1692230400&v=beta&t=_K6_vB7Xoqz5oVjRvpZv37WfwHqdnhgqpK9nzZQyRcg"
            alt=""
            width={100}
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <h5 className="mb-0">Israa Othman</h5>
          <span className="small text-uppercase text-muted">Full Stack Developer</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item">
              <a href="#" className="social-link">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="social-link">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="social-link">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/israaothmann/" className="social-link">
                <i className="fab fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* End */}
    </div>
  </div>
          </div>
        </div>
      </section>

      <div className="container">
  <div className=" text-center mt-5 ">
    <h1>Contact Us</h1>
  </div>
  <div className="row ">
    <div className="col-lg-12 ">
      <div className="card mt-2 mx-auto p-4 bg-light">
        <div className="card-body bg-light">
          <div className="container">
            <form id="contact-form" role="form">
              <div className="controls">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="form_name">Firstname *</label>
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Please enter your firstname *"
                        required="required"
                        data-error="Firstname is required."
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="form_lastname">Lastname *</label>
                      <input
                        id="form_lastname"
                        type="text"
                        name="surname"
                        className="form-control"
                        placeholder="Please enter your lastname *"
                        required="required"
                        data-error="Lastname is required."
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="form_email">Email *</label>
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Please enter your email *"
                        required="required"
                        data-error="Valid email is required."
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="form_need">
                        Please specify your need *
                      </label>
                      <select
                        id="form_need"
                        name="need"
                        className="form-control"
                        required="required"
                        data-error="Please specify your need."
                      >
                        <option value="" selected="" disabled="">
                          --Select Your Issue--
                        </option>
                        <option>Request Invoice for order</option>
                        <option>Request order status</option>
                        <option>Haven't received cashback yet</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="form_message">Message *</label>
                      <textarea
                        id="form_message"
                        name="message"
                        className="form-control"
                        placeholder="Write your message here."
                        rows={4}
                        required="required"
                        data-error="Please, leave us a message."
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <input
                      type="submit"
                      style={{backgroundColor:'#rgb(250,133,30)'}}
                      className="btn btn-send  pt-2 btn-block
                      "
                      defaultValue="Send Message"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /.8 */}
    </div>
    {/* /.row*/}
  </div>
</div>


   
  </>
  );
};

export default About;
