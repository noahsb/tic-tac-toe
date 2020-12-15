import { useState } from 'react';

import Layout from '../../Layout/Layout';
import Board from '../Board/Board';

const style = {
    width: '280px',
    margin: '20px auto',
    overflow: 'hidden'
};

interface Props {
    currentBoard: Array<string|null>
    xNext: boolean
}

// calculateWinner borrowed/modified from ReactJS demo
const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [3, 4, 5],
      [6, 7, 8],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
}

const Game = ({ currentBoard, xNext }: Props) => {
    const [board, setBoard] = useState(currentBoard ? currentBoard : Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(xNext? xNext : true);
    const [isTie, setIsTie] = useState(false);
    const winner = calculateWinner(board);

    const onClick = (i) => {

        if (!board.includes(null) && !winner) {
            setIsTie(true);
        }
        let boardCopy = board.slice();
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);

        localStorage.setItem('board', JSON.stringify(boardCopy));
        localStorage.setItem('xNext', JSON.stringify(!xIsNext));
    }

    const resetClick = () => {
        localStorage.removeItem('board');
        localStorage.removeItem('xNext');
        setBoard(Array(9).fill(null));
        setIsTie(false);
    }

    return (
        <Layout>
            <Board squares={board} onClick={onClick} />
            <div style={style}>
                <button onClick={resetClick}>New Game</button><br />
                <p style={{float: 'left'}}>{'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {isTie && <p style={{float: 'right'}}>Tie Game</p>}
                {winner && <p style={{float: 'right'}}>{'Winner: ' + winner}</p>}
            </div>
        </Layout>
    );
}

export default Game;