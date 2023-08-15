import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SLayout } from '../style/Layout';
import { Title } from '../style/Common';
import ToDoBox from '../components/ToDo/ToDoBox';
import Signout from '../components/Signout';

const ToDo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/signin');
    }
  }, [navigate]);

  return (
    <>
      <Signout />
      <SLayout>
        <Title>오늘도 화이팅!</Title>
        <ToDoBox />
      </SLayout>
    </>
  );
};

export default ToDo;
