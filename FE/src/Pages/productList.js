import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col, Card, Container, InputGroup } from "react-bootstrap";

function ProductPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/products/get").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <Container className="product-container">
        <Row xs={1} md={4} className="g-4">
          {data &&
            data.map((_, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Header>
                    <InputGroup.Checkbox
                      className="delete-checkbox"
                      name={_.sku}
                      onChange={(e) => (e.target.value = e.target.checked)}
                    />
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>{_.sku}</Card.Text>
                    <Card.Text>{_.name}</Card.Text>
                    <Card.Text>{_.price}$</Card.Text>
                    <Card.Text>{_.attribute}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}

export default ProductPage;
