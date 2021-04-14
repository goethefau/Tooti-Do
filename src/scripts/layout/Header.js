import React from "react"

function Search() {
    return (
        <form className="ttd-header__search-form">
            <i className="far fa-search"/>
            <input className="ttd-header__search-form__input" type="text" placeholder="Search..."/>
        </form>
    )
}

function Notifications() {
    return (
        <div className="ttd-header__notifications">
            <i className="far fa-bell"/>
        </div>
    )
}

function Profile() {
    return (
        <div className="ttd-header__profile">
            <div className="ttd-header__profile-menu__wrapper">
                Harry Bobo
                <i className="far fa-chevron-down"/>
            </div>
            <img src="images/pexels-pixabay-220453.jpg" alt="" className="ttd-header__profile-img"/>
        </div>
    )
}

function Header() {
    return (
        <div className="ttd-header">
            <Search/>
            <div className="ttd-header__block">
                <Notifications/>
                <Profile/>
            </div>
        </div>
    )
}

export default Header