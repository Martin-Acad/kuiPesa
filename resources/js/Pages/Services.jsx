import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import CommonSection from "@/components/UI/CommonSection";
import Header from "@/Components/UI/Header";
import Helmet from "@/Components/Helmet/Helmet";
import Footer from "@/Components/UI/footer";
import BecomeDriverSection from "@/components/UI/BecomeDriverSection";

import "@/styles/about.css";
import "@/styles/services.css"; // Ajoute ce fichier pour le style
import OurMembers from "@/Components/UI/OurMembers";

import colis from "@/assets/colis.jpg";
import repas from "@/assets/repas.jpg";
import personnel from "@/assets/personel.jpg";
import abonne from "@/assets/abonne.jpg";
import canci from "@/assets/canci.jpg";
import securite from "@/assets/drive 1.jpg";


const services = [
  {
    id: 1,
    title: "Livraison de colis",
    description:
      "Nous collaborons avec des e-commerces, entreprises et particuliers pour assurer des livraisons rapides, fiables et sécurisées. "+
      "Que ce soit un petit paquet ou un document important, nous garantissons un acheminement fluide vers la destination de votre choix."+
      " Profitez d'un suivi en temps réel, d'une livraison express ou programmée selon vos besoins.",
    icon: "fas fa-box",
    image: colis, // Remplace avec une vraie image
  },
  {
    id: 2,
    title: "Livraison de repas",
    description:
      "Nous livrons des repas en partenariat avec des restaurants, commerces alimentaires et entreprises. Que ce soit un repas pour une personne ou une commande groupée, nous assurons une livraison rapide et sécurisée avec un emballage soigné pour maintenir la fraîcheur et la température des plats. Optez pour la livraison sans contact et suivez votre commande en direct.",
    icon: "fas fa-hamburger",
    image: repas,
  },
  {
    id: 3,
    title: "Livreur personnel",
    description:
      "Besoin d'un service de livraison flexible et sur mesure ? Nous mettons à votre disposition un livreur personnel qui s'occupe de vos courses et livraisons en fonction de votre emploi du temps. Idéal pour les professionnels et particuliers cherchant une solution rapide et sécurisée pour le transport de documents, repas, ou autres colis sensibles.",
    icon: "fas fa-motorcycle",
    image: personnel,
  },
  {
    id: 4,
    title: "Abonnements Pro & Particuliers",
    description:
      "Simplifiez la gestion de vos envois et bénéficiez de réductions avec nos abonnements adaptés aux professionnels et particuliers. Profitez d'un service prioritaire, d'une gestion simplifiée des paiements et d'un suivi détaillé des envois. Un choix idéal pour les entreprises ayant des besoins fréquents en logistique ou pour les particuliers souhaitant une solution économique.",
    icon: "fas fa-handshake",
    image: abonne,
  },
  {
    id: 5,
    title: "Service Conciergerie",
    description:
      "Manque de temps pour vos courses ? Notre service conciergerie s'occupe de tout pour vous : récupération de médicaments en pharmacie, achats en supermarché, dépôt et retrait au pressing, et bien plus encore. Confiez-nous vos tâches quotidiennes et gagnez du temps pour ce qui compte vraiment.",
    icon: "fas fa-shopping-cart",
    image: canci,
  },
  {
    id: 6,
    title: "Livraison sécurisée",
    description:
      "Un service spécialement conçu pour le transport d'objets de valeur tels que bijoux, documents confidentiels, appareils électroniques, et autres biens précieux. Nous mettons en place des mesures de sécurité strictes incluant un suivi GPS en temps réel, une vérification d’identité du destinataire, et une assurance sur chaque envoi.",
    icon: "fas fa-lock",
    image: securite,
  },
];


const Services = () => {
  const [selectedService, setSelectedService] = useState(services[0]); // Par défaut, sélectionne le premier service

  return (

    <Helmet title="Services" >

    
      <Header />

      <CommonSection title="Services" />

      <section className="services-section">
        <Container>
          <Row>

            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Nos services</h6>
              <h2 className="section__title">Nous offrons</h2>
            </Col>


            {/* Zone d'affichage du service sélectionné */}
            <Col lg="9" md="8" className="service-display ">
              <div className="service-content h-100">
                <div className="service-text h-100">
                  <h2>{selectedService.title}</h2>
                  <p>{selectedService.description}</p>
                </div>
                <div className="service-image h-100">
                  <img src={new URL(selectedService.image, import.meta.url).href} alt={selectedService.title} />
                </div>
              </div>
            </Col>


            <Col lg="3" md="4" className="service-list">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`service-item ${selectedService.id === service.id ? "active" : ""}`}
                  onClick={() => setSelectedService(service)}
                >
                  <span>
                    <i className={service.icon} />
                  </span>
                  <h6 className="text-left">{service.title}</h6>
                </div>
              ))}
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

export default Services;
