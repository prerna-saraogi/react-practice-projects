import React from "react";
import "./App.css";
import { accordionData } from "./accordionData";
import Accordion from "./Accordion";

function App() {
  return (
    <div className="container">
      <div className="title">
        <h2>Frequently Asked Questions</h2>
        <p>
          Answers to common questions about our frontend challenges website.
        </p>
      </div>
      <Accordion items={accordionData} />
    </div>
  );
}

export default App;
