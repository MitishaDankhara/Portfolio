import React from "react";
import "./service.scss";
import Heading from "../../common/sectionHeading";
export default function Service() {
  const service_card = [
    {
      svg: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          aria-hidden="true"
          height="40"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
            clip-rule="evenodd"
          ></path>
        </svg>
      ),
      title: "Web Designing",
      description:
        "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      svg: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 640 512"
          height="40"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path>
        </svg>
      ),
      title: "Web Developing",
      description:
        "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
  ];
  return (
    <section className="service_sec">
      <Heading main="Services" secondary="What I Do?" />
      <div className="container">
        <div className="service_card_grid">
          {service_card &&
            service_card?.map((data, index) => {
              return (
                <div key={index} className="card_item">
                  {data?.svg}
                  <div className="card_content">
                    <h3 className="card_heading">{data?.title}</h3>
                    <p>{data?.description}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
