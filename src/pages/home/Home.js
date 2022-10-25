import React from "react";

class Home extends React.Component{
    render(){
    return(
         <div  className data-spy="scroll" data-target=".navbar-collapse" data-offset="50">
                <div  className="preloader">
                    <div className="sk-spinner sk-spinner-pulse"></div>
                </div>
                <div className="navbar navbar-default navbar-fixed-top sticky-navigation" role="navigation">
                <div className="container">

                    <div className="navbar-header">
                        <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon icon-bar"></span>
                            <span className="icon icon-bar"></span>
                            <span className="icon icon-bar"></span>
                        </button>
                        <a href="#" className="navbar-brand">TagAlong</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right main-navigation">
                            <li><a href="#landing" classNameName="smoothScroll">Home</a></li>
                            <li><a href="#trainer" className="smoothScroll">Services</a></li>
                            <li><a href="#trainer" className="smoothScroll">Process</a></li>
                            <li><a href="#" className="smoothScroll">Logout</a></li>
                           
                        </ul>
                    </div>

                </div>
                </div>


                <section id="home" className="parallax-section">
                <div className="container">
                    <div className="row">

                        <div className="col-md-offset-1 col-md-10 col-sm-12">
                            <h3 className="wow bounceIn" data-wow-delay="0.9s">Hello! Welcome </h3>
                            <h1 className="wow fadeInUp" data-wow-delay="1.6s">Select Your Choice and<br/>Start journey with your Universitymates</h1>
                        </div>

                    </div>
                </div>
                </section>


                <section id="overview" className="parallax-section">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 col-sm-12">
                            <img src="../aasets/images/overview-img.jpg" className="img-responsive" alt="Overview"/>
                            <blockquote className="wow fadeInUp" data-wow-delay="1.9s">TAG ALONG</blockquote>
                        </div>

                        <div className="col-md-1"></div>

                    </div>
                </div>
                </section>


                <section id="trainer" className="parallax-section">
                <div className="container">
                    <div className="row">

                        <div className="wow fadeInUp col-md-12 col-sm-12" data-wow-delay="1.3s">
                            <h2>Our Services</h2>
                            <p>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo.</p>
                        </div>

                        <div className="wow fadeInUp col-md-4 col-sm-6" data-wow-delay="1.9s">
                            <div className="trainer-thumb">
                                <img src="../assets/images/walk.jpg" className="img-responsive" alt="Trainer"/>
                            </div>
                            <h4>WALK</h4>
                            <p>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet, wisi risus purus augue vulputate.</p>
                            <a href="#trainer" className="btn btn-default smoothScroll">Let us begin</a>
                        </div>

                        <div className="wow fadeInUp col-md-4 col-sm-6" data-wow-delay="2s">
                            <div className="trainer-thumb">
                                <img src="../assets/images/cycle.jpg" className="img-responsive" alt="Trainer"/>
                            </div>
                            <h4>CYCLE</h4>
                            <p>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet, wisi risus purus augue vulputate.</p>
                            <a href="#trainer" className="btn btn-default smoothScroll">Let us begin</a>
                        </div>

                        <div className="wow fadeInUp col-md-4 col-sm-6" data-wow-delay="2.3s">
                            <div className="trainer-thumb">
                                <img src="../assets/images/ride.jpg" className="img-responsive" alt="Trainer"/>
                            </div>
                            <h4>RIDE ON CARS</h4>
                            <p>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet, wisi risus purus augue vulputate.</p>
                            <a href="#trainer" className="btn btn-default smoothScroll">Let us begin</a>
                        </div>

                        <div className="wow fadeInUp col-md-4 col-sm-6" data-wow-delay="2.3s">
                            <div className="trainer-thumb">
                                <img src="../assets/images/rent.jpg" className="img-responsive" alt="Trainer"/>
                            </div>
                            <h4>RENT A VEHICLE</h4>
                            <p>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet, wisi risus purus augue vulputate.</p>
                            <a href="#trainer" className="btn btn-default smoothScroll">Let us begin</a>	
                        </div>

                    </div>
                </div>
                </section>


                <section id="blog" className="parallax-section">
                <div className="container">
                    <div className="row">

                        <div className="col-md-12 col-sm-12 text-center">
                            <h2>HOW WE WORK</h2>
                            <p>Lorem ipsum dolor sit amet, maecenas eget vestibulum justo.</p>
                        </div>	
                    </div>
                </div>
                </section>


                <footer>
                    <div className="container">
                        <div className="row">

                            <div className="wow fadeInUp col-md-4 col-sm-4" data-wow-delay="0.6s">
                                <h2>CONTACT US</h2>
                                <p>Coventry University Priory St, Coventry CV1 5FB</p>
                            </div>

                            <div className="wow fadeInUp col-md-5 col-sm-4"  data-wow-delay="0.9s">
                                <h2>SERVICES</h2>
                                    <div>
                                        <h4>Walk</h4>
                                        <h4>Cycle</h4>
                                        <h4>Ride on Car</h4>
                                        <h4>Rent a vehicle</h4>
                                    </div>
                            </div>

                            <div className="wow fadeInUp col-md-3 col-sm-4" data-wow-delay="1s">
                                <h2>Follow us</h2>
                                <ul className="social-icon">
                                    <li><a href="#" className="fa fa-facebook wow fadeIn" data-wow-delay="1s"></a></li>
                                    <li><a href="#" className="fa fa-twitter wow fadeInUp" data-wow-delay="1.3s"></a></li>
                                    <li><a href="#" className="fa fa-instagram wow fadeIn" data-wow-delay="1.6s"></a></li>
                                </ul>
                            </div>

                            <div className="clearfix"></div>

                            <div className="col-md-12 col-sm-12">
                                <p className="copyright-text">Copyright &copy; 2022 TagAlong </p>
                            </div>
                            
                        </div>
                    </div>
                </footer>
            </div>
       )
    }
}

export default Home;