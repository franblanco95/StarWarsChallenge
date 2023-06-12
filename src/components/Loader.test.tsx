import React from 'react';
import Loader from './Loader';
import {render} from '@testing-library/react-native';

describe('Loader', () => {
  it('Renders the loader text correctly', () => {
    const text = 'Loading';
    const {getByTestId, getByText} = render(<Loader text={text} />);

    // Verifica que el componente Loader renderice correctamente
    const loaderContainer = getByTestId('loader-container');
    expect(loaderContainer).toBeDefined();

    // Verifica que el componente Text tenga el texto correcto
    const loaderText = getByTestId('loader-text');
    expect(loaderText).toBeDefined();
    expect(getByText(text)).toBeDefined();
    expect(loaderText).toBeDefined();

    // Verifica que el componente ActivityIndicator se renderice
    const activityIndicator = getByTestId('loader-activity-indicator');
    expect(activityIndicator).toBeDefined();
  });
});
