import React from "react";
import { Link } from "react-router-dom";
const Product = () => {

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

      <div className="bg-noise" />

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
                        <li>
                          <a href="">Single Link</a>
                        </li>
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
                        <li className="tt-ol-submenu-wrap">
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
                              <li className="tt-ol-submenu-wrap">
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
                                    <li>
                                      <a href="portfolio-grid-modern.html">
                                        Grid Modern
                                      </a>
                                    </li>
                                    <li className="active">
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
                        <li className="tt-ol-submenu-wrap active">
                          <div className="tt-ol-submenu-trigger">
                            <a href="#">Shop</a>
                            <div className="tt-ol-submenu-caret-wrap">
                              <div className="tt-ol-submenu-caret magnetic-item"></div>
                            </div>
                          </div>
                          <div className="tt-ol-submenu">
                            <ul className="tt-ol-submenu-list">
                              <li className="tt-ol-submenu-wrap active">
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
                                    <li className="active">
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
              <div className="tt-header-tools">
                <div className="tt-header-tools-dynamic">
                  <div className="tt-header-tools-item to-shop-list-btn-wrap hide">
                    <div className="to-shop-list-btn">
                      <a
                        href="shop-list.html"
                        className="tt-hti-btn to-shop-list-btn-icon magnetic-item"
                        title="Shop"
                      >
                        <i className="fas fa-store"></i>
                      </a>
                    </div>
                  </div>
                  <div className="tt-header-tools-item tt-search-trigger-wrap">
                    <div className="tt-search-trigger">
                      <div
                        className="tt-hti-btn tt-search-trigger-icon magnetic-item"
                        title="Search"
                      >
                        <i className="fas fa-search"></i>
                      </div>
                    </div>
                    <div className="tt-search">
                      <div className="tt-search-close cursor-close">
                        <div className="bg-noise"></div>
                      </div>
                      <div className="tt-search-inner">
                        <h1 className="tt-search-title tt-search-appear">
                          Search
                        </h1>
                        <form className="tt-search-form tt-search-appear tt-form-minimal tt-form-lg">
                          <div className="tt-form-btn-inside">
                            <input
                              className="tt-form-control"
                              type="text"
                              id="search"
                              placeholder="Type your keywords..."
                              required
                            />
                            <button type="submit">
                              <i className="fas fa-search"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="tt-search-ghost tt-search-appear">
                        Search
                      </div>
                      <div
                        className="tt-search-close-btn hide-cursor"
                        title="Close"
                      >
                        <i className="fas fa-times"></i>
                      </div>
                    </div>
                  </div>
                  <div className="tt-header-tools-item to-shop-user-account-btn-wrap">
                    <div className="to-shop-user-account-btn">
                      <a
                        href="shop-login.html"
                        className="tt-hti-btn to-shop-user-account-btn-icon magnetic-item"
                        title="My Account"
                      >
                        <i className="fas fa-user"></i>
                      </a>
                    </div>
                  </div>
                  <div className="tt-header-tools-item to-shop-wishlist-btn-wrap">
                    <div className="to-shop-wishlist-btn">
                      <a
                        href="shop-wishlist.html"
                        className="tt-hti-btn to-shop-wishlist-btn-icon magnetic-item"
                        title="Wishlist"
                      >
                        <i className="far fa-heart"></i>
                        <span className="tt-hti-btn-count to-shop-wishlist-btn-count">
                          3
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="tt-header-tools-item tt-sliding-cart-trigger-wrap">
                  <div className="tt-sliding-cart-trigger">
                    <div
                      className="tt-hti-btn tt-sliding-cart-trigger-icon magnetic-item"
                      title="Shopping Cart"
                    >
                      <i className="fas fa-shopping-cart"></i>
                      <span className="tt-hti-btn-count tt-sliding-cart-trigger-count">
                        2
                      </span>
                    </div>
                  </div>
                  <div className="tt-sliding-cart-wrap">
                    <div className="tt-sliding-cart">
                      <div className="tt-sliding-cart-inner">
                        <h4 className="tt-sliding-cart-heading">
                          Shopping Cart
                        </h4>
                        <div className="tt-sliding-cart-content tt-custom-scrollbar">
                          <div className="tt-sliding-cart-empty">
                            <div className="tt-sliding-cart-empty-icon">
                              <i className="fas fa-shopping-cart"></i>
                            </div>
                            <div className="tt-sliding-cart-empty-text">
                              No products added to the shopping cart.
                            </div>
                          </div>
                          <ul className="tt-sliding-cart-product-list">
                            <li>
                              <div className="tt-sliding-cart-product">
                                <a
                                  href="shop-single.html"
                                  className="tt-sc-product-thumb"
                                >
                                  <img
                                    src="assets/img/shop/small/product-2.jpg"
                                    alt="image"
                                  />
                                </a>
                                <div className="tt-sc-product-info">
                                  <a
                                    href="shop-single.html"
                                    className="tt-sc-product-title"
                                  >
                                    Barbershop - Branding Mockups
                                  </a>
                                  <div className="tt-sc-product-variations">
                                    <div className="tt-scp-variation">
                                      License: <span>Regular</span>
                                    </div>
                                  </div>
                                  <div className="tt-sc-product-quantity-pricing">
                                    <span className="tt-sc-product-quantity">
                                      1 x{" "}
                                    </span>
                                    <span className="tt-sc-product-price">
                                      <bdi>$21.00</bdi>
                                    </span>
                                  </div>
                                  <a
                                    href="#"
                                    className="tt-sc-product-remove"
                                    title="Remove"
                                  >
                                    <i className="fas fa-times"></i>
                                  </a>
                                </div>
                              </div>
                            </li>

                            <li>
                              <div className="tt-sliding-cart-product">
                                <a
                                  href="shop-single.html"
                                  className="tt-sc-product-thumb"
                                >
                                  <img
                                    src="assets/img/shop/small/product-1.jpg"
                                    alt="image"
                                  />
                                </a>
                                <div className="tt-sc-product-info">
                                  <a
                                    href="shop-single.html"
                                    className="tt-sc-product-title"
                                  >
                                    Dash - Branding Mockup Templates
                                  </a>
                                  <div className="tt-sc-product-variations">
                                    <div className="tt-scp-variation">
                                      License: <span>Regular</span>
                                    </div>
                                  </div>
                                  <div className="tt-sc-product-quantity-pricing">
                                    <span className="tt-sc-product-quantity">
                                      1 x{" "}
                                    </span>
                                    <span className="tt-sc-product-price">
                                      <bdi>$21.00</bdi>
                                    </span>
                                  </div>
                                  <a
                                    href="#"
                                    className="tt-sc-product-remove"
                                    title="Remove"
                                  >
                                    <i className="fas fa-times"></i>
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div className="tt-sliding-cart-footer">
                          <div className="tt-sliding-cart-total">
                            Subtotal: <bdi>$42.00</bdi>
                          </div>
                          <div className="tt-btn tt-btn-light-outline tt-btn-block">
                            <a href="shop-cart.html" data-hover="View Cart">
                              View Cart
                            </a>
                          </div>
                          <div className="tt-btn tt-btn-primary tt-btn-block">
                            <a href="shop-checkout.html" data-hover="Checkout">
                              Checkout
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tt-sliding-cart-close hide-cursor"
                        title="Close"
                      >
                        <i className="fas fa-times"></i>
                      </div>
                    </div>
                    <div className="tt-sliding-cart-cover cursor-close"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div id="content-wrap">
          <div
            id="page-header"
            className="ph-cap-lg ph-center ph-image-cropped ph-image-cover-4 ph-content-parallax"
          >
            <div className="page-header-inner tt-wrap">
              <div className="ph-image">
                <div className="ph-image-inner">
                  <img src="assets/img/page-header/ph-2.jpg" alt="Image" />
                </div>
              </div>
              <div className="ph-caption">
                <h1 className="ph-caption-title ph-appear">Shop</h1>
                <div className="ph-caption-title-ghost ph-appear">Shop</div>
                <div className="ph-caption-subtitle ph-appear">
                  Premium Mockups
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
            <div className="tt-section no-padding-top">
              <div className="tt-section-inner tt-wrap max-width-1400">
                <div className="tt-row tt-lg-row-reverse">
                  <div className="tt-col-lg-9">
                    <div id="shop-grid" className="ttp-fixed-height">
                      <div className="tt-grid ttgr-layout-3 ttgr-gap-2">
                        <div className="tt-grid-top">
                          <div className="shop-grid-header">
                            <div className="tt-row tt-no-gutters">
                              <div className="tt-col-md-6 text-left">
                                <div className="shop-grid-count">
                                  Showing 9 of 36 products
                                </div>
                              </div>
                              <div className="tt-col-md-6">
                                <div className="shop-grid-toolbox">
                                  <form className="shop-grid-per-page tt-form-minimal shg-toolbox-item">
                                    <div className="tt-form-group">
                                      <label>Show:</label>
                                      <select
                                        name="orderby"
                                        className="tt-form-control"
                                        aria-label="Shop order"
                                      >
                                        <option value="9" selected>
                                          9
                                        </option>
                                        <option value="12">18</option>
                                        <option value="15">36</option>
                                        <option value="all">All</option>
                                      </select>
                                    </div>
                                  </form>
                                  <form className="shop-grid-ordering tt-form-minimal shg-toolbox-item">
                                    <label className="sgpp-mobile-label">
                                      Sort:
                                    </label>
                                    <div className="tt-form-group">
                                      <select
                                        name="orderby"
                                        className="tt-form-control"
                                        aria-label="Shop order"
                                      >
                                        <option value="default" selected>
                                          Default sorting
                                        </option>
                                        <option value="popularity">
                                          Sort by popularity
                                        </option>
                                        <option value="rating">
                                          Sort by average rating
                                        </option>
                                        <option value="date">
                                          Sort by latest
                                        </option>
                                        <option value="price-incr">
                                          Sort by price: low to high
                                        </option>
                                        <option value="price-desc">
                                          Sort by price: high to low
                                        </option>
                                      </select>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tt-grid-items-wrap">
                          <div className="tt-grid-item">
                            <div className="ttgr-item-inner">
                              <div className="tt-product">
                                <div className="tt-product-image-holder">
                                  <a
                                    href="shop-single.html"
                                    className="tt-product-image-wrap"
                                  >
                                    <figure className="tt-product-image">
                                      <img
                                        className="anim-zoomin tt-lazy"
                                        src="assets/img/shop/shop-low-qlt-thumb.jpg"
                                        data-src="assets/img/shop/grid/product-1/product-1-1.jpg"
                                        alt="image"
                                      />
                                    </figure>
                                    <figure className="tt-product-hover-image">
                                      <img
                                        className="tt-lazy"
                                        src="assets/img/shop/shop-low-qlt-thumb.jpg"
                                        data-src="assets/img/shop/grid/product-1/product-1-2.jpg"
                                        alt="image"
                                      />
                                    </figure>
                                    <div className="tt-product-padges">
                                      <div
                                        className="pr-padge pr-sale-padge"
                                        title="Sale"
                                      >
                                        -16%
                                      </div>
                                      <div
                                        className="pr-padge pr-new-padge"
                                        title="New product"
                                      >
                                        New
                                      </div>
                                      <div
                                        className="pr-padge pr-hot-padge"
                                        title="Featured product"
                                      >
                                        Hot!
                                      </div>
                                    </div>
                                    <div className="tt-product-out-of-stock">
                                      Out of Stock
                                    </div>
                                  </a>
                                  <div className="tt-product-additional-buttons">
                                    <div className="tt-pr-addit-btn-wrap">
                                      <a
                                        href="#"
                                        className="tt-pab-btn tt-add-to-wishlist-btn"
                                        title="Add to wishlist"
                                      >
                                        <span>
                                          <i className="far fa-heart"></i>
                                        </span>
                                      </a>
                                      <a
                                        href="shop-wishlist.html"
                                        className="tt-pab-btn tt-add-to-wishlist-btn-active"
                                        title="Browse wishlist"
                                      >
                                        <span>
                                          <i className="fas fa-heart"></i>
                                        </span>
                                      </a>
                                    </div>

                                    <div className="tt-pr-addit-btn-wrap">
                                      <a
                                        href="#"
                                        className="tt-pab-btn tt-add-to-compare-btn"
                                        title="Compare"
                                      >
                                        <span>
                                          <i className="fas fa-retweet"></i>
                                        </span>
                                      </a>
                                      <a
                                        href=""
                                        className="tt-pab-btn tt-add-to-compare-btn-active"
                                        title="Browse compare list"
                                      >
                                        <span>
                                          <i className="fas fa-check"></i>
                                        </span>
                                      </a>
                                    </div>
                                    <a
                                      href="#"
                                      className="tt-pab-btn"
                                      title="Quick view"
                                    >
                                      <i className="fas fa-search-plus"></i>
                                    </a>
                                  </div>
                                </div>
                                <div className="tt-product-info">
                                  <div className="tt-product-categories">
                                    <a href="" className="tt-product-category">
                                      Mockups
                                    </a>
                                  </div>
                                  <h3 className="tt-product-title">
                                    <a
                                      href="shop-single.html"
                                      title="Dash - Branding Mockup Templates"
                                    >
                                      Dash - Branding Mockup Templates
                                    </a>
                                  </h3>
                                  <div className="tt-product-rating">
                                    <div className="tt-product-rating-stars">
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="far fa-star"></i>
                                      <i className="far fa-star"></i>
                                    </div>
                                  </div>
                                  <div className="tt-pi-price-btn-wrap">
                                    <div className="tt-product-price">
                                      <bdi>$25.00</bdi>
                                      <ins className="pp-current-price">
                                        <bdi>$21.00</bdi>
                                      </ins>
                                      <del className="pp-old-price">
                                        <bdi>$25.00</bdi>
                                      </del>
                                    </div>
                                    <div className="tt-product-buttons">
                                      <a
                                        href="#"
                                        className="tt-product-btn tt-product-adc-btn"
                                      >
                                        <span>Add to Cart</span>
                                      </a>
                                      <a
                                        href="shop-single.html"
                                        className="tt-product-btn tt-product-sel-opt-btn"
                                      >
                                        <span>Select Options</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tt-grid-item">
                            <div className="ttgr-item-inner">
                              <div className="tt-product">
                                <div className="tt-product-image-holder">
                                  <a
                                    href="shop-single.html"
                                    className="tt-product-image-wrap"
                                  >
                                    <figure className="tt-product-image">
                                      <img
                                        className="anim-zoomin tt-lazy"
                                        src="assets/img/shop/shop-low-qlt-thumb.jpg"
                                        data-src="assets/img/shop/grid/product-2/product-2-1.jpg"
                                        alt="image"
                                      />
                                    </figure>

                                    <figure className="tt-product-hover-image">
                                      <img
                                        className="tt-lazy"
                                        src="assets/img/shop/shop-low-qlt-thumb.jpg"
                                        data-src="assets/img/shop/grid/product-2/product-2-2.jpg"
                                        alt="image"
                                      />
                                    </figure>
                                    <div className="tt-product-padges">
                                      <div
                                        className="pr-padge pr-sale-padge"
                                        title="Sale"
                                      >
                                        -16%
                                      </div>
                                      <div
                                        className="pr-padge pr-new-padge"
                                        title="New product"
                                      >
                                        New
                                      </div>
                                      <div
                                        className="pr-padge pr-hot-padge"
                                        title="Featured product"
                                      >
                                        Hot!
                                      </div>
                                    </div>
                                    <div className="tt-product-out-of-stock">
                                      Out of Stock
                                    </div>
                                  </a>

                                  <div className="tt-product-additional-buttons">
                                    <div className="tt-pr-addit-btn-wrap">
                                      <a
                                        href="#"
                                        className="tt-pab-btn tt-add-to-wishlist-btn"
                                        title="Add to wishlist"
                                      >
                                        <span>
                                          <i className="far fa-heart"></i>
                                        </span>
                                      </a>
                                      <a
                                        href="shop-wishlist.html"
                                        className="tt-pab-btn tt-add-to-wishlist-btn-active"
                                        title="Browse wishlist"
                                      >
                                        <span>
                                          <i className="fas fa-heart"></i>
                                        </span>
                                      </a>
                                    </div>

                                    <div className="tt-pr-addit-btn-wrap">
                                      <a
                                        href="#"
                                        className="tt-pab-btn tt-add-to-compare-btn"
                                        title="Compare"
                                      >
                                        <span>
                                          <i className="fas fa-retweet"></i>
                                        </span>
                                      </a>
                                      <a
                                        href=""
                                        className="tt-pab-btn tt-add-to-compare-btn-active"
                                        title="Browse compare list"
                                      >
                                        <span>
                                          <i className="fas fa-check"></i>
                                        </span>
                                      </a>
                                    </div>

                                    <a
                                      href="#"
                                      className="tt-pab-btn"
                                      title="Quick view"
                                    >
                                      <i className="fas fa-search-plus"></i>
                                    </a>
                                  </div>
                                </div>

                                <div className="tt-product-info">
                                  <div className="tt-product-categories">
                                    <a href="" className="tt-product-category">
                                      Mockups
                                    </a>
                                  </div>
                                  <h3 className="tt-product-title">
                                    <a
                                      href="shop-single.html"
                                      title="Barbershop - Branding Mockups"
                                    >
                                      Barbershop - Branding Mockups
                                    </a>
                                  </h3>
                                  <div className="tt-product-rating">
                                    <div className="tt-product-rating-stars">
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="far fa-star"></i>
                                      <i className="far fa-star"></i>
                                    </div>
                                  </div>

                                  <div className="tt-pi-price-btn-wrap">
                                    <div className="tt-product-price">
                                      <bdi>$25.00</bdi>
                                      <ins className="pp-current-price">
                                        <bdi>$21.00</bdi>
                                      </ins>
                                      <del className="pp-old-price">
                                        <bdi>$25.00</bdi>
                                      </del>
                                    </div>
                                    <div className="tt-product-buttons">
                                      <a
                                        href="#"
                                        className="tt-product-btn tt-product-adc-btn"
                                      >
                                        <span>Add to Cart</span>
                                      </a>
                                      <a
                                        href="shop-single.html"
                                        className="tt-product-btn tt-product-sel-opt-btn"
                                      >
                                        <span>Select Options</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tt-grid-item">
                            <div className="ttgr-item-inner">
                              <div className="tt-product">
                                <div className="tt-product-image-holder">
                                  <a
                                    href="shop-single.html"
                                    className="tt-product-image-wrap"
                                  >
                                    <figure className="tt-product-image">
                                      <img
                                        className="anim-zoomin tt-lazy"
                                        src="assets/img/shop/shop-low-qlt-thumb.jpg"
                                        data-src="assets/img/shop/grid/product-3/product-3-1.jpg"
                                        alt="image"
                                      />
                                    </figure>

                                    <figure className="tt-product-hover-image">
                                      <img
                                        className="tt-lazy"
                                        src="assets/img/shop/shop-low-qlt-thumb.jpg"
                                        data-src="assets/img/shop/grid/product-3/product-3-2.jpg"
                                        alt="image"
                                      />
                                    </figure>

                                    <div className="tt-product-padges">
                                      <div
                                        className="pr-padge pr-sale-padge"
                                        title="Sale"
                                      >
                                        -16%
                                      </div>
                                      <div
                                        className="pr-padge pr-new-padge"
                                        title="New product"
                                      >
                                        New
                                      </div>
                                      <div
                                        className="pr-padge pr-hot-padge"
                                        title="Featured product"
                                      >
                                        Hot!
                                      </div>
                                    </div>

                                    <div className="tt-product-out-of-stock">
                                      Out of Stock
                                    </div>
                                  </a>

                                  <div className="tt-product-additional-buttons">
                                    <div className="tt-pr-addit-btn-wrap">
                                      <a
                                        href="#"
                                        className="tt-pab-btn tt-add-to-wishlist-btn"
                                        title="Add to wishlist"
                                      >
                                        <span>
                                          <i className="far fa-heart"></i>
                                        </span>
                                      </a>
                                      <a
                                        href="shop-wishlist.html"
                                        className="tt-pab-btn tt-add-to-wishlist-btn-active"
                                        title="Browse wishlist"
                                      >
                                        <span>
                                          <i className="fas fa-heart"></i>
                                        </span>
                                      </a>
                                    </div>
                                    <div className="tt-pr-addit-btn-wrap">
                                      <a
                                        href="#"
                                        className="tt-pab-btn tt-add-to-compare-btn"
                                        title="Compare"
                                      >
                                        <span>
                                          <i className="fas fa-retweet"></i>
                                        </span>
                                      </a>
                                      <a
                                        href=""
                                        className="tt-pab-btn tt-add-to-compare-btn-active"
                                        title="Browse compare list"
                                      >
                                        <span>
                                          <i className="fas fa-check"></i>
                                        </span>
                                      </a>
                                    </div>
                                    <a
                                      href="#"
                                      className="tt-pab-btn"
                                      title="Quick view"
                                    >
                                      <i className="fas fa-search-plus"></i>
                                    </a>
                                  </div>
                                </div>

                                <div className="tt-product-info">
                                  <div className="tt-product-categories">
                                    <a href="" className="tt-product-category">
                                      Mockups
                                    </a>
                                  </div>

                                  <h3 className="tt-product-title">
                                    <a
                                      href="shop-single.html"
                                      title="Blackstone - Branding Mockup Kit"
                                    >
                                      Blackstone - Branding Mockup Kit
                                    </a>
                                  </h3>

                                  <div className="tt-product-rating">
                                    <div className="tt-product-rating-stars">
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="far fa-star"></i>
                                      <i className="far fa-star"></i>
                                    </div>
                                  </div>

                                  <div className="tt-pi-price-btn-wrap">
                                    <div className="tt-product-price">
                                      <bdi>$25.00</bdi>
                                      <ins className="pp-current-price">
                                        <bdi>$21.00</bdi>
                                      </ins>
                                      <del className="pp-old-price">
                                        <bdi>$25.00</bdi>
                                      </del>
                                    </div>

                                    <div className="tt-product-buttons">
                                      <a
                                        href="#"
                                        className="tt-product-btn tt-product-adc-btn"
                                      >
                                        <span>Add to Cart</span>
                                      </a>
                                      <a
                                        href="shop-single.html"
                                        className="tt-product-btn tt-product-sel-opt-btn"
                                      >
                                        <span>Select Options</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tt-grid-item">
                            <div className="ttgr-item-inner">
                              <div className="tt-product">
                                <div className="tt-product-image-holder">
                                  <a
                                    href="shop-single.html"
                                    className="tt-product-image-wrap"
                                  >
                                    <figure className="tt-product-image">
                                      <img
                                        className="anim-zoomin tt-lazy"
                                        src="assets/img/shop/shop-low-qlt-thumb.jpg"
                                        data-src="assets/img/shop/grid/product-4/product-4-1.jpg"
                                        alt="image"
                                      />
                                    </figure>

                                    <figure className="tt-product-hover-image">
                                      <img
                                        className="tt-lazy"
                                        src="assets/img/shop/shop-low-qlt-thumb.jpg"
                                        data-src="assets/img/shop/grid/product-4/product-4-2.jpg"
                                        alt="image"
                                      />
                                    </figure>

                                    <div className="tt-product-padges">
                                      <div
                                        className="pr-padge pr-sale-padge"
                                        title="Sale"
                                      >
                                        -16%
                                      </div>
                                      <div
                                        className="pr-padge pr-new-padge"
                                        title="New product"
                                      >
                                        New
                                      </div>
                                      <div
                                        className="pr-padge pr-hot-padge"
                                        title="Featured product"
                                      >
                                        Hot!
                                      </div>
                                    </div>

                                    <div className="tt-product-out-of-stock">
                                      Out of Stock
                                    </div>
                                  </a>

                                  <div className="tt-product-additional-buttons">
                                    <div className="tt-pr-addit-btn-wrap">
                                      <a
                                        href="#"
                                        className="tt-pab-btn tt-add-to-wishlist-btn"
                                        title="Add to wishlist"
                                      >
                                        <span>
                                          <i className="far fa-heart"></i>
                                        </span>
                                      </a>
                                      <a
                                        href="shop-wishlist.html"
                                        className="tt-pab-btn tt-add-to-wishlist-btn-active"
                                        title="Browse wishlist"
                                      >
                                        <span>
                                          <i className="fas fa-heart"></i>
                                        </span>
                                      </a>
                                    </div>
                                    <div className="tt-pr-addit-btn-wrap">
                                      <a
                                        href="#"
                                        className="tt-pab-btn tt-add-to-compare-btn"
                                        title="Compare"
                                      >
                                        <span>
                                          <i className="fas fa-retweet"></i>
                                        </span>
                                      </a>
                                      <a
                                        href=""
                                        className="tt-pab-btn tt-add-to-compare-btn-active"
                                        title="Browse compare list"
                                      >
                                        <span>
                                          <i className="fas fa-check"></i>
                                        </span>
                                      </a>
                                    </div>
                                    <a
                                      href="#"
                                      className="tt-pab-btn"
                                      title="Quick view"
                                    >
                                      <i className="fas fa-search-plus"></i>
                                    </a>
                                  </div>
                                </div>

                                <div className="tt-product-info">
                                  <div className="tt-product-categories">
                                    <a href="" className="tt-product-category">
                                      Mockups
                                    </a>
                                  </div>
                                  <h3 className="tt-product-title">
                                    <a
                                      href="shop-single.html"
                                      title="Farsight - Print Mockup Kit"
                                    >
                                      Farsight - Print Mockup Kit
                                    </a>
                                  </h3>
                                  <div className="tt-product-rating">
                                    <div className="tt-product-rating-stars">
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="far fa-star"></i>
                                      <i className="far fa-star"></i>
                                    </div>
                                  </div>
                                  <div className="tt-pi-price-btn-wrap">
                                    <div className="tt-product-price">
                                      <bdi>$25.00</bdi>
                                      <ins className="pp-current-price">
                                        <bdi>$21.00</bdi>
                                      </ins>
                                      <del className="pp-old-price">
                                        <bdi>$25.00</bdi>
                                      </del>
                                    </div>
                                    <div className="tt-product-buttons">
                                      <a
                                        href="#"
                                        className="tt-product-btn tt-product-adc-btn"
                                      >
                                        <span>Add to Cart</span>
                                      </a>
                                      <a
                                        href="shop-single.html"
                                        className="tt-product-btn tt-product-sel-opt-btn"
                                      >
                                        <span>Select Options</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tt-grid-item">
                            <div className="ttgr-item-inner">
                              <div className="tt-product">
                                <div className="tt-product-image-holder">
                                  <a
                                    href="shop-single.html"
                                    className="tt-product-image-wrap"
                                  >
                                    <figure className="tt-product-image">
                                      <img
                                        className="anim-zoomin tt-lazy"
                                        src="assets/img/shop/shop-low-qlt-thumb.jpg"
                                        data-src="assets/img/shop/grid/product-5/product-5-1.jpg"
                                        alt="image"
                                      />
                                    </figure>
                                    <figure className="tt-product-hover-image">
                                      <img
                                        className="tt-lazy"
                                        src="assets/img/shop/shop-low-qlt-thumb.jpg"
                                        data-src="assets/img/shop/grid/product-5/product-5-2.jpg"
                                        alt="image"
                                      />
                                    </figure>
                                    <div className="tt-product-padges">
                                      <div
                                        className="pr-padge pr-sale-padge"
                                        title="Sale"
                                      >
                                        -16%
                                      </div>
                                      <div
                                        className="pr-padge pr-new-padge"
                                        title="New product"
                                      >
                                        New
                                      </div>
                                      <div
                                        className="pr-padge pr-hot-padge"
                                        title="Featured product"
                                      >
                                        Hot!
                                      </div>
                                    </div>
                                    <div className="tt-product-out-of-stock">
                                      Out of Stock
                                    </div>
                                  </a>

                                  <div className="tt-product-additional-buttons">
                                    <div className="tt-pr-addit-btn-wrap">
                                      <a
                                        href="#"
                                        className="tt-pab-btn tt-add-to-wishlist-btn"
                                        title="Add to wishlist"
                                      >
                                        <span>
                                          <i className="far fa-heart"></i>
                                        </span>
                                      </a>
                                      <a
                                        href="shop-wishlist.html"
                                        className="tt-pab-btn tt-add-to-wishlist-btn-active"
                                        title="Browse wishlist"
                                      >
                                        <span>
                                          <i className="fas fa-heart"></i>
                                        </span>
                                      </a>
                                    </div>
                                    <div className="tt-pr-addit-btn-wrap">
                                      <a
                                        href="#"
                                        className="tt-pab-btn tt-add-to-compare-btn"
                                        title="Compare"
                                      >
                                        <span>
                                          <i className="fas fa-retweet"></i>
                                        </span>
                                      </a>
                                      <a
                                        href=""
                                        className="tt-pab-btn tt-add-to-compare-btn-active"
                                        title="Browse compare list"
                                      >
                                        <span>
                                          <i className="fas fa-check"></i>
                                        </span>
                                      </a>
                                    </div>
                                    <a
                                      href="#"
                                      className="tt-pab-btn"
                                      title="Quick view"
                                    >
                                      <i className="fas fa-search-plus"></i>
                                    </a>
                                  </div>
                                </div>
                                <div className="tt-product-info">
                                  <div className="tt-product-categories">
                                    <a href="" className="tt-product-category">
                                      Mockups
                                    </a>
                                  </div>
                                  <h3 className="tt-product-title">
                                    <a
                                      href="shop-single.html"
                                      title="Nude - Print Mockup Kit"
                                    >
                                      Nude - Print Mockup Kit
                                    </a>
                                  </h3>
                                  <div className="tt-product-rating">
                                    <div className="tt-product-rating-stars">
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="far fa-star"></i>
                                      <i className="far fa-star"></i>
                                    </div>
                                  </div>

                                  <div className="tt-pi-price-btn-wrap">
                                    <div className="tt-product-price">
                                      <bdi>$25.00</bdi>
                                      <ins className="pp-current-price">
                                        <bdi>$21.00</bdi>
                                      </ins>
                                      <del className="pp-old-price">
                                        <bdi>$25.00</bdi>
                                      </del>
                                    </div>

                                    <div className="tt-product-buttons">
                                      <a
                                        href="#"
                                        className="tt-product-btn tt-product-adc-btn"
                                      >
                                        <span>Add to Cart</span>
                                      </a>
                                      <a
                                        href="shop-single.html"
                                        className="tt-product-btn tt-product-sel-opt-btn"
                                      >
                                        <span>Select Options</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tt-grid-item">
                            <div className="ttgr-item-inner">
                              <div className="tt-product">
                                <div className="tt-product-image-holder">
                                  <a
                                    href="shop-single.html"
                                    className="tt-product-image-wrap"
                                  >
                                    <figure className="tt-product-image">
                                      <img
                                        className="anim-zoomin tt-lazy"
                                        src="assets/img/shop/shop-low-qlt-thumb.jpg"
                                        data-src="assets/img/shop/grid/product-6/product-6-1.jpg"
                                        alt="image"
                                      />
                                    </figure>
                                    <figure className="tt-product-hover-image">
                                      <img
                                        className="tt-lazy"
                                        src="assets/img/shop/shop-low-qlt-thumb.jpg"
                                        data-src="assets/img/shop/grid/product-6/product-6-2.jpg"
                                        alt="image"
                                      />
                                    </figure>
                                    <div className="tt-product-padges">
                                      <div
                                        className="pr-padge pr-sale-padge"
                                        title="Sale"
                                      >
                                        -16%
                                      </div>
                                      <div
                                        className="pr-padge pr-new-padge"
                                        title="New product"
                                      >
                                        New
                                      </div>
                                      <div
                                        className="pr-padge pr-hot-padge"
                                        title="Featured product"
                                      >
                                        Hot!
                                      </div>
                                    </div>

                                    <div className="tt-product-out-of-stock">
                                      Out of Stock
                                    </div>
                                  </a>

                                  <div className="tt-product-additional-buttons">
                                    <div className="tt-pr-addit-btn-wrap">
                                      <a
                                        href="#"
                                        className="tt-pab-btn tt-add-to-wishlist-btn"
                                        title="Add to wishlist"
                                      >
                                        <span>
                                          <i className="far fa-heart"></i>
                                        </span>
                                      </a>
                                      <a
                                        href="shop-wishlist.html"
                                        className="tt-pab-btn tt-add-to-wishlist-btn-active"
                                        title="Browse wishlist"
                                      >
                                        <span>
                                          <i className="fas fa-heart"></i>
                                        </span>
                                      </a>
                                    </div>
                                    <div className="tt-pr-addit-btn-wrap">
                                      <a
                                        href="#"
                                        className="tt-pab-btn tt-add-to-compare-btn"
                                        title="Compare"
                                      >
                                        <span>
                                          <i className="fas fa-retweet"></i>
                                        </span>
                                      </a>
                                      <a
                                        href=""
                                        className="tt-pab-btn tt-add-to-compare-btn-active"
                                        title="Browse compare list"
                                      >
                                        <span>
                                          <i className="fas fa-check"></i>
                                        </span>
                                      </a>
                                    </div>
                                    <a
                                      href="#"
                                      className="tt-pab-btn"
                                      title="Quick view"
                                    >
                                      <i className="fas fa-search-plus"></i>
                                    </a>
                                  </div>
                                </div>

                                <div className="tt-product-info">
                                  <div className="tt-product-categories">
                                    <a href="" className="tt-product-category">
                                      Mockups
                                    </a>
                                  </div>

                                  <h3 className="tt-product-title">
                                    <a
                                      href="shop-single.html"
                                      title="Android - Smartphone Mockups vol.1"
                                    >
                                      Android - Smartphone Mockups vol.1
                                    </a>
                                  </h3>

                                  <div className="tt-product-rating">
                                    <div className="tt-product-rating-stars">
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="far fa-star"></i>
                                      <i className="far fa-star"></i>
                                    </div>
                                  </div>

                                  <div className="tt-pi-price-btn-wrap">
                                    <div className="tt-product-price">
                                      <bdi>$25.00</bdi>
                                      <ins className="pp-current-price">
                                        <bdi>$21.00</bdi>
                                      </ins>
                                      <del className="pp-old-price">
                                        <bdi>$25.00</bdi>
                                      </del>
                                    </div>

                                    <div className="tt-product-buttons">
                                      <a
                                        href="#"
                                        className="tt-product-btn tt-product-adc-btn"
                                      >
                                        <span>Add to Cart</span>
                                      </a>
                                      <a
                                        href="shop-single.html"
                                        className="tt-product-btn tt-product-sel-opt-btn"
                                      >
                                        <span>Select Options</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tt-grid-item">
                            <div className="ttgr-item-inner">
                              <div className="tt-product">
                                <div className="tt-product-image-holder">
                                  <a
                                    href="shop-single.html"
                                    className="tt-product-image-wrap"
                                  >
                                    <figure className="tt-product-image">
                                      <img
                                        className="anim-zoomin tt-lazy"
                                        src="assets/img/shop/shop-low-qlt-thumb.jpg"
                                        data-src="assets/img/shop/grid/product-7/product-7-1.jpg"
                                        alt="image"
                                      />
                                    </figure>
                                    <figure className="tt-product-hover-image">
                                      <img
                                        className="tt-lazy"
                                        src="assets/img/shop/shop-low-qlt-thumb.jpg"
                                        data-src="assets/img/shop/grid/product-7/product-7-2.jpg"
                                        alt="image"
                                      />
                                    </figure>
                                    <div className="tt-product-padges">
                                      <div
                                        className="pr-padge pr-sale-padge"
                                        title="Sale"
                                      >
                                        -16%
                                      </div>
                                      <div
                                        className="pr-padge pr-new-padge"
                                        title="New product"
                                      >
                                        New
                                      </div>
                                      <div
                                        className="pr-padge pr-hot-padge"
                                        title="Featured product"
                                      >
                                        Hot!
                                      </div>
                                    </div>
                                    <div className="tt-product-out-of-stock">
                                      Out of Stock
                                    </div>
                                  </a>

                                  <div className="tt-product-additional-buttons">
                                    <div className="tt-pr-addit-btn-wrap">
                                      <a
                                        href="#"
                                        className="tt-pab-btn tt-add-to-wishlist-btn"
                                        title="Add to wishlist"
                                      >
                                        <span>
                                          <i className="far fa-heart"></i>
                                        </span>
                                      </a>
                                      <a
                                        href="shop-wishlist.html"
                                        className="tt-pab-btn tt-add-to-wishlist-btn-active"
                                        title="Browse wishlist"
                                      >
                                        <span>
                                          <i className="fas fa-heart"></i>
                                        </span>
                                      </a>
                                    </div>

                                    <div className="tt-pr-addit-btn-wrap">
                                      <a
                                        href="#"
                                        className="tt-pab-btn tt-add-to-compare-btn"
                                        title="Compare"
                                      >
                                        <span>
                                          <i className="fas fa-retweet"></i>
                                        </span>
                                      </a>
                                      <a
                                        href=""
                                        className="tt-pab-btn tt-add-to-compare-btn-active"
                                        title="Browse compare list"
                                      >
                                        <span>
                                          <i className="fas fa-check"></i>
                                        </span>
                                      </a>
                                    </div>

                                    <a
                                      href="#"
                                      className="tt-pab-btn"
                                      title="Quick view"
                                    >
                                      <i className="fas fa-search-plus"></i>
                                    </a>
                                  </div>
                                </div>

                                <div className="tt-product-info">
                                  <div className="tt-product-categories">
                                    <a href="" className="tt-product-category">
                                      Mockups
                                    </a>
                                  </div>

                                  <h3 className="tt-product-title">
                                    <a
                                      href="shop-single.html"
                                      title="Android - Smartphone Mockups vol.2"
                                    >
                                      Android - Smartphone Mockups vol.2
                                    </a>
                                  </h3>

                                  <div className="tt-product-rating">
                                    <div className="tt-product-rating-stars">
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="far fa-star"></i>
                                      <i className="far fa-star"></i>
                                    </div>
                                  </div>
                                  <div className="tt-pi-price-btn-wrap">
                                    <div className="tt-product-price">
                                      <bdi>$25.00</bdi>
                                      <ins className="pp-current-price">
                                        <bdi>$21.00</bdi>
                                      </ins>
                                      <del className="pp-old-price">
                                        <bdi>$25.00</bdi>
                                      </del>
                                    </div>

                                    <div className="tt-product-buttons">
                                      <a
                                        href="#"
                                        className="tt-product-btn tt-product-adc-btn"
                                      >
                                        <span>Add to Cart</span>
                                      </a>
                                      <a
                                        href="shop-single.html"
                                        className="tt-product-btn tt-product-sel-opt-btn"
                                      >
                                        <span>Select Options</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tt-grid-item">
                            <div className="ttgr-item-inner">
                              <div className="tt-product">
                                <div className="tt-product-image-holder">
                                  <a
                                    href="shop-single.html"
                                    className="tt-product-image-wrap"
                                  >
                                    <figure className="tt-product-image">
                                      <img
                                        className="anim-zoomin tt-lazy"
                                        src="assets/img/shop/shop-low-qlt-thumb.jpg"
                                        data-src="assets/img/shop/grid/product-8/product-8-1.jpg"
                                        alt="image"
                                      />
                                    </figure>
                                    <figure className="tt-product-hover-image">
                                      <img
                                        className="tt-lazy"
                                        src="assets/img/shop/shop-low-qlt-thumb.jpg"
                                        data-src="assets/img/shop/grid/product-8/product-8-2.jpg"
                                        alt="image"
                                      />
                                    </figure>

                                    <div className="tt-product-padges">
                                      <div
                                        className="pr-padge pr-sale-padge"
                                        title="Sale"
                                      >
                                        -16%
                                      </div>
                                      <div
                                        className="pr-padge pr-new-padge"
                                        title="New product"
                                      >
                                        New
                                      </div>
                                      <div
                                        className="pr-padge pr-hot-padge"
                                        title="Featured product"
                                      >
                                        Hot!
                                      </div>
                                    </div>

                                    <div className="tt-product-out-of-stock">
                                      Out of Stock
                                    </div>
                                  </a>

                                  <div className="tt-product-additional-buttons">
                                    <div className="tt-pr-addit-btn-wrap">
                                      <a
                                        href="#"
                                        className="tt-pab-btn tt-add-to-wishlist-btn"
                                        title="Add to wishlist"
                                      >
                                        <span>
                                          <i className="far fa-heart"></i>
                                        </span>
                                      </a>
                                      <a
                                        href="shop-wishlist.html"
                                        className="tt-pab-btn tt-add-to-wishlist-btn-active"
                                        title="Browse wishlist"
                                      >
                                        <span>
                                          <i className="fas fa-heart"></i>
                                        </span>
                                      </a>
                                    </div>
                                    <div className="tt-pr-addit-btn-wrap">
                                      <a
                                        href="#"
                                        className="tt-pab-btn tt-add-to-compare-btn"
                                        title="Compare"
                                      >
                                        <span>
                                          <i className="fas fa-retweet"></i>
                                        </span>
                                      </a>
                                      <a
                                        href=""
                                        className="tt-pab-btn tt-add-to-compare-btn-active"
                                        title="Browse compare list"
                                      >
                                        <span>
                                          <i className="fas fa-check"></i>
                                        </span>
                                      </a>
                                    </div>
                                    <a
                                      href="#"
                                      className="tt-pab-btn"
                                      title="Quick view"
                                    >
                                      <i className="fas fa-search-plus"></i>
                                    </a>
                                  </div>
                                </div>

                                <div className="tt-product-info">
                                  <div className="tt-product-categories">
                                    <a href="" className="tt-product-category">
                                      Mockups
                                    </a>
                                  </div>
                                  <h3 className="tt-product-title">
                                    <a
                                      href="shop-single.html"
                                      title="Forma - Branding Mockup Templates"
                                    >
                                      Forma - Branding Mockup Templates
                                    </a>
                                  </h3>
                                  <div className="tt-product-rating">
                                    <div className="tt-product-rating-stars">
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="far fa-star"></i>
                                      <i className="far fa-star"></i>
                                    </div>
                                  </div>
                                  <div className="tt-pi-price-btn-wrap">
                                    <div className="tt-product-price">
                                      <bdi>$25.00</bdi>
                                      <ins className="pp-current-price">
                                        <bdi>$21.00</bdi>
                                      </ins>
                                      <del className="pp-old-price">
                                        <bdi>$25.00</bdi>
                                      </del>
                                    </div>

                                    <div className="tt-product-buttons">
                                      <a
                                        href="#"
                                        className="tt-product-btn tt-product-adc-btn"
                                      >
                                        <span>Add to Cart</span>
                                      </a>
                                      <a
                                        href="shop-single.html"
                                        className="tt-product-btn tt-product-sel-opt-btn"
                                      >
                                        <span>Select Options</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tt-grid-item">
                            <div className="ttgr-item-inner">
                              <div className="tt-product">
                                <div className="tt-product-image-holder">
                                  <a
                                    href="shop-single.html"
                                    className="tt-product-image-wrap"
                                  >
                                    <figure className="tt-product-image">
                                      <img
                                        className="anim-zoomin tt-lazy"
                                        src="assets/img/shop/shop-low-qlt-thumb.jpg"
                                        data-src="assets/img/shop/grid/product-9/product-9-1.jpg"
                                        alt="image"
                                      />
                                    </figure>
                                    <figure className="tt-product-hover-image">
                                      <img
                                        className="tt-lazy"
                                        src="assets/img/shop/shop-low-qlt-thumb.jpg"
                                        data-src="assets/img/shop/grid/product-9/product-9-2.jpg"
                                        alt="image"
                                      />
                                    </figure>
                                    <div className="tt-product-padges">
                                      <div
                                        className="pr-padge pr-sale-padge"
                                        title="Sale"
                                      >
                                        -16%
                                      </div>
                                      <div
                                        className="pr-padge pr-new-padge"
                                        title="New product"
                                      >
                                        New
                                      </div>
                                      <div
                                        className="pr-padge pr-hot-padge"
                                        title="Featured product"
                                      >
                                        Hot!
                                      </div>
                                    </div>
                                    <div className="tt-product-out-of-stock">
                                      Out of Stock
                                    </div>
                                  </a>
                                  <div className="tt-product-additional-buttons">
                                    <div className="tt-pr-addit-btn-wrap">
                                      <a
                                        href="#"
                                        className="tt-pab-btn tt-add-to-wishlist-btn"
                                        title="Add to wishlist"
                                      >
                                        <span>
                                          <i className="far fa-heart"></i>
                                        </span>
                                      </a>
                                      <a
                                        href="shop-wishlist.html"
                                        className="tt-pab-btn tt-add-to-wishlist-btn-active"
                                        title="Browse wishlist"
                                      >
                                        <span>
                                          <i className="fas fa-heart"></i>
                                        </span>
                                      </a>
                                    </div>
                                    <div className="tt-pr-addit-btn-wrap">
                                      <a
                                        href="#"
                                        className="tt-pab-btn tt-add-to-compare-btn"
                                        title="Compare"
                                      >
                                        <span>
                                          <i className="fas fa-retweet"></i>
                                        </span>
                                      </a>
                                      <a
                                        href=""
                                        className="tt-pab-btn tt-add-to-compare-btn-active"
                                        title="Browse compare list"
                                      >
                                        <span>
                                          <i className="fas fa-check"></i>
                                        </span>
                                      </a>
                                    </div>
                                    <a
                                      href="#"
                                      className="tt-pab-btn"
                                      title="Quick view"
                                    >
                                      <i className="fas fa-search-plus"></i>
                                    </a>
                                  </div>
                                </div>

                                <div className="tt-product-info">
                                  <div className="tt-product-categories">
                                    <a href="" className="tt-product-category">
                                      Mockups
                                    </a>
                                  </div>
                                  <h3 className="tt-product-title">
                                    <a
                                      href="shop-single.html"
                                      title="Idenix - Branding Mockup Templates"
                                    >
                                      Idenix - Branding Mockup Templates
                                    </a>
                                  </h3>
                                  <div className="tt-product-rating">
                                    <div className="tt-product-rating-stars">
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="fas fa-star"></i>
                                      <i className="far fa-star"></i>
                                      <i className="far fa-star"></i>
                                    </div>
                                  </div>
                                  <div className="tt-pi-price-btn-wrap">
                                    <div className="tt-product-price">
                                      <bdi>$25.00</bdi>
                                      <ins className="pp-current-price">
                                        <bdi>$21.00</bdi>
                                      </ins>
                                      <del className="pp-old-price">
                                        <bdi>$25.00</bdi>
                                      </del>
                                    </div>

                                    <div className="tt-product-buttons">
                                      <a
                                        href="#"
                                        className="tt-product-btn tt-product-adc-btn"
                                      >
                                        <span>Add to Cart</span>
                                      </a>
                                      <a
                                        href="shop-single.html"
                                        className="tt-product-btn tt-product-sel-opt-btn"
                                      >
                                        <span>Select Options</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tt-pagination tt-pagin-center anim-fadeinup">
                      <div className="tt-pagin-prev">
                        <a href="" className="tt-pagin-item magnetic-item">
                          <i className="fas fa-chevron-left"></i>
                        </a>
                      </div>
                      <div className="tt-pagin-numbers">
                        <a
                          href="#0"
                          className="tt-pagin-item magnetic-item active"
                        >
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
                    </div>
                  </div>
                  <div className="tt-col-lg-3">
                    <div className="tt-sidebar">
                      <div className="sidebar-widget sidebar-categories">
                        <h3 className="sidebar-heading">Categories</h3>
                        <ul className="list-unstyled">
                          <li>
                            <a href="blog-archive.html">
                              Branding{" "}
                              <span title="Entries in this category">26</span>
                            </a>
                          </li>
                          <li>
                            <a href="blog-archive.html">
                              Packaging{" "}
                              <span title="Entries in this category">12</span>
                            </a>
                          </li>
                          <li>
                            <a href="blog-archive.html">
                              Print{" "}
                              <span title="Entries in this category">19</span>
                            </a>
                          </li>
                          <li>
                            <a href="blog-archive.html">
                              Mobile{" "}
                              <span title="Entries in this category">31</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <form className="shop-filter-form tt-form-minimal">
                        <div className="sidebar-widget shop-filter-widget sidebar-price-range">
                          <h3 className="sidebar-heading">Price</h3>
                          <div className="shop-fw-caret hide-cursor"></div>
                          <div className="shop-filter-widget-content">
                            <div className="shop-fwc-inner tt-custom-scrollbar tt-overflow">
                              <div className="shop-fw-price-range">
                                <div className="shop-fw-price-box">
                                  <span className="shop-fw-price-box-currency">
                                    $
                                  </span>
                                  <input
                                    type="number"
                                    className="tt-form-control"
                                    name="min-price"
                                    min="1"
                                    max="150"
                                    value="1"
                                    placeholder=""
                                    title="Enter price as a whole number"
                                  />
                                </div>
                                <span className="shop-fw-price-range-separator">
                                  -
                                </span>
                                <div className="shop-fw-price-box">
                                  <span className="shop-fw-price-box-currency">
                                    $
                                  </span>
                                  <input
                                    type="number"
                                    className="tt-form-control"
                                    name="max-price"
                                    min="1"
                                    max="150"
                                    value="150"
                                    placeholder=""
                                    title="Enter price as a whole number"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sidebar-widget shop-filter-widget sidebar-check-list">
                          <h3 className="sidebar-heading">License</h3>
                          <div className="shop-fw-caret hide-cursor"></div>
                          <div className="shop-filter-widget-content">
                            <div className="shop-fwc-inner tt-custom-scrollbar tt-overflow">
                              <div className="tt-form-check">
                                <input
                                  type="checkbox"
                                  name="regular-license"
                                  id="10048763"
                                />
                                <label for="10048763">
                                  Regular license <span>(6)</span>
                                </label>
                              </div>
                              <div className="tt-form-check">
                                <input
                                  type="checkbox"
                                  name="extended-license"
                                  id="67758399"
                                />
                                <label for="67758399">
                                  Extended license <span>(9)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sidebar-widget shop-filter-widget sidebar-check-list">
                          <h3 className="sidebar-heading">On Sale</h3>
                          <div className="shop-fw-caret hide-cursor"></div>
                          <div className="shop-filter-widget-content">
                            <div className="shop-fwc-inner tt-custom-scrollbar tt-overflow">
                              <div className="tt-form-check">
                                <input
                                  type="checkbox"
                                  name="on-sale-yes"
                                  id="30095224"
                                />
                                <label for="30095224">
                                  Yes <span>(4)</span>
                                </label>
                              </div>
                              <div className="tt-form-check">
                                <input
                                  type="checkbox"
                                  name="on-sale-no"
                                  id="33984400"
                                />
                                <label for="33984400">
                                  No <span>(32)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sidebar-widget shop-filter-widget sidebar-radio-list">
                          <h3 className="sidebar-heading">Rating</h3>
                          <div className="shop-fw-caret hide-cursor"></div>
                          <div className="shop-filter-widget-content">
                            <div className="shop-fwc-inner tt-custom-scrollbar tt-overflow">
                              <div className="tt-form-radio">
                                <input
                                  type="radio"
                                  name="rating"
                                  id="77223990"
                                  checked
                                />
                                <label for="77223990">
                                  Show all <span>(36)</span>
                                </label>
                              </div>
                              <div className="tt-form-radio">
                                <input
                                  type="radio"
                                  name="rating"
                                  id="62239901"
                                />
                                <label for="62239901">
                                  5 stars and higher <span>(21)</span>
                                </label>
                              </div>
                              <div className="tt-form-radio">
                                <input
                                  type="radio"
                                  name="rating"
                                  id="66758556"
                                />
                                <label for="66758556">
                                  4 stars and higher <span>(11)</span>
                                </label>
                              </div>
                              <div className="tt-form-radio">
                                <input
                                  type="radio"
                                  name="rating"
                                  id="00022348"
                                />
                                <label for="00022348">
                                  3 stars and higher <span>(2)</span>
                                </label>
                              </div>
                              <div className="tt-form-radio">
                                <input
                                  type="radio"
                                  name="rating"
                                  id="10649046"
                                />
                                <label for="10649046">
                                  2 stars and higher <span>(1)</span>
                                </label>
                              </div>
                              <div className="tt-form-radio">
                                <input
                                  type="radio"
                                  name="rating"
                                  id="53396753"
                                />
                                <label for="53396753">
                                  1 star and higher <span>(1)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sidebar-widget shop-filter-widget sidebar-check-list">
                          <h3 className="sidebar-heading">Tags</h3>
                          <div className="shop-fw-caret hide-cursor"></div>
                          <div className="shop-filter-widget-content">
                            <div className="shop-fwc-inner tt-custom-scrollbar tt-overflow">
                              <div className="tt-form-check">
                                <input
                                  type="checkbox"
                                  name="tag-1"
                                  id="44873990"
                                />
                                <label for="44873990">
                                  #mockup <span>(36)</span>
                                </label>
                              </div>
                              <div className="tt-form-check">
                                <input
                                  type="checkbox"
                                  name="tag-2"
                                  id="11003092"
                                />
                                <label for="11003092">
                                  #artwork <span>(12)</span>
                                </label>
                              </div>
                              <div className="tt-form-check">
                                <input
                                  type="checkbox"
                                  name="tag-3"
                                  id="67758493"
                                />
                                <label for="67758493">
                                  #design <span>(9)</span>
                                </label>
                              </div>
                              <div className="tt-form-check">
                                <input
                                  type="checkbox"
                                  name="tag-4"
                                  id="02759776"
                                />
                                <label for="02759776">
                                  #creative <span>(16)</span>
                                </label>
                              </div>
                              <div className="tt-form-check">
                                <input
                                  type="checkbox"
                                  name="tag-5"
                                  id="40093345"
                                />
                                <label for="40093345">
                                  #branding <span>(4)</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tt-btn tt-btn-primary tt-btn-block shop-filter-submit-btn">
                          <button type="submit" data-hover="Filter">
                            Filter
                          </button>
                        </div>
                      </form>
                      <div className="sidebar-widget sidebar-tags">
                        <h3 className="sidebar-heading">Tags</h3>
                        <div className="sidebar-tags-list">
                          <ul>
                            <li>
                              <a href="">#portfolio</a>
                            </li>
                            <li>
                              <a href="">#multipurpose</a>
                            </li>
                            <li>
                              <a href="">#minimal</a>
                            </li>
                            <li>
                              <a href="">#agency</a>
                            </li>
                            <li>
                              <a href="">#creatives</a>
                            </li>
                            <li>
                              <a href="">#freelancers</a>
                            </li>
                            <li>
                              <a href="">#design</a>
                            </li>
                            <li>
                              <a href="">#bootstrap</a>
                            </li>
                            <li>
                              <a href="">#responsive</a>
                            </li>
                            <li>
                              <a href="">#simple</a>
                            </li>
                            <li>
                              <a href="">#creative</a>
                            </li>
                            <li>
                              <a href="">#blog</a>
                            </li>
                            <li>
                              <a href="">#wordpress</a>
                            </li>
                            <li>
                              <a href="">#black &amp; white</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;
