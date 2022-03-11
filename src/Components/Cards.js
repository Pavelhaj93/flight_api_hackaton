import CardContent from "./CardContent";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Cards({ data }) {
  const arrayd = [...data.data.slice(0, 8)];
  //  data.data.slice(0, 8);
  console.log(arrayd);
  return (
    <>
      <Container className="container" style={{marginTop:'100px'}}>
        <Row>
          <h3>Cheap Flights</h3>
        </Row>
        <Row >
          <Col className="card-row">
            {arrayd.map((item, i) => {
              return <CardContent key={i} dada={item} />
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cards;
