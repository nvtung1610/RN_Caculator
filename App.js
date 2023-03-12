import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView, Text} from 'react-native';

import AppButton from './src/AppButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const App = () => {
  const iconSize = 30;
  const [currentInput, setCurrentInput] = useState('');
  const [result, setResult] = useState('');

  const caculator = expression => {
    try {
      const result = eval(expression);
      return String(result);
    } catch (error) {
      return 'Error';
    }
  };

  // const [operation, setOperation] = useState(null);

  const handleButtonPress = value => {
    if (value === '=') {
      const result = caculator(currentInput);
      setResult(result);
    } else if (value === 'C') {
      setCurrentInput('');
    } else {
      setCurrentInput(currentInput + value);
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1}}>
        <Text
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
          {result}
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
          onPress={() => handleButtonPress('*')}
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
          onPress={() => handleButtonPress('/')}
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
