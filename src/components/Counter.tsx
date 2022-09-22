import { FC, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { CounerStyled } from "../App.styled";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { nextPage } from "../redux/slices/pagesSlice";

const Counter: FC = () => {
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.pages);

  const [counter, setCounter] = useState<number>(0);
  const [currPage, setCurrPage] = useState<number>(0);

  useEffect(() => {
    return setCurrPage(page);
  }, []);

  const inc = () => {
    setCounter(counter + 1);
  };

  return (
    <CounerStyled>
      <h1>{counter}</h1>
      <Row>
        <Col>
          <button onClick={inc}>Increment</button>
        </Col>
        <Col>
          <button onClick={() => dispatch(nextPage(currPage))}>
            next user
          </button>
        </Col>
      </Row>
    </CounerStyled>
  );
};

export default Counter;
