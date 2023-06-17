import { atom, selectorFamily } from 'recoil';
import axios from 'axios';

export const getPictureCommentInitialData = atom({
  key: 'getPictureCommentInitialData',
  default: [],
});

export const getPictureComment = selectorFamily({
  key: 'getPictureComment',
  get:
    (id) =>
    async ({ get }) => {
      const searchParams = get(getPictureCommentInitialData);

      const response = await axios.get(
        `http://localhost:8080/picture/${id}/comments`,
        {
          params: searchParams,
        },
      );

      return response.data;
    },
});
