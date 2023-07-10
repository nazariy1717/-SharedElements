import React, {useEffect, useRef} from 'react';
import {SharedElement} from 'react-navigation-shared-element';
import {Button, Animated, View, Text, Image, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootStackParamList} from '../types/types';

type DetailProps = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const SPACING = 15;

const DetailScreen = ({route}: DetailProps) => {
  const {post} = route.params;
  const safeInsets = useSafeAreaInsets();
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 250,
      delay: 500,
      useNativeDriver: true,
    }).start();
  }, [opacity, route.params]);

  return (
    <View style={styles.wrapper}>
      <SharedElement id={`post.${post.id}.photo`}>
        <Image source={{uri: post.source}} style={styles.postImage} />
      </SharedElement>
      <View style={styles.postDetails}>
        <Animated.View
          style={{
            opacity,
            position: 'absolute',
            top: safeInsets.top + SPACING,
            left: safeInsets.left + SPACING,
            right: safeInsets.right + SPACING,
            zIndex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.postTitle}>{post.title}</Text>

          <Text style={styles.postPrice}>€{post.price}</Text>

          <Button title="Contact Seller" />
        </Animated.View>
        <Animated.Text
          style={{
            opacity,
            fontSize: 17,
          }}>
          {post.description}
        </Animated.Text>
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  postImage: {
    height: 300,
    width: '100%',
  },
  postDetails: {
    paddingVertical: 10,
    paddingHorizontal: SPACING,
  },
  postTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  postPrice: {
    fontSize: 24,
  },
  postContactButton: {
    marginVertical: SPACING,
  },
});
