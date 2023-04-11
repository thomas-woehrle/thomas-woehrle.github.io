import { Button, Center, Grid, GridItem, Heading, Box } from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
import NavBar from "./components/NavBar";
import FrontPageText from "./components/FrontPageText";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";

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
        </Routes>
      </Box>
      <Footer />
    </Box>

    // <Box bgColor={"gray.200"} height={"1000px"}>
    //   <NavBar />
    //   <Center padding={4}>
    //     <FrontPageText />
    //   </Center>
    // </Box>
    // <Box bgColor={"gray.200"} height={"100%"}>
    //   <Grid templateAreas={`"nav" "main"`}>
    //     <GridItem area="nav" bgColor={"gray.200"} marginBottom={4}>
    //       <NavBar />
    //     </GridItem>
    //     <GridItem area="main" bgColor={"gray.200"}>
    //       <Center padding={4}>
    //         <FrontPageText />
    //       </Center>
    //     </GridItem>
    //   </Grid>
    // </Box>
  );
};

export default App;
