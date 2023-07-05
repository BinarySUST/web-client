import Pagination from "@/components/Pagination/Pagination"

/* eslint-disable @next/next/no-img-element */
const blogs = [
    {
        id: 1,
        title: 'The Latest Trend In Education.',
        image: '/assets/images/blog/blog-grid-01.jpg',
        date: '25',
        month: 'Aug',
        year: '2023',
    },
    {
        id: 2,
        title: 'The Latest Trend In Education.',
        image: '/assets/images/blog/blog-grid-02.jpg',
        date: '25',
        month: 'Aug',
        year: '2023',
    },
    {
        id: 3,
        title: 'The Latest Trend In Education.',
        image: '/assets/images/blog/blog-grid-03.jpg',
        date: '25',
        month: 'Aug',
        year: '2023',
    },
    {
        id: 4,
        title: 'The Latest Trend In Education.',
        image: '/assets/images/blog/blog-grid-04.jpg',
        date: '25',
        month: 'Aug',
        year: '2023',
    },

]

const BlogList = () => {
    return (
        <div className="rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="container">
                <div className="row row--30 gy-5">
                    <div className="col-lg-8">
                        {/* Start Card Area */}
                        <div className="row g-5">
                            {blogs.map((blog) => (
                                <div key={blog.id} className="col-lg-6 col-md-6 col-12">
                                    <div className="rbt-blog-grid rbt-card variation-02 rbt-hover">
                                        <div className="rbt-card-img">
                                            <a href="blog-details.html">
                                                <img src="/assets/images/blog/blog-grid-05.jpg" alt={blog.title} /> </a>
                                        </div>
                                        <div className="rbt-card-body">
                                            <h5 className="rbt-card-title"><a href="/blog/details">The Latest Trend In
                                                Education.</a></h5>
                                            <ul className="blog-meta">
                                                <li><i className="feather-user" /> admin</li>
                                                <li><i className="feather-clock" /> August 3, 2023</li>
                                                <li><i className="feather-watch" /> 1 min read</li>
                                            </ul>
                                            <p className="rbt-card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.</p>
                                            <div className="rbt-card-bottom">
                                                <a className="transparent-button" href="blog-details.html">Learn
                                                    More<i><svg width={17} height={12} xmlns="http://www.w3.org/2000/svg"><g stroke="#27374D" fill="none" fillRule="evenodd"><path d="M10.614 0l5.629 5.629-5.63 5.629" /><path strokeLinecap="square" d="M.663 5.572h14.594" /></g></svg></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                        {/* End Card Area */}
                        <div className="row">
                            <div className="col-lg-12 mt--60">
                                <Pagination />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <aside className="rbt-sidebar-widget-wrapper rbt-gradient-border">
                            {/* Start Widget Area  */}
                            <div className="rbt-single-widget rbt-widget-search">
                                <div className="inner">
                                    <form action="#" className="rbt-search-style-1">
                                        <input type="text" placeholder="Search Courses" />
                                        <button className="search-btn"><i className="feather-search" /></button>
                                    </form>
                                </div>
                            </div>
                            {/* End Widget Area  */}
                            {/* Start Widget Area  */}
                            <div className="rbt-single-widget rbt-widget-recent">
                                <div className="inner">
                                    <h4 className="rbt-widget-title">Recent Post</h4>
                                    <ul className="rbt-sidebar-list-wrapper recent-post-list">
                                        <li>
                                            <div className="thumbnail">
                                                <a href="event-details.html">
                                                    <img src="/assets/images/event/grid-type-04.jpg" alt="Event Images" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <h6 className="title"><a href="event-details.html">Elegant Light Box Paper Cut.</a></h6>
                                                <ul className="rbt-meta">
                                                    <li><i className="feather-clock" />26 Mar, 2025</li>
                                                </ul>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            {/* End Widget Area  */}
                            {/* Start Widget Area  */}
                            <div className="rbt-single-widget rbt-widget-recent">
                                <div className="inner">
                                    <h4 className="rbt-widget-title">Popular Post</h4>
                                    <ul className="rbt-sidebar-list-wrapper recent-post-list">
                                        <li>
                                            <div className="thumbnail">
                                                <a href="event-details.html">
                                                    <img src="/assets/images/event/grid-type-01.jpg" alt="Event Images" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <h6 className="title"><a href="event-details.html">Elegant Light Box Paper Cut.</a></h6>
                                                <ul className="rbt-meta">
                                                    <li><i className="feather-clock" />26 Mar, 2025</li>
                                                </ul>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            {/* End Widget Area  */}
                            {/* Start Widget Area  */}
                            <div className="rbt-single-widget rbt-widget-tag">
                                <div className="inner">
                                    <h4 className="rbt-widget-title">Tags</h4>
                                    <div className="rbt-sidebar-list-wrapper rbt-tag-list">
                                        <a href="#">Histudy</a>
                                        <a href="#">Training</a>
                                        <a href="#">Courses</a>
                                        <a href="#">Learn</a>
                                    </div>
                                </div>
                            </div>
                            {/* End Widget Area  */}
                        </aside>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default BlogList