function getFirstFromSession(session:any) {
    if (!session || !session.cards || session.cards.length === 0) {return;}

    return session.cards[0];
}

export {
    getFirstFromSession,
};
