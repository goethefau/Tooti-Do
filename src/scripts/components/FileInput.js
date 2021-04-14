import React from 'react'
import {Button} from "rsuite";

function File() {
    return (
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
    )
}

function FileInput() {
    return (
        <div className="ttd-add-todo__group__attach-files">
            <label className="ttd-add-todo__group__attach-files__label">
                <div className="ttd-add-todo__group__attach-files__fake-input rs-input rs-input-lg">
                    <span className="ttd-add-todo__group__attach-files__fake-input__value">
                        Attach files
                    </span>
                    <i className="far fa-cloud-download"/>
                </div>
                <input className="ttd-add-todo__group__attach-files__input" type="file"/>
            </label>

            <div className="ttd-add-todo__group__attach-files__uploads">
                <File/>
                <File/>
            </div>
        </div>
    )
}

export default FileInput