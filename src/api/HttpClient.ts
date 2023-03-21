import axios from 'axios';
import { URL, BEARER_TOKEN } from './constants';

export const getBreweries = async (): Promise<any> => {
    const res = await axios.get(URL, {
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${BEARER_TOKEN}`
        }
    });

    return res.data;
}