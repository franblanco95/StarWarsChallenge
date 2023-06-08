import React from 'react';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import PeopleScreen from '../screens/PeopleScreen';
import SpaceshipsScreen from '../screens/SpaceshipsScreen';
import PlanetsScreen from '../screens/PlanetsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="People"
          component={PeopleScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="people" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Spaceships"
          component={SpaceshipsScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="rocket" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Planets"
          component={PlanetsScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="planet" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
