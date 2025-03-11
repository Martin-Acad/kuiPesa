import React from "react";
import { Link } from "@inertiajs/react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "@/components/Helmet/Helmet";
import CommonSection from "@/components/UI/CommonSection";

import "../styles/contact.css";
import Header from "@/Components/UI/Header";
import Footer from "@/Components/UI/footer";

const socialLinks = [
  {
    url: "https://www.facebook.com/profile.php?id=61573642883535",
    icon: "ri-facebook-line",
  },
  {
    url: "https://wa.me/242050199119",
    icon: "ri-whatsapp-line",
  },
  // "https://wa.me/242050199119"
  // {
  //   url: "#",
  //   icon: "ri-instagram-line",
  // },
  // {
  //   url: "#",
  //   icon: "ri-linkedin-line",
  // },
  // {
  //   url: "#",
  //   icon: "ri-twitter-line",
  // },
];

const Contact = () => {
  return (
    <Helmet title="Contact">
      <Header/>
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Contactez-nous</h6>

              <Form>
                <FormGroup className="contact__form">
                  <Input placeholder="Votre nom" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="E-mail" type="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit">
                  Envoyer um message
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Nos Coordonnées</h6>
                <p className="section__description mb-0">
                  Rond-point Mazala, Devant l'église Feu d'Horeb
                </p>
                <div className=" d-flex align-items-center gap-2">
                <i className="ri-phone-fill"></i>
                  <p className="section__description mb-0">(+242) 064433897 / 050199119</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <i className="ri-mail-fill"></i>
                  <p className="section__description mb-0">kui-pes@gmail.com</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <i className="ri-whatsapp-line"></i>
                  <p className="section__description mb-0">+242 050199119</p>
                </div>

                <h6 className="fw-bold mt-4">Suivez-nous</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                  <a href={item.url} key={index} className="social__link-icon"
                     target="_blank" rel="noopener noreferrer">
                    <i className={item.icon}></i>
                  </a>
                  
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer/>
    </Helmet>
  );
};

export default Contact;
