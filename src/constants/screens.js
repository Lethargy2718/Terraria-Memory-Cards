import MainMenu from '../Components/MainMenu';
import Game from '../Components/Game';
import Collection from '../Components/Collection';

export const SCREENS = {
    MENU: 'menu',
    GAME: 'game',
    COLLECTION: 'collection',
};

export const ScreenToComponent = {
    [SCREENS.MENU]: MainMenu,
    [SCREENS.GAME]: Game,
    [SCREENS.COLLECTION]: Collection,
};
