import { styled, css } from 'styled-components';

const CommonStyle = css`
  padding: 60px 20px;
  background-color: var(--bg);
  border-radius: 20px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const SignLayoutStyle = css`
  ${CommonStyle}
  width: 500px;
`;

export const SLayout = styled.div`
  ${SignLayoutStyle}
`;
