import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/image1.png";
import projImg2 from "../assets/img/image2.png";
import projImg3 from "../assets/img/image3.png";
import projImg4 from "../assets/img/image4.png";
import projImg5 from "../assets/img/image5.png";
import projImg6 from "../assets/img/image6.png";
import projImg11 from "../assets/img/image11.png";
import projImg12 from "../assets/img/image12.png";
import projImg15 from "../assets/img/image15.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsMeet = [
    {
      title: "",
      description: "Kampüs Etkinlikleri Bir Arada",
      imgUrl: projImg1,
    },
    {
      title: "",
      description: "İstersen Eşleştiğin Kişileri Davet Et",
      imgUrl: projImg2,
    },
    {
      title: "",
      description: "Kolayca Etkinliklere Kayıt Ol",
      imgUrl: projImg3,
    }
  ];

  const projectsInvite = [
    {
      title: "",
      description: "İster Etkinlik Ekranından",
      imgUrl: projImg2,
    },
    {
      title: "",
      description: "İster Sohbet Ekranından",
      imgUrl: projImg6,
    },
    {
      title: "",
      description: "Eşleştiğin Kişileri Etkinliklere Davet Et",
      imgUrl: projImg5,
    }
  ];

  const projectsMatch = [
    {
      title: "",
      description: "Arkadaş Bul",
      imgUrl: projImg15,
    },
    {
      title: "",
      description: "Sohbet Et",
      imgUrl: projImg4,
    },
    {
      title: "",
      description: "Dating Mod",
      imgUrl: projImg12,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Özellikler</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="meet">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="meet">Etkinlikler</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="invite">Davet Et</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="match">Eşleş</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="meet">
                      <Row>
                        {
                          projectsMeet.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="invite">
                    <Row>
                        {
                          projectsInvite.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="match">
                    <Row>
                        {
                          projectsMatch.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
