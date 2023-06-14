import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import PaginationButton from './PaginationButton';

describe('PaginationButton', () => {
  it('Renders the button with the correct text and style', () => {
    const {getByTestId} = render(
      <PaginationButton
        text="Next"
        handlePagination={jest.fn()}
        disabled={false}
        testID="pagination-button-next"
      />,
    );

    const button = getByTestId('pagination-button-next');
    const buttonText = getByTestId('pagination-text');

    expect(button).toBeDefined();
    expect(buttonText.props.style).toHaveProperty('color', 'red');
    expect(buttonText.props.children).toBe('Next');
  });

  it('Triggers handlePagination when the button is pressed', () => {
    const handlePagination = jest.fn();
    const {getByTestId} = render(
      <PaginationButton
        text="Next"
        handlePagination={handlePagination}
        disabled={false}
        testID="pagination-button-next"
      />,
    );

    const button = getByTestId('pagination-button-next');
    fireEvent.press(button);
    expect(handlePagination).toHaveBeenCalledTimes(1);
  });

  it('Disables the button when disabled prop is true', () => {
    const {getByTestId} = render(
      <PaginationButton
        text="Next"
        handlePagination={jest.fn()}
        disabled={true}
        testID="pagination-button-next"
      />,
    );
    const button = getByTestId('pagination-button-next');
    const buttonText = getByTestId('pagination-text');

    expect(buttonText.props.style).toHaveProperty('color', 'grey');
    expect(button.props.accessibilityState.disabled).toBe(true);
  });
});
