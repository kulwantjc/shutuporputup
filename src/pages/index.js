
import React, { Component } from 'react';
import ContactFrom from '../components/ContactForm';

class IndexPage extends Component {
  render() {
    return (
      <>
        <div id="top"></div>
        <header className="default-header">

          <div className="sticky-header">
            {/* <div className="container"> */}
            <div className="container d-flex justify-content-between align-items-center">
              <div className="header-content d-flex justify-content-between align-items-center">
                <div className="logo">
                  <a href="#top" className="smooth">

                    <img src="img/fav.png" alt="" style={{ width: '70px' }} />
                    {/* <h3 style={{ color: "white" }}>GiveCape</h3> */}
                  </a>
                </div>
                <div className="right-bar d-flex align-items-center">
                  <nav className="d-flex align-items-center">
                    <ul className="main-menu">
                      <li><a href="#top">Home</a></li>
                      <li><a href="#services">Features</a></li>

                    </ul>
                    <a href="#services" className="service1">Features</a>
                    <a href="#" className="mobile-btn">
                      <span className="lnr lnr-menu">
                      </span></a>
                  </nav>

                </div>
              </div>
            </div>
          </div>

        </header >

        <section>
          <div className="banner-area relative">
            <div className="overlay overlay-bg"></div>
            <div className="container">
              <div className="row fullscreen justify-content-center align-items-center" style={{ height: "623px" }}>
                <div className="col-lg-8">
                  <div className="banner-content text-center">
                    <p className="text-uppercase text-white">WE ARE LAUNCHING SOON, JOIN TODAY FOR EARLY ACCESS!</p>
                    <h1 className="text-white">GiveCape Coming Soon!</h1>
                    <a href="#"><ContactFrom></ContactFrom></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="title-bg section-full">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="product-area-title text-center">
                  <p className=" text-uppercase">Features</p>
                  <h2 className=" h1">
                    How we help in tracking <br /> your Goals ?</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="single-product">
                  <div className="icon">
                    <span className="lnr lnr-star"></span>
                  </div>
                  <div className="desc">
                    <h4>Unique Design</h4>
                    <p>Most people who work in an office environment, buy computer products, or have </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-product">
                  <div className="icon">
                    <span className="lnr lnr-magic-wand"></span>
                  </div>
                  <div className="desc">
                    <h4>Appropriate UX</h4>
                    <p>Today, many people rely on computers to do homework, work, and create or store useful</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-product">
                  <div className="icon">
                    <span className="lnr lnr-sun"></span>
                  </div>
                  <div className="desc">
                    <h4>Perfect Visual</h4>
                    <p>Having a baby can be a nerve wracking experience for new parents – not the  </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-product">
                  <div className="icon">
                    <span className="lnr lnr-layers"></span>
                  </div>
                  <div className="desc">
                    <h4>Different Layout</h4>
                    <p>It won’t be a bigger problem to find one video game lover in your neighbor. Since the </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default IndexPage
