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
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  variants: {},
  plugins: [],
};
