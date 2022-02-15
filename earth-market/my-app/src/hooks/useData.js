import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';
import { API_ENDPOINT } from '../constants';

function 

export const useData = (path) => {
  return useSWR(`${API_ENDPOINT}${path}`, fetcher); 
}