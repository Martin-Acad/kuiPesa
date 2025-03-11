import React, { useState, useEffect } from "react";
import "@/styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";

const BecomeDriverSection = () => {
  const images = [
    new URL("@/assets/drive 1.jpg", import.meta.url).href,
    new URL("@/assets/drive 2.jpg", import.meta.url).href,
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change toutes les 5 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="become__driver">
      <Container>
        <Row className="d-flex align-items-center flex-wrap"> {/* Ajout de flexbox */}
          {/* Col image */}
          <Col lg="6" md="6" sm="12" className="become__driver-img">
              <div className="img-diver"
               style={{
                backgroundImage: `url(${images[currentImage]})`,
                transition: "background-image 2s ease-in-out",
              }}
              > </div>
          </Col>

          {/* Col texte */}
          <Col lg="6" md="6" sm="12" className="become__driver-text">
            <h2 className="section__title become__driver-title">
              Voulez-vous faire partie de nos précieux abonnés ? Alors, n'hésitez pas !
            </h2>

            <button className="btn become__driver-btn mt-4">Abonnez-vous</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
