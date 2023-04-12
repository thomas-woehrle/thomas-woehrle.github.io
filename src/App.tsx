import { Button, Center, Grid, GridItem, Heading, Box } from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
import NavBar from "./components/NavBar";
import FrontPageText from "./components/FrontPageText";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import TestingSite from "./pages/TestingSite";
import ProjectDetails from "./pages/ProjectDetails";

const App = () => {
  const [activePage, setActivePage] = useState("Home");

  return (
    <Box backgroundColor={"gray.200"}>
      <NavBar
        activeButton={activePage}
        buttons={[
          { value: "Home", link: "/home" },
          { value: "Portfolio", link: "/portfolio" },
          { value: "Info", link: "/info" },
        ]}
        onNavbarClick={(button) => setActivePage(button)}
      />
      <Box
        minHeight={{ base: "2xl", lg: "3xl" }}
        backgroundColor="gray.300"
        padding={16}
      >
        <Routes>
          <Route path="/home" element={<MainPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:projectSlug" element={<ProjectDetails />} />
          <Route path="/info" element={<TestingSite />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
