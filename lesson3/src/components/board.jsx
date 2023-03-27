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

    // autoPlay();
  };

  // hàm tự động đánh nước
  // const autoPlay = () => {
  //   setTimeout(() => {
  //     // nếu đã có người thắng hoặc bàn cờ đầy thì thoát
  //     if (checkWinner() || !game.includes(null)) {
  //       return;
  //     }

  //     // tìm vị trí của những ô trống
  //     const emptySquares = [];
  //     for (let i = 0; i < game.length; i++) {
  //       if (game[i] === null) {
  //         emptySquares.push(i);
  //       }
  //     }

  //     // chọn một ô ngẫu nhiên trong số các ô trống
  //     const randomIndex = Math.floor(Math.random() * emptySquares.length);
  //     const position = emptySquares[randomIndex];

  //     // đánh nước vào ô được chọn
  //     handlePlay(position);
  //   }, 3000);
  // };

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

  // reset lại trang
  const [reset, setReset] = useState(false);

  const handleReset = () => {
    setReset(!reset);
    window.location.reload(); // reload trang để reset lại
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

      {/* nút button reset trang  */}
      <button onClick={handleReset} className="btn__reset">
        Reset trang
      </button>

      {/* nút button quay lại một lần */}
      <button onClick={quayLai} className="btn__prev">
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
