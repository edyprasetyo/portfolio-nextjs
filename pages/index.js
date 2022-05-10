import Terminal from '@nitric/react-animated-term';
import '@nitric/react-animated-term/css/styles.css';
import Cookies from 'cookies';
import moment from 'moment';
import React from 'react';
import sha1 from 'sha1';
import Layout from '../component/layout/layout';
import db from '../lib/db';
import Tools from '../lib/tools';
import About from './../component/about';
import ContactMe from './../component/contact_me';
import Projects from './../component/projects';
import Skills from './../component/skills';


export const getServerSideProps = async ({ req, res }) => {

  const cookies = new Cookies(req, res)
  var browserID = cookies.get('browserID');
  if (!browserID) {
    browserID = sha1(moment().format('YYYY-MM-DD HH:mm:ss'));
    cookies.set('browserID', browserID, { httpOnly: true });
  } else {
    var isNew = await db.visitor.findFirst({
      where: {
        IP: browserID,
      },
    });

    if (isNew == null) {
      var outillog = await db.utillog.findFirst({
        where: {
          ID: 1,
        },
      });
      await db.utillog.upsert({
        where: {
          ID: 1,
        },
        update: {
          ID: 1,
          JumlahPengunjung: outillog.JumlahPengunjung + 1
        },
        create: {
          ID: 1,
          JumlahPengunjung: 1
        },
      });
    }

    await db.visitor.upsert({
      where: {
        IP: browserID,
      },
      update: {
        Header1: '',
        Header2: '',
        Tanggal: Tools.datetimeNow(),
      },
      create: {
        IP: browserID,
        Tanggal: Tools.datetimeNow(),
      },
    });
  }

  return {
    props: {
      browserID,
    },
  }
};

export default function Home() {

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
      'text': 'My Current Position',
      'cmd': true
    },
    {
      'text': 'RnD Programmer Supervisor',
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
      'text': '',
      'cmd': false
    },
    {
      'text': 'C#(ASP.Net Framework & Core), Java Script(NextJS-ReactJS)',
      'cmd': false
    },
    {
      'text': '',
      'cmd': false
    },
    {
      'text': 'PHP(Laravel), Go Lang(Beego & Gin), Type Script(Angular & ReactJS)',
      'cmd': false
    },
    {
      'text': '',
      'cmd': false
    },
    {
      'text': 'Dart(Flutter), Java/Kotlin(Android Studio), Swift(Xcode)',
      'cmd': false
    },
    {
      'text': '',
      'cmd': false
    },
    {
      'text': 'Winform(C#/VB.net)',
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
            <div className="col-lg-6 pt-3 img-profile-parent justify-content-center align-self-center align-content-center align-item-center">
              <img className="img-fluid img-profile" src="/images/foto.png" alt="profile" />
            </div>
            <div className="col-lg-6 div-parent-terminal">
              <div className="h1 text-green mb-2">
                testing
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
      <Projects></Projects>
      <ContactMe></ContactMe>
    </Layout>

  )
}
