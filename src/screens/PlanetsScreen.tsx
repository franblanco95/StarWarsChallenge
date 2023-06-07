import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PlanetsScreen: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>PlanetsScreen</Text>
    </View>
  );
};

export default PlanetsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgreen',
  },
});
