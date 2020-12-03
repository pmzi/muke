// import { GET_TIMELINE_REQUEST_DETAILS } from '@common/constants/channels';
// import dispatch from '@services/dispatch';

function getTimelineRequestDetails() {
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
      response: {
        headers: [
          {
            key: 'test',
            value: 'testContent',
          },
        ],
        body: 'body of the response',
      },
      path: '/login',
      name: 'Login',
      matchType: 'contains',
      method: 'post',
      matchWith: 'url',
      status: 'success',
    }), 1000);
  });
  // return dispatch(GET_TIMELINE_REQUEST_DETAILS);
}

export default {
  getTimelineRequestDetails,
};
