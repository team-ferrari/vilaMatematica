import { OPERATION_DIVIDE, OPERATION_MINUS, OPERATION_MULTIPLY, OPERATION_PLUS } from '@constants/operations';
import { SESSIONTYPE_CORRECTANSWER, SESSIONTYPE_FINGERS, SESSIONTYPE_IMAGECOUNT } from '@constants/sessionTypes';

import { getRandomFromArray, getRandomValue } from './NumberHelper';

function getType(configs: any) {
    let randomNumber = Math.random();
    let chooseType = configs[0].type;

    for (let j = 0; j < configs.length; j++) {
        const type = configs[j];
        if (randomNumber < type.possibility) {
            chooseType = type.type;
            break;
        }
        randomNumber -= type.possibility;
    }

    return chooseType;
}

function getTypeOptions(type:string, configs:any) {
    if (type === SESSIONTYPE_CORRECTANSWER) {
        const firstValue = getRandomValue(configs.maxValue);
        const secondValue = getRandomValue(configs.maxValue);
        const operation = getRandomFromArray(configs.operations);
        const correctOption = getResponse(firstValue, secondValue, operation);
        const options = generateNextPositions(correctOption, 3);

        return {
            firstValue,
            secondValue,
            operation,
            options,
            correctOption,
        };
    }

    if (type === SESSIONTYPE_IMAGECOUNT) {
        const operation = getRandomFromArray(configs.operations);
        const correctOption = getRandomValue(4);
        const options = generateNextPositions(correctOption, 1);
        const animal = getRandomFromArray(configs.animals);

        return {
            operation,
            options,
            correctOption,
            animal,
        };
    }

    if (type === SESSIONTYPE_FINGERS) {
        const firstValue = getRandomValue(5);
        const secondValue = getRandomValue(5);
        const operation = getRandomFromArray(configs.operations);
        const correctOption = getResponse(firstValue, secondValue, operation);
        const options = generateNextPositions(correctOption, 1);

        return {
            firstValue,
            secondValue,
            operation,
            options,
            correctOption,
        };
    }
}

function getResponse(firstValue:number, secondValue: number, operation:string) {
    switch (operation) {
        case OPERATION_PLUS:
            return firstValue + secondValue;
        case OPERATION_MINUS:
            return firstValue - secondValue;
        case OPERATION_MULTIPLY:
            return firstValue * secondValue;
        case OPERATION_DIVIDE:
            return secondValue === 0 ? 0 : (firstValue / secondValue);
        default:
            return 0;
    }
}

function generateNextPositions(value:number, limit = 1) {
    const diff = Math.floor(Math.random() * 3) + 1;
    const options = [value - diff, value + diff, value + diff * 2];
    const optionsAleatory = [] as any;

    while (optionsAleatory.length < limit) {
      const iAletory = Math.floor(Math.random() * options.length);
      const oAletory = options[iAletory];
      if (oAletory !== value && !optionsAleatory.includes(oAletory)) {
        optionsAleatory.push(oAletory);
      }
    }

    return optionsAleatory;
}

export {
    getType,
    getTypeOptions,
    generateNextPositions,
};
