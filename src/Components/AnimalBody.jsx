import React from "react";
import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./AnimalBody.css";
// import { type } from "@testing-library/user-event/dist/type";

const getRandomAnimal = () => {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
};

const AnimalBody = () => {
  const [animal, setAnimal] = useState([]);

  const handleClick = () => {
    setAnimal([...animal, getRandomAnimal()]);
  };

  const renderedAnimals = animal.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="m-3 ">
      <div className="main-div">
        <button onClick={handleClick} className="btn btn-warning fw-bold">
          Add Animal
        </button>
      </div>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center">
          {renderedAnimals}
        </div>
      </div>
    </div>
  );
};

export default AnimalBody;
