import { FailedSession } from '@components/session/failed';
import { SuccessSession } from '@components/session/success';
import { finishedSessionSound } from '@helpers/SoundHelper';
import { RootState } from '@store/modules/rootReducer';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { style } from './styles';

export function ActivityFinishedScreen() {
    const { session, correctAnswer }:any = useSelector((state:RootState) => state.session);
    const percentual = session ? correctAnswer / session.length * 100 : 0;
    const passed = percentual > 0.7;

    useEffect(() => {
        if (session) {
            finishedSessionSound(passed);
        }
    }, [passed, session]);

    return (
        <View style={style.container}>
            { passed ? (
                <SuccessSession />
            ) : (
                <FailedSession percentual={percentual} />
            )}
        </View>
    );
}
