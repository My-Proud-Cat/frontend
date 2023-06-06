import { atom, selector } from 'recoil';
import axios from 'axios';

export const getPictureInitialData = atom({
  key: 'getPictureInitialData',
  default: [],
});

export const getPicture = selector({
  key: 'getPicture',
  get: async ({ get }) => {
    get(getPictureInitialData);

    const searchParams = get(getPictureInitialData);

    const response = await axios.get('http://localhost:3001/picture', {
      params: searchParams,
    });

    return response.data;
  },
});
