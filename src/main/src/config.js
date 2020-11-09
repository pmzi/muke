const IS_PRODUCTION = process.env.NODE_ENV === 'production';

exports.IS_PRODUCTION = IS_PRODUCTION;

exports.IS_DEVELOPMENT = !IS_PRODUCTION;
