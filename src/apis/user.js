import {API} from '.';

export const getMyInfo = async () => {
  const res = await API.get('/api/info');
  return res;
};

export const getMyFriendList = async userId => {
  return await API.get(`./api/friend/${userId}`);
};
