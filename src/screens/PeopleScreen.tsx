import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {NavigationProps} from '../navigation/MainNavigation';
import {UseGetPoeple} from '../hooks/getPeopleQuery';

const PeopleScreen: React.FC<NavigationProps<'People'>> = ({navigation}) => {
  const {data, isLoading} = UseGetPoeple();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={styles.mainContainer}>
        {isLoading ? (
          <ActivityIndicator size="small" />
        ) : data ? (
          <ScrollView>
            {data.results.map((item, index) => (
              <View key={index} style={styles.peopleCard}>
                <Text>Name: {item.name}</Text>
                <Text>Height: {item.height}</Text>
                <Text>Mass: {item.mass}</Text>
              </View>
            ))}
          </ScrollView>
        ) : (
          <Text>No Data Available</Text>
        )}
        <TouchableOpacity onPress={() => navigation.navigate('Spaceships')}>
          <Text style={{color: 'white'}}>Nav</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PeopleScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'black',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  peopleCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
});
