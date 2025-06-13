import { useState } from 'react';
import { weaponData } from '../data/weapons';
import Card from './Card';
import { SCREENS } from '../constants/screens';

const ITEMS_PER_PAGE = 30;

export default function Collection({ setScreen }) {
    const collectedCards =
        JSON.parse(localStorage.getItem('collectedCards')) || [];

    const [currentPage, setCurrentPage] = useState(1);
    const [currentWeapon, setCurrentWeapon] = useState(null);

    const pageCount = Math.ceil(weaponData.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentPageData = weaponData.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    function handleCardClick(weapon) {
        setCurrentWeapon(weapon);
    }

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
                    {currentPageData.map((weapon) => (
                        <Card
                            key={weapon.data.id}
                            weapon={weapon}
                            onClick={handleCardClick}
                            obtained={collectedCards.includes(weapon.data.id)}
                        />
                    ))}
                </div>
            </main>
            <footer className="container collections-header row">
                <button
                    onClick={() =>
                        setCurrentPage(
                            ((currentPage - 2 + pageCount) % pageCount) + 1
                        )
                    }
                >
                    Prev
                </button>
                <span style={{ padding: '0 1em' }}>
                    Page {currentPage} / {pageCount}
                </span>
                <button
                    onClick={() =>
                        setCurrentPage((currentPage % pageCount) + 1)
                    }
                >
                    Next
                </button>
            </footer>

            {currentWeapon !== null && (
                <div className="backdrop">
                    <div className="card-info-container row">
                        <Card
                            weapon={currentWeapon}
                            onClick={handleCardClick}
                        />
                        <div className="card-info__right">
                            <button
                                className="card-info__close-btn"
                                onClick={() => setCurrentWeapon(null)}
                            >
                                ×
                            </button>
                            <div className="card-info">
                                <p>{`${currentWeapon.data.damage} ${currentWeapon.data.damageType} damage`}</p>
                                <p>{`${currentWeapon.data.knockback} knockback`}</p>
                                {currentWeapon.data.tooltip?.map((el, idx) => {
                                    return <p key={idx}>{el}</p>;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
