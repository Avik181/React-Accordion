import "./styles.css";
import styled from "styled-components";
import { questions } from "./api";
import { useState } from "react";
import MyAccordion from "./MyAccordion";

export default function Accordion() {
  const [data, setData] = useState(questions);
  return (
    <Container>
      <Section>
        {data.map((curr) => {
          return <MyAccordion key={curr.id} {...curr} />;
        })}
      </Section>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0);
`;

const Section = styled.div`
  background-color: rgba(0, 0, 0, 0.025);
  padding: 20px 50px;
  border-radius: 9px;
  box-shadow: 0px 2px 15px 6px rgba(193, 193, 193, 0.75);
  -webkit-box-shadow: 0px 2px 15px 6px rgba(193, 193, 193, 0.75);
  -moz-box-shadow: 0px 2px 15px 6px rgba(193, 193, 193, 0.75);
`;
