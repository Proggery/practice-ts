import { Container, Row } from "react-bootstrap";
import styled from "styled-components";

type TKeysLength = {
  keyslength: number | undefined;
};

export const AppStyled = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
  width: 100%;
  max-width: 800px;
  padding-bottom: 3rem;
  margin: auto;
`;

export const CounerStyled = styled(Container)`
  background-color: lightcyan;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 20px;

  h1 {
    text-align: center;
  }

  button {
    width: 100px;
    height: 40px;
    cursor: pointer;
  }
`;

export const UsersStyled = styled(Container)`
  background-color: lightsalmon;
  display: flex;
  width: 100%;
  padding: 20px;

  img {
    width: 60px;
    height: 60px;
    margin-right: 1rem;
  }

  h4 {
    margin-right: 0.5rem;

    :nth-child(2) span {
      color: green;
    }
    :last-child span {
      color: blue;
    }
  }
`;

export const KeysOfObjStyled = styled(Container)`
  border: 1px solid red;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(
    ${(props: TKeysLength) => props.keyslength},
    1fr
  );
  padding: 0;
  background-color: darkcyan;

  .item {
    border: 1px solid wheat;
    padding: 10px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: .05rem;
    color: wheat;
  }
`;
