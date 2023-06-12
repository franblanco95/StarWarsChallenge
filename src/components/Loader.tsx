import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface LoaderProps {
  text: string;
}

const Loader: React.FC<LoaderProps> = props => {
  const {text} = props;
  return (
    <View style={styles.loaderContainer} testID="loader-container">
      <Text style={styles.loaderText} testID="loader-text">
        {text}
      </Text>
      <ActivityIndicator testID="loader-activity-indicator" size="small" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderText: {
    color: 'white',
    marginBottom: 10,
  },
});
