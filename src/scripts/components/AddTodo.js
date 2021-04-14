import React from 'react';

// Components
import {Drawer, Button, Input, FormControl, Form, TagPicker, DatePicker} from "rsuite";

const data = [
    {
        "label": "Eugenia",
        "value": "Eugenia",
        "role": "Master"
    },
    {
        "label": "Kariane",
        "value": "Kariane",
        "role": "Master"
    },
    {
        "label": "Louisa",
        "value": "Louisa",
        "role": "Master"
    },
    {
        "label": "Marty",
        "value": "Marty",
        "role": "Master"
    },
    {
        "label": "Kenya",
        "value": "Kenya",
        "role": "Master"
    },
    {
        "label": "Hal",
        "value": "Hal",
        "role": "Developer"
    },
    {
        "label": "Julius",
        "value": "Julius",
        "role": "Developer"
    },
    {
        "label": "Travon",
        "value": "Travon",
        "role": "Developer"
    },
    {
        "label": "Vincenza",
        "value": "Vincenza",
        "role": "Developer"
    },
    {
        "label": "Dominic",
        "value": "Dominic",
        "role": "Developer"
    },
    {
        "label": "Pearlie",
        "value": "Pearlie",
        "role": "Guest"
    },
    {
        "label": "Tyrel",
        "value": "Tyrel",
        "role": "Guest"
    },
    {
        "label": "Jaylen",
        "value": "Jaylen",
        "role": "Guest"
    },
    {
        "label": "Rogelio",
        "value": "Rogelio",
        "role": "Guest"
    }
]

// General
class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true
        };

        this.close = this.close.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    close() {
        this.setState({
            show: false
        });
    }

    toggleDrawer() {
        this.setState({show: true});
    }

    render() {
        return (
            <>
                <div style={{display: "inline-block"}} onClick={this.toggleDrawer}>{this.props.button}</div>
                <Drawer
                    show={this.state.show}
                    onHide={this.close}
                    size="sm"
                    duration={150}
                >
                    <div className="ttd-add-todo">
                        <Form className="ttd-add-todo__body" fluid>
                            <div className="ttd-add-todo__body-wrapper">
                                <div className="ttd-add-todo__group">
                                    <div className="ttd-add-todo__group-title">Create new Todo</div>
                                    <Input placeholder="Title" size="lg"/>
                                </div>
                                <div className="ttd-add-todo__group">
                                    <FormControl size="lg" rows={6} name="textarea" componentClass="textarea"
                                                 placeholder="Description"/>
                                </div>
                                <div className="ttd-add-todo__group">
                                    <div className="ttd-add-todo__group-priority">
                                        <div className="ttd-add-todo__group-title m-0">Priority</div>
                                        <div className="ttd-add-todo__group-priority__items">
                                            <label className="ttd-add-todo__group-priority__item">
                                                <input name="priority"
                                                       className="ttd-add-todo__group-priority__item-input"
                                                       type="radio"/>
                                                <div style={{background: "#F8FAFF", color: "#6EA0FF"}}
                                                     className="ttd-add-todo__group-priority__item__fake-radio">Normal
                                                </div>
                                            </label>
                                            <label className="ttd-add-todo__group-priority__item">
                                                <input name="priority"
                                                       className="ttd-add-todo__group-priority__item-input"
                                                       type="radio"/>
                                                <div style={{background: "#FFFAF2", color: "#FAA018"}}
                                                     className="ttd-add-todo__group-priority__item__fake-radio">Medium
                                                </div>
                                            </label>
                                            <label className="ttd-add-todo__group-priority__item">
                                                <input name="priority"
                                                       className="ttd-add-todo__group-priority__item-input"
                                                       type="radio"/>
                                                <div style={{background: "#FFF5F4", color: "#F55449"}}
                                                     className="ttd-add-todo__group-priority__item__fake-radio">High
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="ttd-add-todo__group">
                                    <div className="ttd-add-todo__group__attach-files">
                                        <label className="ttd-add-todo__group__attach-files__label">
                                            <div
                                                className="ttd-add-todo__group__attach-files__fake-input rs-input rs-input-lg">
                                            <span className="ttd-add-todo__group__attach-files__fake-input__value">
                                                Attach files
                                            </span>
                                                <i className="far fa-cloud-download"/>
                                            </div>
                                            <input className="ttd-add-todo__group__attach-files__input" type="file"/>
                                        </label>
                                        <div className="ttd-add-todo__group__attach-files__uploads">
                                            <div className="ttd-add-todo__group__attach-files__uploads-item">
                                                <div className="ttd-add-todo__group__attach-files__uploads-item__icon">
                                                    <i className="far fa-link"/>
                                                </div>
                                                <div className="ttd-add-todo__group__attach-files__uploads-item__title">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                                                    atque beatae cum eum, in laboriosam modi quod ut velit vitae.
                                                </div>
                                                <div>
                                                    <Button appearance="subtle"
                                                            className="ttd-add-todo__group__attach-files__uploads-item__action-remove">
                                                        <i className="fa fa-trash"/>
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="ttd-add-todo__group__attach-files__uploads-item">
                                                <div className="ttd-add-todo__group__attach-files__uploads-item__icon">
                                                    <i className="far fa-link"/>
                                                </div>
                                                <div className="ttd-add-todo__group__attach-files__uploads-item__title">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                                                    atque beatae cum eum, in laboriosam modi quod ut velit vitae.
                                                </div>
                                                <div>
                                                    <Button appearance="subtle"
                                                            className="ttd-add-todo__group__attach-files__uploads-item__action-remove">
                                                        <i className="fa fa-trash"/>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ttd-add-todo__group">
                                    <div className="ttd-add-todo__group-title">Add users</div>
                                    <div>
                                        <TagPicker placement="top" size="lg" data={data} groupBy="role"
                                                   style={{width: "100%"}}/>
                                    </div>
                                </div>
                            </div>

                            <div className="ttd-add-todo__footer">
                                <div className="ttd-add-todo__footer__due-date">
                                    <div className="ttd-add-todo__footer__due-date__title ttd-add-todo__group-title">Due
                                        date
                                    </div>
                                    <DatePicker
                                        format="YYYY-MM-DD HH:mm:ss"
                                        ranges={[
                                            {
                                                label: 'Now',
                                                value: new Date()
                                            }
                                        ]}
                                        placement="top"
                                    />
                                </div>
                                <button type="submit"
                                        className="ttd-add-todo__footer__submit ttd-btn ttd-btn_accent">
                                    Add Todo
                                </button>
                            </div>
                        </Form>
                    </div>

                </Drawer>
            </>
        )
    }
}

export default AddTodo