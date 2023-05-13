import { TitleText } from '@components/elements/texts/title';
import { Styles } from '@interfaces/texts/TextProps';
import React from 'react';
import { FlatList, View} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

import {style} from './styles';

export function OptionsList({ details, action }:any) {
  const { options, correctOption } = details;
  const availableOptions = options.concat(correctOption).sort();

  return (
    <FlatList
      data={availableOptions}
      keyExtractor={(item) => item.toString()}
      numColumns={2}
      renderItem={({item}) => (
        <View style={style.action}>
          <TouchableHighlight style={style.box} onPress={() => { action(item); }}>
            <TitleText value={item} styled={Styles.LightHighH1Centered} />
          </TouchableHighlight>
        </View>
      )}
    />
  );
}
