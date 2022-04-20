import 'aos/dist/aos.css';
import React from "react";

function Projects() {

    function downloadUnicornAPK() {
        window.open('/apk/unicorn_debug.apk', '_blank').focus();
    }

    function gotoUnicornPage() {
        window.open("https://developer.indorent.co.id/development/unicorn");
    }

    function gotoUnicornAdminPage() {
        window.open("https://developer.indorent.co.id/development/unicorn/adminlogin/autologin");
    }

    function gotoElitePage() {
        window.open("https://developer.indorent.co.id/development/elite/login/autologin");
    }

    function gotoEliteAdminPage() {
        window.open("https://developer.indorent.co.id/development/elite/adminlogin/autologin");
    }

    function gotoSipExpressPlusPage() {
        window.open("https://developer.indorent.co.id/development/expressplusdev/login/autologin");
    }

    function gotoSipExpressKurirPage() {
        window.open("https://play.google.com/store/apps/details?id=com.csm.expresspluskurir");
    }

    function gotoCSMWebPage() {
        window.open("https://developer.indorent.co.id/development/csmweb");
    }

    function gotoIndorentWebPage() {
        window.open("https://developer.indorent.co.id/development/indorentweb");
    }

    function gotoRecruitmentPage() {
        window.open("https://developer.indorent.co.id/DEVELOPMENT/RecruitmentOnlineDev/admin");
    }

    function gotoMRBSPage() {
        window.open("https://developer.indorent.co.id/DEVELOPMENT/MRBSDev/login/autologin");
    }

    function gotoCSSPage() {
        window.open("https://developer.indorent.co.id/development/SurveyCustomer/?param=1758beffbf835528b769a512759251ac236760d5");
    }

    function gotoVMTPage() {
        window.open("https://developer.indorent.co.id/DEVELOPMENT/VehicleMaintenanceTrackerDev/Login/autologin");
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
                        <div className="text-center mt-3">
                            <span className="visit-page" onClick={gotoUnicornPage}>Visit Page</span>
                        </div>
                        <div className="text-center mt-1">
                            <span className="visit-page" onClick={downloadUnicornAPK}>Download APK</span>
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
                        <div className="text-center mt-3">
                            <span className="visit-page" onClick={gotoUnicornAdminPage}>Visit Page</span>
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
                        <div className="text-center mt-3">
                            <span className="visit-page" onClick={gotoElitePage}>Visit Page</span>
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
                        <div className="text-center mt-3">
                            <span className="visit-page" onClick={gotoEliteAdminPage}>Visit Page</span>
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
                        <div className="text-center mt-3">
                            <span className="visit-page" onClick={gotoSipExpressPlusPage}>Visit Page</span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 div-img-unicorn">
                        <img className="img-unicorn img-fluid" src="/images/sipexpress/sipexpress.png" />
                        <button type="submit" className="button btn-visit-page" onClick={gotoSipExpressPlusPage}>Visit Page</button>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="row mt-4">
                    <div className="col-lg-6 col-12 align-self-center align-content-center justify-content-center">
                        <div className="h3 text-green text-center">
                            SIP Express Kurir
                        </div>
                        <div className="h5 text-white text-center mt-3">
                            Picking Up / Delivering Parcels And Packages To Customers(Android, IOS)
                        </div>
                        <div className="text-center mt-3">
                            <span className="visit-page" onClick={gotoSipExpressKurirPage}>Visit Page</span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 div-img-unicorn">
                        <img className="img-unicorn img-fluid" src="/images/sipexpresskurir/sipexpresskurir.png" />
                        <button type="submit" className="button btn-visit-page" onClick={gotoSipExpressKurirPage}>Visit Page</button>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="row mt-4">
                    <div className="col-lg-6 col-12 align-self-center align-content-center justify-content-center">
                        <div className="h3 text-green text-center">
                            CSM Group
                        </div>
                        <div className="h5 text-white text-center mt-3">
                            CSM Group Company Website
                        </div>
                        <div className="text-center mt-3">
                            <span className="visit-page" onClick={gotoCSMWebPage}>Visit Page</span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 div-img-unicorn">
                        <img className="img-unicorn img-fluid" src="/images/csmweb/csmweb.png" />
                        <button type="submit" className="button btn-visit-page" onClick={gotoCSMWebPage}>Visit Page</button>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="row mt-4">
                    <div className="col-lg-6 col-12 align-self-center align-content-center justify-content-center">
                        <div className="h3 text-green text-center">
                            Indorent Website
                        </div>
                        <div className="h5 text-white text-center mt-3">
                            Indorent Company Profile Website
                        </div>
                        <div className="text-center mt-3">
                            <span className="visit-page" onClick={gotoIndorentWebPage}>Visit Page</span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 div-img-unicorn">
                        <img className="img-unicorn img-fluid" src="/images/indorentweb/indorentweb.png" />
                        <button type="submit" className="button btn-visit-page" onClick={gotoIndorentWebPage}>Visit Page</button>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="row mt-4">
                    <div className="col-lg-6 col-12 align-self-center align-content-center justify-content-center">
                        <div className="h3 text-green text-center">
                            Recruitment Online
                        </div>
                        <div className="h5 text-white text-center mt-3">
                            E-Recruitment For Hiring And Tracking Progress of a New Employee
                        </div>
                        <div className="text-center mt-3">
                            <span className="visit-page" onClick={gotoRecruitmentPage}>Visit Page</span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 div-img-unicorn">
                        <img className="img-unicorn img-fluid" src="/images/recruitment/recruitment.png" />
                        <button type="submit" className="button btn-visit-page" onClick={gotoRecruitmentPage}>Visit Page</button>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="row mt-4">
                    <div className="col-lg-6 col-12 align-self-center align-content-center justify-content-center">
                        <div className="h3 text-green text-center">
                            Customer Survey
                        </div>
                        <div className="h5 text-white text-center mt-3">
                            Collecting Customer Feedback to Improve Customer Service
                        </div>
                        <div className="text-center mt-3">
                            <span className="visit-page" onClick={gotoCSSPage}>Visit Page</span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 div-img-unicorn">
                        <img className="img-unicorn img-fluid" src="/images/survey/survey.png" />
                        <button type="submit" className="button btn-visit-page" onClick={gotoCSSPage}>Visit Page</button>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="row mt-4">
                    <div className="col-lg-6 col-12 align-self-center align-content-center justify-content-center">
                        <div className="h3 text-green text-center">
                            Meeting Room Booking
                        </div>
                        <div className="h5 text-white text-center mt-3">
                            Book a Meeting Room Online
                        </div>
                        <div className="text-center mt-3">
                            <span className="visit-page" onClick={gotoMRBSPage}>Visit Page</span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 div-img-unicorn">
                        <img className="img-unicorn img-fluid" src="/images/meetingroom/meetingroom.png" />
                        <button type="submit" className="button btn-visit-page" onClick={gotoMRBSPage}>Visit Page</button>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="row mt-4">
                    <div className="col-lg-6 col-12 align-self-center align-content-center justify-content-center">
                        <div className="h3 text-green text-center">
                            Vehicle Maintenance Tracker
                        </div>
                        <div className="h5 text-white text-center mt-3">
                            Helping Customers Keeping Records For All of Their Vehicles' Historical Maintenance
                        </div>
                        <div className="text-center mt-3">
                            <span className="visit-page" onClick={gotoVMTPage}>Visit Page</span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 div-img-unicorn">
                        <img className="img-unicorn img-fluid" src="/images/vmt/vmt.png" />
                        <button type="submit" className="button btn-visit-page" onClick={gotoVMTPage}>Visit Page</button>
                    </div>
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