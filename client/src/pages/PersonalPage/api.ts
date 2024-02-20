import { Сonfirmation } from './types/Сonfirmation';
import AuthData from './types/AuthData';
import { RegisterData } from './types/RegisterData';
import User from './types/User';

export const emailСonfirmationFetch = async (obj: RegisterData) => {
  try {
    console.log(obj);
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
    console.log(obj);
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
  console.log(obj.id);
  const response = await fetch(`/updata/${obj.id}`, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(obj),
  });
  return response.json();
};


