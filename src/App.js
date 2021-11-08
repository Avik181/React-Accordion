import "./styles.css";
import styled from "styled-components";
import Accordion from "./Accordion";

export default function App() {
  return (
    <Container>
      <Accordion />
    </Container>
  );
}

const Container = styled.div``;
