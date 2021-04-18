import {DatePicker} from "rsuite";
import {FORMAT} from "../moment.config";
import * as dateFns from "date-fns";
import moment from "moment";
import React from "react";
import {Controller} from "react-hook-form";

function Component({control, name, defaultValue = null, ...rest}) {
    return (
        <Controller
            control={control}
            name="date"
            defaultValue={defaultValue}
            render={({field: {onChange, value}}) => (
                <DatePicker
                    format={FORMAT}
                    ranges={[
                        {
                            label: 'Now',
                            value: new Date()
                        }
                    ]}
                    placement="auto"
                    disabledDate={date => dateFns.isBefore(date, new Date(moment().subtract(1, 'days')))}
                    {...rest}
                    onChange={onChange}
                    value={value}
                />
            )}
        />

    )
}

export default Component