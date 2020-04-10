import React from "react";
import Slider from "./components/Slider";

const slideData = [
  {
    index: 0,
    headline: "Tanjiro Kamado",
    button: "See More",
    src: "https://pbs.twimg.com/media/EQDwBIWUYAI_JgH?format=jpg&name=large",
  },
  {
    index: 1,
    headline: "Nezuko Kamado",
    button: "See More",
    src: "https://pbs.twimg.com/media/ERrQO1UU0AEsalR?format=jpg&name=900x900",
  },
  {
    index: 2,
    headline: "Inosuke Hashibira",
    button: "See More",
    src: "https://pbs.twimg.com/media/ERrWfKAVAAIOA16?format=jpg&name=900x900",
  },
  {
    index: 3,
    headline: "Zenitsu Agatsuma",
    button: "See More",
    src:
      "https://i.pinimg.com/originals/fc/78/d8/fc78d819989b8366d86e3e7fd09d8416.png",
  },
];

function App() {
  return (
    <div className="App">
      <Slider slides={slideData} heading="Example Slider" />
    </div>
  );
}

export default App;
