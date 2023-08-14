import React from 'react';
import { styled } from 'styled-components';
import { SignLayoutStyle } from '../style/Layout';
import { SLink, Title } from '../style/Common';

const Landing = () => {
  return (
    <main>
      <Layout>
        <Title>오늘의 할일</Title>
        <SLink to='/signin'>로그인</SLink>
        <SLink to='/signup'>회원가입</SLink>
      </Layout>
    </main>
  );
};

export default Landing;

const Layout = styled.div`
  ${SignLayoutStyle}
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: white;
`;
