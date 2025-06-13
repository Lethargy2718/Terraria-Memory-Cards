import { useEffect, useState } from 'react';
import Card from './Card';
import { weaponData } from '../data/weapons';
import { getRandomItems } from '../utils/getRandomItems';
import { shuffle } from '../utils/shuffle';
import { SCREENS } from '../constants/screens';
import { STATUSES } from '../constants/statuses';
import { difficultyToCount } from '../constants/difficulties';

export default function Game({ setScreen, difficulty }) {
    const count = difficultyToCount[difficulty];
    const storageBestScoreKey = 'bestScore' + difficulty;

    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(
        localStorage.getItem(storageBestScoreKey) || 0
    );
    const [weapons, setWeapons] = useState(getRandomItems(weaponData, count));
    const [clickedCards, setClickedCards] = useState([]);
    const [status, setStatus] = useState(STATUSES.PLAYING);

    function handleClickCard(id) {
        if (clickedCards.includes(id)) {
            setStatus(STATUSES.LOSE);
            return;
        }

        setClickedCards([...clickedCards, id]);

        const newScore = score + 1;
        setScore(newScore);

        if (newScore > bestScore) {
            setBestScore(newScore);
            localStorage.setItem(storageBestScoreKey, newScore);
        }

        if (newScore === weapons.length) {
            setStatus(STATUSES.WIN);
            return;
        }

        setWeapons(shuffle(weapons));
    }

    function handlePlayAgain() {
        setScore(0);
        setWeapons(getRandomItems(weaponData, count));
        setClickedCards([]);
        setStatus(STATUSES.PLAYING);
    }

    return (
        <>
            <header className="container game-header row">
                <span style={{textAlign: "start"}}>Score: {score}</span>
                <span style={{textAlign: "center"}}><button onClick={() => setScreen(SCREENS.MENU)}>Main Menu</button></span>
                <span style={{textAlign: "end"}}>Best Score: {bestScore}</span>
            </header>
            <main className="container main game-main">
                <div className="card-container">
                    {weapons.map((weapon) => {
                        return (
                            <Card
                                key={weapon.data.id}
                                weapon={weapon}
                                onClick={handleClickCard}
                            />
                        );
                    })}
                </div>
            </main>

            {status !== STATUSES.PLAYING && (
                <div className="game-end-backdrop">
                    <div
                        className={`game-end ${status === STATUSES.WIN ? 'win' : 'lose'}`}
                    >
                        <h1>
                            {status === STATUSES.WIN ? 'You Won!' : 'You Lost.'}
                        </h1>
                        <button onClick={handlePlayAgain}>Play Again</button>
                        <button onClick={() => setScreen(SCREENS.MENU)}>
                            Back to Menu
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
