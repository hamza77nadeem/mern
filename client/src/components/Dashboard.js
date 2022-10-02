import React, { useState, useEffect, useContext } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
import { adddata, deldata } from './context/ContextProvider';
import { updatedata } from './context/ContextProvider'




const Dashboard = () => {

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
            } */}

            {
                dltdata ?
                    <>
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>{dltdata.name}</strong>  deleted succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }

<div className="wrapper">
  {/* Navbar */}
  <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    {/* Left navbar links */}
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" role="button">
          <i className="fas fa-bars" />
        </a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="index3.html" className="nav-link">
          Home
        </a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="#" className="nav-link">
          Contact
        </a>
      </li>
    </ul>
    {/* Right navbar links */}
    <ul className="navbar-nav ml-auto">
      {/* Navbar Search */}
      <li className="nav-item">
        <a
          className="nav-link"
          data-widget="navbar-search"
          href="#"
          role="button"
        >
          <i className="fas fa-search" />
        </a>
        <div className="navbar-search-block">
          <form className="form-inline">
            <div className="input-group input-group-sm">
              <input
                className="form-control form-control-navbar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-navbar" type="submit">
                  <i className="fas fa-search" />
                </button>
                <button
                  className="btn btn-navbar"
                  type="button"
                  data-widget="navbar-search"
                >
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </li>
      {/* Messages Dropdown Menu */}
      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#">
          <i className="far fa-comments" />
          <span className="badge badge-danger navbar-badge">3</span>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <a href="#" className="dropdown-item">
            {/* Message Start */}
            <div className="media">
              <img
                src="dist/img/user1-128x128.jpg"
                alt="User Avatar"
                className="img-size-50 mr-3 img-circle"
              />
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  Brad Diesel
                  <span className="float-right text-sm text-danger">
                    <i className="fas fa-star" />
                  </span>
                </h3>
                <p className="text-sm">Call me whenever you can...</p>
                <p className="text-sm text-muted">
                  <i className="far fa-clock mr-1" /> 4 Hours Ago
                </p>
              </div>
            </div>
            {/* Message End */}
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            {/* Message Start */}
            <div className="media">
              <img
                src="dist/img/user8-128x128.jpg"
                alt="User Avatar"
                className="img-size-50 img-circle mr-3"
              />
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  John Pierce
                  <span className="float-right text-sm text-muted">
                    <i className="fas fa-star" />
                  </span>
                </h3>
                <p className="text-sm">I got your message bro</p>
                <p className="text-sm text-muted">
                  <i className="far fa-clock mr-1" /> 4 Hours Ago
                </p>
              </div>
            </div>
            {/* Message End */}
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            {/* Message Start */}
            <div className="media">
              <img
                src="dist/img/user3-128x128.jpg"
                alt="User Avatar"
                className="img-size-50 img-circle mr-3"
              />
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  Nora Silvester
                  <span className="float-right text-sm text-warning">
                    <i className="fas fa-star" />
                  </span>
                </h3>
                <p className="text-sm">The subject goes here</p>
                <p className="text-sm text-muted">
                  <i className="far fa-clock mr-1" /> 4 Hours Ago
                </p>
              </div>
            </div>
            {/* Message End */}
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item dropdown-footer">
            See All Messages
          </a>
        </div>
      </li>
      {/* Notifications Dropdown Menu */}
      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#">
          <i className="far fa-bell" />
          <span className="badge badge-warning navbar-badge">15</span>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span className="dropdown-item dropdown-header">
            15 Notifications
          </span>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="fas fa-envelope mr-2" /> 4 new messages
            <span className="float-right text-muted text-sm">3 mins</span>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="fas fa-users mr-2" /> 8 friend requests
            <span className="float-right text-muted text-sm">12 hours</span>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="fas fa-file mr-2" /> 3 new reports
            <span className="float-right text-muted text-sm">2 days</span>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item dropdown-footer">
            See All Notifications
          </a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-widget="fullscreen" href="#" role="button">
          <i className="fas fa-expand-arrows-alt" />
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          data-widget="control-sidebar"
          data-slide="true"
          href="#"
          role="button"
        >
          <i className="fas fa-th-large" />
        </a>
      </li>
    </ul>
  </nav>
  {/* /.navbar */}
  {/* Main Sidebar Container */}
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a href="index3.html" className="brand-link">
      <img
        src="dist/img/AdminLTELogo.png"
        alt="AdminLTE Logo"
        className="brand-image img-circle elevation-3"
        style={{ opacity: ".8" }}
      />
      <span className="brand-text font-weight-light">AdminLTE 3</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img
            src="dist/img/user2-160x160.jpg"
            className="img-circle elevation-2"
            alt="User Image"
          />
        </div>
        <div className="info">
          <a href="#" className="d-block">
            Alexander Pierce
          </a>
        </div>
      </div>
      {/* SidebarSearch Form */}
      <div className="form-inline">
        <div className="input-group" data-widget="sidebar-search">
          <input
            className="form-control form-control-sidebar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="input-group-append">
            <button className="btn btn-sidebar">
              <i className="fas fa-search fa-fw" />
            </button>
          </div>
        </div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul
          className="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
          <li className="nav-item menu-open">
            <a href="#" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Dashboard
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="./index.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Dashboard v1</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./index2.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Dashboard v2</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./index3.html" className="nav-link active">
                  <i className="far fa-circle nav-icon" />
                  <p>Dashboard v3</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
  {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">Dashboard v3</h1>
          </div>
          {/* /.col */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active">Dashboard v3</li>
            </ol>
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}
      </div>
      <div className="mt-5">
                <div className="container">
                    <div className="add_btn mt-2 mb-2">
                        <NavLink to="/register" className="btn btn-primary">Add data</NavLink>
                    </div>

                    <table class="table">
                        <thead>
                            <tr className="table-dark">
                                <th scope="col">id</th>
                                <th scope="col">Username</th>
                                <th scope="col">email</th>
                                <th scope="col">Job</th>
                                <th scope="col">Number</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                getuserdata.map((element, id) => {
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row">{id + 1}</th>
                                                <td>{element.name}</td>
                                                <td>{element.email}</td>
                                                <td>{element.work}</td>
                                                <td>{element.mobile}</td>
                                                <td className="d-flex justify-content-between">
                                                    <NavLink to={`view/${element._id}`}> <button className="btn btn-success"><RemoveRedEyeIcon /></button></NavLink>
                                                    <NavLink to={`edit/${element._id}`}>  <button className="btn btn-primary"><CreateIcon /></button></NavLink>
                                                    <button className="btn btn-danger" onClick={() => deleteuser(element._id)}><DeleteOutlineIcon /></button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>


                </div>
            </div>

      {/* /.container-fluid */}
    </div>
  </div>
</div>




        </>
    )
}

export default Dashboard

















