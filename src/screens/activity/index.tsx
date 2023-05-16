import { CorrectAnswer } from '@components/activities/correctAnswer';
import { Fingers } from '@components/activities/fingers';
import { ImageCounter } from '@components/activities/imageCounter';
import { ValidationActivies } from '@components/activities/validation';
import { ButtonSecondary } from '@components/elements/buttons/secondary';
import { TitleText } from '@components/elements/texts/title';
import { SESSIONTYPE_CORRECTANSWER, SESSIONTYPE_FINGERS, SESSIONTYPE_IMAGECOUNT } from '@constants/sessionTypes';
import { Styles } from '@interfaces/texts/TextProps';
import { RootState } from '@store/modules/rootReducer';
import { abortAction } from '@store/modules/session/actions';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { style } from './styles';

export function ActivityScreen() {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { session, activeIndex, validated, isCorrect }:any = useSelector((state:RootState) => state.session);

    if (!session) {return <></>;}

    const questionNumber = activeIndex ? activeIndex + 1 : 1;
    const questionTotal = session.length;
    const questionPosition = `${t('activities.questionNumber')} ${questionNumber} ${t('activities.questionOf')} ${questionTotal}`;
    const activeSession = session[activeIndex];

    if (!activeSession) {return <></>;}

    function generateActivity() {
        switch (activeSession.type) {
            case SESSIONTYPE_CORRECTANSWER:
                return <CorrectAnswer session={activeSession} />;
            case SESSIONTYPE_FINGERS:
                return <Fingers session={activeSession} />;
            case SESSIONTYPE_IMAGECOUNT:
                return <ImageCounter session={activeSession} />;
        }

        return <></>;
    }

    function abortSession() {
        dispatch(abortAction());
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <ButtonSecondary title={t('actions.exit')} action={abortSession} />
            </View>
            <View style={style.breadcrumb}>
                <TitleText value={questionPosition} styled={Styles.DarkH4Right} />
            </View>
            <View style={style.body}>
                { validated ? <ValidationActivies isCorrect={isCorrect} /> : generateActivity() }
            </View>
        </View>
    );
}
