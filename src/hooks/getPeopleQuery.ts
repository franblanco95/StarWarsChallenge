import {useQuery} from '@tanstack/react-query';

const url = 'https://swapi.dev/api/people';

export interface People {
  count: number;
  next: string;
  previous: null | string;
  results: Result[];
}

export interface Result {
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

const getPeople = async (): Promise<People> => {
  try {
    const response = await fetch(url);
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
  data?: People;
}
export const UseGetPoeple = (): PeopleQueryResult => {
  const {isLoading, data} = useQuery(['people'], getPeople);
  return {isLoading, data};
};
