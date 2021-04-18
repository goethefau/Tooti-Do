import React from 'react'
import {Button, Dropdown} from "rsuite";
import Moment from "react-moment"
import {FORMAT} from "../../moment.config"

function Todo({todo}) {
    // Subtasks
    const completed_sub_tasks = todo.subtasks.filter(todo => todo.completed).length

    // General
    return (
        <div className="ttd-dashboard__column-todo">
            {
                todo.img && <img src={todo.img} alt="" className="ttd-dashboard__column-todo__img"/>
            }
            <div className="ttd-dashboard__column-todo__content">
                <div className="ttd-dashboard__column-todo__title">
                    <div className="ttd-dashboard__column-todo__priority" style={{background: "#6EA0FF"}}/>
                    {todo.title}
                </div>
                <div className="ttd-dashboard__column-todo__description">
                    {todo.description}
                </div>
                <div className="ttd-dashboard__column-todo__users">
                    <div className="ttd-dashboard__column-todo__user" style={{background: "#6EA0FF"}}>MV</div>
                    <div className="ttd-dashboard__column-todo__user" style={{background: "#F99600"}}>LM</div>
                    <div className="ttd-dashboard__column-todo__user"><i className="fa fa-user"/></div>
                </div>
                <div className="ttd-dashboard__column-todo__meta">
                    <div className="ttd-dashboard__column-todo__meta-date">
                        <i className="fa fa-alarm-clock"/>
                        <Moment format={FORMAT}>
                            {todo.due_date}
                        </Moment>
                    </div>
                    <div className="ttd-dashboard__column-todo__meta-subtasks">
                        <i className="far fa-clipboard-list"/>
                        {completed_sub_tasks} / {todo.subtasks.length}
                    </div>
                    <Dropdown
                        renderTitle={() => {
                            return (
                                <Button appearance="subtle"
                                        className="ttd-dashboard__column-todo__meta-actions__button">
                                    <i className="far fa-ellipsis-h"/>
                                </Button>
                            );
                        }}
                        placement="topEnd"
                    >
                        <Dropdown.Item className="ttd-dashboard__column-todo__meta-actions__item">
                            <div className="ttd-dashboard__column-todo__meta-actions__item">
                                <i className="far fa-trash"/>
                                Delete Task
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item className="ttd-dashboard__column-todo__meta-actions__item">
                            <div className="ttd-dashboard__column-todo__meta-actions__item">
                                <i className="far fa-pen"/>
                                Edit Task
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item className="ttd-dashboard__column-todo__meta-actions__item">
                            <div className="ttd-dashboard__column-todo__meta-actions__item">
                                <i className="far fa-share"/>
                                Share
                            </div>
                        </Dropdown.Item>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}

export default Todo