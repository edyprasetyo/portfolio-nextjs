import 'aos/dist/aos.css';
import React from "react";

function Projects() {

    return (
        <div id="latest-projects">
            <div style={{ height: 80 }}></div>
            <div className="container">
                <div className="h1 text-green">
                    <strong id="worksSince">#Latest Projects</strong>
                </div>
                <div data-aos="fade-up" className="h3 text-blue text-center mt-4">
                    Unicorn
                </div>
                <div data-aos="fade-up" className="h6 text-white text-center mt-3">
                    Unicorn is an application to booking bus ticket, customers also can access this application by these three
                    platform web,ios, android.

                    For the admin, they have their own panel on a website, so they can control also can see the percentage of
                    available ticket, fleet, and every branch.
                </div>
                <div data-aos="fade-up" className="text-center mt-3 mb-4">
                    <img className="img-unicorn img-fluid" src="/images/unicorn/unicorn.png" />
                </div>

                <div className="divider"></div>

                <div data-aos="fade-up" className="h3 text-blue text-center mt-4">
                    Unicorn Admin Panel
                </div>
                <div data-aos="fade-up" className="h6 text-white text-center mt-3">
                    For the admin, they have their own panel on a website, so they can control also can see the percentage of
                    available ticket, fleet, and every branch.
                </div>

                <div data-aos="fade-up" className="text-center mt-3 mb-4">
                    <img className="img-unicorn img-fluid" src="/images/unicorn/unicorn_admin.png" />
                </div>

                <div className="divider"></div>

                <div data-aos="fade-up" className="h3 text-blue text-center mt-4">
                    Elite Car Rental
                </div>
                <div data-aos="fade-up" className="h6 text-white text-center mt-3">
                    Elite car rental is a website to rent several kind of vehicle, customers could access this apps wheter using
                    android or ios devices
                </div>
                <div data-aos="fade-up" className="text-center mt-3 mb-4">
                    <img className="img-unicorn img-fluid" src="/images/elite/elite.png" />
                </div>

                <div className="divider"></div>

                <div data-aos="fade-up" className="h3 text-blue text-center mt-4">
                    Elite Car Rental Admin Panel
                </div>
                <div data-aos="fade-up" className="h6 text-white text-center mt-3">
                    For the admin, they have their own panel on a website, so they can monitor all incoming vehicle orders, etc.
                </div>

                <div data-aos="fade-up" className="text-center mt-3 mb-4">
                    <img className="img-unicorn img-fluid" src="/images/elite/elite_admin.png" />
                </div>

                <div className="divider"></div>

                <div data-aos="fade-up" className="h3 text-blue text-center mt-4">
                    SIP Express
                </div>
                <div data-aos="fade-up" className="h6 text-white text-center mt-3">
                    Sip express is a website to tracking delivery goods like document or etc based on shipped number which
                    received by customers
                </div>
                <div data-aos="fade-up" className="text-center mt-3 mb-4">
                    <img className="img-unicorn img-fluid" src="/images/sipexpress/sipexpress.png" />
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