/* eslint-disable @next/next/no-img-element */
import Menus from './Menus'

const Menu = () => {
    return (
        <div className="rbt-header-wrapper header-space-betwween bg-color-white header-sticky">
            <div className="container-fluid">
                <div className="mainbar-row rbt-navigation-start align-items-center">
                    <div className="header-left">
                        <div className="logo">
                            <a href="index.html">
                                <img src="/assets/images/logo/logo.png" alt="Education Logo Images" />
                            </a>
                        </div>
                    </div>
                    <div className="rbt-main-navigation d-none d-xl-block">
                        <Menus />
                    </div>
                    <div className="header-right">
                        {/* Navbar Icons */}
                        <ul className="quick-access">
                            <li className="access-icon rbt-user-wrapper right-align-dropdown">
                                <a className="rbt-round-btn" href="#">
                                    <i className="feather-user" />
                                </a>
                                <div className="rbt-user-menu-list-wrapper">
                                    <div className="inner">
                                        <div className="rbt-admin-profile">
                                            <div className="admin-thumbnail">
                                                <img src="assets/images/team/avatar.jpg" alt="User Images" />
                                            </div>
                                            <div className="admin-info">
                                                <span className="name">Nipa Bali</span>
                                                <a className="rbt-btn-link color-primary" href="profile.html">View Profile</a>
                                            </div>
                                        </div>
                                        <ul className="user-list-wrapper">
                                            <li>
                                                <a href="instructor-dashboard.html">
                                                    <i className="feather-home" />
                                                    <span>My Dashboard</span>
                                                </a>
                                            </li>


                                        </ul>
                                        <hr className="mt--10 mb--10" />
                                        <ul className="user-list-wrapper">

                                            <li>
                                                <a href="index.html">
                                                    <i className="feather-log-out" />
                                                    <span>Logout</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>

                            <li className="access-icon">
                                <a className="search-trigger-active rbt-round-btn" href="#">
                                    <i className="feather-search" />
                                </a>
                            </li>
                        </ul>
                        {/* Start Mobile-Menu-Bar */}
                        <div className="mobile-menu-bar d-block d-xl-none">
                            <div className="hamberger">
                                <button className="hamberger-button rbt-round-btn">
                                    <i className="feather-menu" />
                                </button>
                            </div>
                        </div>
                        {/* Start Mobile-Menu-Bar */}
                    </div>
                </div>
            </div>
            {/* Start Search Dropdown  */}
            <div className="rbt-search-dropdown">
                <div className="wrapper">
                    <div className="row">
                        <div className="col-lg-12">
                            <form>
                                <input type="text" placeholder="What are you looking for?" />
                                <div className="submit-btn">
                                    <a className="rbt-btn btn-gradient btn-md" href="#">Search</a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="rbt-separator-mid">
                        <hr className="rbt-separator m-0" />
                    </div>
                    <div className="row g-4 pt--30 pb--60">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h5 className="rbt-title-style-2">Our Top Course</h5>
                            </div>
                        </div>
                        {/* Start Single Card  */}
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="rbt-card variation-01 rbt-hover">
                                <div className="rbt-card-img">
                                    <a href="course-details.html">
                                        <img src="assets/images/course/course-online-01.jpg" alt="Card image" />
                                    </a>
                                </div>
                                <div className="rbt-card-body">
                                    <h5 className="rbt-card-title"><a href="course-details.html">React Js</a>
                                    </h5>
                                    <div className="rbt-review">
                                        <div className="rating">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                        <span className="rating-count"> (15 Reviews)</span>
                                    </div>
                                    <div className="rbt-card-bottom">
                                        <div className="rbt-price">
                                            <span className="current-price">$15</span>
                                            <span className="off-price">$25</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Single Card  */}
                    </div>
                </div>
            </div>
            {/* End Search Dropdown  */}
        </div>
    )
}

export default Menu