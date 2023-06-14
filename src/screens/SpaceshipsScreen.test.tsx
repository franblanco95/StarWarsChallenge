import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import SpaceshipsScreen from './SpaceshipsScreen';

jest.mock('../hooks/getSpaceshipsQuery', () => ({
  UseGetSpaceships: jest.fn(() => ({
    data: {
      results: [
        {
          name: 'Spaceship 1',
          passengers: '100',
          manufacturer: 'Manufacturer 1',
        },
        {
          name: 'Spaceship 2',
          passengers: '200',
          manufacturer: 'Manufacturer 2',
        },
      ],
      previous: 'previous-url',
      next: 'next-url',
    },
    isLoading: false,
    refetch: jest.fn(),
  })),
}));

describe('SpaceshipsScreen', () => {
  it('Renders the list of spaceships and pagination buttons', async () => {
    const {getByText, getByTestId} = render(<SpaceshipsScreen />);
    await waitFor(() => {
      expect(getByText('Name: Spaceship 1')).toBeTruthy();
      expect(getByText('Passengers: 100')).toBeTruthy();
      expect(getByText('Manufacturer: Manufacturer 1')).toBeTruthy();

      expect(getByText('Name: Spaceship 2')).toBeTruthy();
      expect(getByText('Passengers: 200')).toBeTruthy();
      expect(getByText('Manufacturer: Manufacturer 2')).toBeTruthy();

      expect(
        getByTestId('pagination-button-next').props.accessibilityState.disabled,
      ).toBe(false);
    });
  });
});
