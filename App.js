import React from 'react';
import {StyleSheet, View, SafeAreaView, Text} from 'react-native';

import AppButton from './src/AppButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const App = () => {
  const iconSize = 30;

  const handlePress = (type, value) => {};
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1}}></View>
      <View
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
        <AppButton
          value={<Text style={{fontSize: 30}}>C</Text>}
          type="symbol"
        />
        <AppButton
          value={<Icon name="percent-outline" size={iconSize} />}
          type="symbol"
        />
        <AppButton
          value={<Icon name="backspace-outline" size={iconSize} />}
          type="symbol"
        />
        <AppButton value={<Icon name="plus" size={iconSize} />} type="symbol" />
        <AppButton value="7" type="number" />
        <AppButton value="8" type="number" />
        <AppButton value="9" type="number" />
        <AppButton
          value={<Icon name="minus" size={iconSize} />}
          type="symbol"
        />
        <AppButton value="4" type="number" />
        <AppButton value="5" type="number" />
        <AppButton value="6" type="number" />
        <AppButton
          value={<Icon name="close" size={iconSize} />}
          type="symbol"
        />
        <AppButton value="1" type="number" />
        <AppButton value="2" type="number" />
        <AppButton value="3" type="number" />
        <AppButton
          value={<Icon name="division" size={iconSize} />}
          type="symbol"
        />
        <AppButton value={<Text>test</Text>} type="symbol" />
        <AppButton value="0" type="number" />
        <AppButton value="." type="number" />
        <AppButton value="=" backgroundColor="#45cee1" color="#fff" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
