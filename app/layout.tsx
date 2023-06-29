/* eslint-disable @next/next/no-img-element */
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
import Link from 'next/link';
import HeaderTop from '@/components/Header/HeaderTop'
import Menu from '@/components/Header/Menu'
import Menus from '@/components/Header/Menus'

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
          <HeaderTop />
          <Menu />
        </header>
        {/* Mobile Menu Section */}
        <div className="popup-mobile-menu">
          <div className="inner-wrapper">
            <div className="inner-top">
              <div className="content">
                <div className="logo">
                  <a href="index.html">
                    <img src="/assets/images/logo/logo.png" alt="Binary logo" />
                  </a>
                </div>
                <div className="rbt-btn-close">
                  <button className="close-button rbt-round-btn"><i className="feather-x" /></button>
                </div>
              </div>
            </div>
            <Menus />
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
                      <Link href="/">
                        <img src="assets/images/logo/logo.png" alt="Edu-cause" />
                      </Link>
                    </div>
                    <p className="description mt--20">We’re always in search for talented
                      and motivated people. Don’t be shy introduce yourself!
                    </p>
                    <ul className="social-icon social-default justify-content-start">
                      <li><a href="https://www.facebook.com/binary.sust">
                        <i className="feather-facebook" />
                      </a>
                      </li>
                      <li><a href="https://www.twitter.com">
                        <i className="feather-twitter" />
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
                      <li><span>Phone:</span> <a href="tel:+8801781517797">(+880) 1781 517 797</a></li>
                      <li><span>E-mail:</span> <a href="mailto:binary.sust@gmail.com">binary.sust@gmail.com</a></li>
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
