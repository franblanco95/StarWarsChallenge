import {useQuery} from '@tanstack/react-query';

const url = 'https://swapi.dev/api/starships';

export interface SpaceshipsResponse {
  count: number;
  next: string;
  previous: null;
  results: Spaceship[];
}

export interface Spaceship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}

const getSpaceships = async (page: number): Promise<SpaceshipsResponse> => {
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
  data?: SpaceshipsResponse;
  refetch: any;
}
export const UseGetSpaceships = (page: number): PlanetsQueryResult => {
  const {isLoading, data, refetch} = useQuery(['spaceships'], () =>
    getSpaceships(page),
  );
  return {isLoading, data, refetch};
};
