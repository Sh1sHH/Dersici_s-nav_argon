import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

function VirtualReality() {
  return (
    <div>
      <div>
        {/* Navbar */}
        <nav
          className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl  mt-3 mx-3 bg-primary"
          id="navbarBlur"
          data-scroll="false"
        >
          <div className="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                <li className="breadcrumb-item text-sm">
                  <a className="opacity-5 text-white" href="javascript:;">
                    Pages
                  </a>
                </li>
                <li
                  className="breadcrumb-item text-sm text-white active"
                  aria-current="page"
                >
                  Virtual Reality
                </li>
              </ol>
              <h6 className="font-weight-bolder text-white mb-0">
                Virtual Reality
              </h6>
            </nav>
            <div
              className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
              id="navbar"
            >
              <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                <div className="input-group">
                  <span className="input-group-text text-body">
                    <i className="fas fa-search" aria-hidden="true" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type here..."
                  />
                </div>
              </div>
              <ul className="navbar-nav  justify-content-end">
                <li className="nav-item d-flex align-items-center">
                  <a
                    href="javascript:;"
                    className="nav-link text-white font-weight-bold px-0"
                  >
                    <i className="fa fa-user me-sm-1" />
                    <span className="d-sm-inline d-none">Sign In</span>
                  </a>
                </li>
                <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                  <a
                    href="javascript:;"
                    className="nav-link text-white p-0"
                    id="iconNavbarSidenav"
                  >
                    <div className="sidenav-toggler-inner">
                      <i className="sidenav-toggler-line bg-white" />
                      <i className="sidenav-toggler-line bg-white" />
                      <i className="sidenav-toggler-line bg-white" />
                    </div>
                  </a>
                </li>
                <li className="nav-item px-3 d-flex align-items-center">
                  <a href="javascript:;" className="nav-link text-white p-0">
                    <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer" />
                  </a>
                </li>
                <li className="nav-item dropdown pe-2 d-flex align-items-center">
                  <a
                    href="javascript:;"
                    className="nav-link text-white p-0"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-bell cursor-pointer" />
                  </a>
                  <ul
                    className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li className="mb-2">
                      <a
                        className="dropdown-item border-radius-md"
                        href="javascript:;"
                      >
                        <div className="d-flex py-1">
                          <div className="my-auto">
                            <img
                              src="../assets/img/team-2.jpg"
                              className="avatar avatar-sm  me-3 "
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="text-sm font-weight-normal mb-1">
                              <span className="font-weight-bold">
                                New message
                              </span>{" "}
                              from Laur
                            </h6>
                            <p className="text-xs text-secondary mb-0">
                              <i className="fa fa-clock me-1" />
                              13 minutes ago
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        className="dropdown-item border-radius-md"
                        href="javascript:;"
                      >
                        <div className="d-flex py-1">
                          <div className="my-auto">
                            <img
                              src="../assets/img/small-logos/logo-spotify.svg"
                              className="avatar avatar-sm bg-gradient-dark  me-3 "
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="text-sm font-weight-normal mb-1">
                              <span className="font-weight-bold">
                                New album
                              </span>{" "}
                              by Travis Scott
                            </h6>
                            <p className="text-xs text-secondary mb-0">
                              <i className="fa fa-clock me-1" />1 day
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item border-radius-md"
                        href="javascript:;"
                      >
                        <div className="d-flex py-1">
                          <div className="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                            <svg
                              width="12px"
                              height="12px"
                              viewBox="0 0 43 36"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <title>credit-card</title>
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <g
                                  transform="translate(-2169.000000, -745.000000)"
                                  fill="#FFFFFF"
                                  fillRule="nonzero"
                                >
                                  <g transform="translate(1716.000000, 291.000000)">
                                    <g transform="translate(453.000000, 454.000000)">
                                      <path
                                        className="color-background"
                                        d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                        opacity="0.593633743"
                                      />
                                      <path
                                        className="color-background"
                                        d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="text-sm font-weight-normal mb-1">
                              Payment successfully completed
                            </h6>
                            <p className="text-xs text-secondary mb-0">
                              <i className="fa fa-clock me-1" />2 days
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* End Navbar */}
      </div>
      <div
        className="border-radius-xl mt-4 mx-4 position-relative"
        style={{
          backgroundImage: 'url("../assets/img/vr-bg.jpg")',
          backgroundSize: "cover",
        }}
      >
        <Menu />
        <main className="main-content mt-1 border-radius-lg">
          <div className="section min-vh-85 position-relative transform-scale-0 transform-scale-md-7">
            <div className="container">
              <div className="row pt-10">
                <div className="col-lg-1 col-md-1 pt-5 pt-lg-0 ms-lg-5 text-center">
                  <a
                    href="javascript:;"
                    className="avatar avatar-md border-0 d-block mb-2"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="My Profile"
                  >
                    <img
                      className="border-radius-lg"
                      alt="Image placeholder"
                      src="../assets/img/team-1.jpg"
                    />
                  </a>
                  <button
                    className="btn btn-white border-radius-lg p-2 mt-0 mt-md-2 d-block mx-2 mx-md-0"
                    type="button"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Home"
                  >
                    <i className="fas fa-home p-2" />
                  </button>
                  <button
                    className="btn btn-white border-radius-lg p-2 d-block"
                    type="button"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Search"
                  >
                    <i className="fas fa-search p-2" />
                  </button>
                  <button
                    className="btn btn-white border-radius-lg p-2 d-block ms-2 ms-md-0"
                    type="button"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    title="Minimize"
                  >
                    <i className="fas fa-ellipsis-h p-2" />
                  </button>
                </div>
                <div className="col-lg-8 col-md-11">
                  <div className="d-flex">
                    <div className="me-auto">
                      <h1 className="display-1 font-weight-bold mb-0">12°C</h1>
                      <h6 className="text-uppercase mb-0 ms-1">Cloudy</h6>
                    </div>
                    <div className="ms-auto">
                      <img
                        className="w-50 float-end mt-md-n5"
                        src="../assets/img/small-logos/icon-sun-cloud.png"
                        alt="image sun"
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-lg-4 col-md-4">
                      <div className="card move-on-hover overflow-hidden">
                        <div className="card-body">
                          <div className="d-flex">
                            <h6 className="mb-0 me-3">08:00</h6>
                            <h6 className="mb-0">
                              Synk up with Mark
                              <small className="text-secondary font-weight-normal">
                                Hangouts
                              </small>
                            </h6>
                          </div>
                          <hr className="horizontal dark" />
                          <div className="d-flex">
                            <h6 className="mb-0 me-3">09:30</h6>
                            <h6 className="mb-0">
                              Gym <br />
                              <small className="text-secondary font-weight-normal">
                                World Class
                              </small>
                            </h6>
                          </div>
                          <hr className="horizontal dark" />
                          <div className="d-flex">
                            <h6 className="mb-0 me-3">11:00</h6>
                            <h6 className="mb-0">
                              Design Review
                              <br />
                              <small className="text-secondary font-weight-normal">
                                Zoom
                              </small>
                            </h6>
                          </div>
                        </div>
                        <a
                          href="javascript:;"
                          className="bg-gray-100 w-100 text-center py-1"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Show More"
                        >
                          <i className="fas fa-chevron-down text-primary" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 mt-4 mt-sm-0">
                      <div className="card bg-gradient-dark move-on-hover">
                        <div className="card-body">
                          <div className="d-flex">
                            <h5 className="mb-0 text-white">To Do</h5>
                            <div className="ms-auto">
                              <h1 className="text-white text-end mb-0 mt-n2">
                                7
                              </h1>
                              <p className="text-sm mb-0 text-white">items</p>
                            </div>
                          </div>
                          <p className="text-white mb-0">Shopping</p>
                          <p className="mb-0 text-white">Meeting</p>
                        </div>
                        <a
                          href="javascript:;"
                          className="w-100 text-center py-1"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Show More"
                        >
                          <i className="fas fa-chevron-down text-white" />
                        </a>
                      </div>
                      <div className="card move-on-hover mt-4">
                        <div className="card-body">
                          <div className="d-flex">
                            <p className="mb-0">Emails (21)</p>
                            <a
                              href="javascript:;"
                              className="ms-auto"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Check your emails"
                            >
                              Check
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 mt-4 mt-sm-0">
                      <div className="card card-background card-background-mask-primary move-on-hover align-items-start">
                        <div className="cursor-pointer">
                          <div
                            className="full-background"
                            style={{
                              backgroundImage:
                                'url("https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80")',
                            }}
                          />
                          <div className="card-body">
                            <h5 className="text-white mb-0">
                              Some Kind Of Blues
                            </h5>
                            <p className="text-white text-sm">Deftones</p>
                            <div className="d-flex mt-5">
                              <button
                                className="btn btn-outline-white rounded-circle p-2 mb-0"
                                type="button"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Prev"
                              >
                                <i className="fas fa-backward p-2" />
                              </button>
                              <button
                                className="btn btn-outline-white rounded-circle p-2 mx-2 mb-0"
                                type="button"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Pause"
                              >
                                <i className="fas fa-play p-2" />
                              </button>
                              <button
                                className="btn btn-outline-white rounded-circle p-2 mb-0"
                                type="button"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Next"
                              >
                                <i className="fas fa-forward p-2" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card move-on-hover mt-4 mb-4 mb-md-0 mt-md-4">
                        <div className="card-body">
                          <div className="d-flex">
                            <p className="my-auto">Messages</p>
                            <div className="ms-auto">
                              <div className="avatar-group">
                                <a
                                  href="javascript:;"
                                  className="avatar avatar-sm border-0 rounded-circle"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="2 New Messages"
                                >
                                  <img
                                    alt="Image placeholder"
                                    src="../assets/img/team-1.jpg"
                                  />
                                </a>
                                <a
                                  href="javascript:;"
                                  className="avatar avatar-sm border-0 rounded-circle"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="1 New Message"
                                >
                                  <img
                                    alt="Image placeholder"
                                    src="../assets/img/team-2.jpg"
                                  />
                                </a>
                                <a
                                  href="javascript:;"
                                  className="avatar avatar-sm border-0 rounded-circle"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="13 New Messages"
                                >
                                  <img
                                    alt="Image placeholder"
                                    src="../assets/img/team-3.jpg"
                                  />
                                </a>
                                <a
                                  href="javascript:;"
                                  className="avatar avatar-sm border-0 rounded-circle"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="7 New Messages"
                                >
                                  <img
                                    alt="Image placeholder"
                                    src="../assets/img/team-4.jpg"
                                  />
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
            </div>
          </div>
        </main>
      </div>
      <Footer />
      <div className="fixed-plugin">
        <a className="fixed-plugin-button text-dark position-fixed px-3 py-2">
          <i className="fa fa-cog py-2"> </i>
        </a>
        <div className="card shadow-lg">
          <div className="card-header pb-0 pt-3 ">
            <div className="float-start">
              <h5 className="mt-3 mb-0">Argon Configurator</h5>
              <p>See our dashboard options.</p>
            </div>
            <div className="float-end mt-4">
              <button className="btn btn-link text-dark p-0 fixed-plugin-close-button">
                <i className="fa fa-close" />
              </button>
            </div>
            {/* End Toggle Button */}
          </div>
          <hr className="horizontal dark my-1" />
          <div className="card-body pt-sm-3 pt-0 overflow-auto">
            {/* Sidebar Backgrounds */}
            <div>
              <h6 className="mb-0">Sidebar Colors</h6>
            </div>
            <a
              href="javascript:void(0)"
              className="switch-trigger background-color"
            >
              <div className="badge-colors my-2 text-start">
                <span
                  className="badge filter bg-gradient-primary active"
                  data-color="primary"
                  onclick="sidebarColor(this)"
                />
                <span
                  className="badge filter bg-gradient-dark"
                  data-color="dark"
                  onclick="sidebarColor(this)"
                />
                <span
                  className="badge filter bg-gradient-info"
                  data-color="info"
                  onclick="sidebarColor(this)"
                />
                <span
                  className="badge filter bg-gradient-success"
                  data-color="success"
                  onclick="sidebarColor(this)"
                />
                <span
                  className="badge filter bg-gradient-warning"
                  data-color="warning"
                  onclick="sidebarColor(this)"
                />
                <span
                  className="badge filter bg-gradient-danger"
                  data-color="danger"
                  onclick="sidebarColor(this)"
                />
              </div>
            </a>
            {/* Sidenav Type */}
            <div className="mt-3">
              <h6 className="mb-0">Sidenav Type</h6>
              <p className="text-sm">
                Choose between 2 different sidenav types.
              </p>
            </div>
            <div className="d-flex">
              <button
                className="btn bg-gradient-primary w-100 px-3 mb-2 active me-2"
                data-class="bg-white"
                onclick="sidebarType(this)"
              >
                White
              </button>
              <button
                className="btn bg-gradient-primary w-100 px-3 mb-2"
                data-class="bg-default"
                onclick="sidebarType(this)"
              >
                Dark
              </button>
            </div>
            <p className="text-sm d-xl-none d-block mt-2">
              You can change the sidenav type just on desktop view.
            </p>
            {/* Navbar Fixed */}
            <div className="d-flex my-3">
              <h6 className="mb-0">Navbar Fixed</h6>
              <div className="form-check form-switch ps-0 ms-auto my-auto">
                <input
                  className="form-check-input mt-1 ms-auto"
                  type="checkbox"
                  id="navbarFixed"
                  onclick="navbarFixed(this)"
                />
              </div>
            </div>
            <hr className="horizontal dark my-sm-4" />
            <div className="mt-2 mb-5 d-flex">
              <h6 className="mb-0">Light / Dark</h6>
              <div className="form-check form-switch ps-0 ms-auto my-auto">
                <input
                  className="form-check-input mt-1 ms-auto"
                  type="checkbox"
                  id="dark-version"
                  onclick="darkMode(this)"
                />
              </div>
            </div>
            <a
              className="btn bg-gradient-dark w-100"
              href="https://www.creative-tim.com/product/argon-dashboard"
            >
              Free Download
            </a>
            <a
              className="btn btn-outline-dark w-100"
              href="https://www.creative-tim.com/learning-lab/bootstrap/license/argon-dashboard"
            >
              View documentation
            </a>
            <div className="w-100 text-center">
              <a
                className="github-button"
                href="https://github.com/creativetimofficial/argon-dashboard"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star creativetimofficial/argon-dashboard on GitHub"
              >
                Star
              </a>
              <h6 className="mt-3">Thank you for sharing!</h6>
              <a
                href="https://twitter.com/intent/tweet?text=Check%20Argon%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fargon-dashboard"
                className="btn btn-dark mb-0 me-2"
                target="_blank"
              >
                <i className="fab fa-twitter me-1" aria-hidden="true" /> Tweet
              </a>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/argon-dashboard"
                className="btn btn-dark mb-0 me-2"
                target="_blank"
              >
                <i className="fab fa-facebook-square me-1" aria-hidden="true" />{" "}
                Share
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*   Core JS Files   */}
      {/* Github buttons */}
      {/* Control Center for Soft Dashboard: parallax effects, scripts for the example pages etc */}
    </div>
  );
}
export default VirtualReality;
