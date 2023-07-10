import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import ListScreen from './src/screen/ListScreen';
import DetailScreen from './src/screen/DetailScreen';
import {RootStackParamList} from './src/types/types';

const Stack = createSharedElementStackNavigator<RootStackParamList>();

const routes: Array<React.ComponentProps<typeof Stack.Screen>> = [
  {
    name: 'List',
    component: ListScreen,
  },
  {
    name: 'Detail',
    component: DetailScreen,
    sharedElements: route => {
      const {post} = route.params;
      return [`post.${post.id}.photo`];
    },
  },
];

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {routes.map(routeConfig => (
            <Stack.Screen key={routeConfig.name} {...routeConfig} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
