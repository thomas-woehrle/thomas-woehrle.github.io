import { Box } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import TestingSite from "./pages/TestingSite";
import ProjectDetails from "./pages/ProjectDetails";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NonExistentPage from "./pages/NonExistentPage";
import InfoPage from "./pages/InfoPage";

const App = () => {
  const [activePage, setActivePage] = useState("Home");

  return (
    <Box backgroundColor={"gray.200"} minHeight={"100vh"}>
      <NavBar
        activeButton={activePage}
        buttons={[
          { value: "Home", link: "/home" },
          { value: "Projects", link: "/projects" },
          { value: "Info", link: "/info" },
        ]}
        onNavbarClick={(button) => setActivePage(button)}
      />
      <Box
        minHeight={{ base: "2xl", lg: "3xl" }}
        backgroundColor="gray.300"
        padding={{ base: 4, sm: 8, md: 16 }}
      >
        <Routes>
          <Route path="/home" element={<MainPage />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/projects/:projectSlug" element={<ProjectDetails />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/*" element={<NonExistentPage />} />
          <Route path="/test" element={<TestingSite />} />
          <Route path="/" element={<Navigate to={"/home"} />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
