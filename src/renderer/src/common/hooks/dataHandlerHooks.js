// Why isn't this a service? because it is highly coupled with React(by having hooks),
// so I preferred to categorize it as a common hook

import { useQuery, useMutation } from 'react-query';

const USE_MUTATION_OPTIONS = {
  throwOnError: true,
};

const useCustomUseMutation = (fn, options) => useMutation(fn, {
  ...USE_MUTATION_OPTIONS,
  ...options,
});

export {
  useQuery,
  useCustomUseMutation as useMutation,
};
