import moment from 'moment';
import React from 'react';
import Layout from './layout/layout';
import About from './subpage/about';
import IndexCode from './subpage/index_code';



export default function Home() {

  var o = moment().format('MMMM Do YYYY, h:mm:ss a')

  function showProfile() {
    window.open('https://www.instagram.com/edyprasetyo_', '_blank').focus();
  }

  return (
    <Layout>
      <div id="home">
        <div style={{ height: "80px" }}></div>
        <div className="index-clip">
        </div>
        <div className="container index-container">
          <div className="row">
            <div className="col-lg-6 pt-3 img-profile-parent justify-content-center align-self-center">
              <span onClick={showProfile}>
                <img className="img-fluid img-profile" src="/images/profile_4.png" />
              </span>
            </div>
            <div className="col-lg-6 pt-5">
              <div className="h1 text-green mb-2">
                <strong>Hello</strong>

              </div>
              <div className="h5 text-green mb-3">
                I'm Edy Prasetyo - <strong className="text-blue">Full Stack Developer</strong>
              </div>

              <IndexCode></IndexCode>
            </div>

          </div>
        </div>
      </div>
      <About></About>
    </Layout>

  )
}
