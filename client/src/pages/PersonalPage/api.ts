import { Сonfirmation } from './types/Сonfirmation';
import AuthData from './types/AuthData';
import { RegisterData } from './types/RegisterData';
import User from './types/User';
import { Posts } from './types/Post';
import { Subscription } from './types/Subscription';

export const emailСonfirmationFetch = async (obj: RegisterData) => {
  try {
    const response = await fetch('/register/sendCode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка сети', error);
  }
};

export const userRegistationFetch = async (obj: Сonfirmation) => {
  try {
    const response = await fetch('/register/verifyCode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка сети', error);
  }
};

export const authFetch = async (obj: AuthData) => {
  try {
    const response = await fetch('authentication/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка сети', error);
  }
};

export const getUser = async (): Promise<
  | {
      isLoggedIn: true;
      user: User;
    }
  | {
      isLoggedIn: false;
    }
> => {
  const res = await fetch('/verification/user', { credentials: 'include' });

  if (!res.ok) {
    const { error } = await res.json();
    throw error;
  }
  return await res.json();
};

export const logoutFetch = async (): Promise<void> => {
  await fetch('/authentication/logout', {
    method: 'POST',
  });
};

export const updatUserPersonalDataFetch = async (obj: User): Promise<User> => {
  const response = await fetch(`/updata/${obj.id}`, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(obj),
  });
  return response.json();
};

export const initUserPostFeth = async (): Promise<Posts[]> => {
  const response = await fetch('/user/posts');
  const data = await response.json();
  return data;
};
export const initPostFeth = async (): Promise<Posts[]> => {
  const response = await fetch('/posts');
  const data = await response.json();
  console.log(data)
  return data;
};

export const initUsersFeth = async (): Promise<User[]> => {
  const response = await fetch('/users');
  const data = await response.json();
  return data;
};

export const initSubscriptionFetch = async (obj:number) => {
  const response = await fetch(`/subscription/${obj}`);
  const data = await response.json();
  return data;
};
export const initSubscribersFetch = async (obj:number) => {
  const response = await fetch(`/subscribers/${obj}`);
  const data = await response.json();
  return data;
};
