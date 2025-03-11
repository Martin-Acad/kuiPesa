import React from "react";
import { Container, Row, Col } from "reactstrap";
import "@/styles/about-section.css";
import aboutImg from "@/assets/motos.jpg";

const AboutSection = ({ aboutClass }) => {
  return (
     <section
            className="about__section"
            style={
              aboutClass === "aboutPage"
                ? { marginTop: "0px" }
                : { marginTop: "280px" }
            }
          >
            <Container>
              <Row>
                <Col lg="6" md="6">
                  <div className="about__section-content">
                    <h4 className="section__subtitle">Qui sommes-nous ?</h4>
                    <h2 className="section__title">
                      Kui-Pesa, une société spécialisée dans le transport de petits colis et
                      repas.
                    </h2>
                    <p className="section__description">
                      Nous offrons des services de transport rapide, fiable et sécurisé,
                      en utilisant des motos pour la livraison de colis, de repas et d'autres petites marchandises.
                      <br />
                      Notre objectif est de devenir un acteur incontournable dans le domaine de la
                      logistique urbaine, tout en garantissant une satisfaction client optimale.
                    </p>
    
                    <div className="about__section-item d-flex align-items-center">
                      <p className="section__description d-flex align-items-center gap-2">
                        <i className="ri-checkbox-circle-line"></i> Du lundi au samedi.
                      </p>
    
                      <p className="section__description d-flex align-items-center gap-2">
                        <i className="ri-checkbox-circle-line"></i> De 9h00 à 17h30.
                      </p>
                    </div>
    
                  </div>
                </Col>
    
                <Col lg="6" md="6">
                  <div className="about__img">
                    <img src={aboutImg} alt="" className="w-100" />
                  </div>
                </Col>
              </Row>
            </Container>
        </section>
  );
};

export default AboutSection;
