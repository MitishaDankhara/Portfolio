import { Element } from "react-scroll";
import Sidebar from "./common/sidebar";
import Home from "./component/Home";
import AboutMe from "./component/aboutUs";
import "./styles/global.scss";
import Service from "./component/Service";
import Resume from "./component/Resume";

function App() {
  return (
    <div className="main_layout">
      <div className="sidebar_layout">
        <Sidebar />
      </div>
      <div className="info_layout">
        <Element name="home">
          <Home />
        </Element>
        <Element name="about_me">
          <AboutMe />
        </Element>
        <Element name="what_i_do">
          <Service />
        </Element>
        <Element name="resume">
          <Resume />
        </Element>
      </div>
    </div>
  );
}

export default App;
