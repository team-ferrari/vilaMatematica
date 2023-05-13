import cat from '@assets/images/cat.png';
import React from 'react';
import { Image, View} from 'react-native';

import {style} from './styles';

export function AnimalImages({ details }:any) {
  const { correctOption } = details;

  return (
    <View style={style.container}>
      { Array.from({ length: correctOption }, (_, i) => (
          <Image source={cat} style={style.image} key={i} />
      ))}
    </View>
  );
}
