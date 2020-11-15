import dispatcher from './dispatcher';
import ApiError from './ApiError';

export default function dispatch(eventName, data) {
  return dispatcher(eventName, data).then((res) => {
    if (res.status === 'success') return res;
    throw new ApiError({ message: 'An error occurred.', details: res.body });
  });
}
