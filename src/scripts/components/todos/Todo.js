import React from 'react'
import {Button} from "rsuite";

function Todo({img}) {
    return (
        <div className="ttd-dashboard__column-todo">
            <img src={img} alt="" className="ttd-dashboard__column-todo__img"/>
            <div className="ttd-dashboard__column-todo__content">
                <div className="ttd-dashboard__column-todo__title">
                    <div className="ttd-dashboard__column-todo__priority" style={{background: "#6EA0FF"}}/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, voluptatem
                </div>
                <div className="ttd-dashboard__column-todo__description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p>Aliquam delectus nisi, non qui tempore unde veritatis?</p>
                </div>
                <div className="ttd-dashboard__column-todo__users">
                    <div className="ttd-dashboard__column-todo__user" style={{background: "#6EA0FF"}}>MV</div>
                    <div className="ttd-dashboard__column-todo__user" style={{background: "#F99600"}}>LM</div>
                    <div className="ttd-dashboard__column-todo__user"><i className="fa fa-user"/></div>
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

export default Todo