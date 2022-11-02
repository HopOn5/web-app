import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/animate.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/owl.carousel.css";
import "../../assets/css/owl.theme.css";
import "../../assets/css/style.css";

import image2 from "../../assets/images/walk.jpg";
import image3 from "../../assets/images/landing-cycle.jpg";
import image4 from "../../assets/images/ride.jpg";
import { Link } from "react-router-dom";
import { URLData } from "../../pageUrls";

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

                {/**/}
                <section id="home" className="parallax-section">
                    <div className="container">
                        <div className="row welcome_row">
                            <div className="col-md-offset-1 col-md-10 col-sm-12">
                                <h3
                                    className="wow bounceIn"
                                    data-wow-delay="0.9s"
                                >
                                    Welcome to TagAlong{" "}
                                </h3>
                                <h1
                                    className="wow fadeInUp"
                                    data-wow-delay="1.6s"
                                >
                                    Choose Your Journey
                                    <br />
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="services" className="parallax-section">
                    <div className="container">
                        <div className="row home_row">
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
                                <Link
                                    to={URLData?.routeRequest?.url}
                                    className="btn btn-default smoothScroll"
                                >
                                    Let us begin
                                </Link>
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
                                <Link
                                    to={URLData?.routeRequest?.url}
                                    className="btn btn-default smoothScroll"
                                >
                                    Let us begin
                                </Link>
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
                                <Link
                                    to={URLData?.routeRequest?.url}
                                    className="btn btn-default smoothScroll"
                                >
                                    Let us begin
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/**/}
            </div>
        );
    }
}

export default Landing;
