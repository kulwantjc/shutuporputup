
import React, { Component } from 'react';

// import { Router, Route, IndexRoute } from 'react-router';
// import { browserHistory } from 'react-router';

class IndexPage extends Component {
  render() {
    const imgUrl = 'img/Untitled6.jpg'
    const Style = {
      backgroundImage: 'url(' + imgUrl + ')',

    };

    const imgUrl1 = 'img/Untitled3.jpg'
    const Style1 = {
      backgroundImage: 'url(' + imgUrl1 + ')',

    };
    const imgUrl2 = 'img/Untitled2.jpg'
    const Style2 = {
      backgroundImage: 'url(' + imgUrl2 + ')',

    };

    const imgUrl3 = 'img/Untitled4.jpg'
    const Style3 = {
      backgroundImage: 'url(' + imgUrl3 + ')',

    };

    const imgUrl4 = 'img/Untitled5.jpg'
    const Style4 = {
      backgroundImage: 'url(' + imgUrl4 + ')',

    };

    const imgUrl5 = 'img/Untitled6.jpg'
    const Style5 = {
      backgroundImage: 'url(' + imgUrl5 + ')',

    };


    return (
      <>
        <div id="top"></div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"><img src="img/landing-logo1.png" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#features">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about-us">About us</a>
                </li>
                <li className="nav-item btn">
                  <a className="nav-link" data-toggle="modal" data-target="#email-p1">Join Email List</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>


        {/* model code start  */}
        <div className="modal form-model" id="email-p1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Get notified at launch!</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body text-left">
                <form method="post" action="">
                  <div className="d-flex">
                    <input
                      type="text"
                      name="name" c
                      className="text"
                      placeholder="First Name" />
                    <input type="text"
                      name="name"
                      className="text"
                      placeholder="Last Name" />
                  </div>
                  <input type="email"
                    name="email"
                    className="text"
                    placeholder="Email" />
                  <input type="text"
                    name="company"
                    className="text"
                    placeholder="Company Name" />
                  <input type="submit"
                    name="submit"
                    className="btn submit"
                    value="Send" />
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* model close code */}


        <section className="banner-bg-home" style={Style}>
          <div className="overlay1">
            <div className="container">

              <div className="content">
                <img src="img/landing-logo.png" className="logo-img1" />
                <h2>Join us if personal and professional growth is one of your core values.</h2>
                <h1>No Matter what your goal is!</h1>
                <p>An online community where heroes come together to grow their potential, give back to
                their community, and help better other heroes through mentorship, positive reinforcement, or
              just plain being there to motivate and encourage others working on achieving their goals.</p>


                <a className="btn gray-btn" data-toggle="modal" data-target="#email-p">Join Email List</a>


                <div className="modal form-model" id="email-p" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Get notified at launch!</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body text-left">

                        <form method="post" action="">
                          <div className="d-flex">
                            <input type="text"
                              name="name"
                              className="text"
                              placeholder="First Name" />
                            <input type="text"
                              name="name"
                              className="text"
                              placeholder="Last Name" />
                          </div>
                          <input
                            type="email"
                            name="email"
                            className="text"
                            placeholder="Email" />
                          <input
                            type="text"
                            name="company"
                            className="text"
                            placeholder="Company Name" />
                          <input
                            type="submit"
                            name="submit"
                            className="btn submit"
                            value="Send" />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className="container featured-grid" id="features">
          <h2 className="text-center">What the platform will offer for Users​</h2>

          <div className="row">
            <div className="col-md-6">
              <div className="featured-post" style={Style1}>
                <div className="hover-content">
                  <div>
                    <h3>Stop talking about it and Start Achieving</h3>

                    <a className="btn br-btn" data-toggle="modal" data-target="#Modal1">Read More</a>

                    <div className="modal model1" id="Modal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Stop talking about it and Start Achieving</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body text-left">
                            <div className="text-center">
                              <img src="img/Untitled3.jpg" className="model-img" /></div>
                            <ul>
                              <li>Platform to post your current project or goal and receive constructive advice and others.</li>
                              <li>Ability to find mentors and accountability partners.</li>
                              <li>Bring your own mentor or friend that will keep you.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>



            <div className="col-md-6">
              <div className="featured-post" style={Style2}>
                <div className="hover-content"><div>
                  <h3>Tools created with you in mind</h3>

                  <a className="btn br-btn" data-toggle="modal" data-target="#Modal2">Read More</a>

                  <div className="modal model1" id="Modal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLongTitle">Tools created with you in mind:</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body text-left">
                          <div className="text-center"><img src="img/Untitled2.jpg" className="model-img" /></div>
                          <ul>
                            <li>Set and monitor milestones
<ul>
                                <li>Charts and milestone calendars to assess progress</li>
                              </ul>
                            </li>
                            <li>Daily mood and gratitude feed prompts because the practice of appreciation is part of the journey and goes a long way in overcoming mental blocks</li>
                            <li>Microblog where you can post daily (or at an interval of your choosing) progress updates
<ul>
                                <li>Features pictures and videos</li>
                              </ul>
                            </li>
                            <li>Text and Video chat to interact with your mentors or accountability partner</li>
                            <li><b>Put up or Shut Up:</b> tired of being all talk and no action? Put up money that will be forfeited to a charity of your choice if you fail to post progress update challenges you set for yourself (daily, weekly, or customized to your own schedule)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                </div>
              </div>
            </div>



            <div className="col-md-6">
              <div className="featured-post" style={Style3}>
                <div className="hover-content"><div>
                  <h3>Market Place</h3>
                  {/* <!-- Model --> */}
                  <a className="btn br-btn" data-toggle="modal" data-target="#Modal3">Read More</a>

                  <div className="modal model1" id="Modal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLongTitle">Market Place</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body text-left">
                          <div className="text-center"><img src="img/Untitled4.jpg" className="model-img" /></div>
                          <ul>
                            <li>Pay qualified and certified professionals to mentor and coach you.</li>
                            <li>Pay qualified cognitive and mental stress experts to work with you in managing your stress level.</li>
                            <li>Download free or premium tools to help you overcome negative habits and obstacle and be your own mentor.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--Model close --> */}
                </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="featured-post" style={Style4}>
                <div className="hover-content"><div>
                  <h3>Forums</h3>

