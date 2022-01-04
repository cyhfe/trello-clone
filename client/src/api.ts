import { List } from './state/AppStateContext';
type Payload = {
  lists: List[];
};

const API_URL = process.env.REACT_APP_API_URL;

export const save = (payload: Payload) => {
  return fetch(`${API_URL}/api/save`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((res) => {
    return res.json();
  });
};

export const load = () => {
  return fetch(`${API_URL}/api/load`, {
    method: 'get',
  }).then((res) => {
    return res.json() as Promise<Payload>;
  });
};
