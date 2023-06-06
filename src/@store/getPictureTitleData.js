import { atom, selector } from 'recoil';

export const titleState = atom({
  key: 'titleState',
  default: '',
});

export const getTitleState = selector({
  key: 'getTitleState',
  get: ({ get }) => {
    const title = get(titleState);
    return title;
  },
});

export const inputCountState = selector({
  key: 'inputCountState',
  get: ({ get }) => {
    const title = get(titleState);

    return title.length;
  },
});
