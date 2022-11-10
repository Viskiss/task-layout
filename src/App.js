import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import React from "react";
import WorkInfo from "./components/WorkInfo";
import Skills from "./components/Skills";
import Video from "./components/Video";
import Projects from "./components/Projects";
import Form from "./components/Form";
import Footer from "./components/Footer";

import GlobalStyle from "./App.styled";

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
