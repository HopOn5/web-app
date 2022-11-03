import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/images/overview-img.jpg";
import image2 from "../../assets/images/walk.jpg";
import image3 from "../../assets/images/landing-cycle.jpg";
import image4 from "../../assets/images/ride.jpg";
import image6 from "../../assets/images/chart.jpg";
import { Button, div, Grid, Typography } from "@mui/material";


export const Landing = () => {
   
        return (
            <div>
                
                
                    <div className="container banner-img"  >
                        <div className="row">
                            <div className=" col-md-12 col-sm-12">
                                <h3 className="head-tag" >
                                    Hello! Welcome to
                                </h3>
                                <h1>TAG ALONG<br />Community</h1>
                            </div>
                        </div>
                    </div>
              

               
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 text-center">
                                <h2>Our Services</h2>
                                <br />
                            </div>

                            <div className="empty-home__one empty-home__item">
                                <img src={image2} alt="walking pal" className="empty-home__icon" />
                                    <h3 className="empty-home__heading">WALKING PAL</h3>
                                        <Typography className="empty-home__text">
                                        Find your walk buddy with the help of Tag-Along. Specify the start
                                        and destination, we will assist you in locating your companion.
                                        Don't worry! Your details are safe with us unless you choose to
                                        share it with your buddy.
                                        </Typography>
                            </div>

                            <div className="empty-home__two empty-home__item">
                                <img src={image3} alt="cycling mate" className="empty-home__icon" />
                                    <h3 className="empty-home__heading">CYCLYING MATE</h3>
                                        <Typography className="empty-home__text">
                                            Find a cycling companion to the university with the aid of Tag-Along
                                            community. Come explore more features with us. Get started to find
                                            your mate.
                                        </Typography>
                            </div>
                            <div className="empty-home__three empty-home__item">
                                <img src={image4} alt="car pooling" className="empty-home__icon" />
                                    <h3 className="empty-home__heading">CAR POOL</h3>
                                        <Typography className="empty-home__text">
                                            Do you have trouble finding someone to split the cost of your cab
                                            ride? Find someone who is going to the same place as you and get in
                                            the cab together. Visit the discussion room on Tag-Along to get to
                                            know your travel buddy.
                                        </Typography>
                            </div>
                        </div>
                    </div>
              
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 text-center">
                                <h2>HOW WE WORK</h2>
                                <img src={image6} className="img-responsive" />
                            </div>
                        </div>
                    </div>
            </div>
        );
    }


export default Landing;
