import React from 'react'
import {Controller} from "react-hook-form"

function PriorityPickerItem({className, label, value, state, onChange, ...rest}) {
    return (
        <label className="ttd-add-todo__group-priority__item">
            <input
                className="ttd-add-todo__group-priority__item-input"
                type="radio"
                checked={state === value}
                onChange={onChange}
                value={value}
                {...rest}
            />
            <div
                className={`ttd-add-todo__group-priority__item__fake-radio ${className} ${state === value ? className + '-active' : ''}`}>
                {label}
            </div>
        </label>
    )
}

function PriorityPicker({control, name = "priority"}) {
    return (
        <Controller
            control={control}
            name={name}
            defaultValue="normal"
            render={(
                {field: {onChange, value}}
            ) => {

                return (
                    <div className="ttd-add-todo__group-priority__items">
                        <PriorityPickerItem
                            className="ttd-add-todo__group-priority__item__fake-radio_normal"
                            label="Normal"
                            value="normal"
                            name={name}
                            state={value}
                            onChange={onChange}
                        />
                        <PriorityPickerItem
                            className="ttd-add-todo__group-priority__item__fake-radio_medium"
                            label="Medium"
                            value="medium"
                            name={name}
                            state={value}
                            onChange={onChange}
                        />
                        <PriorityPickerItem
                            className="ttd-add-todo__group-priority__item__fake-radio_high"
                            label="High"
                            value="high"
                            name={name}
                            state={value}
                            onChange={onChange}
                        />
                    </div>
                )
            }}
        />
    )
}

export default PriorityPicker