import React from "react";

const index = () => {
  return (
    <div>
      <div className="active-dark">
        <header className="header-area formobile-menu header--transparent default-color">
          <div className="header-wrapper" id="header-wrapper">
            <div className="header-left">
              <div className="logo">
                <a href="index.html">
                  <img src="assets/images/logo.png" alt="Digital Agency" />
                </a>
              </div>
            </div>
            <div className="header-right">
              <nav className="mainmenunav d-none d-md-block">
                <ul className="mainmenu">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Products
                    </a>
                    <ul
                      className="dropdown-menu dropdown-content"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#walk">
                          Walk 2 Earn
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#swim">
                          Swim 2 Earn
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#drive">
                          Drive 2 Earn
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Community
                    </a>
                    <ul
                      className="dropdown-menu dropdown-content"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://t.me/lykacoin_chat"
                        >
                          Telegram
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://twitter.com/lykacoin"
                        >
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://www.youtube.com/channel/UC80qk5vgad9sMykF_bslMhw"
                        >
                          Youtube
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#roadmap">Roadmap</a>
                  </li>
                  <li>
                    <a href="#tokenomics ">Tokenomics </a>
                  </li>
                  <li>
                    <a href="https://lykacoin.net/whitepaper.pdf">
                      Whitepaper{" "}
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="header-btn">
                <a
                  className="btn-default btn-border btn-opacity"
                  target="_blank"
                  href="https://bscscan.com/token/0x26844ffd91648e8274598e6e18921a3e5dc14ade"
                >
                  <span>Contract</span>
                </a>
              </div>
              <div className="humberger-menu d-block d-lg-none pl--20 pl_sm--10">
                <span className="menutrigger text-white">
                  <i data-feather="menu" />
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className="rn-popup-mobile-menu d-block d-lg-none">
          <div className="inner">
            <div className="popup-menu-top">
              <div className="logo">
                <a href="index.html">
                  <img
                    src="assets/images/logo/logo-symbol-dark.png"
                    alt="imroz"
                  />
                </a>
              </div>
              <div className="close-menu d-block d-lg-none">
                <span className="closeTrigger">
                  <i data-feather="x" />
                </span>
              </div>
            </div>
            <ul className="mainmenu">
              <li>
                <a href="https://bscscan.com/token/0x26844ffd91648e8274598e6e18921a3e5dc14ade">
                  Contract
                </a>
              </li>
              <li>
                <a href="https://bscscan.com/token/0x26844ffd91648e8274598e6e18921a3e5dc14ade">
                  Buy Lyka
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ padding: "0px !important" }}
                >
                  Products
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#walk">
                      Walk 2 Earn
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#swim">
                      Swim 2 Earn
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#drive">
                      Drive 2 Earn
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ padding: "0px !important" }}
                >
                  Community
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://t.me/lykacoin_chat"
                    >
                      Telegram
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://twitter.com/lykacoin"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.youtube.com/channel/UC80qk5vgad9sMykF_bslMhw"
                    >
                      Youtube
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#roadmap">Roadmap</a>
              </li>
              <li>
                <a href="#tokenomics ">Tokenomics </a>
              </li>
              <li>
                <a href="https://lykacoin.net/whitepaper.pdf">Whitepaper </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="slider-wrapper">
          <div className="slider-activation">
            <div
              className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_color--1 bg_image bg_image--1"
              data-black-overlay={8}
            >
              <div className="container position-relative">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="inner">
                      <h1 className="title theme-gradient">Lykamove pays</h1>
                      <p
                        style={{
                          color: "white",
                          fontWeight: 600,
                          fontSize: 30,
                        }}
                      >
                        To Walk, To Swim, To Drive
                      </p>
                      <div className="row">
                        <div className="col-lg-12 col-12 mt--30">
                          <div className="row service-main-wrapper">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                              <img src="./assets/images/move.png" />
                              <br />
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                              <img src="./assets/images/newswim.png" />
                              <br />
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                              <img src="./assets/images/newdrive.png" />
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service-wrapper service-white ptb--120">
                  <div className="row row--25">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="service service__style--1">
                        <div className="icon">
                          <i data-feather="activity" />
                        </div>
                        <div className="content">
                          <h4 className="title">Download</h4>
                          <p>
                            Install Application in your mobile from Playstore or
                            App Store
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="service service__style--1">
                        <div className="icon">
                          <i data-feather="cast" />
                        </div>
                        <div className="content">
                          <h4 className="title">Register</h4>
                          <p>
                            Open App and Register in Application using basic
                            information{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="service service__style--1">
                        <div className="icon">
                          <i data-feather="map" />
                        </div>
                        <div className="content">
                          <h4 className="title">Walk</h4>
                          <p>
                            Earn Lyka Tokens on Each Step you walk in LykaMove
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="http://infoversetech.com/_next/static/media/hero-shape-1.4ad41faa.svg"
            alt
            className="mainimgleft img-fluid"
            style={{ zIndex: -10, left: 0, top: 80, position: "absolute" }}
          />
          <img
            src="http://infoversetech.com/_next/static/media/hero-shape-2.5e71f834.svg"
            alt
            className="mainimgright img-fluid"
            style={{ zIndex: -10, right: 0, top: 0, position: "absolute" }}
          />
        </div>

        <div className="about-area ptb--120 bg_color--1">
          <div className="about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-5 col-md-12">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="assets/images/about/about-1.png"
                      alt="About Images"
                    />
                  </div>
                </div>
                <div className="col-lg-7 col-md-12">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <div className="icon">
                        <i data-feather="send" />
                      </div>
                      <h2 className="title">Our Vision</h2>
                      <p className="description">
                        LykaMove is a free app which rewards your daily steps
                        with a new-generation currency you can spend on cool
                        products, donate to charity or convert into Lyka.
                      </p>
                      <p className="description">
                        Why? Because when you look after your health, you
                        benefit society. You are more productive. You help save
                        $billions in healthcare. Your movement has value: you
                        deserve a share in it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-area ptb--120 bg_color--1">
          <div className="about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-7 col-md-12">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <div className="icon">
                        <i data-feather="send" />
                      </div>
                      <h2 className="title">Spend</h2>
                      <p className="description">
                        Choose from 1000s of fabulous branded goods and services
                        in our marketplace from high-tech shoes to iPhones,
                        anti-gravity yoga classes, Apple Watches and more!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="assets/images/home_bag.55a90ddf.png"
                      alt="About Images"
                      style={{ maxWidth: "60%" }}
                    />
                  </div>
                </div>
              </div>
              <br />
              <div className="row row--35 align-items-center">
                <div className="col-lg-5 col-md-12">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="assets/images/home_heart.436cdcdf.png"
                      alt="About Images"
                      style={{ maxWidth: "60%" }}
                    />
                  </div>
                </div>
                <div className=" col-lg-7 col-md-12">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <div className="icon">
                        <i data-feather="send" />
                      </div>
                      <h2 className="title">Donate</h2>
                      <p className="description">
                        To a variety of environmental, humanitarian and animal
                        preservation causes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service-area ptb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle">
                    Take your fitness to the next level with LykaMove
                  </span>
                  <h2 className="title">Benefits</h2>
                  <p className="description">
                    From the real world to the metaverse, LykaMove helps you
                    track your fitness, crush your goals, compete against
                    friends and more.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-12 mt--30">
                <div className="row service-main-wrapper">
                  {/* start single Services */}
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <a href="#">
                      <div className="service service__style--2 text-start">
                        <div className="icon">
                          <i data-feather="cast" />
                        </div>
                        <div className="content">
                          <h3 className="title">Gamification</h3>
                          <p>
                            Gamification platform with levels, badges and
                            rewards.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <a href="#">
                      <div className="service service__style--2 text-start">
                        <div className="icon">
                          <i data-feather="monitor" />
                        </div>
                        <div className="content">
                          <h3 className="title">Activities</h3>
                          <p>
                            Track all your physical activities from the two
                            worlds in one place.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <a href="#">
                      <div className="service service__style--2 text-start">
                        <div className="icon">
                          <i data-feather="send" />
                        </div>
                        <div className="content">
                          <h3 className="title">Refer a friend</h3>
                          <p>
                            Invite friends to a virtual fitness challenge to
                            keep each other motivated.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <a href="#">
                      <div className="service service__style--2 text-start">
                        <div className="icon">
                          <i data-feather="monitor" />
                        </div>
                        <div className="content">
                          <h3 className="title">Secure</h3>
                          <p>The safety of your data is our top priority.</p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <a href="#">
                      <div className="service service__style--2 text-start">
                        <div className="icon">
                          <i data-feather="cast" />
                        </div>
                        <div className="content">
                          <h3 className="title">Payments</h3>
                          <p>
                            Deposit and withdrawal will work using web3
                            connectivity
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <a href="#">
                      <div className="service service__style--2 text-start">
                        <div className="icon">
                          <i data-feather="monitor" />
                        </div>
                        <div className="content">
                          <h3 className="title">charity</h3>
                          <p>
                            To a variety of environmental, humanitarian and
                            animal
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="service-area ptb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h2 className="title">Lyka Products</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-12 mt--30">
                <div className="row service-main-wrapper">
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12" id="walk">
                    <div className="service service__style--2 text-start">
                      <img src="./assets/walk.png" />
                      <br />
                      <div className="content" style={{ marginTop: 10 }}>
                        <h3 className="title">Walk 2 Earn</h3>
                        <p>
                          The users can generate the income from Lyka by simply
                          logging into the App and starting walk by activing the
                          package. The customers will be rewarded in Lyka Token.
                        </p>
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="exampleModalLabel"
                              style={{ color: "black" }}
                            >
                              Walk 2 Earn
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body">
                            <h3 style={{ color: "black" }}>
                              Steps to Earn Tokens from LykaMove?
                            </h3>
                            <li>
                              Install LykaMove Apk or Ios from the website
                            </li>
                            <li>
                              Register &amp; Log into the account by entering
                              basic information
                            </li>
                            <li>
                              Select the Plan it have Free Plan (Need atleast 5
                              referral to get income) &amp; have 5 paid plans to
                              start earn tokens by every step you walk
                            </li>
                            <li>
                              You can withdrawal tokens into your wallet anytime
                            </li>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-6 col-12" id="drive">
                    <div className="service service__style--2 text-start">
                      <img src="./assets/drive.png" />
                      <br />
                      <div className="content" style={{ marginTop: 10 }}>
                        <h3 className="title">Drive 2 Earn</h3>
                        <p>
                          LykaMove brings in a new feature of moving:
                          Drive-To-Earn, which allows everyone to earn cryptos
                          through their daily commuting in the easiest way.
                        </p>
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal1"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                    <div
                      className="modal fade"
                      id="exampleModal1"
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="exampleModalLabel"
                              style={{ color: "black" }}
                            >
                              Drive 2 Earn (Coming Soon)
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body">
                            With a clear vision and mission, the developers
                            promise to make LykaMove the world-leading project
                            of Drive To Earn, making the impossible possible.
                            The project will attract many users worldwide
                            because it not only generates profits for tedious
                            daily commuting, creating enjoyable driving moments
                            but also inspires the community with the value:
                            Environmental protection. LykaMove commits to use a
                            part of the profits to donate to the charity
                            organization to prevent the greenhouse effect and
                            air pollution and to plant trees worldwide.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End single Services */}
                  {/* start single Services */}
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12" id="swim">
                    <div className="service service__style--2 text-start">
                      <img src="./assets/swim.png" />
                      <br />
                      <div className="content" style={{ marginTop: 10 }}>
                        <h3 className="title">Swim 2 Earn</h3>
                        <p>
                          LykaMove introduces a new way to mine for
                          cryptocurrency that is affordable and easily
                          accessible to anyone. By simply tracking your swimming
                          and other activity
                        </p>
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal2"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                    <div
                      className="modal fade"
                      id="exampleModal2"
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="exampleModalLabel"
                              style={{ color: "black" }}
                            >
                              Swim 2 Earn (Coming Soon)
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body">
                            The LykaMove application designed its breakthrough
                            swim to earn feature to help everyone turn their
                            daily commuting to profit most easily. So that users
                            who swim and do activities can participate in
                            commuting activities to receive rewards. It will
                            attract many investors and users because of its
                            profits.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rn-counterup-area ptb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle">statistics</span>
                  <h2 className="title">LykaMove Growth</h2>
                </div>
              </div>
            </div>
            <div className="row mt--30">
              <div className="im_single_counterup col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="im_counterup">
                  <div className="inner">
                    <div className="icon">
                      <i data-feather="heart" />
                    </div>
                    <h2 className="counter">
                      <span className="odometer" data-count={5000}>
                        00
                      </span>
                    </h2>
                    <p className="description">Steps Count</p>
                  </div>
                </div>
              </div>
              <div className="im_single_counterup col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="im_counterup">
                  <div className="inner">
                    <div className="icon">
                      <i data-feather="clock" />
                    </div>
                    <h2 className="counter">
                      <span className="odometer" data-count={575}>
                        00
                      </span>
                    </h2>
                    <p className="description">Earned USD</p>
                  </div>
                </div>
              </div>
              <div className="im_single_counterup col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="im_counterup">
                  <div className="inner">
                    <div className="icon">
                      <i data-feather="stop-circle" />
                    </div>
                    <h2 className="counter">
                      <span className="odometer" data-count={509}>
                        00
                      </span>
                    </h2>
                    <p className="description">Downloads</p>
                  </div>
                </div>
              </div>
              <div className="im_single_counterup col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="im_counterup">
                  <div className="inner">
                    <div className="icon">
                      <i data-feather="award" />
                    </div>
                    <h2 className="counter">
                      <span className="odometer" data-count={55}>
                        00
                      </span>
                    </h2>
                    <p className="description">Donate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rn-brand-area ptb--120 bg_color--1">
          <div className="container" id="roadmap">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="section-title text-center mb--30">
                  <span className="subtitle">Roadmap</span>
                  <h2 className="title">Lyka Roadmap</h2>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="roadmap__wrapper2">
                <div className="row gy-4 gy-md-0 gx-5">
                  <div className="col-md-6 offset-md-6">
                    <div
                      className=" roadmap__item2 ms-md-4 aos-init"
                      data-aos="fade-left"
                      data-aos-duration={800}
                    >
                      <div className="roadmap__item2-inner">
                        <div className="roadmap__item2-content">
                          <div className="roadmap__item2-header">
                            <h4>Phase 1</h4>
                          </div>
                          <div style={{ color: "white" }}>
                            - Market research &amp; Prototype design <br />
                            - Project Conception <br />
                            - Team Building <br />
                            - Website Development <br />
                            - Whitepaper <br />
                            - LYKA Coin Development <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className=" roadmap__item2 ms-auto me-md-4 aos-init"
                      data-aos="fade-right"
                      data-aos-duration={800}
                    >
                      <div className="roadmap__item2-inner">
                        <div className="roadmap__item2-content">
                          <div className="roadmap__item2-header">
                            <h4>Phase 2</h4>
                          </div>
                          <div style={{ color: "white" }}>
                            - Staking Dapp live <br />
                            - Lyka Swap live <br />
                            - Lyka Yield live <br />
                            - Pancake Swap Exchange listing <br />
                            - Vindax Exchange Listing <br />
                            - Coinmarketcap listing <br />
                            - Coingecko listing <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 offset-md-6">
                    <div
                      className="roadmap__item2 ms-md-4  aos-init"
                      data-aos="fade-left"
                      data-aos-duration={800}
                    >
                      <div className="roadmap__item2-inner">
                        <div className="roadmap__item2-content">
                          <div className="roadmap__item2-header">
                            <h4>Phase 3</h4>
                          </div>
                          <div style={{ color: "white" }}>
                            - Lyka Move live <br />- Promotion,Marketing &amp;
                            Strategic Partnerships <br />
                            - Lyka Play to Earn live <br />
                            - Lyka Test Net live <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="roadmap__item2 ms-auto me-md-4  aos-init"
                      data-aos="fade-right"
                      data-aos-duration={800}
                    >
                      <div className="roadmap__item2-inner">
                        <div className="roadmap__item2-content">
                          <div className="roadmap__item2-header">
                            <h4>Phase 4</h4>
                          </div>
                          <div style={{ color: "white" }}>
                            - Lyka NFT &amp; Marketplace Live <br />
                            - Lyka Launchpad Development <br />
                            - Lyka Exchange Development <br />
                            - Lyka Main Net live <br />
                            - Lyka Verse Development <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rn-brand-area ptb--120 bg_color--1" id="tokenomics">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="section-title text-center mb--30">
                  <span className="subtitle">Lyka Move</span>
                  <h2 className="title">Tokenomics</h2>
                </div>
              </div>
            </div>
            <div className="why" id="tokonomics">
              <div className="container" id="tokonomics">
                <img
                  src="https://lykacoin.io/staking/assets/images/lykachart.png"
                  alt="Icon"
                  style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "50%",
                  }}
                  className="chart_big_img"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="rn-brand-area ptb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="section-title text-center mb--30">
                  <span className="subtitle">Top Partners</span>
                  <h2 className="title">We worked with brands.</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 mt--20">
                <ul className="brand-style-2">
                  <li>
                    <img
                      src="assets/images/brand/brand-01.png"
                      alt="Logo Images"
                    />
                  </li>

                  <li>
                    <img
                      src="assets/images/brand/brand-02.png"
                      alt="Logo Images"
                    />
                  </li>

                  <li>
                    <img
                      src="assets/images/brand/brand-03.png"
                      alt="Logo Images"
                    />
                  </li>

                  <li>
                    <img
                      src="assets/images/brand/brand-04.png"
                      alt="Logo Images"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer-area footer-style-01 bg_color--6">
          <div className="im-call-to-action-area ptb--70 im-separator">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-8 col-xl-6 col-md-12 col-sm-12 col-12">
                  <div className="inner">
                    <h2 className="text-white mb--0">
                      Move with fun in the real world
                    </h2>
                  </div>
                </div>
                <div className="col-lg-4 col-xl-4 offset-xl-2 col-md-12 col-sm-12 col-12">
                  <div className="call-to-cation-tbn text-start text-lg-end mt_md--20 mt_sm--20">
                    <a
                      className="btn-default btn-large btn-border btn-opacity"
                      href="#"
                    >
                      Download Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-wrapper ptb--70">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="ft-text">
                    <div className="logo">
                      <a href="index.html">
                        <img
                          src="assets/images/logo.png"
                          alt="Digital Agency"
                        />
                      </a>
                      <br />
                      <p>
                        A new global economy of wealth through health is
                        coming.Get ready and start growing your wallet today.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-xl-2 offset-xl-1 col-md-6 col-sm-6 col-12 mt_mobile--40">
                  <div className="footer-link">
                    <h4>Quick Link</h4>
                    <ul className="ft-link">
                      <li>
                        <a href="https://lykacoin.net/lyka-staking.html">
                          Lyka Staking
                        </a>
                      </li>
                      <li>
                        <a href="https://lykacoin.net/lyka-yeild.html">
                          Lyka Yield
                        </a>
                      </li>
                      <li>
                        <a href="https://lykacoin.net/lyka-swap.html">
                          Lyka Swap
                        </a>
                      </li>
                      <li>
                        <a href="https://lykacoin.net/lyka-move.html">
                          Lyka Move
                        </a>
                      </li>
                      <li>
                        <a href="https://lykacoin.net/lyka-play.html">
                          Lyka Play
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
                  <div className="footer-link">
                    <h4>Quick Link</h4>
                    <ul className="ft-link">
                      <li>
                        <a href="https://lykacoin.net/lyka-launchpad.html">
                          Lyka Launchpad
                        </a>
                      </li>
                      <li>
                        <a href="https://lykacoin.net/lyka-nft.html">
                          Lyka NFT
                        </a>
                      </li>
                      <li>
                        <a href="https://lykacoin.net/lyka-exchange.html">
                          Lyka Exchange
                        </a>
                      </li>
                      <li>
                        <a href="https://lykacoin.net/lyka-verse.html">
                          Lyka Verse
                        </a>
                      </li>
                      <li>
                        <a href="https://lykacoin.net/lyka-blockchain.html">
                          Lyka Blockchain
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default index;
