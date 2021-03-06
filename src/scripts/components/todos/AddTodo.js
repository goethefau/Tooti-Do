import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {FORMAT} from "../../moment.config";
import {Drawer, Button, Form} from "rsuite";
import * as yup from "yup"
import {yupResolver} from '@hookform/resolvers/yup';

// Components
import FileInput from "../FileInput";
import DatePicker from "../DatePicker";
import TextField from "../TextField";
import TagPicker from "../TagPicker";
import PriorityPicker from "./PriorityPicker";

// Schema
const schema = yup.object().shape({
    title: yup
        .string()
        .min(8, "The title must be at least 8 characters")
        .max(256, "The title must be no more than 256 characters")
        .required("This field is required"),
    users: yup
        .array()
        .ensure()
        .min(1, "Please select users")
})

// Send data

// General
function AddTodo(props) {
    const [drawer, setDrawer] = useState({show: true})

    const close = () => setDrawer({show: false});
    const toggleDrawer = () => setDrawer({show: true});

    // React hook form
    const {handleSubmit, control, setValue} = useForm({
        resolver: yupResolver(schema),
        mode: "onChange"
    });

    // Send data
    const onSubmit = data => {
        props.addTodo(data)
        close()
    }

    // View
    return (
        <>
            <div style={{display: "inline-block"}} onClick={toggleDrawer}>{props.children}</div>
            <Drawer
                show={drawer.show}
                onHide={close}
                size="sm"
                duration={150}
            >
                <div className="ttd-add-todo">
                    <Form onSubmit={handleSubmit(onSubmit)} className="ttd-add-todo__body" noValidate fluid>
                        <div className="ttd-add-todo__body-wrapper">
                            <div className="ttd-add-todo__group">
                                <div
                                    className="ttd-add-todo__group-title d-flex justify-content-between align-items-center">
                                    Create new Todo
                                    <Button onClick={close} className="ttd-add-todo__dismiss" appearance="subtle">
                                        <i className="far fa-times"/>
                                    </Button>
                                </div>

                                <TextField
                                    control={control}
                                    placeholder="Title"
                                    name="title"
                                />
                            </div>
                            <div className="ttd-add-todo__group">
                                <TextField
                                    control={control}
                                    placeholder="Description"
                                    name="description"
                                    componentClass="textarea"
                                    rows={6}
                                />
                            </div>
                            <div className="ttd-add-todo__group">
                                <div className="ttd-add-todo__group-priority">
                                    <div className="ttd-add-todo__group-title m-0">Priority</div>
                                    <PriorityPicker control={control}/>
                                </div>
                            </div>
                            <div className="ttd-add-todo__group">
                                <FileInput
                                    control={control}
                                    name="files"
                                    setValue={setValue}
                                />
                            </div>
                            <div className="ttd-add-todo__group">
                                <div className="ttd-add-todo__group-title">Add users</div>
                                <TagPicker
                                    placement="top"
                                    size="lg"
                                    style={{width: "100%"}}
                                    control={control}
                                    name="users"
                                />
                            </div>
                        </div>

                        <div className="ttd-add-todo__footer">
                            <div className="ttd-add-todo__footer__due-date">
                                <div className="ttd-add-todo__footer__due-date__title ttd-add-todo__group-title">
                                    Due date
                                </div>

                                <DatePicker
                                    control={control}
                                    placement="top"
                                    format={`${FORMAT} HH:mm`}
                                />
                            </div>
                            <button type="submit" className="ttd-add-todo__footer__submit ttd-btn ttd-btn_accent">
                                Add Todo
                            </button>
                        </div>
                    </Form>
                </div>

            </Drawer>
        </>
    )
}

export default AddTodo