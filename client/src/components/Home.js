import React from 'react'

export default function Home() {
  return (
    <>
    <div className="search-area">
      <div className="search-area-inner d-flex align-items-center justify-content-center position-relative">
        <div className="close-btn position-absolute p-4 top-0 end-0 cursor-pointer z-index-20">
          <i className="fas fa-times" />
        </div>
        <div className="row d-flex justify-content-center w-100">
          <div className="col-md-8">
            <form action="#">
              <div className="input-group border-bottom">
                <input
                  className="form-control form-control-lg border-0 shadow-0 ps-0 bg-none px-0"
                  type="search"
                  placeholder="What are you looking for?"
                />
                <button
                  className="btn btn-link btn-sm shadow-0 px-0 btn-lg text-dark"
                  type="submit"
                >
                  <i className="fas fa-search" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* Hero Section*/}
    <section
      className="hero position-relative"
      style={{
        background: "url(img/hero.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center"
      }}
    >
      <div className="container text-white py-5">
        <div className="row py-lg-5">
          <div className="col-lg-7">
            <h1>Bootstrap 5 Blog - A free template by Bootstrapious</h1>
            <a className="link-underline mt-3" href="#!">
              Discover More
            </a>
          </div>
        </div>
        <a
          className="continue text-gray-400 position-absolute bottom-0 mb-5 z-index-20 link-transition small text-uppercase"
          href="#intro"
        >
          <i className="fas fa-long-arrow-alt-down" /> Scroll Down
        </a>
      </div>
    </section>
    {/* Intro Section*/}
    <section id="intro">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h2 className="h3">Some great intro here</h2>
            <p className="text-lg fw-light lh-lg mb-0">
              Place a nice <strong>introduction</strong> here{" "}
              <strong>to catch reader's attention</strong>. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderi.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="pt-0">
      <div className="container">
        {/* Post*/}
        <div className="row d-flex align-items-stretch g-0">
          <div className="col-lg-7">
            <div className="text-inner d-flex align-items-center h-100 bg-light">
              <div className="content px-4 px-lg-5">
                <ul className="list-inline mb-1">
                  <li className="list-inline-item">
                    <a
                      className="text-uppercase text-dark small fw-bold"
                      href="!#"
                    >
                      Business
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="text-uppercase text-dark small fw-bold"
                      href="!#"
                    >
                      Technology
                    </a>
                  </li>
                </ul>
                <h2 className="h4 mb-3">
                  <a className="text-dark" href="post.html">
                    Alberto Savoia Can Teach You About Interior
                  </a>
                </h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrude consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt.
                </p>
                <ul className="list-inline list-separated text-gray-500 mb-0">
                  <li className="list-inline-item">
                    <a
                      className="d-flex align-items-center flex-wrap text-reset"
                      href="!#"
                    >
                      <div className="avatar flex-shrink-0">
                        <img
                          className="img-fluid"
                          src="img/avatar-1.jpg"
                          alt="..."
                        />
                      </div>
                      <small>John Doe</small>
                    </a>
                  </li>
                  <li className="list-inline-item small">
                    <i className="far fa-clock" /> 2 months ago
                  </li>
                  <li className="list-inline-item small">
                    <i className="far fa-comment" /> 12
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <img className="img-fluid" src="img/featured-pic-1.jpeg" alt="..." />
          </div>
        </div>
        {/* Post        */}
        <div className="row d-flex align-items-stretch g-0">
          <div className="col-lg-5">
            <img className="img-fluid" src="img/featured-pic-2.jpeg" alt="..." />
          </div>
          <div className="col-lg-7">
            <div className="text-inner d-flex align-items-center h-100">
              <div className="content px-4 px-lg-5">
                <ul className="list-inline mb-1">
                  <li className="list-inline-item">
                    <a
                      className="text-uppercase text-dark small fw-bold"
                      href="!#"
                    >
                      Business
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="text-uppercase text-dark small fw-bold"
                      href="!#"
                    >
                      Technology
                    </a>
                  </li>
                </ul>
                <h2 className="h4 mb-3">
                  <a className="text-dark" href="post.html">
                    Alberto Savoia Can Teach You About Interior
                  </a>
                </h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrude consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt.
                </p>
                <ul className="list-inline list-separated text-gray-500 mb-0">
                  <li className="list-inline-item">
                    <a
                      className="d-flex align-items-center flex-wrap text-reset"
                      href="!#"
                    >
                      <div className="avatar flex-shrink-0">
                        <img
                          className="img-fluid"
                          src="img/avatar-2.jpg"
                          alt="..."
                        />
                      </div>
                      <small>John Doe</small>
                    </a>
                  </li>
                  <li className="list-inline-item small">
                    <i className="far fa-clock" /> 2 months ago
                  </li>
                  <li className="list-inline-item small">
                    <i className="far fa-comment" /> 12
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Post                            */}
        <div className="row d-flex align-items-stretch g-0">
          <div className="col-lg-7">
            <div className="text-inner d-flex align-items-center h-100 bg-light">
              <div className="content px-4 px-lg-5">
                <ul className="list-inline mb-1">
                  <li className="list-inline-item">
                    <a
                      className="text-uppercase text-dark small fw-bold"
                      href="!#"
                    >
                      Business
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="text-uppercase text-dark small fw-bold"
                      href="!#"
                    >
                      Technology
                    </a>
                  </li>
                </ul>
                <h2 className="h4 mb-3">
                  <a className="text-dark" href="post.html">
                    Alberto Savoia Can Teach You About Interior
                  </a>
                </h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrude consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt.
                </p>
                <ul className="list-inline list-separated text-gray-500 mb-0">
                  <li className="list-inline-item">
                    <a
                      className="d-flex align-items-center flex-wrap text-reset"
                      href="!#"
                    >
                      <div className="avatar flex-shrink-0">
                        <img
                          className="img-fluid"
                          src="img/avatar-3.jpg"
                          alt="..."
                        />
                      </div>
                      <small>John Doe</small>
                    </a>
                  </li>
                  <li className="list-inline-item small">
                    <i className="far fa-clock" /> 2 months ago
                  </li>
                  <li className="list-inline-item small">
                    <i className="far fa-comment" /> 12
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <img className="img-fluid" src="img/featured-pic-3.jpeg" alt="..." />
          </div>
        </div>
      </div>
    </section>
    {/* Divider Section*/}
    <section
      className="divider"
      style={{
        background: "url(img/divider-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center bottom"
      }}
    >
      <div className="container text-white">
        <div className="row">
          <div className="col-md-7">
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </h2>
            <a className="link-underline mt-3" href="#!">
              View More
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* Latest Posts */}
    <section>
      <div className="container">
        <header className="mb-5">
          <h2>Latest from the blog</h2>
          <p className="text-lg fw-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </header>
        <div className="row gy-4">
          <div className="col-md-4">
            <a className="mb-3" href="post.html">
              <img className="img-fluid" src="img/blog-1.jpg" alt="..." />
            </a>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <small className="text-gray-500">20 May | 2016</small>
              <a className="small fw-bold text-uppercase small" href="!#">
                Business
              </a>
            </div>
            <h3 className="h4">
              <a className="text-dark" href="post.html">
                Ways to remember your important ideas
              </a>
            </h3>
            <p className="text-muted text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className="col-md-4">
            <a className="mb-3" href="post.html">
              <img className="img-fluid" src="img/blog-2.jpg" alt="..." />
            </a>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <small className="text-gray-500">20 May | 2016</small>
              <a className="small fw-bold text-uppercase small" href="!#">
                Technology
              </a>
            </div>
            <h3 className="h4">
              <a className="text-dark" href="post.html">
                Diversity in Engineering: Effect on Questions
              </a>
            </h3>
            <p className="text-muted text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className="col-md-4">
            <a className="mb-3" href="post.html">
              <img className="img-fluid" src="img/blog-3.jpg" alt="..." />
            </a>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <small className="text-gray-500">20 May | 2016</small>
              <a className="small fw-bold text-uppercase small" href="!#">
                Financial
              </a>
            </div>
            <h3 className="h4">
              <a className="text-dark" href="post.html">
                Alberto Savoia Can Teach You About Interior
              </a>
            </h3>
            <p className="text-muted text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* Newsletter Section*/}
    <section className="pt-0">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Subscribe to Newsletter</h2>
            <p className="text-lg lh-lg fw-light mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col-md-8">
            <form action="#">
              <div className="input-group">
                <input
                  className="form-control p-3"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Type your email address"
                />
                <button className="btn btn-dark" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/* Gallery Section*/}
    <section className="p-0">
      <div className="row g-0">
        <div className="col-lg-3 col-sm-6">
          <a
            className="glightbox d-block position-relative"
            href="img/gallery-1.jpg"
            data-gallery="gallery"
            data-glightbox="Gallery image 1"
          >
            <img className="img-fluid" src="img/gallery-1.jpg" alt="image" />
            <div className="fsc-hover-overlay">
              <i className="fas fa-search fsc-hover-overlay-icon" />
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6">
          <a
            className="glightbox d-block position-relative"
            href="img/gallery-2.jpg"
            data-gallery="gallery"
            data-glightbox="Gallery image 2"
          >
            <img className="img-fluid" src="img/gallery-2.jpg" alt="image" />
            <div className="fsc-hover-overlay">
              <i className="fas fa-search fsc-hover-overlay-icon" />
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6">
          <a
            className="glightbox d-block position-relative"
            href="img/gallery-3.jpg"
            data-gallery="gallery"
            data-glightbox="Gallery image 3"
          >
            <img className="img-fluid" src="img/gallery-3.jpg" alt="image" />
            <div className="fsc-hover-overlay">
              <i className="fas fa-search fsc-hover-overlay-icon" />
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6">
          <a
            className="glightbox d-block position-relative"
            href="img/gallery-4.jpg"
            data-gallery="gallery"
            data-glightbox="Gallery image 4"
          >
            <img className="img-fluid" src="img/gallery-4.jpg" alt="image" />
            <div className="fsc-hover-overlay">
              <i className="fas fa-search fsc-hover-overlay-icon" />
            </div>
          </a>
        </div>
      </div>
    </section>
  </>
  )
}
