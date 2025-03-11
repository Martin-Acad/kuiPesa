import React, { useRef } from "react";
import Slider from "react-slick";
import { Link, usePage } from "@inertiajs/react";
import { Container, Row, Col, Form, FormGroup, ListGroup, ListGroupItem  } from "reactstrap";
import "leaflet/dist/leaflet.css";


import Helmet from "@/Components/Helmet/Helmet";
import Header from "@/Components/UI/Header";

import AboutSection from "@/Components/UI/AboutSection";
import BecomeDriverSection from "@/Components/UI/BecomeDriverSection";
import Map from "@/Components/UI/Brazzavillemap";

import servicesData from "@/assets/data/serviceData";


import "@/styles/hero-slider.css";
import "@/styles/header.css";
import "@/styles/find-car-form.css";

import "@/styles/services-list.css";

import "@/styles/testimonial.css";


import ava01 from "@/assets/all-images/ava-1.jpg";
import ava02 from "@/assets/all-images/ava-2.jpg";
import ava03 from "@/assets/all-images/ava-3.jpg";
import ava04 from "@/assets/all-images/ava-4.jpg";
import Footer from "@/Components/UI/footer";





const Home = () => {

 

  const date = new Date();
  const year = date.getFullYear();

  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  // const Testimonialsettings = {
  //   dots: true,
  //   infinite: true,
  //   autoplay: true,
  //   speed: 1000,
  //   swipeToSlide: true,
  //   autoplaySpeed: 2000,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 576,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <Helmet title="Home" >

    
        <Header />

      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
       
        <Slider {...settings} className="hero__slider">

          <div className="slider__item slider__item-01 mt0">
            <Container>
            <div className="slider__content">

              <h1 className="text-light mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Kui-Pesa</h1>

              <h2 className="text-light mb-4">Recevez vos commandes en toute sérénité et en un temps record</h2>
              <h4 className="text-light mb-3">À partir de 700 CFA seulement</h4>
              <button className="btn reserve__btn mt-4">
                <Link href="/cars">Télécharger l'application</Link>
              </button>
            </div>
            </Container>
          </div>

          {/* <div className="slider__item slider__item-02 mt0">
            <Container>
           <div className="slider__content">
              
              <h1 className="text-light mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Kui-Pesa</h1>

              <h2 className="text-light mb-4">Recevez vos colis et repas dans les plus brefs délais</h2>
              <h4 className="text-light mb-3">À partir de 700 CFA seulement</h4>
              <button className="btn reserve__btn mt-4">
                <Link href="/cars">Réservez maintenant</Link>
              </button>
            </div>
            </Container>
          </div> */}

          <div className="slider__item slider__item-03 mt0">
            <Container>
            <div className="slider__content">
              
              <h1 className="text-light mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Kui-Pesa</h1>

              <h2 className="text-light mb-4">Un service de livraison sur mesure</h2>
              <h4 className="text-light mb-3">À partir de 700 CFA seulement</h4>
              <button className="btn reserve__btn mt-4">
                <Link href="/cars">Télécharger l'application</Link>
              </button>
            </div>

            </Container>
          </div>
        </Slider>

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Réservez votre livraison ici</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <Form className="form">
                  <div className=" d-flex align-items-center justify-content-between flex-wrap">
                    <FormGroup className="form__group">
                      <input type="text" placeholder="Adresse de Récuperation" required />
                    </FormGroup>

                    <FormGroup className="form__group">
                      <input type="text" placeholder="Adresse de destination" required />
                    </FormGroup>

                    <FormGroup className="form__group">
                      <input type="date" placeholder="Journey date" required />
                    </FormGroup>

                    <FormGroup className="form__group">
                      <input type="number" placeholder="Téléphone" required />
                    </FormGroup>

                    <FormGroup className="select__group">
                      <label for="comment">Plus d'information :</label>
                      <input type="textarea" placeholder="Écrivez les précisions ici..." required />
                    </FormGroup>
                   

                    <FormGroup className="form__group">
                      <button className="btn find__car-btn">Réserver</button>
                    </FormGroup>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </section>


      {/* =========== about section ================ */}
      
      <AboutSection />

      {/* ========== services section ============ */}
         
      <section id="services">
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Nos services</h6>
              <h2 className="section__title">Nous offrons</h2>
            </Col>

            
            <Col lg="4" md="4" sm="6" className="mb-3">
              <div className="service__item">
                <span className="mb-3 d-inline-block">
                  <i className="fas fa-box" />
                </span>
                <h6>Livraison de colis</h6>
                <p className="section__description">
                  Nous collaborons avec des e-commerces pour assurer des livraisons 
                  rapides, fiables et sécurisées vers la destination de votre choix.
                </p>
              </div>
            </Col>

            <Col lg="4" md="4" sm="6" className="mb-3">
              <div className="service__item">
                <span className="mb-3 d-inline-block">
                  <i className="fas fa-hamburger" />
                </span>
                <h6>Livraison de repas</h6>
                <p className="section__description ">
                  Nous livrons des repas depuis des restaurants, petits commerces
                   et pour les entreprises qui souhaitent commander en groupe.
                </p>
              </div>
            </Col>

           
            <Col lg="4" md="4" sm="6" className="mb-3">
              <div className="service__item">
                <span className="mb-3 d-inline-block">
                  <i className="fas fa-motorcycle" />
                </span>
                <h6>Livreur personnel</h6>
                <p className="section__description ">
                  Nous mettons un livreur à votre disposition pour récupérer et livrer vos colis,
                  repas et autres marchandises en toute sécurité.
                </p>
              </div>
            </Col>

            
            <Col lg="4" md="4" sm="6" className="mb-3">
              <div className="service__item">
                <span className="mb-3 d-inline-block">
                  <i className="fas fa-handshake" />
                </span>
                <h6>Abonnements Pro & Particuliers</h6>
                <p className="section__description ">
                  Bénéficiez de tarifs réduits sur vos livraisons régulières. 
                  Idéal pour les entreprises, commerces et particuliers ayant des besoins fréquents.
                </p>
              </div>
            </Col>

            <Col lg="4" md="4" sm="6" className="mb-3">
              <div className="service__item">
                <span className="mb-3 d-inline-block">
                  <i className="fas fa-shopping-cart" />
                </span>
                <h6>Service Conciergerie</h6>
                <p className="section__description ">
                  Nous faisons vos courses pour vous : pharmacie, supermarché, pressing, etc.
                  Un gain de temps précieux pour votre quotidien.
                </p>
              </div>
            </Col>

    
            <Col lg="4" md="4" sm="6" className="mb-3">
              <div className="service__item">
                <span className="mb-3 d-inline-block">
                  <i className="fas fa-lock" />
                </span>
                <h6>Livraison sécurisée</h6>
                <p className="section__description ">
                  Un service spécial pour les objets de valeur : bijoux, documents,
                  téléphones. Livraison avec assurance et code de sécurité.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      {/* =========== car offer section ============= */}


      {/* =========== become a driver section ============ */}
 
        <BecomeDriverSection />

      {/* =========== testimonial section =========== */}
      {/* <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Nos clients disent</h6>
              <h2 className="section__title">Témoignages</h2>
            </Col>

            <Slider {...Testimonialsettings }>
              <div className="testimonial py-4 px-3">
                <p className="section__description">
                  "Un service rapide et efficace ! J’ai été agréablement surpris par la réactivité de Kui-Pesa. 
                  Mon colis est arrivé en parfait état et dans les délais annoncés. Je recommande vivement !"
                </p>

                <div className="mt-3 d-flex align-items-center gap-4">
                  <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

                  <div>
                    <h6 className="mb-0 mt-3">Sarah L.</h6>
                    <p className="section__description">Cliente satisfaite</p>
                  </div>
                </div>
              </div>

              <div className="testimonial py-4 px-3">
                <p className="section__description">
                  "Je fais appel à Kui-Pesa tous les jours pour la livraison des repas à mes clients, 
                  et je suis entièrement satisfait ! L’équipe est professionnelle et toujours ponctuelle."
                </p>

                <div className="mt-3 d-flex align-items-center gap-4">
                  <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

                  <div>
                    <h6 className="mb-0 mt-3">Michel T.</h6>
                    <p className="section__description">Gérant de restaurant</p>
                  </div>
                </div>
              </div>

              <div className="testimonial py-4 px-3">
                <p className="section__description">
                  "J'avais besoin d'un service de livraison fiable pour mes courses urgentes et Kui-Pesa a été la solution idéale. 
                  Une équipe courtoise et des délais respectés, que demander de plus ?"
                </p>

                <div className="mt-3 d-flex align-items-center gap-4">
                  <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

                  <div>
                    <h6 className="mb-0 mt-3">Fatou D.</h6>
                    <p className="section__description">Cliente fidèle</p>
                  </div>
                </div>
              </div>

              <div className="testimonial py-4 px-3">
                <p className="section__description">
                  "J'ai testé plusieurs services de livraison, mais aucun n'égale Kui-Pesa en termes de qualité et de professionnalisme. 
                  Un service client au top et des livreurs toujours disponibles."
                </p>

                <div className="mt-3 d-flex align-items-center gap-4">
                  <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

                  <div>
                    <h6 className="mb-0 mt-3">Hassan K.</h6>
                    <p className="section__description">Entrepreneur</p>
                  </div>
                </div>
              </div>
            </Slider>

          
          </Row>
        </Container>
      </section> */}

      {/* =============== blog section =========== */}
      <section id="tarifs">
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Zones & Tarifs</h6>
              <h2 className="section__title">voici nos zones de livraisons et leurs tarifs associés</h2>
            </Col>
          </Row>
          <Map />
          
        </Container>
      </section>

      <Footer />

    </Helmet>
  );
};

export default Home;
