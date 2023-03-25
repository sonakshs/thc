module.exports = {
    plugins: [
      'postcss-flexbugs-fixes',
      'postcss-preset-env',
      [
        'tailwindcss',
        {
          // The path to your tailwind config file
          config: './tailwind.config.js',
        },
      ],
      [
        'autoprefixer',
        {
          flexbox: 'no-2009',
        },
      ],
    ],
  };
  