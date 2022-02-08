import axios from 'axios'; 
import { API_ENDPOINT } from '../constants';

export const fetcher = (url: string) => axios.get(url).then(res => res.data);