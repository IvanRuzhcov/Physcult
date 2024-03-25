import { LineAndCharacter } from 'typescript';
import { Subscription } from '../PersonalPage/types/Subscription';
import { Like } from './types/Like';

export const initSubscriptionFetch = async (obj: number) => {
  const response = await fetch(`/subscription/${obj}`);
  const data = await response.json();
  return data;
};
export const initSubscribersFetch = async (obj: number) => {
  const response = await fetch(`/subscribers/${obj}`);
  const data = await response.json();
  return data;
};

export const unsubscribeFetch = async (obj: Subscription) => {
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

export const subscribeFetch = async (obj: Subscription) => {
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

export const initLikeFetch = async () => {
  const response = await fetch(`/init/like`);
  const data = response.json();
  return data;
};

export const likeFetch = async (obj: Like) => {
  const response = await fetch('/like', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  const data = await response.json();
  return data;
};

export const removeLikeFetch = async (obj: Like) => {
  const response = await fetch('/remove/like', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  const data = await response.json()
  return data
};
