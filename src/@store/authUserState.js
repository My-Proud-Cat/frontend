import { atom } from 'recoil';

export const authUser = atom({
  key: 'authUser',
  default: '',
});

export const emailState = atom({
  key: 'emailState',
  default: '',
});

export const getemailState = atom({
  key: 'getemailState',
  get: ({ get }) => {
    const email = get(emailState);
    return email;
  },
});

export const passwordState = atom({
  key: 'passwordState',
  default: '',
});

export const getpasswordState = atom({
  key: 'getpasswordState',
  get: ({ get }) => {
    const password = get(passwordState);
    return password;
  },
});
