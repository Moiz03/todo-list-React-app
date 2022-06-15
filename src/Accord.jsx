import { Button, Col, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./accord.css";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useEffect } from "react";

export default function Accord({ props }) {
  const [updateButton, setUpdateButton] = useState("Update");

  const [title, setTitle] = useState(props.body.title);
  const [description, setDescription] = useState(props.body.description);

  useEffect(() => {
    setTitle(props.body.title);
    setDescription(props.body.description);
  },[props.body.title,props.body.description]);

  const enabled = updateButton === "Cancel";

  const handleUpdate = () => {
    if (updateButton === "Update") {
      setUpdateButton("Cancel");
    } else {
      setUpdateButton("Update");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      (title !== props.body.title || description !== props.body.description) &&
      title.length > 0 &&
      description.length > 0
    ) {
      let e = {
        title: title,
        description: description,
        index: props.key,
      };
      handleUpdate();
      props.updatehandler(e);
    }
  };

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
        <Col lg={1}>
          <Button
            variant="outline-danger"
            className="delButton"
            onClick={() => props.delhandler(props.key)}
            disabled={enabled}
          >
            Delete
          </Button>
        </Col>
        <Col lg={3}>
          <Button
            variant="outline-primary"
            className="updateButton"
            onClick={handleUpdate}
          >
            {updateButton}
          </Button>
        </Col>
      </Row>
      {updateButton === "Cancel" && (
        <>
          <Form className="form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3 " controlId="formBasicTitle2">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription2">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="textarea"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </Form.Group>

            <Button variant="dark" type="submit">
              Update
            </Button>
          </Form>
        </>
      )}
    </>
  );
}
