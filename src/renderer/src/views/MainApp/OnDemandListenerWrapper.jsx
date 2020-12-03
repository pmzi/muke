import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { onDemandResponse } from '@/api/pipeline';
import { openModalSubWindow } from '@common/utilities/window';
import { ON_DEMAND_RESPONSE } from '@common/constants/urls';

export default function OnDemandListenerWrapper({ children }) {
  useEffect(() => {
    function openOnDemandResponsePage(id) {
      openModalSubWindow(ON_DEMAND_RESPONSE(id));
    }

    const dePipelineOnDemand = onDemandResponse.listen(
      openOnDemandResponsePage,
    );

    return () => dePipelineOnDemand();
  }, []);

  return children;
}

OnDemandListenerWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
};
