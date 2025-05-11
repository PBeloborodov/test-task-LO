module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@components': './src/components',
          '@img': './src/img',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
