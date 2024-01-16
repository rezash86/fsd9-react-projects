import { useState } from "react";
import "./App.css";
import AnimalShow from "./components/AnimalShow";

function App() {
  const [count, setCount] = useState(0);

  // const [animals, setAnimals] = useState([]);
  // const [address, setAddress] = useState("");

  const handleClick = () => {
    // console.log("clicked");
    // count = count + 1; NEVER think about changing the variable directly
    setCount(count + 1);
  };

  return (
    <div>
      <button
        style={{ background: "red" }}
        // onClick={() => console.log("clicked")}
        onClick={handleClick}
        // onMouseEnter={() => console.log("mouse hovered")}
      />
      <div>the count of animal is {count}</div>
      <AnimalShow />
    </div>
  );
}

export default App;
