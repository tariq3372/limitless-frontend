import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main id="body-inner">
      <div id="page-transition">
        <div className="ptr-overlay"></div>
        <div className="ptr-preloader">
          <div className="ptr-prel-content">
            <img
              src="assets/img/logo-light.png"
              className="ptr-prel-image tt-logo-light"
              alt="Logo"
            />
          </div>
        </div>
      </div>

      <div id="magic-cursor">
        <div id="ball"></div>
      </div>

      <div className="bg-noise"></div>

      <div id="scroll-container">
        <header id="tt-header" className="tt-header-fixed">
          <div className="tt-header-inner">
            <div className="tt-header-col">
              <div className="tt-logo">
                <Link to={"/"}>
                  <img
                    src="assets/img/logo-light.png"
                    className="tt-logo-light magnetic-item"
                    alt="Logo"
                  />
                  <img
                    src="assets/img/logo-dark.png"
                    className="tt-logo-dark magnetic-item"
                    alt="Logo"
                  />
                </Link>
              </div>
            </div>

            <div className="tt-header-col">
              <div id="tt-ol-menu-toggle-btn-wrap">
                <div className="tt-ol-menu-toggle-btn-text">
                  <span className="text-menu" data-hover="Open">
                    Menu
                  </span>
                  <span className="text-close">Close</span>
                </div>
                <div className="tt-ol-menu-toggle-btn-holder">
                  <a href="#" className="tt-ol-menu-toggle-btn magnetic-item">
                    <span></span>
                  </a>
                </div>
              </div>
              <nav className="tt-overlay-menu tt-ol-menu-center tt-ol-menu-count">
                <div className="tt-ol-menu-holder">
                  <div className="tt-ol-menu-inner tt-wrap">
                    <div className="tt-ol-menu-content">
                      <ul className="tt-ol-menu-list">
                        <li className="tt-ol-submenu-wrap">
                          <div className="tt-ol-submenu-trigger">
                            <a href="#">Home</a>
                            <div className="tt-ol-submenu-caret-wrap">
                              <div className="tt-ol-submenu-caret magnetic-item"></div>
                            </div>
                          </div>
                          <div className="tt-ol-submenu">
                            <ul className="tt-ol-submenu-list">
                              <li>
                                <a href="landing-page-1.html">
                                  Landing Page v.1
                                </a>
                              </li>
                              <li>
                                <a href="landing-page-2.html">
                                  Landing Page v.2
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="tt-ol-submenu-wrap active">
                          <div className="tt-ol-submenu-trigger">
                            <a href="#">Portfolio</a>
                            <div className="tt-ol-submenu-caret-wrap">
                              <div className="tt-ol-submenu-caret magnetic-item"></div>
                            </div>
                          </div>
                          <div className="tt-ol-submenu">
                            <ul className="tt-ol-submenu-list">
                              <li className="tt-ol-submenu-wrap">
                                <div className="tt-ol-submenu-trigger">
                                  <a href="#" className="tt-ol-submenu-link">
                                    Portfolio List
                                  </a>
                                  <div className="tt-ol-submenu-caret-wrap">
                                    <div className="tt-ol-submenu-caret magnetic-item"></div>
                                  </div>
                                </div>
                                <div className="tt-ol-submenu">
                                  <ul className="tt-ol-submenu-list">
                                    <li>
                                      <a href="portfolio-list-classic.html">
                                        List Classic
                                      </a>
                                    </li>
                                    <li>
                                      <a href="portfolio-list-overlay.html">
                                        List Overlay
                                      </a>
                                    </li>
                                    <li>
                                      <a href="portfolio-list-compact.html">
                                        List Compact
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li className="tt-ol-submenu-wrap active">
                                <div className="tt-ol-submenu-trigger">
                                  <a href="#" className="tt-ol-submenu-link">
                                    Portfolio Grid
                                  </a>
                                  <div className="tt-ol-submenu-caret-wrap">
                                    <div className="tt-ol-submenu-caret magnetic-item"></div>
                                  </div>
                                </div>
                                <div className="tt-ol-submenu">
                                  <ul className="tt-ol-submenu-list">
                                    <li>
                                      <a href="portfolio-grid-creative-1.html">
                                        Grid Creative v.1
                                      </a>
                                    </li>
                                    <li>
                                      <a href="portfolio-grid-creative-2.html">
                                        Grid Creative v.2
                                      </a>
                                    </li>
                                    <li className="active">
                                      <a href="portfolio-grid-modern.html">
                                        Grid Modern
                                      </a>
                                    </li>
                                    <li>
                                      <a href="portfolio-grid-classic.html">
                                        Grid Classic
                                      </a>
                                    </li>
                                    <li>
                                      <a href="portfolio-grid-portrait-mode.html">
                                        Portrait Mode
                                      </a>
                                    </li>
                                    <li>
                                      <a href="portfolio-one-column.html">
                                        One Column
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li className="tt-ol-submenu-wrap">
                                <div className="tt-ol-submenu-trigger">
                                  <a href="#" className="tt-ol-submenu-link">
                                    Slider &amp; Carousel
                                  </a>
                                  <div className="tt-ol-submenu-caret-wrap">
                                    <div className="tt-ol-submenu-caret magnetic-item"></div>
                                  </div>
                                </div>
                                <div className="tt-ol-submenu">
                                  <ul className="tt-ol-submenu-list">
                                    <li>
                                      <a href="portfolio-fullscreen-slider.html">
                                        Fullscreen Slider
                                      </a>
                                    </li>
                                    <li>
                                      <a href="portfolio-carousel-overlay.html">
                                        Carousel Overlay
                                      </a>
                                    </li>
                                    <li>
                                      <a href="portfolio-carousel-center.html">
                                        Carousel Center
                                      </a>
                                    </li>
                                    <li>
                                      <a href="portfolio-hover-carousel.html">
                                        Hover Carousel
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li>
                                <a href="portfolio-interactive.html">
                                  Interactive
                                </a>
                              </li>
                              <li>
                                <a href="portfolio-interactive-compact.html">
                                  Interactive Compact
                                </a>
                              </li>
                              <li>
                                <a href="elements-classic-menu.html">
                                  Classic Menu
                                </a>
                              </li>
                              <li>
                                <a href="elements-classic-filter.html">
                                  Classic Filter
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="tt-ol-submenu-wrap">
                          <div className="tt-ol-submenu-trigger">
                            <a href="#">About</a>
                            <div className="tt-ol-submenu-caret-wrap">
                              <div className="tt-ol-submenu-caret magnetic-item"></div>
                            </div>
                          </div>
                          <div className="tt-ol-submenu">
                            <ul className="tt-ol-submenu-list">
                              <li>
                                <a href="about-us.html">About Us</a>
                              </li>
                              <li>
                                <a href="about-me.html">About Me</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="tt-ol-submenu-wrap">
                          <div className="tt-ol-submenu-trigger">
                            <a href="#">Blog</a>
                            <div className="tt-ol-submenu-caret-wrap">
                              <div className="tt-ol-submenu-caret magnetic-item"></div>
                            </div>
                          </div>
                          <div className="tt-ol-submenu">
                            <ul className="tt-ol-submenu-list">
                              <li className="tt-ol-submenu-wrap">
                                <div className="tt-ol-submenu-trigger">
                                  <a href="#" className="tt-ol-submenu-link">
                                    Blog List
                                  </a>
                                  <div className="tt-ol-submenu-caret-wrap">
                                    <div className="tt-ol-submenu-caret magnetic-item"></div>
                                  </div>
                                </div>
                                <div className="tt-ol-submenu">
                                  <ul className="tt-ol-submenu-list">
                                    <li>
                                      <a href="blog-interactive.html">
                                        Interactive List
                                      </a>
                                    </li>
                                    <li>
                                      <a href="blog-list.html">Compact List</a>
                                    </li>
                                    <li>
                                      <a href="blog-classic.html">
                                        Classic List
                                      </a>
                                    </li>
                                    <li>
                                      <a href="blog-classic-sidebar.html">
                                        Classic Sidebar
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li className="tt-ol-submenu-wrap">
                                <div className="tt-ol-submenu-trigger">
                                  <a href="#" className="tt-ol-submenu-link">
                                    Blog Post
                                  </a>
                                  <div className="tt-ol-submenu-caret-wrap">
                                    <div className="tt-ol-submenu-caret magnetic-item"></div>
                                  </div>
                                </div>
                                <div className="tt-ol-submenu">
                                  <ul className="tt-ol-submenu-list">
                                    <li>
                                      <a href="blog-post.html">Single Post</a>
                                    </li>
                                    <li>
                                      <a href="blog-post-classic-sidebar.html">
                                        Classic Sidebar
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="tt-ol-submenu-wrap">
                          <div className="tt-ol-submenu-trigger">
                            <a href="#">Shop</a>
                            <div className="tt-ol-submenu-caret-wrap">
                              <div className="tt-ol-submenu-caret magnetic-item"></div>
                            </div>
                          </div>
                          <div className="tt-ol-submenu">
                            <ul className="tt-ol-submenu-list">
                              <li className="tt-ol-submenu-wrap">
                                <div className="tt-ol-submenu-trigger">
                                  <a href="#" className="tt-ol-submenu-link">
                                    Product Lists
                                  </a>
                                  <div className="tt-ol-submenu-caret-wrap">
                                    <div className="tt-ol-submenu-caret magnetic-item"></div>
                                  </div>
                                </div>
                                <div className="tt-ol-submenu">
                                  <ul className="tt-ol-submenu-list">
                                    <li>
                                      <a href="shop-list.html">
                                        Sliding Sidebar
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-list-classic.html">
                                        Classic Sidebar
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li className="tt-ol-submenu-wrap">
                                <div className="tt-ol-submenu-trigger">
                                  <a href="#" className="tt-ol-submenu-link">
                                    Product Pages
                                  </a>
                                  <div className="tt-ol-submenu-caret-wrap">
                                    <div className="tt-ol-submenu-caret magnetic-item"></div>
                                  </div>
                                </div>
                                <div className="tt-ol-submenu">
                                  <ul className="tt-ol-submenu-list">
                                    <li>
                                      <a href="shop-single.html">
                                        Product Page
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-single-simple.html">
                                        Simple Product Page
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li className="tt-ol-submenu-wrap">
                                <div className="tt-ol-submenu-trigger">
                                  <a href="#" className="tt-ol-submenu-link">
                                    Product Ordering
                                  </a>
                                  <div className="tt-ol-submenu-caret-wrap">
                                    <div className="tt-ol-submenu-caret magnetic-item"></div>
                                  </div>
                                </div>
                                <div className="tt-ol-submenu">
                                  <ul className="tt-ol-submenu-list">
                                    <li>
                                      <a href="shop-cart.html">Shopping Cart</a>
                                    </li>
                                    <li>
                                      <a href="shop-checkout.html">Checkout</a>
                                    </li>
                                    <li>
                                      <a href="shop-order-details.html">
                                        Order Details
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li className="tt-ol-submenu-wrap">
                                <div className="tt-ol-submenu-trigger">
                                  <a href="#" className="tt-ol-submenu-link">
                                    More Pages
                                  </a>
                                  <div className="tt-ol-submenu-caret-wrap">
                                    <div className="tt-ol-submenu-caret magnetic-item"></div>
                                  </div>
                                </div>
                                <div className="tt-ol-submenu">
                                  <ul className="tt-ol-submenu-list">
                                    <li>
                                      <a href="shop-wishlist.html">Wishlist</a>
                                    </li>
                                    <li>
                                      <a href="shop-login.html">Login Page</a>
                                    </li>
                                    <li>
                                      <a href="shop-register.html">
                                        Register Account
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-reset-password.html">
                                        Reset Password
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-noise"></div>
              </nav>
            </div>
          </div>
        </header>
        <div id="content-wrap">
          <div
            id="page-header"
            className="ph-full ph-cap-xxlg ph-center ph-image-cropped ph-image-cover-2 ph-content-parallax"
          >
            <div className="page-header-inner tt-wrap">
              <div className="ph-image">
                <div className="ph-image-inner">
                  <img src="assets/img/page-header/ph-1.jpg" alt="Image" />
                </div>
              </div>
              <div className="ph-caption">
                <h1 className="ph-caption-title ph-appear">LIMITLESS</h1>
                <div className="ph-caption-title-ghost ph-appear">
                  LIMITLESS
                </div>
                <div className="ph-caption-subtitle ph-appear">
                  Health & Wellness
                </div>
              </div>
            </div>

            <a
              href="#page-content"
              className="scroll-down-circle"
              data-offset="30"
            >
              <div className="sdc-inner ph-appear">
                <div className="sdc-icon">
                  <i className="fas fa-chevron-down"></i>
                </div>
                <svg viewBox="0 0 500 500">
                  <defs>
                    <path
                      d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
                      id="textcircle"
                    ></path>
                  </defs>
                  <text dy="30">
                    <textPath xlinkHref="#textcircle">
                      Scroll down - Scroll down -
                    </textPath>
                  </text>
                </svg>
              </div>
            </a>
            <div className="made-with-love ph-appear">
              <div className="mwl-inner">
                <div className="mwl-text">Made with</div>
                <div className="mwl-icon">
                  <i className="far fa-heart"></i>
                </div>
              </div>
            </div>
          </div>

          <div id="page-content">
            <div className="tt-section">
              <div className="tt-section-inner">
                <div
                  id="portfolio-grid"
                  className="pgi-cap-inside pgi-cap-hover"
                >
                  <div className="tt-grid ttgr-layout-1-2 ttgr-gap-4">
                    <div className="tt-grid-top">
                      <div className="tt-grid-categories">
                        <div className="ttgr-cat-trigger-wrap ttgr-cat-fixed">
                          <a
                            href="#portfolio-grid"
                            className="ttgr-cat-trigger not-hide-cursor"
                            data-offset="150"
                          >
                            <div className="ttgr-cat-text">
                              <span data-hover="Open">Filter</span>
                            </div>
                            <div className="ttgr-cat-icon">
                              <span className="magnetic-item">
                                <i className="fas fa-layer-group"></i>
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="ttgr-cat-nav">
                          <div className="ttgr-cat-list-holder cursor-close">
                            <div className="ttgr-cat-list-inner">
                              <div className="ttgr-cat-list-content">
                                <ul className="ttgr-cat-list">
                                  <li className="ttgr-cat-close">
                                    Close <i className="fas fa-times"></i>
                                  </li>
                                  <li className="ttgr-cat-item">
                                    <a href="#" className="active">
                                      Show All
                                    </a>
                                  </li>
                                  <li className="ttgr-cat-item">
                                    <a href="#" data-filter=".branding">
                                      Branding
                                    </a>
                                  </li>
                                  <li className="ttgr-cat-item">
                                    <a href="#" data-filter=".people">
                                      People
                                    </a>
                                  </li>
                                  <li className="ttgr-cat-item">
                                    <a href="#" data-filter=".nature">
                                      Nature
                                    </a>
                                  </li>
                                  <li className="ttgr-cat-item">
                                    <a href="#" data-filter=".creative">
                                      Creative
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tt-grid-items-wrap isotope-items-wrap">
                      <div className="tt-grid-item isotope-item people">
                        <div className="ttgr-item-inner">
                          <div className="portfolio-grid-item">
                            <a
                              href="single-project-1.html"
                              className="pgi-image-wrap"
                              data-cursor="View<br>Project"
                            >
                              <div className="pgi-image-holder cover-opacity-2">
                                <div className="pgi-image-inner anim-zoomin">
                                  <figure className="pgi-image ttgr-height">
                                    <img
                                      src="assets/img/portfolio/portfolio-1.jpg"
                                      alt="image"
                                    />
                                  </figure>
                                </div>
                              </div>
                            </a>
                            <div className="pgi-caption">
                              <div className="pgi-caption-inner">
                                <h2 className="pgi-title">Oral </h2>
                                <h2 className="pgi-title">
                                  Disintergrating Film{" "}
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tt-grid-item isotope-item creative">
                        <div className="ttgr-item-inner">
                          <div className="portfolio-grid-item">
                            <a
                              href="single-project-2.html"
                              className="pgi-image-wrap"
                              data-cursor="View<br>Project"
                            >
                              <div className="pgi-image-holder cover-opacity-2">
                                <div className="pgi-image-inner anim-zoomin">
                                  <figure className="pgi-image ttgr-height">
                                    <img
                                      src="assets/img/portfolio/portfolio-2.jpg"
                                      alt="image"
                                    />
                                  </figure>
                                </div>
                              </div>
                            </a>
                            <div className="pgi-caption">
                              <div className="pgi-caption-inner">
                                <h2 className="pgi-title">Red Ginseng</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tt-grid-item isotope-item people">
                        <div className="ttgr-item-inner">
                          <div className="portfolio-grid-item">
                            <a
                              href="single-project-3.html"
                              className="pgi-image-wrap"
                              data-cursor="View<br>Project"
                            >
                              <div className="pgi-image-holder cover-opacity-2">
                                <div className="pgi-image-inner anim-zoomin">
                                  <figure className="pgi-image ttgr-height">
                                    <img
                                      src="assets/vids/fashion-week.jpg"
                                      alt="image"
                                    />
                                  </figure>
                                </div>
                              </div>
                            </a>

                            <div className="pgi-caption">
                              <div className="pgi-caption-inner">
                                <h2 className="pgi-title">Zink</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tt-grid-item isotope-item nature">
                        <div className="ttgr-item-inner">
                          <div className="portfolio-grid-item">
                            <a
                              href="single-project-4.html"
                              className="pgi-image-wrap"
                              data-cursor="View<br>Project"
                            >
                              <div className="pgi-image-holder cover-opacity-2">
                                <div className="pgi-image-inner anim-zoomin">
                                  <figure className="pgi-image ttgr-height">
                                    <img
                                      src="assets/img/portfolio/portfolio-3.jpg"
                                      alt="image"
                                    />
                                  </figure>
                                </div>
                              </div>
                            </a>
                            <div className="pgi-caption">
                              <div className="pgi-caption-inner">
                                <h2 className="pgi-title">Tadalafil</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tt-grid-item isotope-item branding">
                        <div className="ttgr-item-inner">
                          <div className="portfolio-grid-item">
                            <a
                              href="single-project-5.html"
                              className="pgi-image-wrap"
                              data-cursor="View<br>Project"
                            >
                              <div className="pgi-image-holder cover-opacity-2">
                                <div className="pgi-image-inner anim-zoomin">
                                  <figure className="pgi-image ttgr-height">
                                    <img
                                      src="assets/img/portfolio/portfolio-4.jpg"
                                      alt="image"
                                    />
                                  </figure>
                                </div>
                              </div>
                            </a>

                            <div className="pgi-caption">
                              <div className="pgi-caption-inner">
                                <h2 className="pgi-title">Vitamine C</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tt-grid-item isotope-item people">
                        <div className="ttgr-item-inner">
                          <div className="portfolio-grid-item">
                            <a
                              href="single-project-6.html"
                              className="pgi-image-wrap"
                              data-cursor="View<br>Project"
                            >
                              <div className="pgi-image-holder cover-opacity-2">
                                <div className="pgi-image-inner anim-zoomin">
                                  <figure className="pgi-image ttgr-height">
                                    <img
                                      src="assets/img/portfolio/portfolio-5.jpg"
                                      alt="image"
                                    />
                                  </figure>
                                </div>
                              </div>
                            </a>

                            <div className="pgi-caption">
                              <div className="pgi-caption-inner">
                                <h2 className="pgi-title">Collagen</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="tt-pagination tt-pagin-center anim-fadeinup">
                <div className="tt-pagin-prev">
                  <a href="" className="tt-pagin-item magnetic-item">
                    <i className="fas fa-chevron-left"></i>
                  </a>
                </div>
                <div className="tt-pagin-numbers">
                  <a href="#0" className="tt-pagin-item magnetic-item active">
                    1
                  </a>
                  <a href="" className="tt-pagin-item magnetic-item">
                    2
                  </a>
                  <a href="" className="tt-pagin-item magnetic-item">
                    3
                  </a>
                  <a href="" className="tt-pagin-item magnetic-item">
                    4
                  </a>
                </div>
                <div className="tt-pagin-next">
                  <a
                    href=""
                    className="tt-pagin-item tt-pagin-next magnetic-item"
                  >
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </div>
              </div> */}
              </div>
            </div>
            <div className="tt-section padding-bottom-xlg-150">
              <div className="tt-section-inner tt-wrap">
                <div className="tt-page-nav tt-pn-scroll">
                  <a href="contact.html" className="tt-pn-link anim-fadeinup">
                    <div className="tt-pn-title">Let's talk</div>
                    <div className="tt-pn-hover-title">Let's talk</div>
                  </a>
                  <div className="tt-pn-subtitle anim-fadeinup">
                    Get in Touch
                  </div>
                  <div className="tt-pn-image">
                    <img src="assets/img/page-header/ph-3.jpg" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer id="tt-footer">
            <div className="tt-footer-inner">
              <div className="footer-col tt-align-center-left">
                <div className="footer-col-inner">
                  <div className="tt-btn tt-btn-link">
                    <a
                      href="#"
                      className="scroll-to-top"
                      data-hover="Back to top"
                    >
                      Back to top
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer-col tt-align-center order-m-last">
                <div className="footer-col-inner">
                  <div className="tt-copyright">
                    © Copyright -{" "}
                    <a
                      href="https://themetorium.net"
                      target="_blank"
                      rel="noopener"
                      className="tt-link"
                    >
                      Themetorium.net
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer-col tt-align-center-right">
                <div className="footer-col-inner">
                  <div className="footer-social">
                    <div className="footer-social-text">
                      <span>Follow</span>
                      <i className="fas fa-share-alt"></i>
                    </div>
                    <div className="social-buttons">
                      <ul>
                        <li>
                          <a
                            href="https://www.facebook.com/themetorium"
                            className="magnetic-item"
                            target="_blank"
                            rel="noopener"
                          >
                            Fb.
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/Themetorium"
                            className="magnetic-item"
                            target="_blank"
                            rel="noopener"
                          >
                            Tw.
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/"
                            className="magnetic-item"
                            target="_blank"
                            rel="noopener"
                          >
                            Yt.
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://dribbble.com/Themetorium"
                            className="magnetic-item"
                            target="_blank"
                            rel="noopener"
                          >
                            Dr.
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.behance.net/Themetorium"
                            className="magnetic-item"
                            target="_blank"
                            rel="noopener"
                          >
                            Be.
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
};

export default Home;
