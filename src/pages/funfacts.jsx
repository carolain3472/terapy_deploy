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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceLaughBeam,
  faBowlFood,
  faHeartPulse,
  faBacterium,
  faWeightHanging,
  faDroplet,
  faPersonCane,
  faCircleExclamation,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";

export function FunFactsPage() {
  return (
    <>
      <NavbarComponent />
      <Container
        fluid
        style={{
          backgroundColor: "#678267",
          color: "#fff",
        }}
      >
        <Row className="text-center">
          <h2 style={{ marginTop: "15px" }}>Fun facts about Tepary Beans?</h2>
          <Col xs={12} md={10} lg={8} xl={6} xxl={4} className="col-init">
            <Card className="card-init" style={{marginTop:"35px"}}>
              <Card.Body>
                <FontAwesomeIcon
                  icon={faFaceLaughBeam}
                  size="2xl"
                  style={{ color: "#025201" }}
                />
                <Card.Title> Beans Boost Mood </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Beans are rich in tryptophan, which helps the body produce
                  serotonin, the "feel-good" neurotransmitter. Incorporating
                  beans into your diet can naturally improve your mood.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={10} lg={8} xl={6} xxl={4} className="col-init">
            <Card className="card-init" style={{marginTop:"35px"}}>
              <Card.Body>
                <FontAwesomeIcon
                  icon={faBowlFood}
                  size="2xl"
                  style={{ color: "#025201" }}
                />
                <Card.Title> Beans Are a Superfood </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Beans are packed with fiber, protein, complex carbohydrates
                  and a variety of vitamins and minerals. They're considered a
                  nutritional powerhoues and a key component of a healthy diet.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={10} lg={8} xl={6} xxl={4} className="col-init">
            <Card className="card-init" style={{marginTop:"35px"}}>
              <Card.Body>
                <FontAwesomeIcon
                  icon={faHeartPulse}
                  size="2xl"
                  style={{ color: "#025201" }}
                />
                <Card.Title> Beans Improve Heart Health </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  The soluble fiber in bean helps lower cholesterol levels and
                  reduce the risk of heart disease. Incorporating beans into
                  your diet can significally improve your cardiovascular health.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={10} lg={8} xl={6} xxl={4} className="col-init">
            <Card className="card-init" style={{marginTop:"35px"}}>
              <Card.Body>
                <FontAwesomeIcon
                  icon={faBacterium}
                  size="2xl"
                  style={{ color: "#025201" }}
                />
                <Card.Title> Beans Promote Gut Health </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  The fiber and prebiotics in beans feed the beneficial bacteria
                  in your gut, promoting a healthy microbiome. A healthy gut can
                  improve digestion, boost immunity and even enhance mental
                  well-being.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={10} lg={8} xl={6} xxl={4} className="col-init">
            <Card className="card-init" style={{marginTop:"35px"}}>
              <Card.Body>
                <FontAwesomeIcon
                  icon={faWeightHanging}
                  size="2xl"
                  style={{ color: "#025201" }}
                />
                <Card.Title> Beans Aid Wight Management </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  The fiber and protein in beans help you feel full and
                  satisfied, making them a great addiition to a weight-loss or
                  weight-management diet. Incorporating beans can help you eat
                  less and maintain a healthy weight.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={10} lg={8} xl={6} xxl={4} className="col-init">
            <Card className="card-init" style={{marginTop:"35px"}}>
              <Card.Body>
                <FontAwesomeIcon
                  icon={faDroplet}
                  size="2xl"
                  style={{ color: "#025201" }}
                />
                <Card.Title> Beans Regulate Blood sugar </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  The complex carbohydrates and fiber in beans help slow the
                  absortion of glucose, making them a great choice for people
                  with diabetes or those looking to maintain healthy blood sugar
                  levels.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={10} lg={8} xl={6} xxl={4} className="col-init">
            <Card className="card-init" style={{marginTop:"35px"}}>
              <Card.Body>
                <FontAwesomeIcon
                  icon={faPersonCane}
                  size="2xl"
                  style={{ color: "#025201" }}
                />
                <Card.Title> Ancient Origins </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Tepary beans are one of the oldest cultivated crops in North
                  America, dating back over 4,000 years. They were a staple food
                  for Indigenous peoples in the arid regions of the southwestern
                  United States and northern Mexico, prized for their ability to
                  thrive in harsh, dry climates.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={10} lg={8} xl={6} xxl={4} className="col-init">
            <Card className="card-init" style={{marginTop:"35px"}}>
              <Card.Body>
                <FontAwesomeIcon
                  icon={faCircleExclamation}
                  size="2xl"
                  style={{ color: "#025201" }}
                />
                <Card.Title> Survival Mode </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Tepary beans are known for their unique ability to enter a
                  "survival mode" during extreme drought. When water is scarce,
                  they can pause their growth and wait for better conditions,
                  resuming once they receive enough moisture. This makes them
                  one of the most drought-tolerant legumes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={10} lg={8} xl={6} xxl={4} className="col-init">
            <Card className="card-init" style={{marginTop:"35px"}}>
              <Card.Body>
                <FontAwesomeIcon
                  icon={faListCheck}
                  size="2xl"
                  style={{ color: "#025201" }}
                />
                <Card.Title> Deliciously Diverse </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Tepary beans come in a variety of colors, including white,
                  brown, tan, and even speckled. Each color has its own distinct
                  flavor, ranging from mildly sweet to slightly nutty, making
                  them versatile for different dishes, from soups and stews to
                  salads and dips.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
