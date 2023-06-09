import React from "react";
import bird from "../Assets/bird.svg";
import dog from "../Assets/dog.svg";
import cat from "../Assets/cat.svg";
import cow from "../Assets/cow.svg";
import gator from "../Assets/gator.svg";
import horse from "../Assets/horse.svg";
import { useState } from "react";
import heart from "../Assets/heart.svg";
import './AnimalShow.css'
const svgMap = {
  bird,
  cat,
  cow,
  gator,
  dog,
  horse,
};



const AnimalShow = ({ type }) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <div onClick={handleClick} className="animal-show">
      <img className="animal"
        src={svgMap[type]}
        alt="animal"
        style={{ width:200, height:100}}
      />
      <img className="heart" src={heart} alt="heart" style={{ width: 10 + 10 * clicks }} />
    </div>
  );
};

export default AnimalShow;
