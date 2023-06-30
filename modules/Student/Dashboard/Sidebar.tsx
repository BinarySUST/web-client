import Link from "next/link";
import sidebarMenus from "./sidebarMenus";

export default function StudentDashboardSidebar() {

    return (
        <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
            <div className="inner">
                <div className="content-item-content">
                    <div className="rbt-default-sidebar-wrapper">
                        <div className="section-title mb--20">
                            <h6 className="rbt-title-style-2">Welcome, Jone Due</h6>
                        </div>
                        <nav className="mainmenu-nav">
                            <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                {sidebarMenus.map(menu => (
                                    <li key={menu.id}><Link href={menu.path} className={"active"}><i className={menu.icon} /><span>{menu.name}</span></Link></li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}