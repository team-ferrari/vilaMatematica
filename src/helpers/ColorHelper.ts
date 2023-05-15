import { theme } from '@styles/index.style';

const colors = [
    theme.PASTEL01,
    theme.PASTEL02,
    theme.PASTEL03,
    theme.PASTEL04,
];

function getColorByIndex(index: number) {
    return colors[index];
}

export {
    getColorByIndex,
};
