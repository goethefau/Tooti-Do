import React, {useRef} from "react";

// Components
import {Button} from "rsuite";

// Functionality
import AddTodo from "./AddTodo";

// General
function Toolbar() {
    return (
        <div className="ttd-dashboard__headline-toolbar">
            <AddTodo button={
                <Button className="ttd-btn ttd-btn_light ttd-dashboard__headline-toolbar__item" appearance="subtle">
                    <i className="far fa-plus"/>
                </Button>
            }/>
            <Button className="ttd-btn ttd-btn_light ttd-dashboard__headline-toolbar__item" appearance="subtle">
                <i className="fa fa-sort"/>
            </Button>
            <Button className="ttd-btn ttd-btn_light ttd-dashboard__headline-toolbar__item" appearance="subtle">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10.667" viewBox="0 0 16 10.667">
                    <path id="Icon_material-filter-list" data-name="Icon material-filter-list"
                          d="M10.722,19.667h3.556V17.889H10.722ZM4.5,9v1.778h16V9Zm2.667,6.222H17.833V13.444H7.167Z"
                          transform="translate(-4.5 -9)" fill="#b3b9bd"/>
                </svg>
            </Button>
        </div>
    )
}

function Todo({img}) {
    return (
        <div className="ttd-dashboard__column-todo">
            <img src={img} alt="" className="ttd-dashboard__column-todo__img"/>
            <div className="ttd-dashboard__column-todo__content">
                <div className="ttd-dashboard__column-todo__title">
                    <div className="ttd-dashboard__column-todo__priority" style={{background: "#6EA0FF"}}/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Rerum, voluptatem
                </div>
                <div className="ttd-dashboard__column-todo__description">

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p> Aliquam delectus nisi, non qui tempore unde veritatis?</p>

                </div>
                <div className="ttd-dashboard__column-todo__users">

                    <div className="ttd-dashboard__column-todo__user" style={{background: "#6EA0FF"}}>MV</div>
                    <div className="ttd-dashboard__column-todo__user" style={{background: "#F99600"}}>LM</div>
                    <div className="ttd-dashboard__column-todo__user"><i className="fa fa-user"></i></div>

                </div>
                <div className="ttd-dashboard__column-todo__meta">

                    <div className="ttd-dashboard__column-todo__meta-date">
                        <i className="fa fa-alarm-clock"/>
                        28 May 2021
                    </div>
                    <div className="ttd-dashboard__column-todo__meta-subtasks">
                        <i className="far fa-clipboard-list"/>
                        6 / 9
                    </div>
                    <Button appearance="subtle" className="ttd-dashboard__column-todo__meta-actions">
                        <i className="far fa-ellipsis-h"/>
                    </Button>

                </div>
            </div>
        </div>
    )
}

function Column({title}) {
    return (
        <div className="ttd-dashboard__column">
            <div className="ttd-dashboard__column-headline">
                {title}
                <span className="ttd-dashboard__column-headline__count">( 1 )</span>
            </div>
            <div className="ttd-dashboard__column-inner">
                <Todo
                    img="https://cdn.dribbble.com/users/1187002/screenshots/15378278/media/b12fe4276137f73ea3d629e41c2fd192.png?compress=1&resize=1000x750"/>
            </div>
        </div>
    )
}

function Dashboard() {
    return (
        <div className="ttd-dashboard">
            <div className="ttd-dashboard__headline">
                <div className="ttd-dashboard__headline-title">
                    Dashboard
                </div>
                <Toolbar/>
            </div>
            <div className="ttd-dashboard__columns">
                <div className="ttd-dashboard__columns-inner">
                    <Column title="To do"/>
                    <Column title="In progress"/>
                    <Column title="Completed"/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard