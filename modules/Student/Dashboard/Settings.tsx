export default function StudentSettings() {
    return (
        <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
            <div className="content">
                <div className="section-title">
                    <h4 className="rbt-title-style-3">Settings</h4>
                </div>
                <div className="advance-tab-button mb--30">
                    <ul className="nav nav-tabs tab-button-style-2 justify-content-start" id="settinsTab-4" role="tablist">
                        <li role="presentation">
                            <a href="#" className="tab-button active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" role="tab" aria-controls="profile" aria-selected="true">
                                <span className="title">Profile</span>
                            </a>
                        </li>
                        <li role="presentation">
                            <a href="#" className="tab-button" id="password-tab" data-bs-toggle="tab" data-bs-target="#password" role="tab" aria-controls="password" aria-selected="false">
                                <span className="title">Password</span>
                            </a>
                        </li>
                        <li role="presentation">
                            <a href="#" className="tab-button" id="social-tab" data-bs-toggle="tab" data-bs-target="#social" role="tab" aria-controls="social" aria-selected="false">
                                <span className="title">Social Share</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="tab-content">
                    <div className="tab-pane fade active show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="rbt-dashboard-content-wrapper">
                            <div className="tutor-bg-photo bg_image bg_image--23 height-245" />
                            {/* Start Tutor Information  */}
                            <div className="rbt-tutor-information">
                                <div className="rbt-tutor-information-left">
                                    <div className="thumbnail rbt-avatars size-lg position-relative">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src="/assets/images/team/avatar-2.jpg" alt="Instructor" />
                                        <div className="rbt-edit-photo-inner">
                                            <button className="rbt-edit-photo" title="Upload Photo">
                                                <i className="feather-camera" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="rbt-tutor-information-right">
                                    <div className="tutor-btn">
                                        <a className="rbt-btn btn-sm btn-border color-white radius-round-10" href="#">Edit Cover Photo</a>
                                    </div>
                                </div>
                            </div>
                            {/* End Tutor Information  */}
                        </div>
                        {/* Start Profile Row  */}
                        <form action="#" className="rbt-profile-row rbt-default-form row row--15">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="rbt-form-group">
                                    <label htmlFor="firstname">First Name</label>
                                    <input id="firstname" type="text" defaultValue="John" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="rbt-form-group">
                                    <label htmlFor="lastname">Last Name</label>
                                    <input id="lastname" type="text" defaultValue="Due" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="rbt-form-group">
                                    <label htmlFor="username">User Name</label>
                                    <input id="username" type="text" defaultValue="johndue" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="rbt-form-group">
                                    <label htmlFor="phonenumber">Phone Number</label>
                                    <input id="phonenumber" type="tel" defaultValue="+1-202-555-0174" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="rbt-form-group">
                                    <label htmlFor="skill">Skill/Occupation</label>
                                    <input id="skill" type="text" defaultValue="Full Stack Developer" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="filter-select rbt-modern-select">
                                    <label htmlFor="displayname">Display name publicly as</label>
                                    <select id="displayname" className="w-100">
                                        <option>Emily Hannah</option>
                                        <option>John</option>
                                        <option>Due</option>
                                        <option>Due John</option>
                                        <option>johndue</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="rbt-form-group">
                                    <label htmlFor="bio">Bio</label>
                                    <textarea id="bio" cols={20} rows={5} defaultValue={"I'm the Front-End Developer for #Rainbow IT in Bangladesh, OR. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences."} />
                                </div>
                            </div>
                            <div className="col-12 mt--20">
                                <div className="rbt-form-group">
                                    <a className="rbt-btn btn-gradient" href="#">Update Info</a>
                                </div>
                            </div>
                        </form>
                        {/* End Profile Row  */}
                    </div>
                    <div className="tab-pane fade" id="password" role="tabpanel" aria-labelledby="password-tab">
                        {/* Start Profile Row  */}
                        <form action="#" className="rbt-profile-row rbt-default-form row row--15">
                            <div className="col-12">
                                <div className="rbt-form-group">
                                    <label htmlFor="currentpassword">Current Password</label>
                                    <input id="currentpassword" type="password" placeholder="Current Password" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="rbt-form-group">
                                    <label htmlFor="newpassword">New Password</label>
                                    <input id="newpassword" type="password" placeholder="New Password" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="rbt-form-group">
                                    <label htmlFor="retypenewpassword">Re-type New Password</label>
                                    <input id="retypenewpassword" type="password" placeholder="Re-type New Password" />
                                </div>
                            </div>
                            <div className="col-12 mt--10">
                                <div className="rbt-form-group">
                                    <a className="rbt-btn btn-gradient" href="#">Update Password</a>
                                </div>
                            </div>
                        </form>
                        {/* End Profile Row  */}
                    </div>
                    <div className="tab-pane fade" id="social" role="tabpanel" aria-labelledby="social-tab">
                        {/* Start Profile Row  */}
                        <form action="#" className="rbt-profile-row rbt-default-form row row--15">
                            <div className="col-12">
                                <div className="rbt-form-group">
                                    <label htmlFor="facebook"><i className="feather-facebook" /> Facebook</label>
                                    <input id="facebook" type="text" placeholder="https://facebook.com/" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="rbt-form-group">
                                    <label htmlFor="twitter"><i className="feather-twitter" /> Twitter</label>
                                    <input id="twitter" type="text" placeholder="https://twitter.com/" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="rbt-form-group">
                                    <label htmlFor="linkedin"><i className="feather-linkedin" /> Linkedin</label>
                                    <input id="linkedin" type="text" placeholder="https://linkedin.com/" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="rbt-form-group">
                                    <label htmlFor="website"><i className="feather-globe" /> Website</label>
                                    <input id="website" type="text" placeholder="https://website.com/" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="rbt-form-group">
                                    <label htmlFor="github"><i className="feather-github" /> Github</label>
                                    <input id="github" type="text" placeholder="https://github.com/" />
                                </div>
                            </div>
                            <div className="col-12 mt--10">
                                <div className="rbt-form-group">
                                    <a className="rbt-btn btn-gradient" href="#">Update Profile</a>
                                </div>
                            </div>
                        </form>
                        {/* End Profile Row  */}
                    </div>
                </div>
            </div>
        </div>

    )
}