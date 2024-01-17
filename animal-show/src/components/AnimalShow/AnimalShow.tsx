import bird from "../../assets/svg/bird.svg";
import cat from "../../assets/svg/cat.svg";
import cow from "../../assets/svg/cow.svg";
import dog from "../../assets/svg/dog.svg";
import gator from "../../assets/svg/gator.svg";
import horse from "../../assets/svg/horse.svg";
import heart from "../../assets/svg/heart.svg";

import "./AnimalShow.module.css";
import { useState } from "react";

let svgMap = new Map<string, string>([
  ["bird", bird],
  ["cat", cat],
  ["cow", cow],
  ["dog", dog],
  ["gator", gator],
  ["horse", horse],
]);

interface Props {
  type: string;
}

const AnimalShow = ({ type }: Props) => {
  const [clicks, setClicks] = useState(0);

  const imgSource = svgMap.get(type);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      {imgSource !== undefined && (
        <>
          <img className="animal" alt="animal" src={imgSource} />
          <img
            className="heart"
            alt="heart"
            src={heart}
            style={{ width: 10 + 10 * clicks + "px" }}
          />
        </>
      )}
    </div>
  );
};

export default AnimalShow;
