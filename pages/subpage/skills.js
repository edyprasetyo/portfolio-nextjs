
import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function Skills() {

    const [settings, setData] = useState({
        dots: true,
        infinite: true,
        autoplay: false,
        centerMode: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    });

    useEffect(() => {
        if (isMobile) {
            setData({
                dots: true,
                infinite: true,
                autoplay: false,
                centerMode: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        }
    }, [])

    return (
        <div id='skills'>
            <div style={{ height: 80 }}></div>
            <div className="h1 text-green">
                <strong id="worksSince">#06</strong>
            </div>
            <div className="h4 text-green">
                <span style={{ color: "#fff", fontWeight: "300" }}>Years
                    Experience</span><span className="text-green">;</span>
            </div>

            <Slider {...settings}>
                <div className='card-skills-parent'>
                    <div className="card shadow rounded-3 card-skills">
                        <div className="card-body">
                            <div className="row mt-2">
                                <div className="col-md-12">
                                    <div className="skills-card-title">Web App Development</div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-12">
                                    <div className="skills-card-content">
                                        Go Lang - Beego/Gin
                                        <br />
                                        C# - ASP.Net MVC/ASP.Net Core
                                        <br />
                                        PHP - Laravel
                                        <br />
                                        Java Script - NextJS - ReactJS
                                        <br />
                                        Type Script - ReactJS/Angular
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='card-skills-parent'>
                    <div className="card shadow rounded-3 card-skills">
                        <div className="card-body">
                            <div className="row mt-2">
                                <div className="col-md-12">
                                    <div className="skills-card-title">Mobile App
                                        Development</div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-12">
                                    <div className="skills-card-content">
                                        Flutter - VS Code
                                        <br />
                                        Android(Java/Kotlin) - Android Studio
                                        <br />
                                        IOS(Swift) - Xcode
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='card-skills-parent'>
                    <div className="card shadow rounded-3 card-skills">
                        <div className="card-body">
                            <div className="row mt-2">
                                <div className="col-md-12">
                                    <div className="skills-card-title">Desktop App
                                        Development</div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-12">
                                    <div className="skills-card-content">Winform App - C# / VB.net</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='card-skills-parent'>
                    <div className="card shadow rounded-3 card-skills">
                        <div className="card-body">
                            <div className="row mt-2">
                                <div className="col-md-12">
                                    <div className="skills-card-title">Database Management System</div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-12">
                                    <div className="skills-card-content">SQL Server
                                        <br /> My SQL
                                        <br /> Data Warehouse & Analysis Service Using Azure Cloud
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='card-skills-parent'>
                    <div className="card shadow rounded-3 card-skills">
                        <div className="card-body">
                            <div className="row mt-2">
                                <div className="col-md-12">
                                    <div className="skills-card-title">Reporting</div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-12">
                                    <div className="skills-card-content">Power BI
                                        <br /> Crystall Report
                                        <br /> RDLC
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default Skills;