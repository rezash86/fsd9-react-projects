import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";
function App() {
  console.log(searchImages("car"));

  return (
    <>
      <SearchBar />
      <ImageList />
    </>
  );
}

export default App;
