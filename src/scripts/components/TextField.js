import React from "react";
import {Controller} from "react-hook-form";
import {Input} from "rsuite";

function Component({control, name, ...rest}) {
    return (
        <Controller
            control={control}
            name={name}
            render={(
                {
                    field: {onChange, onBlur, value, ref},
                    fieldState: {error}
                }
            ) => {
                const styles = {}
                if (error) styles.borderColor = "#F55449"

                return (
                    <>
                        <Input
                            {...rest}
                            onChange={onChange}
                            onBlur={onBlur}
                            defaultValue={value}
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