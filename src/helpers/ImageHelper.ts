import five from '@assets/images/fingers/five_fingers.png';
import four from '@assets/images/fingers/four_fingers.png';
import one from '@assets/images/fingers/one_finger.png';
import three from '@assets/images/fingers/three_fingers.png';
import two from '@assets/images/fingers/two_fingers.png';
import zero from '@assets/images/fingers/zero_fingers.png';
import divide from '@assets/images/operators/divide.png';
import minus from '@assets/images/operators/minus.png';
import multiply from '@assets/images/operators/multiply.png';
import plus from '@assets/images/operators/plus.png';

function getFingerImage(value: number) {
    switch (value) {
        case 0: return zero;
        case 1: return one;
        case 2: return two;
        case 3: return three;
        case 4: return four;
        case 5: return five;
    }
}

function getOperatorImage(value: string) {
    switch (value) {
        case 'minus': return minus;
        case 'plus': return plus;
        case 'multiply': return multiply;
        case 'divide': return divide;
    }
}

export {
    getFingerImage,
    getOperatorImage,
};
