import { shuffle } from './shuffle';

export function getRandomItems(array, n) {
    const arr = [...array];
    const shuffled = shuffle(arr);
    return shuffled.slice(0, n);
}
