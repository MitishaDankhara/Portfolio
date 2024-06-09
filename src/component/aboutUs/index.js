import React from "react";
import "./about.scss";
import Heading from "../../common/sectionHeading";
export default function AboutMe() {
  const handleDownload = () => {
    const cvPath = `${process.env.PUBLIC_URL}/cv.pdf`;
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="about_me">
      <Heading main="About Me" secondary="Know Me More" />
      <div className="container">
        <div className="about_mySelf_flex">
          <div className="about_content">
            <h3>
              I'm <span>Mitisha Dankhara</span>, a Web Developer
            </h3>
            <p>
              I help you build brand for your business at an affordable price.
              Thousands of clients have procured exceptional results while
              working with our dedicated team. when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>
            <p>
              Delivering work within time and budget which meets client’s
              requirements is our moto. Lorem Ipsum has been the industry's
              standard dummy text ever when an unknown printer took a galley.
            </p>
          </div>
          <div className="about_info">
            <p>
              <b>name:</b> Mitisha Dankhara
            </p>
            <p>
              <a className="email" href="mailto: mitishadankhara003@gmail.com">
                <b>email:</b> mitishadankhara003@gmail.com
              </a>
            </p>
            <p>
              <b>age:</b> 21
            </p>
            <p>
              <b>from:</b> Surat, Gujarat
            </p>
            <button className="fill_btn" onClick={handleDownload}>
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
