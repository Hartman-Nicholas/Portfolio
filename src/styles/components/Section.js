import styled, { css } from "styled-components";

const Section = styled.section`
  margin: 0;
  font-family: var(--ff-primary);
  font-size: var(--fs-body);
  line-height: 1.6;
  padding: 0;

  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

export default Section;
