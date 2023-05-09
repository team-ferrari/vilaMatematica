const validationTsPath = 'validationMessages';

function getErrorTranslationKey(message:string) {
    return `${validationTsPath}.${message}`;
}

export {
    getErrorTranslationKey,
};
