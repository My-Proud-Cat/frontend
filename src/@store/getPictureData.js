import { atom, selector, RecoilEnv, selectorFamily } from 'recoil';
import axios from 'axios';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const getPictureInitialData = atom({
  key: 'getPictureInitialData',
  default: [],
});

export const getPictureList = selector({
  key: 'getPictureList',
  get: async ({ get }) => {
    const searchParams = get(getPictureInitialData);

    const response = await axios.get(
      'http://localhost:8080/picture/list/paging',
      {
        params: searchParams,
      },
    );

    return response.data;
  },
});

export const getPicture = selectorFamily({
  key: 'getPicture',
  get:
    (id) =>
    async ({ get }) => {
      const searchParams = get(getPictureInitialData);

      const response = await axios.get(
        `http://localhost:8080/picture/${id}/comments`,
        {
          params: searchParams,
        },
      );

      return response.data;
    },
});
