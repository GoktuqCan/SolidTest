import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import { generateHexColor } from '../utils/ColorUtils';
import useColorAnimation from '../hooks/useColorAnimation';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const ColorScreen = () => {
  const [color, setColor] = useState(generateHexColor());
  const backgroundColor = useColorAnimation(color);

  const handleGenerateColorPress = useCallback(() => {
    setColor(generateHexColor());
  }, []);

  return (
    <AnimatedPressable
      style={[styles.wrapper, { backgroundColor }]}
      onPress={handleGenerateColorPress}
    >
      <Text>Hello there</Text>
    </AnimatedPressable>
  );
};

export default ColorScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
