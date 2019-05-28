module.exports = api => {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: '3',
        targets: {
          browsers: [
            'last 4 versions',
            'not ie < 11'
          ],
          node: '10'
        }
      }
    ],
    '@babel/preset-react'
  ];
  const plugins = [
    'transform-class-properties',
    '@babel/plugin-transform-runtime'
  ];

  return {
    presets,
    plugins
  };
};
