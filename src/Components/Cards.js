import CardContent from "./CardContent";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Cards({ data }) {
  const arrayd = [...data.data.slice(0, 8)];
  //  data.data.slice(0, 8);
  console.log(arrayd);
  return (
    <>
      <Container>
        <Row>
          <h1>Cheap Flights</h1>
        </Row>
        <Row>
          <Col>
            {arrayd.map((item, i) => {
              return <CardContent key={i} dada={item} />;
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cards;
