import { useState } from "react";

const Square = () => {
  const [value, setValue] = useState();
  function play() {
    setValue("X");
  }
  return (
    <>
      <button onClick={play} className="btn">
        {value}
      </button>
    </>
  );
};

export default Square;
