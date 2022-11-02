import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/animate.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/owl.carousel.css";
import "../../assets/css/owl.theme.css";
import "../../assets/css/style.css";

import image2 from "../../assets/images/walk.jpg";
import image3 from "../../assets/images/landing-cycle.jpg";
import image4 from "../../assets/images/ride.jpg";
import image5 from "../../assets/images/rent.jpg";
import image6 from "../../assets/images/chart.jpg";

class Landing extends React.Component {
    render() {
        return (
            <div
                data-spy="scroll"
                data-target=".navbar-collapse"
                data-offset="50"
            >
                {/*<div className="preloader">
                    <div className="sk-spinner sk-spinner-pulse"></div>
                </div>*/}

                <div
                    className="navbar navbar-default navbar-fixed-top sticky-navigation"
                    role="navigation"
                >
                    <div className="container">
                        <div className="navbar-header">
                            <button
                                className="navbar-toggle"
                                data-toggle="collapse"
                                data-target=".navbar-collapse"
                            >
                                <span className="icon icon-bar"></span>
                                <span className="icon icon-bar"></span>
                                <span className="icon icon-bar"></span>
                            </button>
                            <a href="#" className="navbar-brand">
                                TagAlong
                            </a>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-right main-navigation">
                                <li>
                                    <a href="#home" className="smoothScroll">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#services"
                                        className="smoothScroll"
                                    >
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#process" className="smoothScroll">
                                        Process
                                    </a>
                                </li>
                                <li>
                                    <Link
                                        to={"/login"}
                                        className="smoothScroll"
                                    >
                                        Chat
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={"/registration"}
                                        className="smoothScroll"
                                    >
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={"/registration"}
                                        className="smoothScroll"
                                    >
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <section id="home" className="parallax-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-offset-1 col-md-10 col-sm-12">
                                <h3
                                    className="wow bounceIn"
                                    data-wow-delay="0.9s"
                                >
                                    Hello! Welcome{" "}
                                </h3>
                                <h1
                                    className="wow fadeInUp"
                                    data-wow-delay="1.6s"
                                >
                                    Choose Your Journey <br />
                                    Go Down
                                    <br />
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" className="parallax-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 text-center">
                                <h2>Our Services</h2>
                                <br />
                            </div>

                            <div
                                className="wow fadeInUp col-md-3 col-sm-6"
                                data-wow-delay="1.9s"
                            >
                                <div className="trainer-thumb">
                                    <img
                                        src={image2}
                                        className="img-responsive"
                                        alt="Trainer"
                                    />
                                </div>
                                <h3>WALK</h3>
                                <p>
                                    {" "}
                                    We can walk with a person who is going to
                                    the same destination. So they can accompany
                                    us throughout the journey. And you can make
                                    a new friend and stay motivated.
                                </p>
                                <a
                                    href="#requestform"
                                    className="btn btn-default smoothScroll"
                                >
                                    Let us begin
                                </a>
                            </div>

                            <div
                                className="wow fadeInUp col-md-3 col-sm-6"
                                data-wow-delay="2s"
                            >
                                <div className="trainer-thumb">
                                    <img
                                        src={image3}
                                        className="img-responsive"
                                        alt="Trainer"
                                    />
                                </div>
                                <h3>CYCLE</h3>
                                <p>
                                    {" "}
                                    We can cycle with a person who is going to
                                    the same destination. So that they can
                                    accompany us throughout the journey. And you
                                    can make a new friend and stay motivated.
                                </p>
                                <a
                                    href="#requestform"
                                    className="btn btn-default smoothScroll"
                                >
                                    Let us begin
                                </a>
                            </div>

                            <div
                                className="wow fadeInUp col-md-3 col-sm-6"
                                data-wow-delay="2.3s"
                            >
                                <div className="trainer-thumb">
                                    <img
                                        src={image4}
                                        className="img-responsive"
                                        alt="Trainer"
                                    />
                                </div>
                                <h3>RIDE ON CARS</h3>
                                <p>
                                    Ride share programs help connect people to
                                    travel together to the same destination.
                                </p>
                                <a
                                    href="route-request"
                                    className="btn btn-default smoothScroll"
                                >
                                    Let us begin
                                </a>
                            </div>

                            <div
                                className="wow fadeInUp col-md-3 col-sm-6"
                                data-wow-delay="2.3s"
                            >
                                <div className="trainer-thumb">
                                    <img
                                        src={image5}
                                        className="img-responsive"
                                        alt="Trainer"
                                    />
                                </div>
                                <h3>RENT A VEHICLE</h3>
                                <p>
                                    In this service renting a vehicle, we can
                                    get a vehicle from a person and also if we
                                    have a vehicle we can rent that to another
                                    person who requires it. It can be a bicycle
                                    or a car.
                                </p>
                                <a
                                    href="#requestform"
                                    className="btn btn-default smoothScroll"
                                >
                                    Let us begin
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <footer>
                    <div className="container">
                        <div className="row">
                            <div
                                className="wow fadeInUp col-md-4 col-sm-4"
                                data-wow-delay="0.6s"
                            >
                                <h2>CONTACT US</h2>
                                <h4>Coventry University</h4>
                                <h4>Priory St,</h4>
                                <h4>Coventry CV1 5FB</h4>
                            </div>

                            <div
                                className="wow fadeInUp col-md-5 col-sm-4"
                                data-wow-delay="0.9s"
                            >
                                <h2>SERVICES</h2>
                                <div>
                                    <h4>Walk</h4>
                                    <h4>Cycle</h4>
                                    <h4>Ride on Car</h4>
                                    <h4>Rent a vehicle</h4>
                                </div>
                            </div>

                            <div
                                className="wow fadeInUp col-md-3 col-sm-4"
                                data-wow-delay="1s"
                            >
                                <h2>Follow us</h2>
                                <ul className="social-icon">
                                    <li>
                                        <a
                                            href="#"
                                            className="fa fa-facebook wow fadeIn"
                                            data-wow-delay="1s"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="fa fa-twitter wow fadeInUp"
                                            data-wow-delay="1.3s"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="fa fa-instagram wow fadeIn"
                                            data-wow-delay="1.6s"
                                        ></a>
                                    </li>
                                </ul>
                            </div>

                            <div className="clearfix"></div>

                            <div className="col-md-12 col-sm-12">
                                <p className="copyright-text">
                                    Copyright &copy; 2022 TagAlong
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Landing;
