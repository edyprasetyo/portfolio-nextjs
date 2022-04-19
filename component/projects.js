import 'aos/dist/aos.css';
import React from "react";

function Projects() {

    function gotoUnicornPage() {
        window.open("https://developer.indorent.co.id/development/unicorn");
    }

    function gotoUnicornAdminPage() {
        window.open("https://developer.indorent.co.id/development/unicorn/adminlogin/autologin");
    }

    function gotoElitePage() {
        window.open("https://developer.indorent.co.id/development/elite");
    }

    function gotoEliteAdminPage() {
        window.open("https://developer.indorent.co.id/development/elite/adminlogin/autologin");
    }

    function gotoSipExpressPlusPage() {
        window.open("https://developer.indorent.co.id/development/expressplusdev/login/autologin");
    }

    return (
        <div id="latest-projects">
            <div style={{ height: 80 }}></div>
            <div className="container">
                <div className="h1 text-green">
                    <strong id="worksSince">#Latest Projects</strong>
                </div>

                <div className="row mt-4">
                    <div className="col-lg-6 col-12 align-self-center align-content-center justify-content-center">
                        <div className="h3 text-green text-center">
                            Unicorn
                        </div>
                        <div className="h5 text-white text-center mt-3">
                            Book Bus Ticket Online(Website, Android, IOS)
                        </div>
                        <div className="visit-page text-center mt-3" onClick={gotoUnicornPage}>
                            Visit Page
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 div-img-unicorn">
                        <img className="img-unicorn img-fluid" src="/images/unicorn/unicorn.png" />
                        <button type="submit" className="button btn-visit-page" onClick={gotoUnicornPage}>Visit Page</button>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="row mt-4">
                    <div className="col-lg-6 col-12 align-self-center align-content-center justify-content-center">
                        <div className="h3 text-green text-center">
                            Unicorn Admin Panel
                        </div>
                        <div className="h5 text-white text-center mt-3">
                            Book Bus Ticket Online Admin Panel(Website)
                        </div>
                        <div className="visit-page text-center mt-3" onClick={gotoUnicornAdminPage}>
                            Visit Page
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 div-img-unicorn">
                        <img className="img-unicorn img-fluid" src="/images/unicorn/unicorn_admin.png" />
                        <button type="submit" className="button btn-visit-page" onClick={gotoUnicornAdminPage}>Visit Page</button>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="row mt-4">
                    <div className="col-lg-6 col-12 align-self-center align-content-center justify-content-center">
                        <div className="h3 text-green text-center">
                            Elite Car Rental
                        </div>
                        <div className="h5 text-white text-center mt-3">
                            Car Rental Online And Airport Transfer(Website, Android, IOS)
                        </div>
                        <div className="visit-page text-center mt-3" onClick={gotoElitePage}>
                            Visit Page
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 div-img-unicorn">
                        <img className="img-unicorn img-fluid" src="/images/elite/elite.png" />
                        <button type="submit" className="button btn-visit-page" onClick={gotoElitePage}>Visit Page</button>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="row mt-4">
                    <div className="col-lg-6 col-12 align-self-center align-content-center justify-content-center">
                        <div className="h3 text-green text-center">
                            Elite Car Rental Admin Panel
                        </div>
                        <div className="h5 text-white text-center mt-3">
                            Car Rental Online And Airport Transfer Admin Panel(Website)
                        </div>
                        <div className="visit-page text-center mt-3" onClick={gotoEliteAdminPage}>
                            Visit Page
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 div-img-unicorn">
                        <img className="img-unicorn img-fluid" src="/images/elite/elite_admin.png" />
                        <button type="submit" className="button btn-visit-page" onClick={gotoEliteAdminPage}>Visit Page</button>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="row mt-4">
                    <div className="col-lg-6 col-12 align-self-center align-content-center justify-content-center">
                        <div className="h3 text-green text-center">
                            SIP Express
                        </div>
                        <div className="h5 text-white text-center mt-3">
                            Order Shipping / Tracking Parcels And Packages(Website)
                        </div>
                        <div className="visit-page text-center mt-3" onClick={gotoSipExpressPlusPage}>
                            Visit Page
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 div-img-unicorn">
                        <img className="img-unicorn img-fluid" src="/images/sipexpress/sipexpress.png" />
                        <button type="submit" className="button btn-visit-page" onClick={gotoSipExpressPlusPage}>Visit Page</button>
                    </div>
                </div>

                <div className="divider"></div>

                <div data-aos="fade-up" className="h3 text-blue text-center mt-4">
                    SIP Express Kurir
                </div>
                <div data-aos="fade-up" className="h6 text-white text-center mt-3">
                    Sip express courier is a mobile apps for courrier when they send the goods to the customers
                </div>
                <div data-aos="fade-up" className="text-center mt-3 mb-4">
                    <img className="img-unicorn img-fluid" src="/images/sipexpresskurir/sipexpresskurir.png" />
                </div>

                <div className="divider"></div>

                <div data-aos="fade-up" className="h3 text-blue text-center mt-4">
                    Inline
                </div>
                <div data-aos="fade-up" className="h6 text-white text-center mt-3">
                    Inline is a mobile application platform to booking a vehicle, this application could be use for partnership
                    company with indorent
                </div>
                <div data-aos="fade-up" className="text-center mt-3 mb-4">
                    <img className="img-unicorn img-fluid" src="/images/inline/inline.png" />
                </div>

                <div className="divider"></div>

                <div className="h6 text-white text-center mt-4">
                    There are more projects that i&apos;ve created, to see others please contact me.
                </div>
            </div>

        </div>
    );
}

export default Projects;