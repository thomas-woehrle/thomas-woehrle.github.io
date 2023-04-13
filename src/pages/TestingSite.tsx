import React from "react";
import data from "../assets/data.json";
import useProjects from "../hooks/useProjects";

const handleEmailClick = () => {
  window.location.href =
    "mailto:someone@example.com?subject=Hello&body=Hi%20there!";
};

const TestingSite = () => {
  return <button onClick={handleEmailClick}>Send Email</button>;
};

export default TestingSite;
