import { atom, selector } from 'recoil';
import axios from 'axios';

export const getPictureCommentInitialData = atom({
  key: 'getPictureCommentInitialData',
  default: [],
});

export const getPictureComment = selector({
  key: 'getPictureComment',
  get:
    (id) =>
    async ({ get }) => {
      get(getPictureCommentInitialData);

      const response = await axios.get(
        `http://localhost:8080/picture/${id}/comments`,
      );

      return response.data;
    },
});
