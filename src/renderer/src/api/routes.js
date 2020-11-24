// import { GET_ROUTES } from '@common/constants/queries';
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

export default {
  getAllRoutes,
  changeRoutesOrders,
};
