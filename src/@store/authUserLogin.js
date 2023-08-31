import { atom } from 'recoil';

export const authState = atom({
  key: 'authState',
  default: false,
});

export const getAuthState = atom({
  key: 'getAuthState',
  get: ({ get }) => {
    const auth = get(authState);
    return auth;
  },
}); // 필요 없는 건가

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
