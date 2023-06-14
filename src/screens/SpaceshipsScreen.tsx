import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {UseGetSpaceships} from '../hooks/getSpaceshipsQuery';
import PaginationButton from '../components/PaginationButton';
import Loader from '../components/Loader';

const SpaceshipsScreen: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const {data, isLoading, refetch} = UseGetSpaceships(currentPage);

  useEffect(() => {
    refetch();
  }, [currentPage, refetch]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={styles.mainContainer}>
        {isLoading ? (
          <Loader text={'Loading Spaceships..'} />
        ) : data ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            {data.results.map((item, index) => (
              <View key={index} style={styles.peopleCard}>
                <Text>Name: {item.name}</Text>
                <Text>Passengers: {item.passengers}</Text>
                <Text>Manufacturer: {item.manufacturer}</Text>
              </View>
            ))}
            <View style={styles.paginationContainer}>
              <PaginationButton
                testID={'pagination-button-previous'}
                text={'Previous 10'}
                handlePagination={() => setCurrentPage(currentPage - 1)}
                disabled={data?.previous === null}
              />
              <PaginationButton
                testID={'pagination-button-next'}
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

export default SpaceshipsScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'brown',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'brown',
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
