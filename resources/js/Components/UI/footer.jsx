import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "@inertiajs/react";
import "@/styles/footer.css";

const quickLinks = [
  { path: "/home", display: "Accueil", icon: "ri-home-4-line" },
  { path: "/about", display: "À propos", icon: "ri-information-line" },
  { path: "/services", display: "Nos Services", icon: "ri-service-line" },
  { path: "/contact", display: "Contactez-nous", icon: "ri-contacts-line" },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* LOGO & DESCRIPTION */}
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link href="/home" className="d-flex align-items-center gap-2">
                  <img 
                    src={new URL("@/assets/LOGO KUI-PESA ee.png", import.meta.url).href} 
                    alt="Kui-Pesa Logo" 
                    className="responsive-img-f" 
                  />
                  <span>
                    Service de <br /> Livraison
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              <strong>Kui-Pesa</strong> est une plateforme de livraison rapide et sécurisée, spécialisée dans 
              le transport de colis et de repas. Nous mettons à votre disposition 
              un service fiable, accessible et efficace pour répondre à tous vos besoins de livraison.
            </p>
          </Col>

          {/* LIENS UTILES */}
          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Liens Utiles</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link href={item.path} className="d-flex align-items-center gap-2">
                      <i className={item.icon}></i> {item.display}
                    </Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          {/* CONTACTS */}
          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Contacts</h5>
              
              <p className="office__info">
                <i className="ri-phone-fill"></i> +242 064433897 / 050199119 
              </p>
              <p className="office__info">
                <i className="ri-mail-fill"></i> kui-pes@gmail.com
              </p>
              <p className="office__info">
                <i className="ri-whatsapp-line"></i> +242 050199119
              </p>
              <p className="office__info">
                <i className="ri-facebook-circle-line"></i> <a href="https://www.facebook.com/kui-pesa" target="_blank" rel="noopener noreferrer">Kui-Pesa</a>
              </p>
            </div>
          </Col>

          {/* NEWSLETTER */}
          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Téléchargez notre application</h5>
              <p className="section__description">
                Disponible sur les plateformes mobiles
              </p>

              <div className="app__links d-flex flex-column gap-3">
                {/* Lien vers Google Play */}
                <a 
                  href="" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Télécharger sur Google Play" 
                    className="store-badge"
                  />
                </a>

                {/* Lien vers App Store */}
                <a 
                  href="" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img 
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                    alt="Télécharger sur l'App Store" 
                    className="store-badge"
                  />
                </a>
              </div>
            </div>
          </Col>



          {/* COPYRIGHT */}
          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>2025 Développé par <strong>Martin Gouverneyre WAMBIS</strong>. Tous droits réservés à kui-Pesa.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
