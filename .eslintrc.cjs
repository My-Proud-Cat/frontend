module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  rules: {
    'no-unused-vars': 'warn',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: 'useRecoilCallback', // recoil 쓰면 추가
      },
    ],
    'import/prefer-default-export': 'off',
    'import/extensions': ['off'],
    // 자식이 없는 구성 요소에 대해 추가 닫는 태그를 허용하지 않음
    'react/self-closing-comp': [
      'warn',
      {
        component: true, // 컴포넌트 허용하지 않음 <Component></Component> -> 안됨
        html: false, // html 허용함 <div></div>
      },
    ],
  },
};
