import { typesByDifficulty } from '@config/TypeByDifficulty';
import { DifficultyProps } from '@interfaces/sessions/DifficultyProps';

import { getType, getTypeOptions } from './SessionTypeHelper';

function generateNewSession(difficulty:string) {
    const prop = difficulty.toUpperCase() as keyof typeof DifficultyProps;
    const numberOfItems = DifficultyProps[prop];
    return createSession(numberOfItems, difficulty);
}

function createSession(value: number, difficulty:string) {
    const array = [] as any;
    const configs = getConfig(difficulty);

    Array.from({ length: value }).forEach(async (_) => {
        const type = getType(configs?.options);
        const details = getTypeOptions(type, configs);

        array.push({
            type,
            details,
        });
    });

    return array;
}

function getConfig(difficulty:string) {
    return typesByDifficulty.find(t => t.difficulty === difficulty);
}

function isCorrectAnswer(session:any, index:number, option:string) {
    if (!session || session.length < index) {return false;}

    const activeOption = session[index];
    const { correctOption } = activeOption?.details;

    if (!correctOption || correctOption !== option) {return false;}

    return true;
}

export {
    generateNewSession,
    createSession,
    getConfig,
    isCorrectAnswer,
};
