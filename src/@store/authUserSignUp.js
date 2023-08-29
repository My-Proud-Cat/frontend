import { atom } from 'recoil';

export const signEmailState = atom({
  key: 'signEmailState',
  default: '',
});

export const getSignEmailState = atom({
  key: 'getSignEmailState',
  get: ({ get }) => {
    const email = get(signEmailState);
    return email;
  },
});

export const signPasswordState = atom({
  key: 'signPasswordState',
  default: '',
});

export const getSignPasswordState = atom({
  key: 'getSignPasswordState',
  get: ({ get }) => {
    const password = get(signPasswordState);
    return password;
  },
});

export const signNicknameState = atom({
  key: 'signNicknameState',
  default: '',
});

export const getSignNicknameState = atom({
  key: 'getSignNicknameState',
  get: ({ get }) => {
    const nickname = get(signNicknameState);
    return nickname;
  },
});
