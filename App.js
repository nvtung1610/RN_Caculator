import React, {useState, useEffect} from 'react';
import {StyleSheet, View, SafeAreaView, Text, Alert} from 'react-native';

import AppButton from './src/AppButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {caculator, formatNumber} from './src/Utils';
const App = () => {
  const iconSize = 30;
  const [currentInput, setCurrentInput] = useState('');
  const [result, setResult] = useState('');
  const handleButtonPress = value => {
    if (value === '=') {
      const result = caculator(currentInput);
      setResult(result);
    } else if (value === 'C') {
      setCurrentInput('');
      setResult('');
    } else {
      // Check if currentInput length is greater than 12
      if (currentInput.length >= 50) {
        Alert.alert('Quá giới hạn', 'Bạn đã đến giới hạn độ dài.', [
          {text: 'OK'},
        ]);
      } else {
        setCurrentInput(currentInput + value);
      }
    }
  };
  useEffect(() => {
    if (!isNaN(currentInput) || currentInput === '') {
      // if current input is a number or empty, do not update result state
      return;
    }
    const result = caculator(currentInput);
    if (!isNaN(result)) {
      // if result is a valid number, update result state
      setResult(result);
    } else if (isNaN(result)) {
      setResult('');
    }
  }, [currentInput]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1}}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          allowFontScaling={true}
          adjustsFontSizeToFit={true}
          style={{
            fontSize: 50,
            textAlign: 'right',
            color: '#808080',
            paddingRight: 10,
          }}>
          {currentInput}
        </Text>
        <Text
          style={{
            fontSize: 50,
            textAlign: 'right',
            color: '#808080',
            paddingRight: 10,
          }}>
          {formatNumber(result)}
        </Text>
      </View>
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
          onPress={() => handleButtonPress('C')}
        />
        <AppButton
          value={<Icon name="percent-outline" size={iconSize} />}
          type="symbol"
          onPress={() => handleButtonPress('%')}
        />
        <AppButton
          value={<Icon name="backspace-outline" size={iconSize} />}
          type="symbol"
          onPress={() =>
            setCurrentInput(currentInput.substring(0, currentInput.length - 1))
          }
        />
        <AppButton
          value={<Icon name="plus" size={iconSize} />}
          type="symbol"
          onPress={() => handleButtonPress('+')}
        />
        <AppButton
          value="7"
          type="number"
          onPress={() => handleButtonPress('7')}
        />
        <AppButton
          value="8"
          type="number"
          onPress={() => handleButtonPress('8')}
        />
        <AppButton
          value="9"
          type="number"
          onPress={() => handleButtonPress('9')}
        />
        <AppButton
          value={<Icon name="minus" size={iconSize} />}
          type="symbol"
          onPress={() => handleButtonPress('-')}
        />
        <AppButton
          value="4"
          type="number"
          onPress={() => handleButtonPress('4')}
        />
        <AppButton
          value="5"
          type="number"
          onPress={() => handleButtonPress('5')}
        />
        <AppButton
          value="6"
          type="number"
          onPress={() => handleButtonPress('6')}
        />
        <AppButton
          value={<Icon name="close" size={iconSize} />}
          type="symbol"
          onPress={() => handleButtonPress('x')}
        />
        <AppButton
          value="1"
          type="number"
          onPress={() => handleButtonPress('1')}
        />
        <AppButton
          value="2"
          type="number"
          onPress={() => handleButtonPress('2')}
        />
        <AppButton
          value="3"
          type="number"
          onPress={() => handleButtonPress('3')}
        />
        <AppButton
          value={<Icon name="division" size={iconSize} />}
          type="symbol"
          onPress={() => handleButtonPress('÷')}
        />
        <AppButton value={<Text>test</Text>} type="symbol" />
        <AppButton
          value="0"
          type="number"
          onPress={() => handleButtonPress('0')}
        />
        <AppButton
          value="."
          type="number"
          onPress={() => handleButtonPress('.')}
        />
        <AppButton
          value="="
          backgroundColor="#45cee1"
          color="#fff"
          onPress={() => handleButtonPress('=')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
