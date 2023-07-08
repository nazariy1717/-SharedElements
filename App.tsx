import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import ListScreen from './src/screen/ListScreen';
import DetailScreen from './src/screen/DetailScreen';

export type RootStackParamList = {
  List: undefined;
  Detail: any;
};

const Stack = createSharedElementStackNavigator<RootStackParamList>();

const MainScreen = () => (
  <Stack.Navigator initialRouteName="List" screenOptions={{headerShown: false}}>
    <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        sharedElements={route => {
          const {post} = route.params;
          return [`post.${post.id}.photo`];
        }}
      />

  </Stack.Navigator>
);

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
