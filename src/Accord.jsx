import { Button, Col, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./accord.css";
export default function Accord({ props }) {
  return (
    <>
      <Row className="new_row">
        <Col lg={8}>
          <Accordion className="accord">
            <Accordion.Item eventKey="0">
              <Accordion.Header>{props.body.title}</Accordion.Header>
              <Accordion.Body>{props.body.description}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col>
          <Button
            variant="outline-danger"
            className="delButton"
            onClick={() => props.handler(props.key)}
          >
            Delete
          </Button>
        </Col>
      </Row>
    </>
  );
}
