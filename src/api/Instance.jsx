import axios from 'axios';

const Instance = () => {
  const URL = 'https://www.pre-onboarding-selection-task.shop/';

  const token = localStorage.getItem('token');

  const basicInstance = axios.create({
    baseURL: URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const authInstance = axios.create({
    baseURL: URL,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  return { basicInstance, authInstance };
};

export default Instance;
