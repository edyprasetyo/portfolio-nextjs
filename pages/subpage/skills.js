
import React from 'react';
import { isMobile } from 'react-device-detect';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function Skills() {

    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        centerMode: true,
        speed: 500,
        slidesToShow: isMobile ? 1 : 3,
        slidesToScroll: 1
    };
    return (
        <div id='skills'>
            <div style={{ height: "70px" }}></div>
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
                                    <div className="skills-card-title">Mobile App
                                        Development</div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-12">
                                    <div className="skills-card-content">
                                        Android(Java/Kotlin) - Android Studio
                                        <br />
                                        IOS(Swift) - Xcode
                                        <br />
                                        Flutter - VS Code
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
                                        Android(Java/Kotlin) - Android Studio
                                        <br />
                                        IOS(Swift) - Xcode
                                        <br />
                                        Flutter - VS Code
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
                                        Android(Java/Kotlin) - Android Studio
                                        <br />
                                        IOS(Swift) - Xcode
                                        <br />
                                        Flutter - VS Code
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
                                        Android(Java/Kotlin) - Android Studio
                                        <br />
                                        IOS(Swift) - Xcode
                                        <br />
                                        Flutter - VS Code
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
                                        Android(Java/Kotlin) - Android Studio
                                        <br />
                                        IOS(Swift) - Xcode
                                        <br />
                                        Flutter - VS Code
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