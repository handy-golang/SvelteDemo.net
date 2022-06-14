import { ajax_json } from '@/util/http';
import { Encrypt, removeToken } from '@/util/tools';
import type { loginType } from './api.d';

export const login = (data: loginType) => {
  const param = {
    ...data,
    Password: Encrypt(data.Password),
  };

  return ajax_json({
    url: '/api/public/login',
    data: param,
    method: 'post',
  });
};

export const outLogin = () => {
  removeToken();
  window.location.replace('/login');
};

export const getUserInfo = () => {
  return ajax_json({
    url: '/api/private/get_user_info',
    data: null,
    method: 'get',
  });
};
