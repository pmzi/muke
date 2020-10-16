module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: [
    './src/**/*.scss',
    './src/**/*.css',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        layout: 'minmax(0, max-content) 1fr',
        workspace: '10rem 1fr',
      },
      gridTemplateRows: {
        layout: '1fr 3rem',
        workspace: '5rem 1fr',
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  variants: {},
  plugins: [],
};
