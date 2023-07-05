import Link from "next/link"

const BreadCrump2 = () => {

    return (
        <div className="rbt-page-banner-wrapper">
            {/* Start Banner BG Image  */}
            <div className="rbt-banner-image" />
            {/* End Banner BG Image  */}
            <div className="rbt-banner-content">
                {/* Start Banner Content Top  */}
                <div className="rbt-banner-content-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* Start Breadcrumb Area  */}
                                <ul className="page-list">
                                    <li className="rbt-breadcrumb-item"><Link href="/">Home</Link></li>
                                    <li>
                                        <div className="icon-right"><i className="feather-chevron-right" /></div>
                                    </li>
                                    <li className="rbt-breadcrumb-item active">All Blog</li>
                                </ul>
                                {/* End Breadcrumb Area  */}
                                <div className=" title-wrapper">
                                    <h1 className="title mb--0">All Blog</h1>
                                    <a href="#" className="rbt-badge-2">
                                        <div className="image">🎉</div> 50 Articles
                                    </a>
                                </div>
                                <p className="description">Blog that help beginner designers become true unicorns. </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Banner Content Top  */}
            </div>
        </div>

    )
}

export default BreadCrump2