import { useState } from "react";
import Square from "./square";

let buoc = null;
let play = "";

const Board = ({ children }) => {
  const [game, setGame] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [player, setPlayer] = useState(true);

  // chơi
  const handlePlay = (position) => {
    const newGame = game.map((i, index) => {
      if (index === position) {
        buoc = index;
        console.log(buoc);
        return player ? "X" : "O";
      }
      return i;
    });

    setGame(newGame);
    play = player;
    setPlayer(!player);
  };

  // quay lại
  const quayLai = () => {
    const newGame = game.map((i, index) => {
      console.log(buoc);
      if (index === buoc) {
        alert(buoc);
        return null;
      }
      return i;
    });

    setGame(newGame);
    setPlayer(play);
  };

  const winList = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // kiểm tra bên thắng
  const checkWinner = () => {
    for (let i = 0; i < winList.length; i++) {
      const [p1, p2, p3] = winList[i];
      if (
        game[p1] === game[p2] &&
        game[p2] === game[p3] &&
        game[p3] === game[p1]
      ) {
        return game[p1];
      }
    }
    return null;
  };

  // kiểm tra hàng để đổi màu
  const ok = () => {
    for (let i = 0; i < winList.length; i++) {
      const [p1, p2, p3] = winList[i];
      if (
        game[p1] === game[p2] &&
        game[p2] === game[p3] &&
        game[p3] === game[p1] &&
        checkWinner()
      ) {
        return winList[i];
      }
    }
    return null;
  };

  console.log(ok());

  return (
    <>
      <h2>Winner is: {checkWinner()}</h2>
      <button onClick={quayLai} className="">
        quay lại
      </button>
      <div className="grid grid-cols-3 gap-3 game-board">
        <div className="board__children">
          <Square
            value={game[0]}
            position={0}
            handlePlay={handlePlay}
            dongThang={ok()}
          />
          <Square
            value={game[1]}
            position={1}
            handlePlay={handlePlay}
            dongThang={ok()}
          />
          <Square
            value={game[2]}
            position={2}
            handlePlay={handlePlay}
            dongThang={ok()}
          />
        </div>
        <div className="board__children">
          <Square
            value={game[3]}
            position={3}
            handlePlay={handlePlay}
            dongThang={ok()}
          />
          <Square
            value={game[4]}
            position={4}
            handlePlay={handlePlay}
            dongThang={ok()}
          />
          <Square
            value={game[5]}
            position={5}
            handlePlay={handlePlay}
            dongThang={ok()}
          />
        </div>
        <div className="board__children">
          <Square
            value={game[6]}
            position={6}
            handlePlay={handlePlay}
            dongThang={ok()}
          />
          <Square
            value={game[7]}
            position={7}
            handlePlay={handlePlay}
            dongThang={ok()}
          />
          <Square
            value={game[8]}
            position={8}
            handlePlay={handlePlay}
            dongThang={ok()}
          />
        </div>
      </div>
    </>
  );
};

export default Board;
