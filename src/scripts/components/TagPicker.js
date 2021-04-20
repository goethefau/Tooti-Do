import {TagPicker} from "rsuite";
import React from "react";
import {Controller} from "react-hook-form";

const data = [
    {
        "label": "Eugenia",
        "value": "1",
        "role": "Master"
    },
    {
        "label": "Kariane",
        "value": "2",
        "role": "Master"
    },
    {
        "label": "Louisa",
        "value": "3",
        "role": "Master"
    },
    {
        "label": "Marty",
        "value": "4",
        "role": "Master"
    },
    {
        "label": "Kenya",
        "value": "5",
        "role": "Master"
    },
    {
        "label": "Hal",
        "value": "6",
        "role": "Developer"
    },
    {
        "label": "Julius",
        "value": "7",
        "role": "Developer"
    },
    {
        "label": "Travon",
        "value": "8",
        "role": "Developer"
    },
    {
        "label": "Vincenza",
        "value": "9",
        "role": "Developer"
    },
    {
        "label": "Dominic",
        "value": "10",
        "role": "Developer"
    },
    {
        "label": "Pearlie",
        "value": "11",
        "role": "Guest"
    },
    {
        "label": "Tyrel",
        "value": "12",
        "role": "Guest"
    },
    {
        "label": "Jaylen",
        "value": "13",
        "role": "Guest"
    },
    {
        "label": "Rogelio",
        "value": "14",
        "role": "Guest"
    }
]

function Component({control, name, setError, ...rest}) {
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={[]}
            render={(
                {
                    field: {onChange, value},
                    fieldState: {error}
                }
            ) => {
                const styles = {width: "100%"}
                if (error) styles.borderColor = "#F55449"

                return (
                    <>
                        <TagPicker
                            placement="auto"
                            data={data}
                            {...rest}
                            onChange={onChange}
                            value={value}
                            style={styles}
                        />
                        {error && (
                            <small className="ttd-text-red d-block mt-2 ms-2">{error.message}</small>
                        )}
                    </>
                )
            }}
        />
    )
}

export default Component

