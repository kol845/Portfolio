import React from "react"
import './../css/reset.css';
import './../css/global.css';
import './../css/home.css';

import homeImg1 from './../images/home/home_1.jpg';
import homeImg2 from './../images/home/home_2.jpg';

import bracketImg from './../images/home/coding_bracket.gif';

import Header from '../components/Header';
import Footer from '../components/Footer';
export default function Home() {
  return (
  <React.Fragment>
    <div className="root">
      <Header/>
        <img src={homeImg1} alt="Home image 1"/>
        <div class="content_box">
            <p class="title">Welcome! My name is Pebo Hamza.<img class="coding_bracket" src={bracketImg} alt="Home image 2"/></p>
            <div class="content_box_sub">
                <div class="content_box_sub_sub">
                    <p class="content_box_sub_title">Born and raised in Storvreta, Sweden</p>
                    <p class ="content_box_sub_content">

                    </p>
                </div>
                <div class="content_box_sub_sub">
                    <p class="content_box_sub_title">Passion for creating software</p>
                    <p class ="content_box_sub_content">

                    </p>
                </div>
                <div class="content_box_sub_sub">
                    <p class="content_box_sub_title">Love of books and learning</p>
                    <p class ="content_box_sub_content">

                    </p>
                </div>
            </div>
        </div>
        <img src={homeImg2} alt="Home image 2"/>
        <div class="content_box">
            <p class="title">My Educational Journey.<img class="coding_bracket" src={bracketImg} alt="Home image 2"/></p>
            <div class="content_box_sub" style={{textAlign: "right"}}>
                <div class="content_box_sub_sub">
                    <p class="content_box_sub_title">ITG- IT Highschool: Informational Technology 2014-2017</p>
                    <p class ="content_box_sub_content">

                    </p>
                </div>
                <div class="content_box_sub_sub">
                    <p class="content_box_sub_title">KTH- University: Computer Science, Bachelor of Science in Engineering 2017-2020</p>
                    <p class ="content_box_sub_content">

                    </p>
                </div>
                <div class="content_box_sub_sub">
                    <p class="content_box_sub_title">Hyper Island- Trade School: Frontenddeveloper 2020-2022</p>
                    <p class ="content_box_sub_content">

                    </p>
                </div>
            </div>
        </div>
      
      <Footer/>
    </div>
  </React.Fragment>

  );
}
