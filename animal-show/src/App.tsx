import { useState } from "react";
import "./App.css";
import AnimalShow from "./components/AnimalShow/AnimalShow";

const getRandomAnimal = () => {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
};

function App() {
  const [animals, setAnimals] = useState([""]);

  // const [address, setAddress] = useState("");

  const handleClick = () => {
    //I have a list of animals and I want to push a new animal to the list
    //I need a random animal generator
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((anm, index) => {
    return <AnimalShow key={index} type={anm} />;
  });

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      {/* I need a loop into the list of animals and show each animal */}
      {/* In typescript we don't have foreach*/}

      {renderedAnimals.length === 1 && <p>Click to generate animals</p>}
      {renderedAnimals.length > 1 && (
        <>
          <div className="animal-list">{renderedAnimals}</div>
        </>
      )}
    </div>
  );
}

export default App;
