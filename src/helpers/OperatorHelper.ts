import { OPERATION_DIVIDE, OPERATION_MINUS, OPERATION_MULTIPLY, OPERATION_PLUS } from '@constants/operations';

function getOperator(value:string) {
    switch (value) {
        case OPERATION_PLUS:
            return '+';
        case OPERATION_MINUS:
            return '-';
        case OPERATION_DIVIDE:
            return '/';
        case OPERATION_MULTIPLY:
            return 'X';
    }
}

export {
    getOperator,
};
