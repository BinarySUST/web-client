import Banner from "@/components/Banner/Banner"
import StudentDashboardTop from "@/modules/Student/Dashboard/DashboardTop";
import StudentDashboardSidebar from "@/modules/Student/Dashboard/Sidebar";

export default function StudentDashboardLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <>
            <Banner />
            <div className="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom">
                <div className="container">
                    <StudentDashboardTop />
                    <div className="row g-5">
                        <div className="col-lg-3">
                            <StudentDashboardSidebar />
                        </div>
                        <div className="col-lg-9">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}