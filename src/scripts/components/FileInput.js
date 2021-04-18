import React from 'react'
import {Button} from "rsuite";
import Dropzone from "react-dropzone";
import {Controller} from "react-hook-form";

class File extends React.PureComponent {
    render() {
        const file = this.props.file
        return (
            <div className="ttd-add-todo__group__attach-files__uploads-item">
                <div className="ttd-add-todo__group__attach-files__uploads-item__icon">
                    <i className="far fa-link"/>
                </div>
                <div className="ttd-add-todo__group__attach-files__uploads-item__title">
                    {file.name}
                </div>
                <div>
                    <Button onClick={this.props.remove.bind(null, file.name)} appearance="subtle"
                            className="ttd-add-todo__group__attach-files__uploads-item__action-remove">
                        <i className="far fa-trash"/>
                    </Button>
                </div>
            </div>
        )
    }
}

function FileInput({control, name, setValue}) {
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={[]}
            render={(
                {
                    field: {onChange, onBlur, value}
                }) => {

                function remove(fileName) {
                    setValue(name, value.filter(file => file.name !== fileName))
                }

                return (
                    <div className="ttd-add-todo__group__attach-files">
                        <Dropzone onDrop={onChange}>
                            {({getRootProps, getInputProps, isDragActive}) => {
                                const style = {}
                                if (isDragActive) {
                                    style.borderColor = "#0052CC"
                                }

                                return (
                                    <div {...getRootProps()} className="ttd-add-todo__group__attach-files__label">
                                        <div
                                            className="ttd-add-todo__group__attach-files__fake-input rs-input rs-input-lg"
                                            style={style}
                                        >
                                            <i className="fal fa-cloud-upload"/>
                                            Drag 'n' drop some files here, or click to select files
                                        </div>
                                        <input
                                            {...getInputProps()}
                                            name={name}
                                            onBlur={onBlur}
                                            className="ttd-add-todo__group__attach-files__input"
                                            type="file"
                                        />
                                    </div>
                                )
                            }}
                        </Dropzone>
                        <div className="ttd-add-todo__group__attach-files__uploads">
                            {value.map(file => <File key={file.name} file={file} remove={remove}/>)}
                        </div>
                    </div>

                )
            }}
        />
    )
}

export default FileInput