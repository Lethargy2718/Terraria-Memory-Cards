import { useState, useMemo } from 'react';
import Card from './Card';
import { weaponData } from '../data/weapons';
import { getRandomItems } from '../utils/getRandomItems';
import { shuffle } from '../utils/shuffle';

export default function Game({ count = 10 }) {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const weapons = useMemo(() => getRandomItems(weaponData, count), []);

    return (
        <>
            <header className="container game-header row">
                <span>Score: {score}</span>
                <span>Best Score: {bestScore}</span>
            </header>
            <main className="container main game-main">
                <div className="card-container">
                    {weapons.map((weapon) => {
                        return <Card key={weapon.data.id} weapon={weapon} />;
                    })}
                </div>
            </main>
        </>
    );
}
