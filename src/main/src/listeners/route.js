const {
  CREATE_ROUTE,
} = require('@shared/constants/listenerChannels');

const routeController = require('@controllers/route');

module.exports = function registerListeners({ listen }) {
  listen(CREATE_ROUTE, async (res, data) => {
    const newRoute = await routeController.createRoute(data);

    res.success(newRoute.toJSON());
  });
};
