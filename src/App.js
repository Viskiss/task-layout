import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe/AboutMe";
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


// const Button = (props) => {
//   return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
// };

export default App;
