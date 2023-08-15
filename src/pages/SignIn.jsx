import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';

const SignIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/todo');
    }
  }, [navigate]);

  return <Form isSignUp={false} />;
};

export default SignIn;
