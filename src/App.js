import GlobalStyle from "./Global.styled";

import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import WorkInfo from "./components/WorkInfo";
import Skills from "./components/Skills";
import Video from "./components/Video";
import Projects from "./components/Projects";
import Form from "./components/Form";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <WorkInfo />
      <Skills />
      <Video />
      <Projects />
      <Form />
      <Footer />
      <GlobalStyle />
    </>
  );
};

export default App;
