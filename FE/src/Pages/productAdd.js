import React, { useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

function AddProduct() {
  const [type, setType] = useState(null);
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleTypeChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/products/add", inputs)
      .then(() => {
        window.location.pathname = "/";
      })
      .catch((err) => {
        alert(err.response.data.error);
      });
  };

  return (
    <>
      <Container>
        <div className="product-add-container">
          <Form id="product_form" onSubmit={handleSubmit}>
            <Form.Group as={Row}>
              <Form.Label column sm={4}>
                SKU
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  required
                  id="sku"
                  name="sku"
                  type="text"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={4}>
                Name
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  required
                  id="name"
                  name="name"
                  type="text"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={4}>
                Price ($)
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  required
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={4}>
                Type Switcher
              </Form.Label>
              <Col sm="8">
                <Form.Select
                  id="productType"
                  name="type"
                  onChange={handleTypeChange}
                >
                  <option value={null}>Type Switcher</option>
                  <option value="DVD">DVD</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Book">Book</option>
                </Form.Select>
              </Col>
            </Form.Group>
            {type === "DVD" && (
              <>
                <Form.Group as={Row}>
                  <Form.Label column sm={4}>
                    Size (MB)
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      required
                      id="size"
                      type="number"
                      name="size"
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                <p>Please provide the size of the dvd in MB</p>
              </>
            )}
            {type === "Furniture" && (
              <>
                <Form.Group as={Row}>
                  <Form.Label column sm={4}>
                    Height (CM)
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      required
                      name="height"
                      id="height"
                      type="number"
                      step="0.1"
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm={4}>
                    Width (CM)
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      required
                      name="width"
                      id="width"
                      type="number"
                      step="0.1"
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column sm={4}>
                    Length (CM)
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      required
                      name="length"
                      id="length"
                      type="number"
                      step="0.1"
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                <p>Please provide dimensions in HxWxL format</p>
              </>
            )}
            {type === "Book" && (
              <>
                <Form.Group as={Row}>
                  <Form.Label column sm={4}>
                    Weight (KG)
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      required
                      name="weight"
                      id="weight"
                      type="number"
                      step="0.01"
                      onChange={handleChange}
                    />
                  </Col>
                </Form.Group>
                <p>Please provide the weight of the book in KG</p>
              </>
            )}
          </Form>
        </div>
      </Container>
    </>
  );
}

export default AddProduct;
