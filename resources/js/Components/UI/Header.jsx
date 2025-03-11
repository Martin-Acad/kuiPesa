import React, { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, usePage } from "@inertiajs/react";
import "../../styles/header.css";

const navLinks = [
  { path: "/home", display: "Accueil" },
  { path: "/about", display: "À propos" },
  { path: "/services", display: "Services" },
  // { path: "#tarifs", display: "Tarifs" },
  { path: "/contacts", display: "Contacts" },
];

const Header = () => {

   const menuRef = useRef(null);
    const { url } = usePage();
    const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header" id="home">
              {/* ============ header top ============ */}
              <div className="header__top">
                <Container>
                  <Row>
                    <Col lg="6" md="6" sm="6">
                      <div className="header__top__left">
                        <span>besoin d'aide?</span>
                        <span className="header__top__help">
                          <i className="ri-phone-fill"></i> +242 064433897 / 050199119
                        </span>
                      </div>
                    </Col>
        
                    <Col lg="6" md="6" sm="6">
                      <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                        <Link href="/login" className=" d-flex align-items-center gap-1">
                          <i className="ri-login-circle-line"></i> Se connecter
                        </Link>
        
                        <Link href="register" className=" d-flex align-items-center gap-1">
                          <i className="ri-user-line"></i> S'inscrire
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
      
        
              {/* ========== main navigation =========== */}
        
              <div className="main__navbar">
                <Container>
                  <div className="navigation__wrapper d-flex align-items-center justify-content-between">
    
                   <img src={new URL("@/assets/KUI-PESA-L.png", import.meta.url).href} alt="ok" className="responsive-img" />
    
                    <span className="mobile__menu">
                      <i className="ri-menu-line" onClick={toggleMenu}></i>
                    </span>
    
    
                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                      <div className="menu">
                      {navLinks.map((item, index) => (
                          <Link
                              key={index}
                              href={item.path}
                              className={`nav__item ${url.startsWith(item.path) ? "nav__active" : ""}`} // ✅ Ajoute "nav__active" si l'URL commence par `item.path`
                          >
                              {item.display}
                          </Link>
                      ))}
                      </div>
                    </div>
        
                    {/* <div className="nav__right">
                      <div className="search__box">
                        <input type="text" placeholder="Search" />
                        <span>
                          <i className="ri-search-line"></i>
                        </span>
                      </div>
                    </div> */}
                  </div>
                </Container>
              </div>
            </header>
  );
};

export default Header;
