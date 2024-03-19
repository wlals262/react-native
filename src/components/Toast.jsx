import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';

const Toast = ({content, visible, duration, handleCancel}) => {
  const toastValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      toastAnimation();
    }
  }, [toastAnimation, visible]);

  const toastAnimation = () => {
    toastValue.setValue(0);
    Animated.spring(toastValue, {
      toValue: 1,
      delay: 100,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (finished) {
        handleCancel();
        Animated.timing(toastValue, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
          delay: duration || 1000,
        }).start();
      }
    });
  }; //끝나는 endCallback을 가져올 수 있어서 창을 띄우고 그 후에 꺼지는 애니메이션을 구현할 수 있음.

  return (
    <Animated.View
      View
      style={[
        styles.toast,
        {
          opacity: toastValue,
          transform: [
            {
              translateX: toastValue.interpolate({
                inputRange: [0, 1],
                outputRange: [-40, -45],
              }),
            },
            {
              scale: toastValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0.5, 1],
              }),
            },
          ],
        },
      ]}>
      <View style={styles.toastContents}>
        <Text style={styles.toastText}>{content}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    top: 80,
    left: 100,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toastContents: {
    justifyContent: 'center',
    height: 39,
    backgroundColor: '#333',
    paddingHorizontal: 16,
    borderRadius: 100,
  },
  toastText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFF',
  },
});

export default Toast;
