import React from "react";
import "./resume.scss";
import Heading from "../../common/sectionHeading";
import ProgressBar from "@ramonak/react-progress-bar";
export default function Resume() {
  const education_card_data = [
    {
      Year: "2020- 2023",
      Heading: "Bachelor of Commerce",
      University: "Veer Narmad South Gujrat University",
      Description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autemnon nihil reprehenderit hicquis nulla vel in atque, nisi temporibus!",
    },
    {
      Year: "2023 - 2024",
      Heading: "React Js - Certification Course",
      University: "Rejoice Talent Academy",
      Description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autemnon nihil reprehenderit hicquis nulla vel in atque, nisi temporibus!",
    },
  ];
  const experience_card_data = [
    {
      Year: "Feb 2024 - Present",
      Company_Name: "Vedhas AI Technologies - Intership",
      Add: "Surat, Gujarat.",
      Description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autemnon nihil reprehenderit hicquis nulla vel in atque, nisi temporibus!",
    },
  ];
  const skill_progress = [
    {
      skill: "HTML",
      pr: "90",
    },
    {
      skill: "CSS/SCSS",
      pr: "94",
    },
    {
      skill: "Tailwind",
      pr: "80",
    },
    {
      skill: "Web Design",
      pr: "94",
    },
    {
      skill: "Javascript",
      pr: "75",
    },
    {
      skill: "ReactJs",
      pr: "89",
    },
    {
      skill: "NextJs",
      pr: "70",
    },
    {
      skill: "Web Development",
      pr: "91",
    },
  ];
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
    <section className="resume_section">
      <Heading main="Summary" secondary="Resume" />
      <div className="container">
        <h2 className="education_heading">My Education</h2>
        <div className="education_column">
          {education_card_data &&
            education_card_data?.map((data, i) => {
              return (
                <div className="education_card" key={i}>
                  <span className="year">{data?.Year}</span>
                  <h3 className="card_heading">{data?.Heading}</h3>
                  <p className="uni_name">{data?.University}</p>
                  <p>{data?.Description}</p>
                </div>
              );
            })}
        </div>
        <h2 className="education_heading">My Experience</h2>
        <div className="exeperience_column">
          {experience_card_data &&
            experience_card_data?.map((data, i) => {
              return (
                <div className="exeperience_card" key={i}>
                  <span className="year">{data?.Year}</span>
                  <h3 className="card_heading">{data?.Company_Name}</h3>
                  <p className="uni_name">{data?.Add}</p>
                  <p>{data?.Description}</p>
                </div>
              );
            })}
        </div>
        <div className="skill_heading">My Skills</div>
        <div className="grid">
          {skill_progress &&
            skill_progress?.map((item, i) => {
              return (
                <div className="skill_bar" key={i}>
                  <div className="skill_name_flex">
                    <p>{item?.skill}</p>
                    <p>{item?.pr}%</p>
                  </div>
                  <ProgressBar
                    completed={item?.pr}
                    height="14px"
                    bgColor="#20c997"
                    isLabelVisible={false}
                  />
                </div>
              );
            })}
        </div>
        <div className="download_btn">
          <button className="border_btn" onClick={handleDownload}>
            Download CV{" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
