import React, {useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
  StyleSheet,
  Text,
  Image,
  Pressable,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../App';
import POSTS, {Post} from '../data/POSTS';

type Props = NativeStackScreenProps<RootStackParamList>;

const SPACING = 15;
const POST_GUTTER_WIDTH = 2;
const Listscreen = ({navigation}: Props) => {
  const dimensions = useWindowDimensions();
  const imageWidth = dimensions.width / 2 - POST_GUTTER_WIDTH;

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.wrapper}>
        <Text style={styles.listHeader}>Marketplace</Text>

        <View style={styles.posts}>
          {POSTS.map((post: Post, index) => (
            <Pressable
              key={post.id}
              onPress={() => navigation.push('Detail', {post})}
              style={{
                width: imageWidth,
              }}>
              <SharedElement id={`post.${post.id}.photo`}>
                <Image
                  source={{
                    uri: post.source,
                  }}
                  style={{
                    height: 180,
                    width: imageWidth,
                    marginRight: index % 2 === 1 ? 0 : POST_GUTTER_WIDTH,
                    marginLeft: index % 2 === 1 ? POST_GUTTER_WIDTH : 0,
                  }}
                />
              </SharedElement>

              <View style={styles.postTexts}>
                <Text numberOfLines={1} style={styles.postHeader}>
                  €{post.price} · {post.title}
                </Text>
                <Text numberOfLines={1} style={styles.postDescription}>
                  {post.description}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Listscreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  listHeader: {
    fontSize: 28,
    fontWeight: '800',
    margin: SPACING,
  },
  posts: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  postTexts: {
    margin: 10,
    marginBottom: 15,
  },
  postHeader: {
    fontWeight: '600',
  },
  postDescription: {
    color: 'gray',
  },
});
