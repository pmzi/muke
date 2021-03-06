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
        workspace: '20rem 1fr',
      },
      gridTemplateRows: {
        layout: 'minmax(0, 1fr) 3rem',
        workspace: '5rem minmax(0, 1fr)',
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  variants: {},
  plugins: [],
};
