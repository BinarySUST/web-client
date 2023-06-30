/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Copyright from './Copyright'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="rbt-footer footer-style-1 bg-color-white overflow-hidden">
            <div className="footer-top">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="footer-widget">
                                <div className="logo">
                                    <Link href="/">
                                        <img src="/assets/images/logo/logo.png" alt="Edu-cause" />
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
            <Copyright />
        </footer>
    )
}

export default Footer