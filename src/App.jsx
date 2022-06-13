import "./app.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { useState } from "react";
import Accord from "./Accord";

function App() {
  const [addButton, setaddButton] = useState("Add");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const demo = [
    { title: "Breakfast", description: "Two Breads and One Egg" },
    { title: "Lunch", description: "Chicken Lobia" },
    { title: "Dinner", description: "Pickle with two Chapatti" },
  ];

  const [allItem, setallItem] = useState(demo);

  const handleAdd = () => {
    if (addButton === "Add") {
      setaddButton("Cancel");
    } else {
      setaddButton("Add");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length > 0 && description.length > 0) {
      setallItem([...allItem, { title: title, description: description }]);
      setTitle("");
      setDescription("");
      handleAdd();
    }
  };

  const deleteItem = (e) => {
    setallItem((addItem) => {
      return addItem.filter((value, i) => i !== e);
    });
  };

  const listItems = (item, index) => {
    let data = {
      body: item,
      key: index,
      handler: deleteItem,
    };
    return <Accord key={index} props={data} />;
  };

  return (
    <>
      <Container className="container">
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h1>Todo List</h1>
        </div>

        <Button
          variant="outline-dark"
          style={{ marginBottom: "10px" }}
          onClick={handleAdd}
        >
          {addButton}
        </Button>
        <div className="con">
          {addButton === "Cancel" && (
            <Form className="form" onSubmit={handleSubmit}>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
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

              <Form.Group className="mb-3" controlId="formBasicPassword">
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
                Add in List
              </Button>
            </Form>
          )}

          {allItem.length > 0 &&
            allItem.map((item, index) => listItems(item, index))}
        </div>
      </Container>
    </>
  );
}

export default App;
