import { weaponData } from '../data/weapons';
import Card from './Card';
import { SCREENS } from '../constants/screens';

export default function Collection({ setScreen }) {
    const collectedCards =
        JSON.parse(localStorage.getItem('collectedCards')) || [];
    return (
        <>
            <header className="container collections-header row">
                <span style={{ textAlign: 'center' }}>
                    <button onClick={() => setScreen(SCREENS.MENU)}>
                        Main Menu
                    </button>
                </span>
                <span style={{ textAlign: 'center' }}>
                    {collectedCards.length} / {weaponData.length}
                </span>
            </header>
            <main className="container main game-main">
                <div className="card-container">
                    {weaponData.map((weapon) => {
                        return (
                            <Card
                                key={weapon.data.id}
                                weapon={weapon}
                                onClick={() => 0}
                                obtained={collectedCards.includes(
                                    weapon.data.id
                                )}
                            />
                        );
                    })}
                </div>
            </main>
        </>
    );
}
