import { useState } from 'react';
import { SCREENS, ScreenToComponent } from './constants/screens';
import { DIFFICULTIES, difficultyToCount } from './constants/difficulties';

function App() {
    const [screen, setScreen] = useState(SCREENS.MENU);
    const [difficulty, setDifficulty] = useState(DIFFICULTIES.EASY);

    const Screen = ScreenToComponent[screen];
    const count = difficultyToCount[difficulty];

    const props = {
        setScreen,
        setDifficulty,
        count,
    };

    return <div className="screen">{<Screen {...props} />}</div>;
}

export default App;
