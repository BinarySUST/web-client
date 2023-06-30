import Link from "next/link";
import Banner from "@/components/Banner/Banner"

export default function StudentDashboardLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <>
            <Banner />
            <div className="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Start Dashboard Top  */}
                            <div className="rbt-dashboard-content-wrapper">
                                <div className="tutor-bg-photo bg_image bg_image--23 height-350" />
                                {/* Start Tutor Information  */}
                                <div className="rbt-tutor-information">
                                    <div className="rbt-tutor-information-left">
                                        <div className="thumbnail rbt-avatars size-lg">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src="/assets/images/team/avatar-2.jpg" alt="Instructor" />
                                        </div>
                                        <div className="tutor-content">
                                            <h5 className="title">Emily Hannah</h5>
                                            <ul className="rbt-meta rbt-meta-white mt--5">
                                                <li><i className="feather-book" />5 Courses Enroled</li>
                                                <li><i className="feather-award" />4 Certificate</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="rbt-tutor-information-right">
                                        <div className="tutor-btn">
                                            <a className="rbt-btn btn-md hover-icon-reverse" href="#">
                                                <span className="icon-reverse-wrapper">
                                                    <span className="btn-text">Become an Instructor</span>
                                                    <span className="btn-icon"><i className="feather-arrow-right" /></span>
                                                    <span className="btn-icon"><i className="feather-arrow-right" /></span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* End Tutor Information  */}
                            </div>
                            {/* End Dashboard Top  */}
                            <div className="row g-5">
                                <div className="col-lg-3">
                                    {/* Start Dashboard Sidebar  */}
                                    <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
                                        <div className="inner">
                                            <div className="content-item-content">
                                                <div className="rbt-default-sidebar-wrapper">
                                                    <div className="section-title mb--20">
                                                        <h6 className="rbt-title-style-2">Welcome, Jone Due</h6>
                                                    </div>
                                                    <nav className="mainmenu-nav">
                                                        <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                                            <li><Link href="/dashboard"><i className="feather-home" /><span>Dashboard</span></Link></li>
                                                            <li><Link href="/dashboard/profile" className="active"><i className="feather-user" /><span>My Profile</span></Link></li>

                                                        </ul>
                                                    </nav>
                                                    <div>
                                                        <div className="section-title mt--40 mb--20">
                                                            <h6 className="rbt-title-style-2">User</h6>
                                                        </div>
                                                        <nav className="mainmenu-nav">
                                                            <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                                                <li><Link href="/dashboard/settings"><i className="feather-settings" /><span>Settings</span></Link></li>
                                                                <li><a href="/"><i className="feather-log-out" /><span>Logout</span></a></li>
                                                            </ul>
                                                        </nav>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Dashboard Sidebar  */}
                                </div>
                                <div className="col-lg-9">
                                    {/* Start Instructor Profile  */}
                                    {children}

                                    {/* End Instructor Profile  */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}