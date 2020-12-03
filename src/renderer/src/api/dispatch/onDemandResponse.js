// import { GET_ON_DEMAND_RESPONSE_DETAILS } from '@common/constants/channels';
// import dispatch from '@services/dispatch';

function getOnDemandResponseDetails() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({
      request: {
        headers: [
          {
            key: 'test',
            value: 'testContent',
          },
        ],
        queryStrings: [
          {
            key: 'qTest',
            value: 'qTestContent',
          },
        ],
        body: 'body',
      },
      path: '/login',
      name: 'Login',
      matchType: 'contains',
      method: 'post',
      matchWith: 'url',
      time: '22:00',
    }), 1000);
  });
  // return dispatch(GET_ON_DEMAND_RESPONSE_DETAILS);
}

export default {
  getOnDemandResponseDetails,
};
