import { useState } from 'react';
import { SCREENS, ScreenToComponent } from './constants/screens';
import { DIFFICULTIES, difficultyToCount } from './constants/difficulties';

function App() {
    const [screen, setScreen] = useState(SCREENS.MENU);
    const [difficulty, setDifficulty] = useState(DIFFICULTIES.EASY);

    const Screen = ScreenToComponent[screen];

    const props = {
        setScreen,
        setDifficulty,
        difficulty,
    };

    return <div className="screen">{<Screen {...props} />}</div>;
}

export default App;
