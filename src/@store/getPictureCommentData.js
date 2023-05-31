import { atom, selector } from 'recoil';
import axios from 'axios';

export const getPictureCommentInitialData = atom({
  key: 'getPictureCommentInitialData',
  default: [],
});

export const getPictureComment = selector({
  key: 'getPictureComment',
  get: async ({ get }) => {
    get(getPictureCommentInitialData);

    const response = await axios.get('http://localhost:3001/comment');

    return response.data;
  },
});
