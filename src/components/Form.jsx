import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import Instance from '../api/Instance';
import { SignLayoutStyle } from '../style/Layout';
import { Title, ErrorMSG } from '../style/Common';
import SignInput from '../components/common/SignInput';
import SignButton from '../components/common/SignButton';
import UseInput from '../hooks/useInput';

const Form = ({ isSignUp }) => {
  const {
    userInput,
    pwError,
    setPwError,
    emailError,
    isValid,
    setIsValid,
    handleInputChange,
  } = UseInput();
  const navigate = useNavigate();
  const { basicInstance } = Instance();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      // 유효성 검사 통과 시 폼 제출 처리
      if (isSignUp) {
        // 회원가입 처리
        basicInstance
          .post('auth/signup', userInput)
          .then((res) => {
            alert('회원가입에 성공했습니다. 로그인 페이지로 이동합니다.');
            setIsValid(false);
            navigate('/signin');
          })
          .catch((error) => {
            console.error(error);
            setPwError('이미 사용중인 이메일 입니다.');
          });
      } else {
        // 로그인 처리
        basicInstance
          .post('auth/signin', userInput)
          .then((res) => {
            setIsValid(false);
            navigate('/todo');
            localStorage.setItem('token', res.data.access_token);
          })
          .catch((error) => {
            console.error(error);
            setPwError('이메일 혹은 비밀번호가 맞지 않습니다.');
          });
      }
    }
  };

  return (
    <SFormLayout onSubmit={handleSubmit}>
      <Title>{isSignUp ? '회원가입' : '로그인'}</Title>
      <SignInput
        id='user-email'
        email
        placeholder='이메일을 입력해주세요'
        name='email'
        value={userInput.email}
        onChange={handleInputChange}
        $checkError={emailError}
        autoFocus
      >
        이메일
      </SignInput>
      {emailError && <ErrorMSG>{emailError}</ErrorMSG>}
      <SignInput
        type='password'
        id='user-pw'
        placeholder='비밀번호를 입력해주세요'
        name='password'
        value={userInput.password}
        onChange={handleInputChange}
        $checkError={pwError}
      >
        비밀번호
      </SignInput>
      {pwError && <ErrorMSG>{pwError}</ErrorMSG>}
      <SignButton type='submit' signupBtn={isSignUp} disabled={!isValid}>
        {isSignUp ? '가입하기' : '로그인'}
      </SignButton>
    </SFormLayout>
  );
};

export default Form;

const SFormLayout = styled.form`
  ${SignLayoutStyle}

  button {
    margin-top: 30px;
  }
`;
