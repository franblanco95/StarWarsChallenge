import {useQuery} from '@tanstack/react-query';

const url = 'https://swapi.dev/api/planets';

export interface PlanetResponse {
  count: number;
  next: string;
  previous: null;
  results: Planet[];
}

export interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}

const getPlanets = async (page: number): Promise<PlanetResponse> => {
  try {
    const response = await fetch(`${url}/?page=${page}`);
    const resJson = await response.json();
    console.log('response >>>>>>>>>>>', resJson);
    return resJson;
  } catch (error) {
    console.error('Error fetching Data', error);
    throw error;
  }
};

interface PlanetsQueryResult {
  isLoading: boolean;
  data?: PlanetResponse;
  refetch: any;
}
export const UseGetPlanets = (page: number): PlanetsQueryResult => {
  const {isLoading, data, refetch} = useQuery(['planets'], () =>
    getPlanets(page),
  );
  return {isLoading, data, refetch};
};