                  <a className="btn br-btn" data-toggle="modal" data-target="#Modal4">Read More</a>

                  <div className="modal model1" id="Modal4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLongTitle">Forums</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body text-left">
                          <div className="text-center"><img src="img/Untitled5.jpg" className="model-img" /></div>
                          <ul>
                            <li>Form free or premium mastermind groups
<ul>
                                <li>Use our donation features to raise funds that can be used to hire experts for Ask Me Anything (AMA) video streams
<ul>
                                    <li>Those that donate can submit a certain number of questions predetermined by the group.</li>
                                    <li>The AMA can be live or pre-recorded</li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="featured-post" style={Style}>
                <div className="hover-content"><div>
                  <h3>Enterprise Users will have all feature plus</h3>

                  <a className="btn br-btn" data-toggle="modal" data-target="#Modal5">Read More</a>

                  <div className="modal model1" id="Modal5" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLongTitle">Enterprise Users will have all feature plus</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body text-left">
                          <div className="text-center"><img src="img/Untitled6.jpg" className="model-img" /></div>
                          <ul>
                            <li>Upload organization’s logo</li>
                            <li>Mentorship program and tools
<ul>
                                <li>Dashboard
<ul>
                                    <li>Mentors will have a dashboard to monitor the number of mentees and mentorship program admin will have control over those admin board and are able to see milestones progress on an individual relationship or overall program</li>
                                  </ul>
                                </li>
                                <li>SWOT analysis and SMART goals</li>
                                <li>Ice-breakers to know each other</li>
                                <li>Charts of weakness, milestones reached, messages received (time and days of the week most active), preferred method of communication, diligence in completing task</li>
                                <li>Daily or weekly journal reflection</li>
                                <li>Scheduled interactions calendar</li>
                                <li>Action plan</li>
                                <li>Feed back</li>
                              </ul>
                            </li>
                            <li>Push survey and pollin</li>
                            <li>Sync with work (e.g. outlook) and calendar that you can publish on your profile</li>
                            <li>Chat while at work with other coworkers signed up under organization</li>
                            <li>Showcase project via images and blogs</li>
                            <li>Requests & Incentive
<ul>
                                <li>Employees can post a request for help with tasks that other employees will see and reply to (ex. cover my shift, pick up lunch for me, walk me to the parking lot, etc)</li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                </div>
              </div>
            </div>

          </div>
        </section>


        <section className="bg-blue-sec">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-9">You have already earned your capes, so join the good guys by helping other people earn their cape, so you can watch fly past their milestones!
</div>
              <div className="col-md-3 text-right">

                <a className="btn br-btn" data-toggle="modal" data-target="#email-p">Join Email List</a>

                <div className="modal form-model" id="email-p" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Get notified at launch!</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body text-left">

                        <form method="post" action="">
                          <div class="d-flex">
                            <input type="text"
                              name="name"
                              className="text"
                              placeholder="First Name" />
                            <input type="text"
                              name="name"
                              className="text"
                              placeholder="Last Name" />
                          </div>
                          <input type="email"
                            name="email"
                            className="text"
                            placeholder="Email" />
                          <input type="text"
                            name="company"
                            className="text"
                            placeholder="Company Name" />
                          <input type="submit"
                            name="submit"
                            className="btn submit"
                            value="Send" />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4" id="about-us">
                <h3>About us</h3>
                An online community where heroes come together to grow their potential, give back to their community, and help better other heroes through mentorship, positive reinforcement, or just plain being there to motivate and encourage others working on achieving their goals.
               </div>
              <div className="col-md-4">
                <h3>Contact us</h3>
                <ul className="contact-list">
                  <li className="fa fa-map-marker">County, Street name - number</li>
                  <li className="fa fa-phone">+91 9876543210</li>
                  <li className="fa fa-envelope">abc@gmail.com</li>
                </ul>
              </div>
              <div className="col-md-4 site-links">
                <h3>Site Links</h3>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">About us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

      </>
    );
  }
}

export default IndexPage
