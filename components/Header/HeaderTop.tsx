import Link from "next/link"

const HeaderTop = () => {
    return (
        <div className="rbt-header-top rbt-header-top-1 variation-height-50 header-space-betwween bg-color-white border-top-bar-primary-color rbt-border-bottom d-none d-xl-block">
            <div className="container-fluid">
                <div className="rbt-header-sec align-items-center ">
                    <div className="rbt-header-sec-col rbt-header-left">
                        <div className="rbt-header-content">
                            <div className="header-info">
                                <ul className="rbt-information-list">
                                    <li>
                                        <a href="tel:+8801781517797"><i className="feather-phone" />+8801781517797</a>
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
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="rbt-header-sec-col rbt-header-right">
                        <div className="rbt-header-content">
                            <div className="header-info">
                                <ul className="rbt-secondary-menu">
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                    <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                    <li><a href="#">Terms &amp; Condition</a></li>
                                </ul>
                            </div>
                            <div className="rbt-separator" />
                            <div className="header-info">
                                <div className="header-right-btn d-flex">
                                    <Link className="rbt-btn rbt-switch-btn btn-gradient btn-xs" href="/register">
                                        <span data-text="Join Now">Join Now</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop