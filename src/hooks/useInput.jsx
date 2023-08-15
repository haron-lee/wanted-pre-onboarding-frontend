import { useState } from 'react';

const UseInput = () => {
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });
  const [emailError, setEmailError] = useState('');
  const [pwError, setPwError] = useState('');
  // eslint-disable-next-line
  const [isValid, setIsValid] = useState(false);

  const emailReg =
    /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*[.][a-zA-Z]{2,3}$/i;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      if (!emailReg.test(value)) {
        setEmailError('올바른 이메일 형식이 아닙니다.');
      } else {
        setEmailError('');
      }
    } else if (name === 'password') {
      if (value.length < 8) {
        setPwError('비밀번호는 8자 이상이어야 합니다.');
      } else {
        setPwError('');
      }
    }
    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return {
    userInput,
    emailError,
    setEmailError,
    pwError,
    setPwError,
    isValid:
      !emailError && !pwError && !!userInput.email && !!userInput.password,
    setIsValid,
    handleInputChange,
  };
};

export default UseInput;
