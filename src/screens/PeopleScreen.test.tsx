import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import PeopleScreen from './PeopleScreen';

jest.mock('../hooks/getPeopleQuery', () => ({
  UseGetPoeple: jest.fn(() => ({
    data: {
      results: [
        {
          name: 'People 1',
          height: 'Height 1',
          mass: 'Mass 1',
        },
        {
          name: 'People 2',
          height: 'Height 2',
          mass: 'Mass 2',
        },
      ],
      previous: 'previous-url',
      next: 'next-url',
    },
    isLoading: false,
    refetch: jest.fn(),
  })),
}));

describe('PeopleScreen', () => {
  it('Renders the list of people and pagination buttons', async () => {
    const {getByText, getByTestId} = render(<PeopleScreen />);
    await waitFor(() => {
      expect(getByText('Name: People 1')).toBeTruthy();
      expect(getByText('Height: Height 1')).toBeTruthy();
      expect(getByText('Mass: Mass 1')).toBeTruthy();

      expect(getByText('Name: People 2')).toBeTruthy();
      expect(getByText('Height: Height 2')).toBeTruthy();
      expect(getByText('Mass: Mass 2')).toBeTruthy();

      expect(
        getByTestId('pagination-button-next').props.accessibilityState.disabled,
      ).toBe(false);
    });
  });
});
