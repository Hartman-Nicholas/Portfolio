import styled, { css } from "styled-components";

const Button = styled.button`
  display: inline-block;
  padding: .5em 1.5em;
  background: var(--clr-accent);
  color: var(--clr-dark)
  text-decoration: none;
  cursor: pointer;
  font-size: 0.8rem


  color: ${(props) => props.theme.text};

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}


`;

export default Button;
