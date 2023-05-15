import { ANIMAL_CAT, ANIMAL_COW, ANIMAL_DOG, ANIMAL_ELEPHANT, ANIMAL_PANDA, ANIMAL_PIG, ANIMAL_PIGEON, ANIMAL_RABBIT, ANIMAL_SLOTH, ANIMAL_TIGER, ANIMAL_TOUCAN, ANIMAL_WHALE } from '@constants/animals';
import { DIFFICULTY_EASY, DIFFICULTY_HARD, DIFFICULTY_MEDIUM } from '@constants/difficulties';
import { OPERATION_DIVIDE, OPERATION_MINUS, OPERATION_MULTIPLY, OPERATION_PLUS } from '@constants/operations';
import { SESSIONTYPE_CORRECTANSWER, SESSIONTYPE_FINGERS, SESSIONTYPE_IMAGECOUNT } from '@constants/sessionTypes';

const typesByDifficulty = [
    {
        difficulty: DIFFICULTY_EASY,
        options: [
            { type: SESSIONTYPE_CORRECTANSWER, possibility: 0.4 },
            { type: SESSIONTYPE_IMAGECOUNT, possibility: 0.2 },
            { type: SESSIONTYPE_FINGERS, possibility: 0.2 },
        ],
        maxValue: 9,
        operations: [ OPERATION_PLUS ],
        animals: [ ANIMAL_CAT, ANIMAL_COW, ANIMAL_DOG, ANIMAL_ELEPHANT, ANIMAL_PANDA, ANIMAL_PIG, ANIMAL_PIGEON, ANIMAL_RABBIT, ANIMAL_SLOTH, ANIMAL_TIGER, ANIMAL_TOUCAN, ANIMAL_WHALE ],
    },
    {
        difficulty: DIFFICULTY_MEDIUM,
        options: [
            { type: SESSIONTYPE_CORRECTANSWER, possibility: 0.3 },
            { type: SESSIONTYPE_IMAGECOUNT, possibility: 0.3 },
            { type: SESSIONTYPE_FINGERS, possibility: 0.3 },
        ],
        maxValue: 25,
        operations: [ OPERATION_PLUS, OPERATION_MINUS, OPERATION_MULTIPLY ],
        animals: [ ANIMAL_CAT, ANIMAL_COW, ANIMAL_DOG, ANIMAL_ELEPHANT, ANIMAL_PANDA, ANIMAL_PIG, ANIMAL_PIGEON, ANIMAL_RABBIT, ANIMAL_SLOTH, ANIMAL_TIGER, ANIMAL_TOUCAN, ANIMAL_WHALE ],
    },
    {
        difficulty: DIFFICULTY_HARD,
        options: [
            { type: SESSIONTYPE_CORRECTANSWER, possibility: 0.4 },
            { type: SESSIONTYPE_IMAGECOUNT, possibility: 0.2 },
            { type: SESSIONTYPE_FINGERS, possibility: 0.4 },
        ],
        maxValue: 50,
        operations: [ OPERATION_PLUS, OPERATION_MINUS, OPERATION_MULTIPLY, OPERATION_DIVIDE ],
        animals: [ ANIMAL_CAT, ANIMAL_COW, ANIMAL_DOG, ANIMAL_ELEPHANT, ANIMAL_PANDA, ANIMAL_PIG, ANIMAL_PIGEON, ANIMAL_RABBIT, ANIMAL_SLOTH, ANIMAL_TIGER, ANIMAL_TOUCAN, ANIMAL_WHALE ],
    },
];

export { typesByDifficulty };
