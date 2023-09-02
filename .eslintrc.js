module.exports = {
  root: true,
  extends: '@react-native-community',

  rules: {
    'react/prop-types': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
