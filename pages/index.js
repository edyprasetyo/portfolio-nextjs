import Terminal from '@nitric/react-animated-term';
import '@nitric/react-animated-term/css/styles.css';
import Cookies from 'cookies';
import moment from 'moment';
import React from 'react';
import sha1 from 'sha1';
import db from '../lib/db';
import Layout from './layout/layout';
import About from './subpage/about';
import Skills from './subpage/skills';

export const getServerSideProps = async ({ req, res }) => {
  const cookies = new Cookies(req, res)
  var browserID = cookies.get('browserID');
  if (!browserID) {
    browserID = sha1(moment().format('YYYY-MM-DD HH:mm:ss'));
    cookies.set('browserID', browserID, { httpOnly: true });
  } else {
    const upsertUser = await db.visitor.upsert({
      where: {
        IP: browserID,
      },
      update: {
        Header1: '',
        Header2: '',
        Tanggal: moment().toDate(),
      },
      create: {
        IP: browserID,
        Tanggal: moment().toDate(),
      },
    });
    console.log(browserID);
  }

  return {
    props: {
      browserID,
    },
  }
};

export default function Home({ browserID }) {

  function showProfile() {
    window.open('https://www.instagram.com/edyprasetyo_', '_blank').focus();
  }

  const termLines = [
    {
      'text': 'Hello',
      'cmd': true
    },
    {
      'text': 'I\'m Edy Prasetyo',
      'cmd': false
    },
    {
      'text': '',
      'cmd': false
    },
    {
      'text': 'Current Job',
      'cmd': true
    },
    {
      'text': 'RnD Programmer Supervisor - Full Stack',
      'cmd': false
    },
    {
      'text': '',
      'cmd': false
    },
    {
      'text': 'Experienced Building Complex App Using :',
      'cmd': true
    },
    {
      'text': 'Go Lang(Beego/Gin), Java Script(NextJS-ReactJS)',
      'cmd': false
    },
    {
      'text': '',
      'cmd': false
    },
    {
      'text': 'C#(ASP.Net Framework/Core), Java, Swift, PHP(Laravel)',
      'cmd': false
    },
    {
      'text': '',
      'cmd': false
    },
    {
      'text': 'Type Script(Angular/ReactJS), Dart(Flutter)',
      'cmd': false
    },

  ]

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
                <h1 className='text-white'>{browserID}</h1>
              </span>
            </div>
            <div className="col-lg-6 pt-5">
              <div className="h1 text-green mb-2">
                <strong>
                  <Terminal
                    lines={termLines}
                    interval={100}
                  />
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About></About>
      <Skills></Skills>
    </Layout>

  )
}
