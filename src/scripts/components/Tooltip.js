import React from "react"
import {Tooltip, Whisper} from 'rsuite';

function Component({title, children, ...rest}) {
    const tooltip = (
        <Tooltip>
            {title}
        </Tooltip>
    )

    return (
        <Whisper
            placement="auto"
            trigger="hover"
            speaker={tooltip}
            delay={750}
            {...rest}
        >
            {children}
        </Whisper>
    )
}

export default Component