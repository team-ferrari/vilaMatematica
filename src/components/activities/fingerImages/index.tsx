import { getFingerImage, getOperatorImage } from '@helpers/ImageHelper';
import React from 'react';
import { Image, View} from 'react-native';

import {style} from './styles';

export function FingerImages({ details }:any) {
  const { firstValue, secondValue, operation } = details;
  const firstImage = getFingerImage(firstValue);
  const secondImage = getFingerImage(secondValue);
  const operatorImage = getOperatorImage(operation);

  return (
    <View style={style.container}>
      <Image source={firstImage} style={style.image} />
      <Image source={operatorImage} style={style.image} />
      <Image source={secondImage} style={style.image} />
    </View>
  );
}
