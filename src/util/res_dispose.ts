import type { resType, resDataType } from './utils.d';

export const res_dispose = (response: resType): resDataType => {
  const config = response.config;
  const data = response.data;

  if (config.message !== -1) {
    if (data.Code < 0) {
      return data;
    }
  }

  return data;
};
