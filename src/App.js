import "./App.css";
import Header from "./Header.js";
import Doodle from "./Doodlecss.js";
import Intro from "./Intro.js";
import Button from "./Button.js";
import { useState } from "react";

function App() {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  return (
    <div>
      <Intro />
      <Header />
      <Doodle />
      <Button isHovered={hoveredIcon === "github"}>Hello</Button>
    </div>
  );
}

export default App;
