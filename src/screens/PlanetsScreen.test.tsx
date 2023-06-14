import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import PlanetsScreen from './PlanetsScreen';

jest.mock('../hooks/getPlanetsQuery', () => ({
  UseGetPlanets: jest.fn(() => ({
    data: {
      results: [
        {
          name: 'Planet 1',
          terrain: 'Terrain 1',
          diameter: 'Diameter 1',
        },
        {
          name: 'Planet 2',
          terrain: 'Terrain 2',
          diameter: 'Diameter 2',
        },
      ],
      previous: 'previous-url',
      next: 'next-url',
    },
    isLoading: false,
    refetch: jest.fn(),
  })),
}));

describe('PlanetsScreen', () => {
  it('Renders the list of planets and pagination buttons', async () => {
    const {getByText, getByTestId} = render(<PlanetsScreen />);
    await waitFor(() => {
      expect(getByText('Name: Planet 1')).toBeTruthy();
      expect(getByText('Terrain: Terrain 1')).toBeTruthy();
      expect(getByText('Diameter: Diameter 1')).toBeTruthy();

      expect(getByText('Name: Planet 2')).toBeTruthy();
      expect(getByText('Terrain: Terrain 2')).toBeTruthy();
      expect(getByText('Diameter: Diameter 2')).toBeTruthy();

      expect(
        getByTestId('pagination-button-next').props.accessibilityState.disabled,
      ).toBe(false);
    });
  });
});
