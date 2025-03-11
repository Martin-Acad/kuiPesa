import React from "react";
import { Container, Row, Col } from "reactstrap";

import CommonSection from "@/components/UI/CommonSection";
import Helmet from "@/components/Helmet/Helmet";
import AboutSection from "@/components/UI/AboutSection";
import BecomeDriverSection from "@/components/UI/BecomeDriverSection";

import driveImg from "@/assets/about.jpg";
import OurMembers from "@/components/UI/OurMembers";
import "@/styles/about.css";
import Header from "@/Components/UI/Header";
import { Link } from "@inertiajs/react";
import Footer from "@/Components/UI/footer";

const About = () => {
  return (
    <Helmet title="About">

      <Header />

      <CommonSection title="À propos" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  Un service de livraison rapide, fiable et sécurisé
                </h2>

                <p className="section__description">
                  Chez <strong>Kui-Pesa</strong>, nous nous engageons à vous offrir des solutions de transport 
                  rapides et efficaces. Que ce soit pour la livraison de vos <strong>colis</strong>, 
                  <strong>repas</strong> ou <strong>autres marchandises</strong>, notre équipe assure un service 
                  sécurisé et ponctuel.
                </p>

                <p className="section__description">
                  Notre objectif est de <strong>révolutionner la logistique urbaine</strong> en proposant 
                  un service flexible et accessible à tous. Avec notre réseau de livreurs expérimentés, 
                  bénéficiez d’une livraison à la demande adaptée à vos besoins.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-1">
                  {/* <span className="fs-4">
                    
                  </span> */}

                  <div>
                    <h6 className="section__subtitle"><Link href="/contact">Besoin d'aide ?</Link></h6>
                    {/* <h6><i class="ri-phone-line"> +242 050199119</i></h6> */}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Notre Equipes</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
      
      <Footer />

    </Helmet>
  );
};

export default About;
