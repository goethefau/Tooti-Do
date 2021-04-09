import React from "react"

function SidenavItem({title, icon, className}) {
    return (
        <div className={`ttd-sidenav__item ${className ? className : ``}`}>
            {icon}
            {title}
        </div>
    )
}

function Sidenav() {
    return (
        <div className="ttd-sidenav">
            <div className="ttd-sidenav__title">Tooti-Do</div>

            <div className="ttd-sidenav__items">
                <div className="ttd-sidenav__items-block">
                    <SidenavItem className="ttd-sidenav__item_active" title="Dashboard" icon={<i className="fa fa-home"/>}/>
                    <SidenavItem title="Projects" icon={<i className="fa fa-folder-open"/>}/>
                    <SidenavItem title="Stats" icon={<i className="fa fa-chart-bar"/>}/>
                    <SidenavItem title="Calendar" icon={<i className="far fa-calendar-alt"/>}/>
                </div>

                <div className="ttd-sidenav__items-block">
                    <SidenavItem title="Settings" icon={<i className="fa fa-cog"/>}/>
                    <SidenavItem title="Questions" icon={<i className="fa fa-question-circle"/>}/>
                    <SidenavItem title="Log out" icon={<i className="fa fa-sign-out"/>}/>
                </div>
            </div>
        </div>
    )
}

export default Sidenav