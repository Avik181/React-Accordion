import "./styles.css";
import styled from "styled-components";
import { useState } from "react";

export default function App({ question, answer }) {
  const [show, setShow] = useState(false);
  return (
    <Container>
      <Question>
        <p onClick={() => setShow(!show)}>{show ? "-" : "+"}</p>
        <h2>{question}</h2>
      </Question>
      {show && <p>{answer}</p>}
    </Container>
  );
}

const Container = styled.div``;
const Question = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 20px;
    font-weight: 600;
    color: white;
    cursor: pointer;
    margin-right: 10px;
    background-color: rgba(0, 0, 0, 1);
    border-radius: 50%;
    padding: 1px 6px 0px 6px;
  }
`;
