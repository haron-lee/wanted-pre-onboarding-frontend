import React from 'react';
import { styled } from 'styled-components';
import { SignLayoutStyle } from '../style/Layout';
import { SLink, Title } from '../style/Common';
import logo from '../assets/wanted.svg';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <main>
      <Layout>
        <STitleLayout>
          <img src={logo} alt='원티드 로고' />
          <Title>오늘의 할일</Title>
        </STitleLayout>
        <SLink to='/signin'>로그인</SLink>
        <p> 아이디가 없으신가요? </p>
        <SSignup to='/signup'>회원가입</SSignup>
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

  p {
    font-size: 12px;
    color: var(--gray-500);

    &::before,
    &::after {
      content: '';
      display: inline-block;
      width: 50px;
      height: 1px;
      background-color: var(--gray-500);
      margin: 0 8px 3px 8px;
    }
  }
`;

const STitleLayout = styled.div`
  img {
    width: 100px;
    margin-bottom: 10px;
  }

  h1 {
    margin-bottom: 15px;
    font-weight: bold;
  }
`;

const SSignup = styled(Link)`
  color: var(--light);
`;
