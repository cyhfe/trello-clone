import {  List } from "./state/AppStateContext";
type Payload = {
  lists: List[];
};
export const save = (payload: Payload) => {
  return fetch("/api/save", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((res) => {
    return res.json();
  });
};

export const load = () => {
  return fetch("/api/load", {
    method: "get",
  }).then((res) => {
    return res.json() as Promise<Payload>
  });
};
