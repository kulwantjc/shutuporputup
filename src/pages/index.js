
import React, { Component } from 'react';


import ContactFrom from '../components/ContactForm';

class IndexPage extends Component {

  render() {
    return (
      <>
        <section className="home-banner-area">
          <div className="container">
            <div className="row justify-content-end fullscreen">
              <div className="col-lg-6 col-md-12 home-banner-left d-flex fullscreen align-items-center">
                <div>
                  <h1 className="">
                    Give Cape Coming Soon<br />
                    <br />
                    {/* <span>Service</span> Provider. */}
                  </h1>
                  <p className="mx-auto mb-40">

                  </p>
                  <a href="#"> <ContactFrom /></a>
                  <div className="d-flex align-items-center mt-60">
                    <div className="watch_video">

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 no-padding home-banner-right d-flex fullscreen align-items-end">
                <img className="img-fluid" src="img/header-img.png" alt="" />
              </div>
            </div>
          </div>
        </section>

      </>
    );
  }
}

export default IndexPage
