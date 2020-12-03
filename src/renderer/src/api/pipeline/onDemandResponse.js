import { ON_DEMAND_REQUEST_PROXY, ON_DEMAND_REQUEST_RESPOND, ON_REQUEST_WITH_ON_DEMAND_RESPONSE } from '@common/constants/channels';
import pipeline from '@services/pipeline';

function listen(cb) {
  return pipeline.on(ON_REQUEST_WITH_ON_DEMAND_RESPONSE, cb);
}
function respond({ id, response, language }) {
  return pipeline.reply(ON_DEMAND_REQUEST_RESPOND, { id, response, language });
}
function proxy(id) {
  return pipeline.reply(ON_DEMAND_REQUEST_PROXY, id);
}

export default {
  listen,
  respond,
  proxy,
};
