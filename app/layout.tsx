// template css
import '@/public/assets/css/vendor/bootstrap.min.css'
import '@/public/assets/css/vendor/slick.css'
import '@/public/assets/css/vendor/slick-theme.css'
import '@/public/assets/css/plugins/sal.css'
import '@/public/assets/css/plugins/feather.css'
import '@/public/assets/css/plugins/fontawesome.min.css'
import '@/public/assets/css/plugins/euclid-circulara.css'
import '@/public/assets/css/plugins/swiper.css'
import '@/public/assets/css/plugins/magnify.css'
import '@/public/assets/css/plugins/odometer.css'
import '@/public/assets/css/plugins/animation.css'
import '@/public/assets/css/plugins/bootstrap-select.min.css'
import '@/public/assets/css/plugins/jquery-ui.css'
import '@/public/assets/css/plugins/magnigy-popup.min.css'
import '@/public/assets/css/plugins/plyr.css'
import '@/public/assets/css/style.css'
// global css
import '@/styles/globals.css';

import Script from 'next/script';

export const metadata = {
  title: 'Binary SUST',
  description: 'Technology for real life',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='rbt-header-sticky'>

        <header className="rbt-header rbt-header-4">
          <div className="rbt-sticky-placeholder" />
          {/* Start Header Top */}
          <div className="rbt-header-top rbt-header-top-1 variation-height-50 header-space-betwween bg-color-white border-top-bar-primary-color rbt-border-bottom d-none d-xl-block">
            <div className="container-fluid">
              <div className="rbt-header-sec align-items-center ">
                <div className="rbt-header-sec-col rbt-header-left">
                  <div className="rbt-header-content">
                    <div className="header-info">
                      <ul className="rbt-information-list">
                        <li>
                          <a href="#"><i className="feather-phone" />+1-202-555-0174</a>
                        </li>
                      </ul>
                    </div>
                    <div className="rbt-separator" />
                    <div className="header-info">
                      <ul className="social-share-transparent">
                        <li>
                          <a href="#"><i className="fab fa-facebook-f" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="fab fa-twitter" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="fab fa-linkedin-in" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="fab fa-instagram" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="fab fa-skype" /></a>
                        </li>
                        <li>
                          <a href="#"><i className="fab fa-youtube" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="rbt-header-sec-col rbt-header-right">
                  <div className="rbt-header-content">
                    <div className="header-info">
                      <ul className="rbt-secondary-menu">
                        <li><a href="my-account.html">My Account</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                        <li><a href="privacy-policy.html">Privacy Policy</a></li>
                        <li><a href="#">Terms &amp; Condition</a></li>
                      </ul>
                    </div>
                    <div className="rbt-separator" />
                    <div className="header-info">
                      <div className="header-right-btn d-flex">
                        <a className="rbt-btn rbt-switch-btn btn-gradient btn-xs" href="#">
                          <span data-text="Join Now">Join Now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Header Top */}
          <div className="rbt-header-wrapper header-space-betwween bg-color-white header-sticky">
            <div className="container-fluid">
              <div className="mainbar-row rbt-navigation-start align-items-center">
                <div className="header-left">
                  <div className="logo">
                    <a href="index.html">
                      <img src="assets/images/logo/logo.png" alt="Education Logo Images" />
                    </a>
                  </div>
                </div>
                <div className="rbt-main-navigation d-none d-xl-block">
                  <nav className="mainmenu-nav">
                    <ul className="mainmenu">
                      <li className="with-megamenu has-menu-child-item position-static">
                        <a href="#">Home <i className="feather-chevron-down" /></a>
                        {/* Start Mega Menu  */}
                        <div className="rbt-megamenu menu-skin-dark">
                          <div className="wrapper">
                            <div className="row row--15 home-plesentation-wrapper single-dropdown-menu-presentation">
                              {/* Start Single Demo  */}
                              <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                                <div className="demo-single">
                                  <div className="inner">
                                    <div className="thumbnail">
                                      <a href="01-main-demo.html"><img src="assets/images/splash/demo/h1.jpg" alt="Demo Images" /></a>
                                    </div>
                                    <div className="content">
                                      <h4 className="title"><a href="01-main-demo.html">Home Demo <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* End Single Demo  */}
                              {/* Start Single Demo  */}
                              <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                                <div className="demo-single">
                                  <div className="inner">
                                    <div className="thumbnail">
                                      <a href="12-marketplace.html"><img src="assets/images/splash/demo/h12.jpg" alt="Demo Images" /></a>
                                    </div>
                                    <div className="content">
                                      <h4 className="title"><a href="12-marketplace.html">Marketplace <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* End Single Demo  */}
                              {/* Start Single Demo  */}
                              <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                                <div className="demo-single">
                                  <div className="inner">
                                    <div className="thumbnail">
                                      <a href="04-kindergarten.html"><img src="assets/images/splash/demo/h4.jpg" alt="Demo Images" /></a>
                                    </div>
                                    <div className="content">
                                      <h4 className="title"><a href="04-kindergarten.html">kindergarten <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* End Single Demo  */}
                              {/* Start Single Demo  */}
                              <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                                <div className="demo-single">
                                  <div className="inner">
                                    <div className="thumbnail">
                                      <a href="13-university-classic.html"><img src="assets/images/splash/demo/h13.jpg" alt="Demo Images" /></a>
                                    </div>
                                    <div className="content">
                                      <h4 className="title"><a href="13-university-classic.html">University Classic <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* End Single Demo  */}
                              {/* Start Single Demo  */}
                              <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                                <div className="demo-single">
                                  <div className="inner">
                                    <div className="thumbnail">
                                      <a href="14-home-elegant.html"><img src="assets/images/splash/demo/h14.jpg" alt="Demo Images" /></a>
                                    </div>
                                    <div className="content">
                                      <h4 className="title"><a href="14-home-elegant.html">Home Elegant <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* End Single Demo  */}
                              {/* Start Single Demo  */}
                              <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                                <div className="demo-single">
                                  <div className="inner">
                                    <div className="thumbnail">
                                      <a href="09-gym-coaching.html"><img src="assets/images/splash/demo/h9.jpg" alt="Demo Images" /></a>
                                    </div>
                                    <div className="content">
                                      <h4 className="title"><a href="09-gym-coaching.html">Gym Coaching <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* End Single Demo  */}
                              {/* Start Single Demo  */}
                              <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                                <div className="demo-single">
                                  <div className="inner">
                                    <div className="thumbnail">
                                      <a href="03-online-school.html"><img src="assets/images/splash/demo/h3.jpg" alt="Demo Images" /></a>
                                    </div>
                                    <div className="content">
                                      <h4 className="title"><a href="03-online-school.html">Online School <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* End Single Demo  */}
                              {/* Start Single Demo  */}
                              <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                                <div className="demo-single">
                                  <div className="inner">
                                    <div className="thumbnail">
                                      <a href="06-university-status.html"><img src="assets/images/splash/demo/h6.jpg" alt="Demo Images" /></a>
                                    </div>
                                    <div className="content">
                                      <h4 className="title"><a href="06-university-status.html">University Status <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* End Single Demo  */}
                              {/* Start Single Demo  */}
                              <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                                <div className="demo-single">
                                  <div className="inner">
                                    <div className="thumbnail">
                                      <a href="15-home-technology.html"><img src="assets/images/splash/demo/h15.jpg" alt="Demo Images" /></a>
                                    </div>
                                    <div className="content">
                                      <h4 className="title"><a href="15-home-technology.html">Home Technology <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* End Single Demo  */}
                              {/* Start Single Demo  */}
                              <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                                <div className="demo-single">
                                  <div className="inner">
                                    <div className="thumbnail">
                                      <a href="07-instructor-portfolio.html"><img src="assets/images/splash/demo/h7.jpg" alt="Demo Images" /></a>
                                    </div>
                                    <div className="content">
                                      <h4 className="title"><a href="07-instructor-portfolio.html">Instructor Portfolio <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* End Single Demo  */}
                              {/* Start Single Demo  */}
                              <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                                <div className="demo-single">
                                  <div className="inner">
                                    <div className="thumbnail">
                                      <a href="08-language-academy.html"><img src="assets/images/splash/demo/h8.jpg" alt="Demo Images" /></a>
                                    </div>
                                    <div className="content">
                                      <h4 className="title"><a href="08-language-academy.html">Language Academy <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* End Single Demo  */}
                              {/* Start Single Demo  */}
                              <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                                <div className="demo-single">
                                  <div className="inner">
                                    <div className="thumbnail">
                                      <a href="11-single-course.html"><img src="assets/images/splash/demo/h11.jpg" alt="Demo Images" /></a>
                                    </div>
                                    <div className="content">
                                      <h4 className="title"><a href="11-single-course.html">Single Course <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* End Single Demo  */}
                              {/* Start Single Demo  */}
                              <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                                <div className="demo-single">
                                  <div className="inner">
                                    <div className="thumbnail">
                                      <a href="10-online-course.html"><img src="assets/images/splash/demo/h10.jpg" alt="Demo Images" /></a>
                                    </div>
                                    <div className="content">
                                      <h4 className="title"><a href="10-online-course.html">Online Course <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* End Single Demo  */}
                              {/* Start Single Demo  */}
                              <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                                <div className="demo-single">
                                  <div className="inner">
                                    <div className="thumbnail">
                                      <a href="05-classic-lms.html"><img src="assets/images/splash/demo/h5.jpg" alt="Demo Images" /></a>
                                    </div>
                                    <div className="content">
                                      <h4 className="title"><a href="05-classic-lms.html">Classic Lms <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* End Single Demo  */}
                              {/* Start Single Demo  */}
                              <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                                <div className="demo-single">
                                  <div className="inner">
                                    <div className="thumbnail">
                                      <a href="02-course-school.html"><img src="assets/images/splash/demo/h2.jpg" alt="Demo Images" /></a>
                                    </div>
                                    <div className="content">
                                      <h4 className="title"><a href="02-course-school.html">Course School <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* End Single Demo  */}
                              {/* Start Single Demo  */}
                              <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item coming-soon">
                                <div className="demo-single">
                                  <div className="inner">
                                    <div className="thumbnail">
                                      <a href="#"><img src="assets/images/splash/demo/coming-soon-1.png" alt="Demo Images" /></a>
                                    </div>
                                    <div className="content">
                                      <h4 className="title"><a href="#">Coming Soon <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* End Single Demo  */}
                              {/* Start Single Demo  */}
                              <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item coming-soon">
                                <div className="demo-single">
                                  <div className="inner">
                                    <div className="thumbnail">
                                      <a href="#"><img src="assets/images/splash/demo/coming-soon-2.png" alt="Demo Images" /></a>
                                    </div>
                                    <div className="content">
                                      <h4 className="title"><a href="#">Coming Soon 2 <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* End Single Demo  */}
                              {/* Start Single Demo  */}
                              <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item coming-soon">
                                <div className="demo-single">
                                  <div className="inner">
                                    <div className="thumbnail">
                                      <a href="#"><img src="assets/images/splash/demo/coming-soon-3.png" alt="Demo Images" /></a>
                                    </div>
                                    <div className="content">
                                      <h4 className="title"><a href="#">Coming Soon 3 <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* End Single Demo  */}
                            </div>
                            <div className="load-demo-btn text-center">
                              <a className="rbt-btn-link color-white" href="#">Scroll to view more <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                              </svg></a>
                            </div>
                          </div>
                        </div>
                        {/* End Mega Menu  */}
                      </li>
                      <li className="with-megamenu has-menu-child-item">
                        <a href="#">Courses <i className="feather-chevron-down" /></a>
                        {/* Start Mega Menu  */}
                        <div className="rbt-megamenu grid-item-2">
                          <div className="wrapper">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="mega-top-banner">
                                  <div className="content">
                                    <h4 className="title">Developer hub</h4>
                                    <p className="description">Start building fast, with code samples, key resources and more.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row row--15">
                              <div className="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
                                <h3 className="rbt-short-title">Course Layout</h3>
                                <ul className="mega-menu-item">
                                  <li><a href="course-filter-one-toggle.html">Filter One Toggle</a></li>
                                  <li><a href="course-filter-one-open.html">Filter One Open</a></li>
                                  <li><a href="course-filter-two-toggle.html">Filter Two Toggle</a></li>
                                  <li><a href="course-filter-two-open.html">Filter Two Open</a></li>
                                  <li><a href="course-with-tab.html">Course With Tab</a></li>
                                  <li><a href="course-with-tab-two.html">Course With Tab Two</a></li>
                                  <li><a href="course-card-2.html">Course Card Two</a></li>
                                </ul>
                              </div>
                              <div className="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
                                <h3 className="rbt-short-title">Course Layout</h3>
                                <ul className="mega-menu-item">
                                  <li><a href="course-card-3.html">Course Card Three</a></li>
                                  <li><a href="course-masonry.html">Course Masonry</a></li>
                                  <li><a href="course-with-sidebar.html">Course With Sidebar</a></li>
                                  <li><a href="course-details.html">Course Details</a></li>
                                  <li><a href="course-details-2.html">Course Details Two</a></li>
                                  <li><a href="lesson.html">Course Lesson <span className="rbt-badge-card">New</span></a></li>
                                  <li><a href="create-course.html">Create Course <span className="rbt-badge-card">New</span></a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-12">
                                <ul className="nav-quick-access">
                                  <li><a href="#"><i className="feather-folder-minus" /> Quick Start Guide</a></li>
                                  <li><a href="#"><i className="feather-folder-minus" /> For Open Source</a></li>
                                  <li><a href="#"><i className="feather-folder-minus" /> API Status</a></li>
                                  <li><a href="#"><i className="feather-folder-minus" /> Support</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Mega Menu  */}
                      </li>
                      <li className="has-dropdown has-menu-child-item">
                        <a href="#">Dashboard
                          <i className="feather-chevron-down" />
                        </a>
                        <ul className="submenu">
                          <li className="has-dropdown"><a href="#">Instructor Dashboard</a>
                            <ul className="submenu">
                              <li><a href="instructor-dashboard.html">Dashboard</a></li>
                              <li><a href="instructor-profile.html">Profile</a></li>
                              <li><a href="instructor-enrolled-courses.html">Enrolled Courses</a></li>
                              <li><a href="instructor-wishlist.html">Wishlist</a></li>
                              <li><a href="instructor-reviews.html">Reviews</a></li>
                              <li><a href="instructor-my-quiz-attempts.html">My Quiz Attempts</a></li>
                              <li><a href="instructor-order-history.html">Order History</a></li>
                              <li><a href="instructor-course.html">My Course</a></li>
                              <li><a href="instructor-announcements.html">Announcements</a></li>
                              <li><a href="instructor-quiz-attempts.html">Quiz Attempts</a></li>
                              <li><a href="instructor-assignments.html">Assignments</a></li>
                              <li><a href="instructor-settings.html">Settings</a></li>
                            </ul>
                          </li>
                          <li className="has-dropdown"><a href="#">Student Dashboard</a>
                            <ul className="submenu">
                              <li><a href="student-dashboard.html">Dashboard</a></li>
                              <li><a href="student-profile.html">Profile</a></li>
                              <li><a href="student-enrolled-courses.html">Enrolled Courses</a></li>
                              <li><a href="student-wishlist.html">Wishlist</a></li>
                              <li><a href="student-reviews.html">Reviews</a></li>
                              <li><a href="student-my-quiz-attempts.html">My Quiz Attempts</a></li>
                              <li><a href="student-order-history.html">Order History</a></li>
                              <li><a href="student-settings.html">Settings</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="with-megamenu has-menu-child-item position-static">
                        <a href="#">Pages <i className="feather-chevron-down" /></a>
                        {/* Start Mega Menu  */}
                        <div className="rbt-megamenu grid-item-4">
                          <div className="wrapper">
                            <div className="row row--15">
                              <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                                <h3 className="rbt-short-title">Get Started</h3>
                                <ul className="mega-menu-item">
                                  <li><a href="about-us-01.html">About Us</a></li>
                                  <li><a href="about-us-02.html">About Us 02</a></li>
                                  <li><a href="event-grid.html">Event Grid</a></li>
                                  <li><a href="event-list.html">Event List</a></li>
                                  <li><a href="event-sidebar.html">Event Sidebar</a></li>
                                  <li><a href="event-details.html">Event Details</a></li>
                                  <li><a href="academy-gallery.html">Academy Gallery</a></li>
                                  <li><a href="admission-guide.html">Admission Guide</a></li>
                                </ul>
                              </div>
                              <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                                <h3 className="rbt-short-title">Get Started</h3>
                                <ul className="mega-menu-item">
                                  <li><a href="profile.html">Profile</a></li>
                                  <li><a href="contact.html">Contact Us</a></li>
                                  <li><a href="become-a-teacher.html">Become a Teacher</a></li>
                                  <li><a href="instructor.html">Instructor</a></li>
                                  <li><a href="faqs.html">FAQS</a></li>
                                  <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                  <li><a href="404.html">404 Page</a></li>
                                  <li><a href="maintenance.html">Maintenance</a></li>
                                </ul>
                              </div>
                              <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                                <h3 className="rbt-short-title">Shop Pages</h3>
                                <ul className="mega-menu-item">
                                  <li><a href="shop.html">Shop <span className="rbt-badge-card">Sale Anything</span></a></li>
                                  <li><a href="single-product.html">Single Product</a></li>
                                  <li><a href="cart.html">Cart Page</a></li>
                                  <li><a href="checkout.html">Checkout</a></li>
                                  <li><a href="wishlist.html">Wishlist Page</a></li>
                                  <li><a href="my-account.html">My Acount</a></li>
                                  <li><a href="login.html">Login &amp; Register</a></li>
                                  <li><a href="subscription.html">Subscription</a></li>
                                </ul>
                              </div>
                              <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                                <div className="mega-category-item">
                                  {/* Start Single Category  */}
                                  <div className="nav-category-item">
                                    <div className="thumbnail">
                                      <div className="image"><img src="assets/images/course/category-2.png" alt="Course images" /></div>
                                      <a href="course-filter-one-toggle.html">
                                        <span>Online Education</span>
                                        <i className="feather-chevron-right" />
                                      </a>
                                    </div>
                                  </div>
                                  {/* End Single Category  */}
                                  {/* Start Single Category  */}
                                  <div className="nav-category-item">
                                    <div className="thumbnail">
                                      <div className="image"><img src="assets/images/course/category-1.png" alt="Course images" /></div>
                                      <a href="course-filter-one-toggle.html">
                                        <span>Language Club</span>
                                        <i className="feather-chevron-right" />
                                      </a>
                                    </div>
                                  </div>
                                  {/* End Single Category  */}
                                  {/* Start Single Category  */}
                                  <div className="nav-category-item">
                                    <div className="thumbnail">
                                      <div className="image"><img src="assets/images/course/category-4.png" alt="Course images" /></div>
                                      <a href="course-filter-one-toggle.html">
                                        <span>University Status</span>
                                        <i className="feather-chevron-right" />
                                      </a>
                                    </div>
                                  </div>
                                  {/* End Single Category  */}
                                  {/* Start Single Category  */}
                                  <div className="nav-category-item">
                                    <div className="thumbnail">
                                      <a href="course-filter-one-toggle.html">
                                        <span>Course School</span>
                                        <i className="feather-chevron-right" />
                                      </a>
                                    </div>
                                  </div>
                                  {/* End Single Category  */}
                                  {/* Start Single Category  */}
                                  <div className="nav-category-item">
                                    <div className="thumbnail">
                                      <div className="image"><img src="assets/images/course/category-9.png" alt="Course images" /></div>
                                      <a href="course-filter-one-toggle.html">
                                        <span>Academy</span>
                                        <i className="feather-chevron-right" />
                                      </a>
                                    </div>
                                  </div>
                                  {/* End Single Category  */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Mega Menu  */}
                      </li>
                      <li className="with-megamenu has-menu-child-item position-static">
                        <a href="#">Elements <i className="feather-chevron-down" /></a>
                        {/* Start Mega Menu  */}
                        <div className="rbt-megamenu grid-item-3">
                          <div className="wrapper">
                            <div className="row row--15 single-dropdown-menu-presentation">
                              <div className="col-lg-4 col-xxl-4 single-mega-item">
                                <ul className="mega-menu-item">
                                  <li><a href="style-guide.html">Style Guide <span className="rbt-badge-card">Hot</span></a></li>
                                  <li><a href="accordion.html">Accordion</a></li>
                                  <li><a href="advancetab.html">Advance Tab</a></li>
                                  <li><a href="brand.html">Brand</a></li>
                                  <li><a href="button.html">Button</a></li>
                                  <li><a href="badge.html">Badge</a></li>
                                  <li><a href="card.html">Card</a></li>
                                  <li><a href="call-to-action.html">Call To Action</a></li>
                                </ul>
                              </div>
                              <div className="col-lg-4 col-xxl-4 single-mega-item">
                                <ul className="mega-menu-item">
                                  <li><a href="counterup.html">Counter</a></li>
                                  <li><a href="category.html">Categories</a></li>
                                  <li><a href="header.html">Header Style</a></li>
                                  <li><a href="newsletter.html">Newsletter</a></li>
                                  <li><a href="team.html">Team</a></li>
                                  <li><a href="social.html">Social</a></li>
                                  <li><a href="list-style.html">List Style</a></li>
                                  <li><a href="gallery.html">Gallery</a></li>
                                </ul>
                              </div>
                              <div className="col-lg-4 col-xxl-4 single-mega-item">
                                <ul className="mega-menu-item">
                                  <li><a href="pricing.html">Pricing</a></li>
                                  <li><a href="progressbar.html">Progressbar</a></li>
                                  <li><a href="testimonial.html">Testimonial</a></li>
                                  <li><a href="service.html">Service</a></li>
                                  <li><a href="split.html">Split Area</a></li>
                                  <li><a href="search.html">Search Style</a></li>
                                  <li><a href="instagram.html">Instagram Style</a></li>
                                  <li><a href="#">&amp; More Coming</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="btn-wrapper">
                                  <a className="rbt-btn btn-gradient hover-icon-reverse square btn-xl w-100 text-center mt--30 hover-transform-none" href="#">
                                    <span className="icon-reverse-wrapper">
                                      <span className="btn-text">Visit Histudy Template</span>
                                      <span className="btn-icon"><i className="feather-arrow-right" /></span>
                                      <span className="btn-icon"><i className="feather-arrow-right" /></span>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Mega Menu  */}
                      </li>
                      <li className="with-megamenu has-menu-child-item position-static">
                        <a href="#">Blog <i className="feather-chevron-down" /></a>
                        {/* Start Mega Menu  */}
                        <div className="rbt-megamenu grid-item-3">
                          <div className="wrapper">
                            <div className="row row--15">
                              <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                                <h3 className="rbt-short-title">Blog Styles</h3>
                                <ul className="mega-menu-item">
                                  <li><a href="blog-list.html">Blog List</a></li>
                                  <li><a href="blog.html">Blog Grid</a></li>
                                  <li><a href="blog-grid-minimal.html">Blog Grid Minimal</a></li>
                                  <li><a href="blog-with-sidebar.html">Blog With Sidebar</a></li>
                                  <li><a href="blog-details.html">Blog Details</a></li>
                                  <li><a href="post-format-standard.html">Post Format Standard</a></li>
                                  <li><a href="post-format-gallery.html">Post Format Gallery</a></li>
                                </ul>
                              </div>
                              <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                                <h3 className="rbt-short-title">Get Started</h3>
                                <ul className="mega-menu-item">
                                  <li><a href="post-format-quote.html">Post Format Quote</a></li>
                                  <li><a href="post-format-audio.html">Post Format Audio</a></li>
                                  <li><a href="post-format-video.html">Post Format Video</a></li>
                                  <li><a href="#">Media Under Title <span className="rbt-badge-card">Coming</span></a></li>
                                  <li><a href="#">Sticky Sidebar <span className="rbt-badge-card">Coming</span></a></li>
                                  <li><a href="#">Auto Masonry <span className="rbt-badge-card">Coming</span></a></li>
                                  <li><a href="#">Meta Overlaid <span className="rbt-badge-card">Coming</span></a></li>
                                </ul>
                              </div>
                              <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                                <div className="rbt-ads-wrapper">
                                  <a className="d-block" href="#"><img src="assets/images/service/mobile-cat.jpg" alt="Education Images" /></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Mega Menu  */}
                      </li>
                    </ul>
                  </nav>
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
                            <li>
                              <a href="#">
                                <i className="feather-bookmark" />
                                <span>Bookmark</span>
                              </a>
                            </li>
                            <li>
                              <a href="instructor-enrolled-courses.html">
                                <i className="feather-shopping-bag" />
                                <span>Enrolled Courses</span>
                              </a>
                            </li>
                            <li>
                              <a href="instructor-wishlist.html">
                                <i className="feather-heart" />
                                <span>Wishlist</span>
                              </a>
                            </li>
                            <li>
                              <a href="instructor-reviews.html">
                                <i className="feather-star" />
                                <span>Reviews</span>
                              </a>
                            </li>
                            <li>
                              <a href="instructor-my-quiz-attempts.html">
                                <i className="feather-list" />
                                <span>My Quiz Attempts</span>
                              </a>
                            </li>
                            <li>
                              <a href="instructor-order-history.html">
                                <i className="feather-clock" />
                                <span>Order History</span>
                              </a>
                            </li>
                            <li>
                              <a href="instructor-quiz-attempts.html">
                                <i className="feather-message-square" />
                                <span>Question &amp; Answer</span>
                              </a>
                            </li>
                          </ul>
                          <hr className="mt--10 mb--10" />
                          <ul className="user-list-wrapper">
                            <li>
                              <a href="#">
                                <i className="feather-book-open" />
                                <span>Getting Started</span>
                              </a>
                            </li>
                          </ul>
                          <hr className="mt--10 mb--10" />
                          <ul className="user-list-wrapper">
                            <li>
                              <a href="instructor-settings.html">
                                <i className="feather-settings" />
                                <span>Settings</span>
                              </a>
                            </li>
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
                    <li className="access-icon rbt-mini-cart">
                      <a className="rbt-cart-sidenav-activation rbt-round-btn" href="#">
                        <i className="feather-shopping-cart" />
                        <span className="rbt-cart-count">4</span>
                      </a>
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
                    <form action="#">
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
                  {/* Start Single Card  */}
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div className="rbt-card variation-01 rbt-hover">
                      <div className="rbt-card-img">
                        <a href="course-details.html">
                          <img src="assets/images/course/course-online-02.jpg" alt="Card image" />
                        </a>
                      </div>
                      <div className="rbt-card-body">
                        <h5 className="rbt-card-title"><a href="course-details.html">Java Program</a>
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
                            <span className="current-price">$10</span>
                            <span className="off-price">$40</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Single Card  */}
                  {/* Start Single Card  */}
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div className="rbt-card variation-01 rbt-hover">
                      <div className="rbt-card-img">
                        <a href="course-details.html">
                          <img src="assets/images/course/course-online-03.jpg" alt="Card image" />
                        </a>
                      </div>
                      <div className="rbt-card-body">
                        <h5 className="rbt-card-title"><a href="course-details.html">Web Design</a>
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
                            <span className="current-price">$10</span>
                            <span className="off-price">$20</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Single Card  */}
                  {/* Start Single Card  */}
                  <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div className="rbt-card variation-01 rbt-hover">
                      <div className="rbt-card-img">
                        <a href="course-details.html">
                          <img src="assets/images/course/course-online-04.jpg" alt="Card image" />
                        </a>
                      </div>
                      <div className="rbt-card-body">
                        <h5 className="rbt-card-title"><a href="course-details.html">Web Design</a>
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
                            <span className="current-price">$20</span>
                            <span className="off-price">$40</span>
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
        </header>
        {/* Mobile Menu Section */}
        <div className="popup-mobile-menu">
          <div className="inner-wrapper">
            <div className="inner-top">
              <div className="content">
                <div className="logo">
                  <a href="index.html">
                    <img src="assets/images/logo/logo.png" alt="Education Logo Images" />
                  </a>
                </div>
                <div className="rbt-btn-close">
                  <button className="close-button rbt-round-btn"><i className="feather-x" /></button>
                </div>
              </div>
              <p className="description">Histudy is a education website template. You can customize all.</p>
              <ul className="navbar-top-left rbt-information-list justify-content-start">
                <li>
                  <a href="mailto:hello@example.com"><i className="feather-mail" />example@gmail.com</a>
                </li>
                <li>
                  <a href="#"><i className="feather-phone" />(302) 555-0107</a>
                </li>
              </ul>
            </div>
            <nav className="mainmenu-nav">
              <ul className="mainmenu">
                <li className="with-megamenu has-menu-child-item position-static">
                  <a href="#">Home <i className="feather-chevron-down" /></a>
                  {/* Start Mega Menu  */}
                  <div className="rbt-megamenu menu-skin-dark">
                    <div className="wrapper">
                      <div className="row row--15 home-plesentation-wrapper single-dropdown-menu-presentation">
                        {/* Start Single Demo  */}
                        <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                          <div className="demo-single">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="01-main-demo.html"><img src="assets/images/splash/demo/h1.jpg" alt="Demo Images" /></a>
                              </div>
                              <div className="content">
                                <h4 className="title"><a href="01-main-demo.html">Home Demo <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Demo  */}
                        {/* Start Single Demo  */}
                        <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                          <div className="demo-single">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="12-marketplace.html"><img src="assets/images/splash/demo/h12.jpg" alt="Demo Images" /></a>
                              </div>
                              <div className="content">
                                <h4 className="title"><a href="12-marketplace.html">Marketplace <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Demo  */}
                        {/* Start Single Demo  */}
                        <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                          <div className="demo-single">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="04-kindergarten.html"><img src="assets/images/splash/demo/h4.jpg" alt="Demo Images" /></a>
                              </div>
                              <div className="content">
                                <h4 className="title"><a href="04-kindergarten.html">kindergarten <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Demo  */}
                        {/* Start Single Demo  */}
                        <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                          <div className="demo-single">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="13-university-classic.html"><img src="assets/images/splash/demo/h13.jpg" alt="Demo Images" /></a>
                              </div>
                              <div className="content">
                                <h4 className="title"><a href="13-university-classic.html">University Classic <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Demo  */}
                        {/* Start Single Demo  */}
                        <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                          <div className="demo-single">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="14-home-elegant.html"><img src="assets/images/splash/demo/h14.jpg" alt="Demo Images" /></a>
                              </div>
                              <div className="content">
                                <h4 className="title"><a href="14-home-elegant.html">Home Elegant <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Demo  */}
                        {/* Start Single Demo  */}
                        <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                          <div className="demo-single">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="09-gym-coaching.html"><img src="assets/images/splash/demo/h9.jpg" alt="Demo Images" /></a>
                              </div>
                              <div className="content">
                                <h4 className="title"><a href="09-gym-coaching.html">Gym Coaching <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Demo  */}
                        {/* Start Single Demo  */}
                        <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                          <div className="demo-single">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="03-online-school.html"><img src="assets/images/splash/demo/h3.jpg" alt="Demo Images" /></a>
                              </div>
                              <div className="content">
                                <h4 className="title"><a href="03-online-school.html">Online School <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Demo  */}
                        {/* Start Single Demo  */}
                        <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                          <div className="demo-single">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="06-university-status.html"><img src="assets/images/splash/demo/h6.jpg" alt="Demo Images" /></a>
                              </div>
                              <div className="content">
                                <h4 className="title"><a href="06-university-status.html">University Status <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Demo  */}
                        {/* Start Single Demo  */}
                        <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                          <div className="demo-single">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="15-home-technology.html"><img src="assets/images/splash/demo/h15.jpg" alt="Demo Images" /></a>
                              </div>
                              <div className="content">
                                <h4 className="title"><a href="15-home-technology.html">Home Technology <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Demo  */}
                        {/* Start Single Demo  */}
                        <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                          <div className="demo-single">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="07-instructor-portfolio.html"><img src="assets/images/splash/demo/h7.jpg" alt="Demo Images" /></a>
                              </div>
                              <div className="content">
                                <h4 className="title"><a href="07-instructor-portfolio.html">Instructor Portfolio <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Demo  */}
                        {/* Start Single Demo  */}
                        <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                          <div className="demo-single">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="08-language-academy.html"><img src="assets/images/splash/demo/h8.jpg" alt="Demo Images" /></a>
                              </div>
                              <div className="content">
                                <h4 className="title"><a href="08-language-academy.html">Language Academy <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Demo  */}
                        {/* Start Single Demo  */}
                        <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                          <div className="demo-single">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="11-single-course.html"><img src="assets/images/splash/demo/h11.jpg" alt="Demo Images" /></a>
                              </div>
                              <div className="content">
                                <h4 className="title"><a href="11-single-course.html">Single Course <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Demo  */}
                        {/* Start Single Demo  */}
                        <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                          <div className="demo-single">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="10-online-course.html"><img src="assets/images/splash/demo/h10.jpg" alt="Demo Images" /></a>
                              </div>
                              <div className="content">
                                <h4 className="title"><a href="10-online-course.html">Online Course <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Demo  */}
                        {/* Start Single Demo  */}
                        <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                          <div className="demo-single">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="05-classic-lms.html"><img src="assets/images/splash/demo/h5.jpg" alt="Demo Images" /></a>
                              </div>
                              <div className="content">
                                <h4 className="title"><a href="05-classic-lms.html">Classic Lms <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Demo  */}
                        {/* Start Single Demo  */}
                        <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item">
                          <div className="demo-single">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="02-course-school.html"><img src="assets/images/splash/demo/h2.jpg" alt="Demo Images" /></a>
                              </div>
                              <div className="content">
                                <h4 className="title"><a href="02-course-school.html">Course School <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Demo  */}
                        {/* Start Single Demo  */}
                        <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item coming-soon">
                          <div className="demo-single">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="#"><img src="assets/images/splash/demo/coming-soon-1.png" alt="Demo Images" /></a>
                              </div>
                              <div className="content">
                                <h4 className="title"><a href="#">Coming Soon <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Demo  */}
                        {/* Start Single Demo  */}
                        <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item coming-soon">
                          <div className="demo-single">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="#"><img src="assets/images/splash/demo/coming-soon-2.png" alt="Demo Images" /></a>
                              </div>
                              <div className="content">
                                <h4 className="title"><a href="#">Coming Soon 2 <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Demo  */}
                        {/* Start Single Demo  */}
                        <div className="col-lg-12 col-xl-2 col-xxl-2 col-md-12 col-sm-12 col-12 single-mega-item coming-soon">
                          <div className="demo-single">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="#"><img src="assets/images/splash/demo/coming-soon-3.png" alt="Demo Images" /></a>
                              </div>
                              <div className="content">
                                <h4 className="title"><a href="#">Coming Soon 3 <span className="btn-icon"><i className="feather-arrow-right" /></span></a></h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Demo  */}
                      </div>
                      <div className="load-demo-btn text-center">
                        <a className="rbt-btn-link color-white" href="#">Scroll to view more <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-arrow-down-up" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                        </svg></a>
                      </div>
                    </div>
                  </div>
                  {/* End Mega Menu  */}
                </li>
                <li className="with-megamenu has-menu-child-item">
                  <a href="#">Courses <i className="feather-chevron-down" /></a>
                  {/* Start Mega Menu  */}
                  <div className="rbt-megamenu grid-item-2">
                    <div className="wrapper">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="mega-top-banner">
                            <div className="content">
                              <h4 className="title">Developer hub</h4>
                              <p className="description">Start building fast, with code samples, key resources and more.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row row--15">
                        <div className="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
                          <h3 className="rbt-short-title">Course Layout</h3>
                          <ul className="mega-menu-item">
                            <li><a href="course-filter-one-toggle.html">Filter One Toggle</a></li>
                            <li><a href="course-filter-one-open.html">Filter One Open</a></li>
                            <li><a href="course-filter-two-toggle.html">Filter Two Toggle</a></li>
                            <li><a href="course-filter-two-open.html">Filter Two Open</a></li>
                            <li><a href="course-with-tab.html">Course With Tab</a></li>
                            <li><a href="course-with-tab-two.html">Course With Tab Two</a></li>
                            <li><a href="course-card-2.html">Course Card Two</a></li>
                          </ul>
                        </div>
                        <div className="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
                          <h3 className="rbt-short-title">Course Layout</h3>
                          <ul className="mega-menu-item">
                            <li><a href="course-card-3.html">Course Card Three</a></li>
                            <li><a href="course-masonry.html">Course Masonry</a></li>
                            <li><a href="course-with-sidebar.html">Course With Sidebar</a></li>
                            <li><a href="course-details.html">Course Details</a></li>
                            <li><a href="course-details-2.html">Course Details Two</a></li>
                            <li><a href="lesson.html">Course Lesson <span className="rbt-badge-card">New</span></a></li>
                            <li><a href="create-course.html">Create Course <span className="rbt-badge-card">New</span></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <ul className="nav-quick-access">
                            <li><a href="#"><i className="feather-folder-minus" /> Quick Start Guide</a></li>
                            <li><a href="#"><i className="feather-folder-minus" /> For Open Source</a></li>
                            <li><a href="#"><i className="feather-folder-minus" /> API Status</a></li>
                            <li><a href="#"><i className="feather-folder-minus" /> Support</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Mega Menu  */}
                </li>
                <li className="has-dropdown has-menu-child-item">
                  <a href="#">Dashboard
                    <i className="feather-chevron-down" />
                  </a>
                  <ul className="submenu">
                    <li className="has-dropdown"><a href="#">Instructor Dashboard</a>
                      <ul className="submenu">
                        <li><a href="instructor-dashboard.html">Dashboard</a></li>
                        <li><a href="instructor-profile.html">Profile</a></li>
                        <li><a href="instructor-enrolled-courses.html">Enrolled Courses</a></li>
                        <li><a href="instructor-wishlist.html">Wishlist</a></li>
                        <li><a href="instructor-reviews.html">Reviews</a></li>
                        <li><a href="instructor-my-quiz-attempts.html">My Quiz Attempts</a></li>
                        <li><a href="instructor-order-history.html">Order History</a></li>
                        <li><a href="instructor-course.html">My Course</a></li>
                        <li><a href="instructor-announcements.html">Announcements</a></li>
                        <li><a href="instructor-quiz-attempts.html">Quiz Attempts</a></li>
                        <li><a href="instructor-assignments.html">Assignments</a></li>
                        <li><a href="instructor-settings.html">Settings</a></li>
                      </ul>
                    </li>
                    <li className="has-dropdown"><a href="#">Student Dashboard</a>
                      <ul className="submenu">
                        <li><a href="student-dashboard.html">Dashboard</a></li>
                        <li><a href="student-profile.html">Profile</a></li>
                        <li><a href="student-enrolled-courses.html">Enrolled Courses</a></li>
                        <li><a href="student-wishlist.html">Wishlist</a></li>
                        <li><a href="student-reviews.html">Reviews</a></li>
                        <li><a href="student-my-quiz-attempts.html">My Quiz Attempts</a></li>
                        <li><a href="student-order-history.html">Order History</a></li>
                        <li><a href="student-settings.html">Settings</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="with-megamenu has-menu-child-item position-static">
                  <a href="#">Pages <i className="feather-chevron-down" /></a>
                  {/* Start Mega Menu  */}
                  <div className="rbt-megamenu grid-item-4">
                    <div className="wrapper">
                      <div className="row row--15">
                        <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                          <h3 className="rbt-short-title">Get Started</h3>
                          <ul className="mega-menu-item">
                            <li><a href="about-us-01.html">About Us</a></li>
                            <li><a href="about-us-02.html">About Us 02</a></li>
                            <li><a href="event-grid.html">Event Grid</a></li>
                            <li><a href="event-list.html">Event List</a></li>
                            <li><a href="event-sidebar.html">Event Sidebar</a></li>
                            <li><a href="event-details.html">Event Details</a></li>
                            <li><a href="academy-gallery.html">Academy Gallery</a></li>
                            <li><a href="admission-guide.html">Admission Guide</a></li>
                          </ul>
                        </div>
                        <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                          <h3 className="rbt-short-title">Get Started</h3>
                          <ul className="mega-menu-item">
                            <li><a href="profile.html">Profile</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                            <li><a href="become-a-teacher.html">Become a Teacher</a></li>
                            <li><a href="instructor.html">Instructor</a></li>
                            <li><a href="faqs.html">FAQS</a></li>
                            <li><a href="privacy-policy.html">Privacy Policy</a></li>
                            <li><a href="404.html">404 Page</a></li>
                            <li><a href="maintenance.html">Maintenance</a></li>
                          </ul>
                        </div>
                        <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                          <h3 className="rbt-short-title">Shop Pages</h3>
                          <ul className="mega-menu-item">
                            <li><a href="shop.html">Shop <span className="rbt-badge-card">Sale Anything</span></a></li>
                            <li><a href="single-product.html">Single Product</a></li>
                            <li><a href="cart.html">Cart Page</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                            <li><a href="wishlist.html">Wishlist Page</a></li>
                            <li><a href="my-account.html">My Acount</a></li>
                            <li><a href="login.html">Login &amp; Register</a></li>
                            <li><a href="subscription.html">Subscription</a></li>
                          </ul>
                        </div>
                        <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                          <div className="mega-category-item">
                            {/* Start Single Category  */}
                            <div className="nav-category-item">
                              <div className="thumbnail">
                                <div className="image"><img src="assets/images/course/category-2.png" alt="Course images" /></div>
                                <a href="course-filter-one-toggle.html">
                                  <span>Online Education</span>
                                  <i className="feather-chevron-right" />
                                </a>
                              </div>
                            </div>
                            {/* End Single Category  */}
                            {/* Start Single Category  */}
                            <div className="nav-category-item">
                              <div className="thumbnail">
                                <div className="image"><img src="assets/images/course/category-1.png" alt="Course images" /></div>
                                <a href="course-filter-one-toggle.html">
                                  <span>Language Club</span>
                                  <i className="feather-chevron-right" />
                                </a>
                              </div>
                            </div>
                            {/* End Single Category  */}
                            {/* Start Single Category  */}
                            <div className="nav-category-item">
                              <div className="thumbnail">
                                <div className="image"><img src="assets/images/course/category-4.png" alt="Course images" /></div>
                                <a href="course-filter-one-toggle.html">
                                  <span>University Status</span>
                                  <i className="feather-chevron-right" />
                                </a>
                              </div>
                            </div>
                            {/* End Single Category  */}
                            {/* Start Single Category  */}
                            <div className="nav-category-item">
                              <div className="thumbnail">
                                <a href="course-filter-one-toggle.html">
                                  <span>Course School</span>
                                  <i className="feather-chevron-right" />
                                </a>
                              </div>
                            </div>
                            {/* End Single Category  */}
                            {/* Start Single Category  */}
                            <div className="nav-category-item">
                              <div className="thumbnail">
                                <div className="image"><img src="assets/images/course/category-9.png" alt="Course images" /></div>
                                <a href="course-filter-one-toggle.html">
                                  <span>Academy</span>
                                  <i className="feather-chevron-right" />
                                </a>
                              </div>
                            </div>
                            {/* End Single Category  */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Mega Menu  */}
                </li>
                <li className="with-megamenu has-menu-child-item position-static">
                  <a href="#">Elements <i className="feather-chevron-down" /></a>
                  {/* Start Mega Menu  */}
                  <div className="rbt-megamenu grid-item-3">
                    <div className="wrapper">
                      <div className="row row--15 single-dropdown-menu-presentation">
                        <div className="col-lg-4 col-xxl-4 single-mega-item">
                          <ul className="mega-menu-item">
                            <li><a href="style-guide.html">Style Guide <span className="rbt-badge-card">Hot</span></a></li>
                            <li><a href="accordion.html">Accordion</a></li>
                            <li><a href="advancetab.html">Advance Tab</a></li>
                            <li><a href="brand.html">Brand</a></li>
                            <li><a href="button.html">Button</a></li>
                            <li><a href="badge.html">Badge</a></li>
                            <li><a href="card.html">Card</a></li>
                            <li><a href="call-to-action.html">Call To Action</a></li>
                          </ul>
                        </div>
                        <div className="col-lg-4 col-xxl-4 single-mega-item">
                          <ul className="mega-menu-item">
                            <li><a href="counterup.html">Counter</a></li>
                            <li><a href="category.html">Categories</a></li>
                            <li><a href="header.html">Header Style</a></li>
                            <li><a href="newsletter.html">Newsletter</a></li>
                            <li><a href="team.html">Team</a></li>
                            <li><a href="social.html">Social</a></li>
                            <li><a href="list-style.html">List Style</a></li>
                            <li><a href="gallery.html">Gallery</a></li>
                          </ul>
                        </div>
                        <div className="col-lg-4 col-xxl-4 single-mega-item">
                          <ul className="mega-menu-item">
                            <li><a href="pricing.html">Pricing</a></li>
                            <li><a href="progressbar.html">Progressbar</a></li>
                            <li><a href="testimonial.html">Testimonial</a></li>
                            <li><a href="service.html">Service</a></li>
                            <li><a href="split.html">Split Area</a></li>
                            <li><a href="search.html">Search Style</a></li>
                            <li><a href="instagram.html">Instagram Style</a></li>
                            <li><a href="#">&amp; More Coming</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="btn-wrapper">
                            <a className="rbt-btn btn-gradient hover-icon-reverse square btn-xl w-100 text-center mt--30 hover-transform-none" href="#">
                              <span className="icon-reverse-wrapper">
                                <span className="btn-text">Visit Histudy Template</span>
                                <span className="btn-icon"><i className="feather-arrow-right" /></span>
                                <span className="btn-icon"><i className="feather-arrow-right" /></span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Mega Menu  */}
                </li>
                <li className="with-megamenu has-menu-child-item position-static">
                  <a href="#">Blog <i className="feather-chevron-down" /></a>
                  {/* Start Mega Menu  */}
                  <div className="rbt-megamenu grid-item-3">
                    <div className="wrapper">
                      <div className="row row--15">
                        <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                          <h3 className="rbt-short-title">Blog Styles</h3>
                          <ul className="mega-menu-item">
                            <li><a href="blog-list.html">Blog List</a></li>
                            <li><a href="blog.html">Blog Grid</a></li>
                            <li><a href="blog-grid-minimal.html">Blog Grid Minimal</a></li>
                            <li><a href="blog-with-sidebar.html">Blog With Sidebar</a></li>
                            <li><a href="blog-details.html">Blog Details</a></li>
                            <li><a href="post-format-standard.html">Post Format Standard</a></li>
                            <li><a href="post-format-gallery.html">Post Format Gallery</a></li>
                          </ul>
                        </div>
                        <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                          <h3 className="rbt-short-title">Get Started</h3>
                          <ul className="mega-menu-item">
                            <li><a href="post-format-quote.html">Post Format Quote</a></li>
                            <li><a href="post-format-audio.html">Post Format Audio</a></li>
                            <li><a href="post-format-video.html">Post Format Video</a></li>
                            <li><a href="#">Media Under Title <span className="rbt-badge-card">Coming</span></a></li>
                            <li><a href="#">Sticky Sidebar <span className="rbt-badge-card">Coming</span></a></li>
                            <li><a href="#">Auto Masonry <span className="rbt-badge-card">Coming</span></a></li>
                            <li><a href="#">Meta Overlaid <span className="rbt-badge-card">Coming</span></a></li>
                          </ul>
                        </div>
                        <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                          <div className="rbt-ads-wrapper">
                            <a className="d-block" href="#"><img src="assets/images/service/mobile-cat.jpg" alt="Education Images" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Mega Menu  */}
                </li>
              </ul>
            </nav>
            <div className="mobile-menu-bottom">
              <div className="rbt-btn-wrapper mb--20">
                <a className="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center" href="#">
                  <span>Enroll Now</span>
                </a>
              </div>
              <div className="social-share-wrapper">
                <span className="rbt-short-title d-block">Find With Us</span>
                <ul className="social-icon social-default transparent-with-border justify-content-start mt--20">
                  <li><a href="https://www.facebook.com/">
                    <i className="feather-facebook" />
                  </a>
                  </li>
                  <li><a href="https://www.twitter.com">
                    <i className="feather-twitter" />
                  </a>
                  </li>
                  <li><a href="https://www.instagram.com/">
                    <i className="feather-instagram" />
                  </a>
                  </li>
                  <li><a href="https://www.linkdin.com/">
                    <i className="feather-linkedin" />
                  </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Start Side Vav */}
        <div className="rbt-cart-side-menu">
          <div className="inner-wrapper">
            <div className="inner-top">
              <div className="content">
                <div className="title">
                  <h4 className="title mb--0">Your shopping cart</h4>
                </div>
                <div className="rbt-btn-close" id="btn_sideNavClose">
                  <button className="minicart-close-button rbt-round-btn"><i className="feather-x" /></button>
                </div>
              </div>
            </div>
            <nav className="side-nav w-100">
              <ul className="rbt-minicart-wrapper">
                <li className="minicart-item">
                  <div className="thumbnail">
                    <a href="#">
                      <img src="assets/images/product/1.jpg" alt="Product Images" />
                    </a>
                  </div>
                  <div className="product-content">
                    <h6 className="title"><a href="single-product.html">Miracle Morning</a></h6>
                    <span className="quantity">1 * <span className="price">$22</span></span>
                  </div>
                  <div className="close-btn">
                    <button className="rbt-round-btn"><i className="feather-x" /></button>
                  </div>
                </li>
                <li className="minicart-item">
                  <div className="thumbnail">
                    <a href="#">
                      <img src="assets/images/product/7.jpg" alt="Product Images" />
                    </a>
                  </div>
                  <div className="product-content">
                    <h6 className="title"><a href="single-product.html">Happy Strong</a></h6>
                    <span className="quantity">1 * <span className="price">$30</span></span>
                  </div>
                  <div className="close-btn">
                    <button className="rbt-round-btn"><i className="feather-x" /></button>
                  </div>
                </li>
                <li className="minicart-item">
                  <div className="thumbnail">
                    <a href="#">
                      <img src="assets/images/product/3.jpg" alt="Product Images" />
                    </a>
                  </div>
                  <div className="product-content">
                    <h6 className="title"><a href="single-product.html">Rich Dad Poor Dad</a></h6>
                    <span className="quantity">1 * <span className="price">$50</span></span>
                  </div>
                  <div className="close-btn">
                    <button className="rbt-round-btn"><i className="feather-x" /></button>
                  </div>
                </li>
                <li className="minicart-item">
                  <div className="thumbnail">
                    <a href="#">
                      <img src="assets/images/product/4.jpg" alt="Product Images" />
                    </a>
                  </div>
                  <div className="product-content">
                    <h6 className="title"><a href="single-product.html">Momentum Theorem</a></h6>
                    <span className="quantity">1 * <span className="price">$50</span></span>
                  </div>
                  <div className="close-btn">
                    <button className="rbt-round-btn"><i className="feather-x" /></button>
                  </div>
                </li>
              </ul>
            </nav>
            <div className="rbt-minicart-footer">
              <hr className="mb--0" />
              <div className="rbt-cart-subttotal">
                <p className="subtotal"><strong>Subtotal:</strong></p>
                <p className="price">$121</p>
              </div>
              <hr className="mb--0" />
              <div className="rbt-minicart-bottom mt--20">
                <div className="view-cart-btn">
                  <a className="rbt-btn btn-border icon-hover w-100 text-center" href="#">
                    <span className="btn-text">View Cart</span>
                    <span className="btn-icon"><i className="feather-arrow-right" /></span>
                  </a>
                </div>
                <div className="checkout-btn mt--20">
                  <a className="rbt-btn btn-gradient icon-hover w-100 text-center" href="#">
                    <span className="btn-text">Checkout</span>
                    <span className="btn-icon"><i className="feather-arrow-right" /></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Side Vav */}
        <a className="close_side_menu" href="#" />



        {children}



        {/* Start Footer aera */}
        <footer className="rbt-footer footer-style-1 bg-color-white overflow-hidden">
          <div className="footer-top">
            <div className="container">
              <div className="row g-5">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="footer-widget">
                    <div className="logo">
                      <a href="index.html">
                        <img src="assets/images/logo/logo.png" alt="Edu-cause" />
                      </a>
                    </div>
                    <p className="description mt--20">We’re always in search for talented
                      and motivated people. Don’t be shy introduce yourself!
                    </p>
                    <ul className="social-icon social-default justify-content-start">
                      <li><a href="https://www.facebook.com/">
                        <i className="feather-facebook" />
                      </a>
                      </li>
                      <li><a href="https://www.twitter.com">
                        <i className="feather-twitter" />
                      </a>
                      </li>
                      <li><a href="https://www.instagram.com/">
                        <i className="feather-instagram" />
                      </a>
                      </li>
                      <li><a href="https://www.linkdin.com/">
                        <i className="feather-linkedin" />
                      </a>
                      </li>
                    </ul>
                    <div className="contact-btn mt--30">
                      <a className="rbt-btn hover-icon-reverse btn-border-gradient radius-round" href="#">
                        <div className="icon-reverse-wrapper">
                          <span className="btn-text">Contact With Us</span>
                          <span className="btn-icon"><i className="feather-arrow-right" /></span>
                          <span className="btn-icon"><i className="feather-arrow-right" /></span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                  <div className="footer-widget">
                    <h5 className="ft-title">Useful Links</h5>
                    <ul className="ft-link">
                      <li>
                        <a href="12-marketplace.html">Marketplace</a>
                      </li>
                      <li>
                        <a href="04-kindergarten.html">kindergarten</a>
                      </li>
                      <li>
                        <a href="13-university-classic.html">University</a>
                      </li>
                      <li>
                        <a href="09-gym-coaching.html">GYM Coaching</a>
                      </li>
                      <li>
                        <a href="faqs.html">FAQ</a>
                      </li>
                      <li>
                        <a href="about-us-01.html">About Us</a>
                      </li>
                      <li>
                        <a href="privacy-policy.html">Privacy policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                  <div className="footer-widget">
                    <h5 className="ft-title">Our Company</h5>
                    <ul className="ft-link">
                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                      <li>
                        <a href="become-a-teacher.html">Become Teacher</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="instructor.html">Instructor</a>
                      </li>
                      <li>
                        <a href="event-list.html">Events</a>
                      </li>
                      <li>
                        <a href="course-filter-one-toggle.html">Course</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="footer-widget">
                    <h5 className="ft-title">Get Contact</h5>
                    <ul className="ft-link">
                      <li><span>Phone:</span> <a href="#">(406) 555-0120</a></li>
                      <li><span>E-mail:</span> <a href="mailto:hr@example.com">admin@example.com</a></li>
                    </ul>
                    <form className="newsletter-form mt--20" action="#">
                      <h6 className="w-600">Newsletter</h6>
                      <p className="description">2000+ Our students are subscribe Around the World.<br /> Don’t be shy introduce yourself!</p>
                      <div className="form-group right-icon icon-email mb--20">
                        <label htmlFor="email">Enter Your Email Here</label>
                        <input id="email" type="email" />
                      </div>
                      <div className="form-group mb--0">
                        <button className="rbt-btn rbt-switch-btn btn-gradient radius-round btn-sm" type="submit">
                          <span data-text="Submit Now">Submit Now</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rbt-separator-mid">
            <div className="container">
              <hr className="rbt-separator m-0" />
            </div>
          </div>
          {/* Start Copyright Area  */}
          <div className="copyright-area copyright-style-1 ptb--20">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                  <p className="rbt-link-hover text-center text-lg-start">Copyright © 2023 <a href="https://themeforest.net/user/rbt-themes">Rainbow-Themes.</a> All Rights Reserved</p>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                  <ul className="copyright-link rbt-link-hover justify-content-center justify-content-lg-end mt_sm--10 mt_md--10">
                    <li><a href="#">Terms of service</a></li>
                    <li><a href="privacy-policy.html">Privacy policy</a></li>
                    <li><a href="subscription.html">Subscription</a></li>
                    <li><a href="login.html">Login &amp; Register</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* End Copyright Area  */}
        </footer>
        {/* End Footer aera */}
        <div className="rbt-progress-parent">
          <svg className="rbt-back-circle svg-inner" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>





        {/* <!-- Modernizer JS --> */}
        <Script src="assets/js/vendor/modernizr.min.js" />
        {/* <!-- jQuery JS --> */}
        <Script src="assets/js/vendor/jquery.js"></Script>
        {/* <!-- Bootstrap JS --> */}
        <Script src="assets/js/vendor/bootstrap.min.js"></Script>
        {/* <!-- sal.js --> */}
        <Script src="assets/js/vendor/sal.js"></Script>
        <Script src="assets/js/vendor/swiper.js"></Script>
        <Script src="assets/js/vendor/magnify.min.js"></Script>
        <Script src="assets/js/vendor/jquery-appear.js"></Script>
        <Script src="assets/js/vendor/odometer.js"></Script>
        <Script src="assets/js/vendor/backtotop.js"></Script>
        <Script src="assets/js/vendor/isotop.js"></Script>
        <Script src="assets/js/vendor/imageloaded.js"></Script>

        <Script src="assets/js/vendor/wow.js"></Script>
        <Script src="assets/js/vendor/waypoint.min.js"></Script>
        <Script src="assets/js/vendor/easypie.js"></Script>
        <Script src="assets/js/vendor/text-type.js"></Script>
        <Script src="assets/js/vendor/jquery-one-page-nav.js"></Script>
        <Script src="assets/js/vendor/bootstrap-select.min.js"></Script>
        <Script src="assets/js/vendor/jquery-ui.js"></Script>
        <Script src="assets/js/vendor/magnify-popup.min.js"></Script>
        <Script src="assets/js/vendor/paralax-scroll.js"></Script>
        <Script src="assets/js/vendor/paralax.min.js"></Script>
        <Script src="assets/js/vendor/countdown.js"></Script>
        <Script src="assets/js/vendor/plyr.js"></Script>
        {/* <!-- Main JS --> */}
        <Script src="assets/js/main.js"></Script>
      </body>
    </html>
  )
}
