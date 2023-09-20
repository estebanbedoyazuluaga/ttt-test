export default function Square({ value, onSquareClick, won = false }) {
    return (
        <button
            className={
                " rounded w-8 h-8 hover:bg-violet-500" +
                (won
                    ? " text-violet-700 bg-white scale-110"
                    : " bg-violet-700") +
                " transition ease-in-out hover:scale-110 active:scale-95 hover:drop-shadow-[0_0px_2px_rgba(255,255,255,0.25)]" +
                " flex items-center justify-center stroke-2"
            }
            onClick={onSquareClick}
        >
            {!value ? "" : value == "X" ? <Cross /> : <Cricle />}
        </button>
    );
}

//taken from HeroIcons' x-mark
function Cross() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 stroke-2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    );
}

//taken from HeroIcons' x-circle and then edited to remove the x in the meddle
function Cricle() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 stroke-2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    );
}
