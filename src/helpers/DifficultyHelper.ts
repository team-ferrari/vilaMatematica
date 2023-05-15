import { DIFFICULTY_EASY, DIFFICULTY_HARD, DIFFICULTY_MEDIUM } from '@constants/difficulties';
import { theme } from '@styles/index.style';

function getColorPallete(color:string) {
    let primaryColor = '', secondaryColor = '';

    switch (color) {
        case DIFFICULTY_EASY: {
            primaryColor = theme.GREEN_COLOR;
            secondaryColor = theme.GREEN_COLOR_DARK;
            break;
        }
        case DIFFICULTY_MEDIUM: {
            primaryColor = theme.YELLOW_COLOR;
            secondaryColor = theme.YELLOW_COLOR_DARK;
            break;
        }
        case DIFFICULTY_HARD: {
            primaryColor = theme.RED_COLOR;
            secondaryColor = theme.RED_COLOR_DARK;
            break;
        }
    }

    return {
        primaryColor,
        secondaryColor,
    };
}

export {
    getColorPallete,
};
