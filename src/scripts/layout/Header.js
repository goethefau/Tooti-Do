import React from "react"

function Header() {
    return (
        <div className="ttd-header">
            <form className="ttd-header__search-form">
                <i className="far fa-search"/>
                <input className="ttd-header__search-form__input" type="text" placeholder="Search..."/>
            </form>
            <div className="ttd-header__block">
                <div className="ttd-header__notifications">
                    <i className="far fa-bell"/>
                </div>
                <div className="ttd-header__profile">
                    <div className="ttd-header__profile-menu__wrapper">
                        Harry Bobo
                        <i className="far fa-chevron-down"/>
                    </div>
                    <img src="images/pexels-pixabay-220453.jpg" alt="" className="ttd-header__profile-img"/>
                </div>
            </div>
        </div>
    )
}

export default Header