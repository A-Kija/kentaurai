export default function randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padEnd(6, '0');
} 