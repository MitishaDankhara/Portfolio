import React from "react";
import "./home.scss";
import Intro_bg from "../../assets/images/intro-bg.jpg";
import { TypeAnimation } from "react-type-animation";
export default function Home() {
  const sequenceArray = [
    "I'm Mitisha Dankhara",
    "I'm a Designer",
    "I'm a Web Develpoer",
  ];
  return (
    <section className="home_sec">
      <div className="home_sec_bg">
        <img src={Intro_bg} alt="Intro" />
        <div className="black_blur_layer">
          <div className="home_sec_content">
            <h2 className="welcome_text">Welcome</h2>
            <div className="animation_text">
              {sequenceArray && sequenceArray?.length > 0 && (
                <TypeAnimation
                  sequence={sequenceArray}
                  speed={250}
                  style={{ display: "inline-block" }}
                  preRenderFirstString={true}
                  className="anime_text"
                  wrapper="b"
                  cursor={true}
                  repeat={Infinity}
                />
              )}
            </div>
            <p className="add_text">based in Surat, Gujarat.</p>
            <button className="hire_btn">hire me</button>
          </div>
        </div>
      </div>
    </section>
  );
}
