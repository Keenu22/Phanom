import React from "react";
import Conveyer from "./Conveyer/Conveyer";
import Section from "./Main-Section/Section";
import Navbar from "./Navbar/Navbar";
import Prototype from "./Prototype/Prototype";
import Screen from "./Screen/Screen";
import Service from "./Service/Service";
import Video from "./Video/Video";
import Vps from "./Vps/Vps";

function App() {
  return (
    <div>
      <Navbar/>
      <Section/>
      <Screen/>
      <Prototype/>
      <Service/>
      <Vps/>
      <Conveyer/>
      <Video/>
    </div>
  );
}

export default App;

