import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';

const SignUp = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/todo');
    }
  }, [navigate]);

  return <Form isSignUp={true} />;
};

export default SignUp;
