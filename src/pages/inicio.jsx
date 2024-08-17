import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarComponent } from "../components/Navbar";
import {
  Container,
  Col,
  Row,
  Button,
  Carousel,
  Image,
  Card,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {} from "@fortawesome/free-solid-svg-icons";
import "../css/initial_style.css";

export function InicioPage() {
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
          color: "#025201",
        }}
      >
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-start padding-row">
            {/* La primera columna con contenido justificado a la izquierda */}
            <h2 style={{ marginBottom: "1rem" }}>A Seed to Save the World!</h2>
            <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
              The Tepary bean is not only an unmatched source of nutrition but
              also an innovative solution to global food challenges. We are
              revolutionizing food security in vulnerable communities with our
              innovative Tepary Bean Kits. Each kit is designed to empower
              communities, improve nutrition, and promote food self-sufficiency.
            </p>
            {/* <Button
              variant="light"
              className="custom-button"
              onClick={handleEventClick}
            >
              Learn more
            </Button> */}
          </Col>
          <Col xs={12} md={6} className="text-center">
            {/* La segunda columna con contenido centrado */}
            <Carousel className="carousel-style">
              <Carousel.Item>
                <Image
                  rounded
                  className="d-block w-100 carousel-image"
                  src="beans/tepary1.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  rounded
                  className="d-block w-100 carousel-image"
                  src="beans/tepary2.webp"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  rounded
                  className="d-block w-100 carousel-image"
                  src="beans/tepary3.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        style={{
          backgroundColor: "#678267",
          color: "#fff",
        }}
      >
        <Row className="text-center">
          <a
            style={{
              color: "#ffff",
              marginTop: "20px",
            }}
          >
            Tepary Bean Benefits
          </a>
          <h2 style={{ marginTop: "5px" }}>Why Tepary Beans?</h2>
          <p style={{ padding: "20px" }}>
            Tepary beans are an ancient, drought-resistant crop that offer a
            range of nutritional and environmental benefits. Discover why they
            are a sustainable choice for your diet and the planet.
          </p>
          <Col xs={12} md={10} lg={8} xl={6} xxl={4} className="col-init">
            <Card className="card-init">
              <a
                style={{
                  color: "#025201",
                }}
              >
                Nutrient-Dense
              </a>
              <Card.Body>
                <Card.Title> High in Protein and Fiber </Card.Title>
                <Card.Text style={{textAlign:"justify"}}>
                  The Tepary bean is an exceptional source of nutrients,
                  standing out for its high protein content (up to 30%), making
                  it an ideal choice for those seeking a plant-based protein
                  alternative. It is also notable for its high dietary fiber
                  content, which contributes to digestive health and helps
                  regulate blood sugar levels. Additionally, the Tepary bean is
                  loaded with essential micronutrients such as iron, magnesium,
                  zinc, and folic acid.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={10} lg={8} xl={6} xxl={4} className="col-init">
            <Card className="card-init">
              <a
                style={{
                  color: "#025201",
                }}
              >
                Drought-Resistant
              </a>
              <Card.Body>
                <Card.Title> Unique Adaptability </Card.Title>
                <Card.Text style={{textAlign:"justify"}}>
                  The Tepary bean has evolved to thrive in arid climates and
                  poor soils, adapting to extreme conditions with remarkable
                  efficiency. Its ability to tolerate drought is particularly
                  important in regions with limited water resources.
                  Furthermore, its quick growing cycle (around 90 to 120 days)
                  allows for faster harvests, which is a significant advantage
                  for farmers in challenging climates.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={10} lg={8} xl={6} xxl={4} className="col-init">
            <Card className="card-init">
              <a
                style={{
                  color: "#025201",
                }}
              >
                Environmentally Friendly
              </a>
              <Card.Body>
                <Card.Title> Environmental Sustainability </Card.Title>
                <Card.Text style={{textAlign:"justify"}}>
                  The Tepary bean stands out for its low environmental impact.
                  Its cultivation requires significantly less water and
                  fertilizers compared to other legumes, contributing to the
                  conservation of natural resources. According to an analysis in
                  the Agricultural Systems Journal, the Tepary bean proves to be
                  more efficient in terms of water and soil nutrient use, thanks
                  to its ability to fix nitrogen in the soil, which enhances
                  fertility without the need for additional fertilizers.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={10} lg={8} xl={6} xxl={4} className="col-init">
            <Card className="card-init">
              <a
                style={{
                  color: "#025201",
                }}
              >
                Economic
              </a>
              <Card.Body>
                <Card.Title> Economic Benefits </Card.Title>
                <Card.Text style={{textAlign:"justify"}}>
                The Tepary bean offers significant economic advantages. Its resistance to diseases and pests reduces the need for pesticides and costly treatments, lowering production costs. Moreover, its adaptability and resilience allow farmers to achieve successful harvests with less investment in inputs. The FAO (Food and Agriculture Organization of the United Nations) highlights that Tepary bean cultivation can improve food security and increase farmers' income, especially in developing regions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={10} lg={8} xl={6} xxl={4} className="col-init">
            <Card className="card-init">
              <a
                style={{
                  color: "#025201",
                }}
              >
               Culture
              </a>
              <Card.Body>
                <Card.Title> Cultural and Traditional Value </Card.Title>
                <Card.Text style={{textAlign:"justify"}}>
                  The Tepary bean holds significant cultural value in indigenous communities in the southwestern United States and Mexico. It has been cultivated for centuries and is an integral part of many culinary and cultural traditions. Its inclusion in the diet not only preserves cultural heritage but also promotes food biodiversity.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={10} lg={8} xl={6} xxl={4} className="col-init">
            <Card className="card-init">
              <a
                style={{
                  color: "#025201",
                }}
              >
                Food
              </a>
              <Card.Body>
                <Card.Title> Culinary Versatility </Card.Title>
                <Card.Text style={{textAlign:"justify"}}>
                The Tepary bean is extremely versatile in the kitchen. Its mild flavor and ability to absorb flavors make it suitable for a wide range of recipes, from salads to soups and stews. Additionally, its firm texture and resistance to falling apart during cooking make it an ideal choice for dishes that require a legume that holds its shape.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={10} lg={8} xl={6} xxl={4} className="col-init">
            <Card className="card-init">
              <a
                style={{
                  color: "#025201",
                }}
              >
                Drought-Resistant
              </a>
              <Card.Body>
                <Card.Title> Resistance to Growing Conditions </Card.Title>
                <Card.Text style={{textAlign:"justify"}}>
                  The Tepary bean is known for its resistance to adverse conditions such as saline soils and extreme temperatures. This makes it a viable option for regions with specific agricultural challenges.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={10} lg={8} xl={6} xxl={4} className="col-init">
            <Card className="card-init">
              <a
                style={{
                  color: "#025201",
                }}
              >
                Drought-Resistant
              </a>
              <Card.Body>
                <Card.Title> Support for Low-Impact Agriculture </Card.Title>
                <Card.Text style={{textAlign:"justify"}}>
                  The cultivation of the Tepary bean promotes low-impact agricultural practices, reducing the need for heavy machinery and intensive tillage. This contributes to soil conservation and minimizes erosion.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={10} lg={8} xl={6} xxl={4} className="col-init">
            <Card className="card-init">
              <a
                style={{
                  color: "#025201",
                }}
              >
                Environmentally Friendly
              </a>
              <Card.Body>
                <Card.Title> Performance in Mixed Farming Systems </Card.Title>
                <Card.Text style={{textAlign:"justify"}}>
                The Tepary bean is highly compatible with mixed farming systems, making it an excellent choice for integrated agricultural practices. Its ability to grow well alongside other crops enhances field diversity and reduces the incidence of pests specific to monocultural crops. Additionally, planting Tepary beans in rotation with other crops improves soil health and reduces the need for chemical treatments.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} xl={3} className="mx-auto">
            {/* <Button
              variant="success"
              onClick={handleEventClickInvolved}
              style={{
                width: "100%",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              Get Involved
            </Button> */}
          </Col>
        </Row>
      </Container>
    </>
  );
}
