import { FailedSession } from '@components/session/failed';
import { SuccessSession } from '@components/session/success';
import { RootState } from '@store/modules/rootReducer';
import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { style } from './styles';

export function ActivityFinishedScreen() {
    const { session, correctAnswer }:any = useSelector((state:RootState) => state.session);
    const percentual = session ? correctAnswer / session.length * 100 : 0;
    const minPercentural = 0;

    return (
        <View style={style.container}>
            { percentual > minPercentural ? (
                <SuccessSession percentual={percentual} />
            ) : (
                <FailedSession percentual={percentual} />
            )}
        </View>
    );
}
