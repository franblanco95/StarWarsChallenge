import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {UseGetPlanets} from '../hooks/getPlanetsQuery';
import PaginationButton from '../components/PaginationButton';
import Loader from '../components/Loader';

const PlanetsScreen: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const {data, isLoading, refetch} = UseGetPlanets(currentPage);

  useEffect(() => {
    refetch();
  }, [currentPage, refetch]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={styles.mainContainer}>
        {isLoading ? (
          <Loader text={'Loading Planets..'} />
        ) : data ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            {data.results.map((item, index) => (
              <View key={index} style={styles.peopleCard}>
                <Text>Name: {item.name}</Text>
                <Text>Terrain: {item.terrain}</Text>
                <Text>Diameter: {item.diameter}</Text>
              </View>
            ))}
            <View style={styles.paginationContainer}>
              <PaginationButton
                text={'Previous 10'}
                handlePagination={() => setCurrentPage(currentPage - 1)}
                disabled={data?.previous === null}
              />
              <PaginationButton
                text={'Next 10'}
                handlePagination={() => setCurrentPage(currentPage + 1)}
                disabled={data?.next === null}
              />
            </View>
          </ScrollView>
        ) : (
          <Text>No Data Available</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default PlanetsScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'indigo',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'indigo',
    paddingHorizontal: 10,
  },
  peopleCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  paginationContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  paginationButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
  },
});
