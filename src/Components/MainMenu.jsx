import { useState } from 'react';
import { SCREENS } from '../constants/screens';

const MENU_STATES = {
    ROOT: 'root',
    DIFFICULTY: 'difficulty',
};

export default function MainMenu({ setScreen, setDifficulty }) {
    const [menuState, setMenuState] = useState(MENU_STATES.ROOT);

    return (
        <main className="main container main-menu">
            <div className="logo-container">
                <img
                    src="/terraria-logo.webp"
                    alt="Terraria logo"
                    className="logo"
                />
            </div>

            <nav className="menu__btns col">
                {menuState === MENU_STATES.ROOT && (
                    <>
                        <button
                            className="menu__btn"
                            onClick={() => setMenuState(MENU_STATES.DIFFICULTY)}
                        >
                            Play
                        </button>
                        <button
                            className="menu__btn"
                            onClick={() => setScreen(SCREENS.COLLECTION)}
                        >
                            Collection
                        </button>
                    </>
                )}

                {menuState === MENU_STATES.DIFFICULTY && (
                    <>
                        <button
                            className="menu__btn"
                            onClick={() => {
                                setDifficulty('easy');
                                setScreen(SCREENS.GAME);
                            }}
                        >
                            Easy
                        </button>
                        <button
                            className="menu__btn"
                            onClick={() => {
                                setDifficulty('medium');
                                setScreen(SCREENS.GAME);
                            }}
                        >
                            Medium
                        </button>
                        <button
                            className="menu__btn"
                            onClick={() => {
                                setDifficulty('hard');
                                setScreen(SCREENS.GAME);
                            }}
                        >
                            Hard
                        </button>
                        <button
                            className="menu__btn"
                            onClick={() => setMenuState(MENU_STATES.ROOT)}
                        >
                            Back
                        </button>
                    </>
                )}
            </nav>
        </main>
    );
}
