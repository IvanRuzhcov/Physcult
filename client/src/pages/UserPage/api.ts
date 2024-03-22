import { Subscription } from "../PersonalPage/types/Subscription";

export const initSubscriptionFetch = async (obj: number) => {
  const response = await fetch(`/subscription/${obj}`);
  const data = await response.json();
  console.log(data);
  return data;
};
export const initSubscribersFetch = async (obj: number) => {
  const response = await fetch(`/subscribers/${obj}`);
  const data = await response.json();
  console.log(data);
  return data;
};

export const unsubscribeFetch = async (obj:Subscription) => {
  const response = await fetch('/unsubscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  const data = await response.json();
  return data;
};
export const subscribeFetch = async (obj:Subscription) => {
  const response = await fetch('/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  const data = await response.json();
  return data;
};
