const RouteItem = require('@models/RouteItem');
const Route = require('@models/Route');
const RouteHeader = require('@models/RouteHeader');

export default {
  async createRoute({
    name,
    method,
    path,
    matchType,
    matchWith,
    enabled,
    responseType,
    onDemand,
    parent,
    headers = [],
  }) {
    const newRoute = Route.create({
      name,
      method,
      path,
      matchType,
      matchWith,
      enabled,
      responseType,
      onDemand,
    }, {
      raw: true,
    });

    const headersWithRouteId = headers.map((header) => ({ ...header, id: newRoute.id }));

    const newHeaders = await RouteHeader.createBulk(headersWithRouteId, {
      raw: true,
    });

    newRoute.headers = newHeaders;

    return newRoute;
  },

  async editRoute({
    id,
    method,
    path,
    matchType,
    matchWith,
    enabled,
    responseType,
    onDemand,
    headers = [],
  }) {
    await Route.update({
      method,
      path,
      matchType,
      matchWith,
      enabled,
      responseType,
      onDemand,
    }, {
      where: {
        id,
      },
    }, {
      raw: true,
    });

    await RouteHeader.destroy({
      where: {
        RouteId: id,
      },
    });

    const headersWithRouteId = headers.map((header) => ({ ...header, id }));

    await RouteHeader.createBulk(headersWithRouteId, {
      raw: true,
    });
  },

  async deleteRoute(id) {
    await Route.destroy({
      where: {
        id,
      },
    });

    await RouteHeader.destroy({
      where: {
        RouteId: id,
      },
    });
  },

  async moveRoute({ order, parent }) {
    await RouteItem.update({
      order,
      RouteItemId: parent,
    });
  },
};
