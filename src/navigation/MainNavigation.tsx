import React from 'react';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import PeopleScreen from '../screens/PeopleScreen';
import SpaceshipsScreen from '../screens/SpaceshipsScreen';
import PlanetsScreen from '../screens/PlanetsScreen';

type RootTabParamList = {
  People: undefined;
  Spaceships: undefined;
  Planets: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export type NavigationProps<T extends keyof RootTabParamList> = {
  navigation: BottomTabNavigationProp<RootTabParamList, T>;
};

function MainNavigator(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="People" component={PeopleScreen} />
        <Tab.Screen name="Spaceships" component={SpaceshipsScreen} />
        <Tab.Screen name="Planets" component={PlanetsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
