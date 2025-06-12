export default function getRandomItems(array, n) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}
