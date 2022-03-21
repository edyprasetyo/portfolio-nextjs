import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";

function About() {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
        AOS.refresh();
    });
    return (
        <div id="about-me">
            <div style={{ height: "70px" }}></div>
            <div className="container">
                <div className="h3 text-green text-center pb-5">
                    About Me
                </div>
                <div className="row">
                    <div data-aos="fade-up" className="col-lg-6">
                        <img className="img-fluid" src="/images/about_me.svg" />
                    </div>
                    <div data-aos="fade-up" className="col-lg-6 justify-content-center align-self-center pt-3 pb-3">
                        <div className="h3 text-blue mb-2">
                            Full Stack Programmer
                        </div>
                        <div className="h6 text-white mb-4">
                            Having more than 6 years as an Full Stack Programmer with history of working
                            in
                            mayor
                            named company, used to building many full stack app (Back End & Front End & Design) such as
                            Android(Java),
                            IOS(swift), ASP.NET MVC, Laravel, Flutter, Node JS, Java Script Framework such as Angular, Type
                            Script
                        </div>
                        <div className="h3 text-blue mb-2">
                            Project Leader
                        </div>
                        <div className="h6 text-white mb-4">
                            Lead developed, design, and implement complex project
                        </div>
                        <div className="h3 text-blue mb-2">
                            Educational Background
                        </div>
                        <div className="h6 text-white">
                            Information Technology Gunadarma University Jakarta / From September 2011 to December 2015, Cum
                            Laude
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;