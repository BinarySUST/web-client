import React from 'react'

const Copyright = () => {
    return (
        <div className="copyright-area copyright-style-1 ptb--20">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                        <p className="rbt-link-hover text-center text-lg-start">Copyright © 2023 <a href="/">Binary SUST.</a> All Rights Reserved</p>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                        <ul className="copyright-link rbt-link-hover justify-content-center justify-content-lg-end mt_sm--10 mt_md--10">
                            <li><a href="#">Terms of service</a></li>
                            <li><a href="privacy-policy.html">Privacy policy</a></li>
                            <li><a href="login.html">Login &amp; Register</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Copyright