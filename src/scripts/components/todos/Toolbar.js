import React from 'react'
import AddTodo from "./AddTodo";
import {Button} from "rsuite";
import Tooltip from "../Tooltip";

function DashboardToolbar({addTodo}) {
    return (
        <div className="ttd-dashboard__headline-toolbar">
            <AddTodo addTodo={addTodo}>
                <Tooltip title="Add Todo" placement="bottom">
                    <Button className="ttd-btn ttd-btn_light ttd-dashboard__headline-toolbar__item" appearance="subtle">
                        <i className="far fa-plus"/>
                    </Button>
                </Tooltip>
            </AddTodo>

            <Tooltip title="Sort" placement="bottom">
                <Button className="ttd-btn ttd-btn_light ttd-dashboard__headline-toolbar__item" appearance="subtle">
                    <i className="fa fa-sort"/>
                </Button>
            </Tooltip>

            <Tooltip title="Filter" placement="bottom">
                <Button className="ttd-btn ttd-btn_light ttd-dashboard__headline-toolbar__item" appearance="subtle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10.667" viewBox="0 0 16 10.667">
                        <path id="Icon_material-filter-list" data-name="Icon material-filter-list"
                              d="M10.722,19.667h3.556V17.889H10.722ZM4.5,9v1.778h16V9Zm2.667,6.222H17.833V13.444H7.167Z"
                              transform="translate(-4.5 -9)" fill="#b3b9bd"/>
                    </svg>
                </Button>
            </Tooltip>
        </div>
    )
}

export default DashboardToolbar