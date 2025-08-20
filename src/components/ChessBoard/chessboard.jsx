// TODO I need to make this component be the ChessBoard for my application!
import { getCharacter } from '../../helper';

const ChessBoard = () => {
  // const pieceGlyph = {
  //   wp: "♙", wn: "♘", wb: "♗", wr: "♖", wq: "♕", wk: "♔",
  //   bp: "♟︎", bn: "♞", bb: "♝", br: "♜", bq: "♛", bk: "♚",
  // };

  const ranks = Array(8).fill().map((x, i) => 7-i)
  const files = Array(8).fill().map((x, i) => getCharacter(i))


  return <div className="chess_board">
    <div className="tiles">
        {ranks.map((rank, i) =>
          files.map((file, j) =>
              <div key={file+"-"+rank}>{rank} {file}</div>
          )
        )}
    </div>
  </div>

}

export default ChessBoard
