import { useState } from "react";
import Square from "./Square";

export default function App() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    let winners = calculate_winners(squares);
    let status = winners
        ? squares[winners[0]] + " Wins!"
        : "Turn: " + (xIsNext ? "X" : "O");
    function calculate_winners(sqrs) {
        const win_squares = [
            // rows
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            // cols
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            // diagonals
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < win_squares.length; ++i) {
            const [a, b, c] = win_squares[i];
            if (sqrs[a] && sqrs[a] === sqrs[b] && sqrs[a] === sqrs[c])
                return [a, b, c];
        }
        return null;
    }
    function handle_sqr_click(idx) {
        if (squares[idx] || calculate_winners(squares)) return;

        const nextSquares = squares.slice();

        nextSquares[idx] = xIsNext ? "X" : "O";

        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }
    return (
        <>
            <h1 className="text-4xl text-center font-extrabold">Tic Tac Toe</h1>

            <h3 className="text-center">{status}</h3>
            <div className="grid gap-2 grid-cols-3 container mx-auto w-28">
                {squares.map((v, i) => {
                    return (
                        <Square
                            key={"sqr-" + i}
                            onSquareClick={() => handle_sqr_click(i)}
                            value={v}
                            won={winners ? winners.includes(i) : false}
                        />
                    );
                })}

                <button
                    className={
                        (winners
                            ? " text-violet-700 bg-white"
                            : " bg-violet-900 hover:bg-violet-500") +
                        " transition ease-linear hover:scale-110 active:scale-95 col-span-3 rounded hover:drop-shadow-[0_0px_2px_rgba(255,255,255,0.25)]"
                    }
                    onClick={() => {
                        winners = null;
                        setSquares(squares.map(() => null));
                        setXIsNext(true);
                    }}
                >
                    Reset
                </button>
            </div>
        </>
    );
}
