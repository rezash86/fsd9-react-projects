import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";
import { Image } from "./components/Imageshow";

function App() {
  const [images, setImages] = useState<Image[]>([]);

  const handleTermSubmit = async (term: string) => {
    console.log("Did a search with", term);
    // console.log(searchImages(term));
    const reuslts = await searchImages(term);

    //using these results and put it somewhere
    setImages(reuslts);
  };

  return (
    <>
      <SearchBar myEvent={handleTermSubmit} />
      <ImageList images={images} />
    </>
  );
}

export default App;
