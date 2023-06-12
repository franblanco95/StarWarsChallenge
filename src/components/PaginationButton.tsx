import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface PaginationButtonProps {
  text: string;
  handlePagination: () => void;
  disabled: boolean;
}

const PaginationButton: React.FC<PaginationButtonProps> = props => {
  const {text, handlePagination, disabled} = props;
  return (
    <TouchableOpacity
      testID="pagination-button"
      style={[
        styles.paginationButton,
        {borderColor: disabled ? 'grey' : 'red'},
      ]}
      onPress={handlePagination}
      disabled={disabled}>
      <Text testID="pagination-text" style={{color: disabled ? 'grey' : 'red'}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default PaginationButton;

const styles = StyleSheet.create({
  paginationButton: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
});
