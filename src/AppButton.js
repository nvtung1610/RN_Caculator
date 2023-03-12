import React, {useState, useEffect} from 'react';
import {TouchableOpacity, View, Text, Dimensions} from 'react-native';

export default AppButton = props => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const {type, onPress} = props;

  const textColor = type === 'symbol' ? '#45cee1' : '#808080'; // Set text color based on type prop

  const defaultTextColor = '#ffffff'; // Set default text color
  const defaultTextSize = 30; // Set default text color

  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={{
        width: windowWidth / 4,
        height: windowWidth / 4,
        borderWidth: 1,
        borderColor: '#e5e5e5e5',
        backgroundColor: props.backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}>
      <View
        style={{
          transform: [{scale: isPressed ? 0.8 : 1}],
          borderColor: '#e5e5e5e5',
          padding: 10,
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: type ? textColor : defaultTextColor,
            fontSize: 30,
          }}>
          {props.value}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
