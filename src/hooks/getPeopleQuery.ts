import {useQuery} from '@tanstack/react-query';

const url = 'https://swapi.dev/api/people';

export interface PeopleResponse {
  count: number;
  next: string;
  previous: null | string;
  results: People[];
}

export interface People {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: Gender;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
}

export enum Gender {
  Female = 'female',
  Male = 'male',
  NA = 'n/a',
}

const getPeople = async (page: number): Promise<PeopleResponse> => {
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

interface PeopleQueryResult {
  isLoading: boolean;
  data?: PeopleResponse;
  refetch: any;
}
export const UseGetPoeple = (page: number): PeopleQueryResult => {
  const {isLoading, data, refetch} = useQuery(['people'], () =>
    getPeople(page),
  );
  return {isLoading, data, refetch};
};
