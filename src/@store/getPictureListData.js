import { atom, selector } from 'recoil';
import axios from 'axios';

export const getPictureListInitialData = atom({
  key: 'getPictureListInitialData',
  default: [],
});

export const getPictureList = selector({
  key: 'getPictureList',
  get: async ({ get }) => {
    get(getPictureListInitialData);

    const response = await axios.get('http://localhost:3001/picture');

    return response.data;
  },
});
