import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";

function About() {

    function downloadCV() {
        window.open('/pdf/CV_Edy_Prasetyo.pdf', '_blank').focus();
    }

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
        AOS.refresh();
    });
    return (
        <div id="about-me">
            <div style={{ height: 80 }}></div>
            <div className="container">
                <div className="h3 text-green text-center pb-5">
                    About Me
                </div>
                <div className="row">
                    <div data-aos="fade-up" className="col-lg-6">
                        <img className="img-fluid" src="/images/about_me.svg" />
                    </div>
                    <div data-aos="fade-up" className="col-lg-6 justify-content-center align-self-center pt-3 pb-3">
                        <div className="h4 text-blue mb-2">
                            Full Stack & Mobile Application Developer
                        </div>
                        <div className="h6 text-white mb-4">
                            Having more than 6 years as a Full Stack & Mobile Application Developer, used to building many full stack & mobile application (Back End, Front End & Mobile) using every current programming technologies and i'm super fast learner, high logical thinking, only writing clean and readable code, best practices implementation and building app faster
                        </div>
                        <div className="h4 text-blue mb-2">
                            Project Leader
                        </div>
                        <div className="h6 text-white mb-4">
                            After 3 years of experienced developing every company's programs, then I started leading every projects development, and training every new software engineer to be able to work with the team
                        </div>
                        <div className="h4 text-blue mb-2">
                            Educational Background
                        </div>
                        <div className="h6 text-white">
                            Information Technology Gunadarma University Jakarta / From September 2011 to December 2015, Bachelor's Degree
                        </div>
                    </div>
                </div>
                <div className='text-center mt-5'>
                    <span className='button' onClick={downloadCV}>Download Resume</span>
                </div>
            </div>
        </div>
    );
}

export default About;