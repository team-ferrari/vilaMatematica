import { NewAdventure } from '@components/adventure/new';
import { DifficultyModal } from '@components/modals/difficulty';
import React, { useState } from 'react';
import { View } from 'react-native';

import { style } from './styles';

export function Home() {
    const [ modal, setModal ] = useState(false);

    function initAction() {
        setModal(true);
    }

    function dismissAction() {
        setModal(false);
    }

    return (
        <View style={style.container}>
            <NewAdventure initAction={initAction} />
            <DifficultyModal modal={modal} dismissAction={dismissAction} />
        </View>
    );
}
