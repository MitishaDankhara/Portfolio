import React from "react";
import "./sidebar.scss";
import ProfilePic from "../../assets/images/profile_image.jpg";
import { Link } from "react-scroll";
export default function Sidebar() {
  const menu_item = [
    {
      Menu: "Home",
      to: "home",
    },
    {
      Menu: "About Me",
      to: "about_me",
    },
    {
      Menu: "What I Do",
      to: "what_i_do",
    },
    {
      Menu: "Resume",
      to: "resume",
    },
    {
      Menu: "Portfolio",
    },
    {
      Menu: "Contact",
    },
  ];
  return (
    <div>
      <div className="sidebar_main_layout">
        <div className="profile_image">
          <img src={ProfilePic} alt="That's My Profile" />
        </div>
        <h1 className="owner_name">Mitisha Dankhara</h1>
        <div className="menu_bar_main">
          <ul className="menu_list">
            {menu_item &&
              menu_item?.map((item, i) => {
                return (
                  <li key={i} className="menu_item">
                    <Link
                      to={item?.to}
                      smooth={true}
                      duration={500}
                      spy={true}
                      activeClass="active"
                    >
                      {item?.Menu}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="social_icons">
          <div className="linkedin">
            <a
              href="https://www.linkedin.com/in/mitisha-dankhara-19972a237/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path>
              </svg>
            </a>
          </div>
          <div className="twitter">
            <a href="https://x.com/" target="_blank" rel="noreferrer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                version="1.2"
                baseProfile="tiny"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.89 7.012c.808-.496 1.343-1.173 1.605-2.034-.786.417-1.569.703-2.351.861-.703-.756-1.593-1.14-2.66-1.14-1.043 0-1.924.366-2.643 1.078-.715.717-1.076 1.588-1.076 2.605 0 .309.039.585.117.819-3.076-.105-5.622-1.381-7.628-3.837-.34.601-.51 1.213-.51 1.846 0 1.301.549 2.332 1.645 3.089-.625-.053-1.176-.211-1.645-.47 0 .929.273 1.705.82 2.388.549.676 1.254 1.107 2.115 1.291-.312.08-.641.118-.979.118-.312 0-.533-.026-.664-.083.23.757.664 1.371 1.291 1.841.625.472 1.344.721 2.152.743-1.332 1.045-2.855 1.562-4.578 1.562-.422 0-.721-.006-.902-.038 1.697 1.102 3.586 1.649 5.676 1.649 2.139 0 4.029-.542 5.674-1.626 1.645-1.078 2.859-2.408 3.639-3.974.784-1.564 1.172-3.192 1.172-4.892v-.468c.758-.57 1.371-1.212 1.84-1.921-.68.293-1.383.492-2.11.593z"></path>
              </svg>
            </a>
          </div>
          <div className="github">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              {" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
