import { useRef, useMemo, useEffect } from 'react';
import { Animated } from 'react-native';

const useColorAnimation = (color: string) => {
  const anim = useMemo(() => new Animated.Value(0), [color]);
  const currentColor = useRef(color);
  const nextColor = useMemo(() => color, [color]);

  const animatedColor = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [currentColor.current, nextColor],
  });

  useEffect(() => {
    Animated.timing(anim, {
      toValue: 1,
      useNativeDriver: false,
    }).start(() => {
      currentColor.current = nextColor;
    });
  }, [color]);

  return animatedColor;
};

export default useColorAnimation;
