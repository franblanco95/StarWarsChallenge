import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SpaceshipsScreen: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>SpaceshipsScreen</Text>
    </View>
  );
};

export default SpaceshipsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'cyan',
  },
});
