import React from 'react'
import Menus from './Menus'

const MobileMenu = () => {
    return (
        <>
            <div className="popup-mobile-menu">
                <div className="inner-wrapper">
                    <div className="inner-top">
                        <div className="content">
                            <div className="logo">
                                <a href="index.html">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
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
        </>
    )
}

export default MobileMenu