import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {ButtonProps} from '../types';

const Button: React.FC<ButtonProps> = ({children, onPress, maxWidth}) => {
  return (
    <View maxWidth={maxWidth}>
      <Pressable onPress={onPress}>
        {({isPressed}) => (
          <View
            padding={'15px'}
            shadow={1}
            backgroundColor={isPressed ? 'blue' : 'red'}
            borderRadius={5}>
            <Text
              textAlign="center"
              color="neutral.white"
              fontFamily="body"
              fontWeight={600}
              fontSize={14}
              lineHeight={20}>
              {children}
            </Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};
export default Button;
