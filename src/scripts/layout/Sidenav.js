import React from "react"
import {Link, useLocation} from "react-router-dom";

function SidenavItem({path, title, icon, className}) {
    const location = useLocation()

    return (
        <Link
            className={`ttd-sidenav__item ${location.pathname === path ? `ttd-sidenav__item_active` : ``}`}
            to={path}
        >
            {icon}
            {title}
        </Link>
    )
}

function Sidenav() {
    return (
        <div className="ttd-sidenav">
            <div className="ttd-sidenav__title">Tooti-Do</div>

            <div className="ttd-sidenav__items">
                <div className="ttd-sidenav__items-block">
                    <SidenavItem path="/" title="Dashboard" icon={<i className="fa fa-home"/>}/>
                    <SidenavItem path="/projects" title="Projects" icon={<i className="fa fa-folder-open"/>}/>
                    <SidenavItem path="/stats" title="Stats" icon={<i className="fa fa-chart-bar"/>}/>
                    <SidenavItem path="/calendar" title="Calendar" icon={<i className="far fa-calendar-alt"/>}/>
                </div>

                <div className="ttd-sidenav__items-block">
                    <SidenavItem path="/settings" title="Settings" icon={<i className="fa fa-cog"/>}/>
                    <SidenavItem path="/questions" title="Questions" icon={<i className="fa fa-question-circle"/>}/>
                    <SidenavItem path="/logout" title="Log out" icon={<i className="fa fa-sign-out"/>}/>
                </div>
            </div>
        </div>
    )
}

export default Sidenav