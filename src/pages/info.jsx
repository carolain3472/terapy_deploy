import { NavbarComponent } from "../components/Navbar";
import { Container, Row, Col, Table, Accordion } from "react-bootstrap";
import "../css/info_style.css";

export function InfoPage() {
  return (
    <>
    <NavbarComponent />
    <Container
      fluid
      style={{ width: "100vw", padding: 0, overflow: "hidden" }}
    >
      <Row
        className="align-items-center text-center"
        style={{
          width: "100%",
        }}
      >
        <h2 style={{ marginTop: "15px" }}>
          Product information about Tepary Beans
        </h2>
      </Row>
      <Row className="align-items-center text-center productRow">
        <Col md={6}>
          <ul
            style={{ textAlign: "left", listStyleType: "none", padding: 0 }}
          >
            <h2>
              <b>Product details</b>
            </h2>
            <li>
              <b>Improved Focus</b>
              <ul style={{ listStyleType: "none", paddingLeft: "20px" }}>
                <li>
                  Tepary beans help you stay focused and productive throughout
                  the day.
                </li>
              </ul>
            </li>
            <li>
              <b>Reduced Stress</b>
              <ul style={{ listStyleType: "none", paddingLeft: "20px" }}>
                <li>
                  The natural ingredients in Tepary Beans help you manage
                  stress and anxiety.
                </li>
              </ul>
            </li>
            <li>
              <b>Boosted energy</b>
              <ul style={{ listStyleType: "none", paddingLeft: "20px" }}>
                <li>
                  Experience a natural energy boost without the crash of
                  caffeine.
                </li>
              </ul>
            </li>
            <li>
              <b>Improved sleep</b>
              <ul style={{ listStyleType: "none", paddingLeft: "20px" }}>
                <li>
                  Tepary Beans promote better sleep quality and duration.
                </li>
              </ul>
            </li>
          </ul>
        </Col>
        <Col md={6}>
          <img
            src="beans/tepary2.webp"
            alt="Tepary Beans"
            style={{ maxWidth: "70%", height: "auto" }}
          />
        </Col>
      </Row>
    </Container>

  
      <Container fluid style={{ overflow: "hidden" }}>
        <h2 className="specificationsTitle" style={{ marginTop: "15px" }}>
          <b>Specifications</b>
        </h2>
        <Row
          className="align-items-center text-center"
          style={{
            width: "100%",
            paddingLeft: "10vw",
            paddingRight: "10vw",
            marginTop: "20px",
          }}
        >
          <Table
            striped
            bordered
            hover
            size="sm"
            variant="dark"
            style={{
              backgroundColor: "#025201",
              color: "white",
              width: "100%",
            }}
          >
            <thead>
              <tr>
                <th>Dimension</th>
                <th>Weight</th>
                <th>Materials</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3.5x2.5x1.5 inches</td>
                <td>4 oz</td>
                <td>Organic coffee beans, natural herbs and extracts.</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
      <Container fluid style={{ overflow: "hidden" }}>
        <h2
          className="specificationsTitle"
          style={{ marginTop: "15px", overflow: "hidden" }}
        >
          <b>FAQ</b>
        </h2>
        <Row
          className="align-items-center text-center"
          style={{
            marginBottom: "30px",
            paddingLeft: "50px",
            paddingRight: "50px",
          }}
        >
          <Accordion
          className="accordionStyle"
            flush
            alwaysOpen
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header>What are Tepary Beans?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How do Terapy Beans work?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Are Tepary Beans safe?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>How do I use Tepary Beans?</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
      </Container>
    </>
  );
}
