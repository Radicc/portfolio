import React, { useEffect, useState } from "react";
import "./App.css";
import "./slider.css";
import Image1 from "../src/images/jaja2.jpg";
import Image2 from "../src/images/photo2.jpg";

export default function Slider() {
  //const [Number, setNumber] = useState(0);
  const Images = [Image1, Image2];

  const [Count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(updateCount, 8000);
    return () => clearInterval(interval);
  }, [Count]);

  const updateCount = () => {
    if (Count < Images.length - 1) {
      setCount(Count + 1);
    } else {
      setCount(0);
    }
  };

  return (
    <div className="divSlider">
      <img className="photo1" src={Images[Count]} alt="programmingPhoto1" />
    </div>
  );
}
