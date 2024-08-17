import { NavbarComponent } from "../components/Navbar";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/about_style.css";
export function AboutPage() {
  const navigate = useNavigate();

  const handleEventClick = () => {
    navigate("/info");
  };

  const handleEventClickInvolved = () => {
    navigate("/about");
  };

  return (
    <>
      <NavbarComponent />
      <Container
        fluid
        style={{
          width: "100vw",
        }}
      >
        <Row
          style={{
            color: "#ffffff",
          }}
          className="gradient-bg-about"
        >
          <Col className="padding-row">
            {/* La primera columna con contenido justificado a la izquierda */}
            <h1
              style={{
                marginBottom: "1rem",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Tepary Beans: Transforming <br /> Lives through Holistic Care
            </h1>
            <p
              style={{
                marginBottom: "1rem",
                textAlign: "left",
                fontSize: "1.35rem",
              }}
            >
              Discover how our innovative project is empowering individuals and{" "}
              <br /> strengthening communities through the power of tepary
              beans.
            </p>
            <div style={{ textAlign: "left" }}>
              <Button
                onClick={handleEventClick}
                variant="light"
                className="custom-button2"
                style={{ marginRight: "10px" }}
              >
                Learn more
              </Button>
              <Button
                variant="light"
                className="custom-button"
                onClick={handleEventClickInvolved}
              >
                Get Involved
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="text-center" style={{ marginTop: "20px" }}>
          <Col
            className="px-5 pt-5"
            style={{ borderBottom: " 0.5px dashed gray" }}
          >
            <h1>
              <b>The Tepary Beans Project</b>
            </h1>
            <div style={{ marginTop: "15px", textAlign: "center" }}>
              <p>
                Our innovative project harnesses the power of tepary beans to
                provide holistic care and <br /> support to individuals in need.
                By combining the therapeutic properties of beans with <br />
                evidence-based practices, we are transforming lives and
                strengthening communities.
              </p>
              <p>
                Tepary beans are a unique blend of legumes, herbs and essential
                oils that have been carefully curated to
                <br /> promote emotional well-being, stress relief and overall
                mental health. Through our innovative approach, we <br />
                harness the therapeutic properties of these beans to provide a
                holistic solution for individuals in need.
              </p>
            </div>
          </Col>

          <Col
            className="px-5 pt-5"
            style={{ borderBottom: " 0.5px dashed gray" }}
          >
            <h1>
              <b>Addressing the problem</b>
            </h1>
            <div
              style={{
                marginTop: "15px",
                textAlign: "center",
                fontSize: "1.2",
              }}
            >
              <p>
                In our communities, we've witnessed the devastating impact of
                mental health challenges, often exacerbated by limited access to
                affordable and effective care. The <b>Tepabary Beans Project</b>
                aims to bridge this gap, providing a unique and accessible
                solution to those in need.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="text-center" style={{ marginTop: "50px" }}>
          <Col style={{ borderBottom: " 0.5px dashed gray" }}>
            <h2>
              <b>Transforming Lives, Strengthening Communities</b>
            </h2>

            <p style={{ marginTop: "20px" }}>
              The <b>Tepabary Beans Project</b> has had a profound impact on the
              individuals and communities we serve.
              <br /> By providing a holistic approach to mental health and
              well-being, we've witnessed remarkable <br />
              transformations and a strengthening of the social fabric within
              our local neighborhoods.
            </p>
          </Col>
          <Col style={{ borderBottom: " 0.5px dashed gray" }}>
            <h2>
              <b>Empowering Individuals</b>
            </h2>

            <p style={{ marginTop: "20px" }}>
              Through our <b>Tepabary Beans Program</b>, we've seen individuals
              regain a sense of purpose, develop healthier
              <br /> coping mechanisms, and forge stronger connections within
              their communities. By addressing mental health
              <br /> holistically, we're not only improving individual well-beig
              but also strengthening the social fabric
              <br /> of the neighborhoods we serve.
            </p>
          </Col>
        </Row>
        <Row
          style={{ marginTop: "50px", textAlign: "left" }}
          className="px-5 pt-5"
        >
          <h1>
            <b>Our Innovative Solutions</b>
          </h1>
          <p style={{ fontSize: "1.2em" }}>
            The <b>Tepabary Beans Project</b> has develop a comprehensive
            approach to addressing mental health challenges, leveraging the
            power of Tepary beans and evidence-based practices to create lasting
            change.
          </p>
          <Col
            style={{
              marginTop: "50px",
              textAlign: "left",
              paddingLeft: "50px",
              paddingRight: "100px",
            }}
          >
            <div>
              <h3>
                <b>Holistic Tepary Beans Workshop</b>
              </h3>
              <p style={{ paddingRight: "70px", marginTop: "25px" }}>
                Our <b>Tepary Beans Workshop</b> provide a safe abd nurturing
                environment where participants can learn about therapeutic
                properties of beans, engage in mindfulness exercises, and
                explore various techniques for incorporating tepary beans into
                their daily lives.
              </p>
            </div>
            <div>
              <h3 style={{ marginTop: "45px" }}>
                <b>Affordable Tepary Beans Kits</b>
              </h3>
              <p style={{ paddingRight: "70px", marginTop: "25px" }}>
                To ensure accessibility, we offer affordable
                <b>Tepary Beans Kits</b> that include a curated selection of
                beans, herbs, and essential oils, along with detailed
                instructions on how to incorporate them into daily self-care
                routines.
              </p>
            </div>
          </Col>
          <Col
            style={{
              marginTop: "50px",
              textAlign: "left",
              paddingLeft: "50px",
              paddingRight: "100px",
            }}
          >
            <div>
              <h3>
                <b>Community-Based Support Groups</b>
              </h3>
              <p style={{ paddingRight: "70px", marginTop: "25px" }}>
                In addition to our workshop, we've established a network of
                <b>Community-based support groups</b> where individuals can
                connect, share their experiences, and receive peer-to-peer
                support while exploring the benefits of Tepary Beans.
              </p>
            </div>
            <div>
              <h3 style={{ marginTop: "45px" }}>
                <b>Collaborative Partnerships</b>
              </h3>
              <p style={{ paddingRight: "70px", marginTop: "25px" }}>
                We've forge partnerships with local healthcare providers,
                community organizations, and social service agencies to
                integrate the Tepary Beans Project into a comprehensive approach
                to mental health and well-being.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
