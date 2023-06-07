import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NavigationProps} from '../navigation/MainNavigation';

const PeopleScreen: React.FC<NavigationProps<'People'>> = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Text>PeopleScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Spaceships')}>
        <Text>Nav</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PeopleScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
});
