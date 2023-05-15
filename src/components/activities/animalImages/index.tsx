import { getAnimalByName } from '@helpers/AnimationHelper';
import LottieView from 'lottie-react-native';
import React from 'react';
import { FlatList, View} from 'react-native';

import {style} from './styles';

export function AnimalImages({ details }:any) {
  const { correctOption, animal } = details;
  const data = Array.from({ length: correctOption });
  const animation = getAnimalByName(animal);

  return (
    <View style={style.container}>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        numColumns={2}
        renderItem={({ index }) => (
          <LottieView
            key={index}
            source={animation}
            style={style.animations}
            autoPlay
            loop
          />
        )}
      />
    </View>
  );
}
