import { useState } from "react";

let check = false;

const Square = ({ value, position, handlePlay, dongThang }) => {
  const handleSquarePlay = () => {
    if (!value) {
      handlePlay(position);
    }
  };
  let a = "white";

  if (dongThang) {
    for (let index = 0; index < dongThang.length; index++) {
      const element = dongThang[index];
      if (element === position) {
        a = "DodgerBlue";
        check = true;
      }
    }
  }

  return (
    <>
      <button
        onClick={handleSquarePlay}
        disabled={check}
        style={{ backgroundColor: a }}
        className="h-[50px] text-xl text-white border-0 bg-[#14bdac] square"
      >
        {value}
      </button>
    </>
  );
};

export default Square;
