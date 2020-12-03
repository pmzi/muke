// import { GET_ROUTES } from '@common/constants/channels';
// import dispatch from '@services/dispatch';

function getAllRoutes() {
  return new Promise((resolve) => {
    setTimeout(() => resolve([{
      id: 1,
      title: 'salam1',
      children: [
        {
          id: 11,
          text: 'sub11',
        },
        {
          id: 22,
          text: 'sub22',
        },
      ],
    },
    {
      id: 2,
      text: 'salam2',
    }, {
      id: 3,
      text: 'salam3',
    }]), 1000);
  });
  // return dispatch(GET_ROUTES);
}

function changeRoutesOrders({ parent, oldIndex, newIndex }) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ parent, oldIndex, newIndex }), 1000);
  });
  // return dispatch(CHANGE_ORDER_ROUTE_GROUP);
}

function addRoute({
  name, parent = null, method, path, matchType, matchWith,
}) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({
      id: Math.random(), name, parent, method, path, matchType, matchWith,
    }));
  });
  // return dispatch(CREATE_ROUTE);
}

function addRouteGroup(label) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 5, label }));
  });
  // return dispatch(CREATE_ROUTE_GROUP);
}

function getRoute(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({
      id,
      headers: [{ key: 'test', value: 'testContent' }],
      response: { responseType: 'JSON', content: 'some json' },
      method: 'post',
      matchType: 'contains',
      path: '/user/login',
      matchWith: 'URL',
      name: 'Login',
    }), 2000);
  });
  // return dispatch(GET_ROUTE);
}

export default {
  getAllRoutes,
  changeRoutesOrders,
  addRoute,
  addRouteGroup,
  getRoute,
};
