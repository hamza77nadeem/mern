import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbaar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-3">
        <div className="container py-1">
          <a className="navbar-brand text-sm fw-bold text-dark" href="index.html">
            Bootstrap Blog
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link active " href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/Post">
                  Post
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item mt-2 mt-lg-0">
                <ul className="list-inline d-flex align-items-center">
                  <li className="list-inline-item mx-lg-2 px-2 border-start border-end">
                    <a className="search-btn nav-link small py-0 text-dark" href="#">
                      <i className="fas fa-search" />
                    </a>
                  </li>
                  <li className="list-inline-item d-flex align-items-end small">
                    <a className="text-dark" href="#">
                      EN
                    </a>
                    <span className="underscore mb-1" />
                    <a className="text-gray-500" href="#">
                      ES
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbaar
