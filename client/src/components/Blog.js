import React, { useState, useEffect, useContext } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
import { adddata, deldata } from './context/ContextProvider';
import { updatedata } from './context/ContextProvider'
import { data } from './data.js';



const Blog = () => {
    const [contacts, setContacts] = useState(data);
    const [search, setSearch] = useState('');
    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const { udata, setUdata } = useContext(adddata);

    const {updata, setUPdata} = useContext(updatedata);

    const {dltdata, setDLTdata} = useContext(deldata);

    const getdata = async () => {

        const res = await fetch("https://crudappreactjs.herokuapp.com/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const deleteuser = async (id) => {

        const res2 = await fetch(`https://crudappreactjs.herokuapp.com/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            setDLTdata(deletedata)
            getdata();
        }

    }


    return (

        <>
            {/* {
                udata ?
                    <>
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{udata.name}</strong>  added succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }
            {
                updata ?
                    <>
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{updata.name}</strong>  updated succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }

            {
                dltdata ?
                    <>
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>{dltdata.name}</strong>  deleted succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            } */}

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
  <section>
    <div className="container">
      <div className="row gy-5">
        {/* Latest Posts */}
        <main className="col-lg-8">
          <div className="container">
            <div className="row gy-4 mb-5">
            {/* { getuserdata.map((element, id) => {
    return (
<div className="col-xl-6">
            <a className="mb-3" href="post.html">
              <img
                className="img-fluid"
                src="img/blog-post-1.jpeg"
                alt="..."
              />
            </a>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <small className="text-gray-500">20 May | 2016</small>
              <a className="small fw-bold text-uppercase small" href="{`view/${element._id}`}">
                Business
              </a>
              <NavLink to={`view/${element._id}`}><a className="small fw-bold text-uppercase small" href="{`view/${element._id}`}">
                Business
              </a></NavLink>
            </div>
            <h3 className="h4">
              <a className="text-dark" href="post.html">
                Alberto Savoia Can Teach You About Interior
              </a>
            </h3>
            <p className="text-muted text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
              do eiusmod tempor incididunt ut labore.
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
                  <small>{element.name}</small>
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
)
    })} */}
  {
                                getuserdata.map((element, id) => {
                                    return (
                                        <>
                                             <div className="col-xl-6">
                {/* <a className="mb-3" href="post.html">
                  <img
                    className="img-fluid"
                    src="img/blog-post-1.jpeg"
                    alt="..."
                  />
                </a> */}
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <small className="text-gray-500">20 May | 2016</small>
                  {/* <a className="small fw-bold text-uppercase small" href="/blog1">
                    Business
                  </a> */}
                  <NavLink to={`view/${element._id}`}><a className="small fw-bold text-uppercase small" href="{`view/${element._id}`}">
                    {element.work}
                  </a></NavLink>
                </div>
                <h3 className="h4">
                  <a className="text-dark" href="blog2">
                  {element.add}
                  </a>
                </h3>
                <p className="text-muted text-sm">
                {element.name}
                </p>
                <ul className="list-inline list-separated text-gray-500 mb-0">
                  <li className="list-inline-item">
                    <a
                      className="d-flex align-items-center flex-wrap text-reset"
                      href="!#"
                    >
                      {/* <div className="avatar flex-shrink-0">
                        <img
                          className="img-fluid"
                          src="img/avatar-3.jpg"
                          alt="..."
                        />
                      </div> */}
                      <small>{element.email}</small>
                    </a>
                  </li>
                  <li className="list-inline-item small">
                    <i className="far fa-clock" /> {element.mobile}
                  </li>
                  <li className="list-inline-item small">
                    <i className="far fa-comment" /> 12
                  </li>
                </ul>
              </div>
                                        </>
                                    )
                                })
                            }



             </div>
          </div>
        </main>
        <aside className="col-lg-4">
          {/* Widget [Search Bar Widget]*/}
          <div className="card mb-5">
            <div className="card-body">
              <h3 className="h6">Search the blog</h3>
              <form action="#">
                <div className="input-group border-bottom">
                  <input
                    className="form-control border-0 shadow-0 ps-0"
                    type="search" onChange={(e) => setSearch(e.target.value)}
                    placeholder="What are you looking for?"
                  />
                  <button
                    className="btn btn-link btn-sm shadow-0 px-0"
                    type="submit"
                  >
                    <i className="fas fa-search" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Widget [Latest Posts Widget]        */}
          <div className="card mb-5">
            <div className="card-body">
              <h3 className="h6 mb-3">Latest Posts</h3>
              <a className="text-reset mb-3" href="!#">
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid flex-shrink-0"
                    src="img/small-thumbnail-1.jpg"
                    alt="..."
                    width={55}
                  />
                  <div className="ms-3">
                    <p className="mb-2 fw-bold text-gray-700 lh-1">
                      Alberto Savoia Can Teach You About
                    </p>
                    <ul className="list-inline list-separated text-gray-500 d-flex align-items-center">
                      <li className="list-inline-item small">
                        <i className="far fa-eye" /> 500
                      </li>
                      <li className="list-inline-item small">
                        <i className="far fa-comment" /> 12
                      </li>
                    </ul>
                  </div>
                </div>
              </a>
              <a className="text-reset mb-3" href="!#">
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid flex-shrink-0"
                    src="img/small-thumbnail-2.jpg"
                    alt="..."
                    width={55}
                  />
                  <div className="ms-3">
                    <p className="mb-2 fw-bold text-gray-700 lh-1">
                      Alberto Savoia Can Teach You About
                    </p>
                    <ul className="list-inline list-separated text-gray-500 d-flex align-items-center">
                      <li className="list-inline-item small">
                        <i className="far fa-eye" /> 500
                      </li>
                      <li className="list-inline-item small">
                        <i className="far fa-comment" /> 12
                      </li>
                    </ul>
                  </div>
                </div>
              </a>
              <a className="text-reset" href="!#">
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid flex-shrink-0"
                    src="img/small-thumbnail-3.jpg"
                    alt="..."
                    width={55}
                  />
                  <div className="ms-3">
                    <p className="mb-2 fw-bold text-gray-700 lh-1">
                      Alberto Savoia Can Teach You About
                    </p>
                    <ul className="list-inline list-separated text-gray-500 d-flex align-items-center">
                      <li className="list-inline-item small">
                        <i className="far fa-eye" /> 500
                      </li>
                      <li className="list-inline-item small">
                        <i className="far fa-comment" /> 12
                      </li>
                    </ul>
                  </div>
                </div>
              </a>
            </div>
          </div>
          {/* Widget [Categories Widget]*/}
          <div className="card mb-5">
            <div className="card-body">
              <h3 className="h6 mb-3">Categories</h3>
              <div className="p-2 d-flex justify-content-between fw-bold text-gray-600 bg-light">
                <a className="text-reset" href="!#">
                  Growth
                </a>
                <span>12</span>
              </div>
              <div className="p-2 d-flex justify-content-between fw-bold text-gray-600 1">
                <a className="text-reset" href="!#">
                  Local
                </a>
                <span>25</span>
              </div>
              <div className="p-2 d-flex justify-content-between fw-bold text-gray-600 bg-light">
                <a className="text-reset" href="!#">
                  Sales
                </a>
                <span>8</span>
              </div>
              <div className="p-2 d-flex justify-content-between fw-bold text-gray-600 1">
                <a className="text-reset" href="!#">
                  Tips
                </a>
                <span>17</span>
              </div>
              <div className="p-2 d-flex justify-content-between fw-bold text-gray-600 bg-light">
                <a className="text-reset" href="!#">
                  Local
                </a>
                <span>25</span>
              </div>
            </div>
          </div>
          {/* Widget [Tags Cloud Widget]*/}
          <div className="card">
            <div className="card-body">
              <h3 className="h6 mb-3">Tags</h3>
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a className="tag" href="!#">
                    #Business{" "}
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="tag" href="!#">
                    #Fashion{" "}
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="tag" href="!#">
                    #Sports{" "}
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="tag" href="!#">
                    #Technology{" "}
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="tag" href="!#">
                    #Economy{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
  {/* Page Footer*/}
  <footer className="footer text-white" style={{ background: "#0e0e0e" }}>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h6 className="text-white">Bootstrap Blog</h6>
          <p className="fw-light mb-1">53 Broadway, Broklyn, NY 11249</p>
          <p className="fw-light mb-1">Phone: (020) 123 456 789</p>
          <p className="fw-light mb-4">
            Email:{" "}
            <a
              className="text-decoration-underline text-reset"
              href="mailto:info@company.com"
            >
              Info@Company.com
            </a>
          </p>
          <ul className="list-unstyled">
            <li className="list-inline-item">
              <a className="text-reset me-2" href="!#">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-reset me-2" href="!#">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-reset me-2" href="!#">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-reset me-2" href="!#">
                <i className="fab fa-behance" />
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-reset me-2" href="!#">
                <i className="fab fa-pinterest" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <div className="d-flex">
            <ul className="list-unstyled text-sm me-4">
              <li className="mb-2">
                <a className="text-reset fw-light" href="!#">
                  My Account
                </a>
              </li>
              <li className="mb-2">
                <a className="text-reset fw-light" href="!#">
                  Add Listing
                </a>
              </li>
              <li className="mb-2">
                <a className="text-reset fw-light" href="!#">
                  Pricing
                </a>
              </li>
              <li className="mb-2">
                <a className="text-reset fw-light" href="!#">
                  Privacy &amp; Policy
                </a>
              </li>
            </ul>
            <ul className="list-unstyled text-sm">
              <li className="mb-2">
                <a className="text-reset fw-light" href="!#">
                  Our Partners
                </a>
              </li>
              <li className="mb-2">
                <a className="text-reset fw-light" href="!#">
                  FAQ
                </a>
              </li>
              <li className="mb-2">
                <a className="text-reset fw-light" href="!#">
                  How It Works
                </a>
              </li>
              <li className="mb-2">
                <a className="text-reset fw-light" href="!#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <a className="d-block mb-2" href="post.html">
            <div className="d-flex align-items-center">
              <img
                className="img-fluid p-1 border border-gray-600 flex-shrink-0"
                src="img/small-thumbnail-1.jpg"
                alt="..."
                width={50}
              />
              <div className="ms-2 text-muted">
                <p className="fw-bold mb-0">Hotels for all budgets</p>
                <span>October 26, 2016</span>
              </div>
            </div>
          </a>
          <a className="d-block mb-2" href="post.html">
            <div className="d-flex align-items-center">
              <img
                className="img-fluid p-1 border border-gray-600 flex-shrink-0"
                src="img/small-thumbnail-2.jpg"
                alt="..."
                width={50}
              />
              <div className="ms-2 text-muted">
                <p className="fw-bold mb-0">Great street atrs in London</p>
                <span>October 26, 2016</span>
              </div>
            </div>
          </a>
          <a className="d-block" href="post.html">
            <div className="d-flex align-items-center">
              <img
                className="img-fluid p-1 border border-gray-600 flex-shrink-0"
                src="img/small-thumbnail-3.jpg"
                alt="..."
                width={50}
              />
              <div className="ms-2 text-muted">
                <p className="fw-bold mb-0">Best coffee shops in Sydney</p>
                <span>October 26, 2016</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </footer>
  <div className="copyrights text-white py-4" style={{ background: "#090909" }}>
    <div className="container">
      <div className="row text-center gy-2">
        <div className="col-md-6 text-md-start">
          <p className="mb-0 fw-light text-sm">
            © 2022. All rights reserved. Your great site.
          </p>
        </div>
        <div className="col-md-6 text-md-end">
          <p className="mb-0 text-sm">
            Template By{" "}
            <a
              className="text-reset fw-light"
              href="https://bootstrapious.com/p/bootstrap-blog"
            >
              Bootstrapious
            </a>
            {/* Please do not remove the backlink to Bootstrap Temple unless you purchase an attribution-free license @ Bootstrap Temple or support us at http://bootstrapious.com/donate. It is part of the license conditions. Thanks for understanding :)                         */}
          </p>
        </div>
      </div>
    </div>
  </div>
</>


 

        </>
    )
}

export default Blog
















