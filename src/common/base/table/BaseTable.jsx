import * as React from "react"
import {Fragment, useState} from "react"
import Box from "@mui/joy/Box"
import Table from "@mui/joy/Table"
import Sheet from "@mui/joy/Sheet"
import Checkbox from "@mui/joy/Checkbox"
import Typography from "@mui/joy/Typography"
import BaseTableFilters from "@/common/base/table/BaseTableFilters.jsx"
import PropTypes from "prop-types"
import BasePagination from "@/common/base/BasePagination.jsx"
import {minisToDate} from "@/common/constants/covert-time.js"
import {thousandsNumber} from "@/common/constants/convert-number.js"

export default function BaseTable({rows, isCheckbox, isRowMenu, isPagination, menu}) {
    const [selected, setSelected] = useState([])
    const style = {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        cursor: "pointer"
    }

    return (
        <Fragment>
            <BaseTableFilters/>
            <Sheet className="OrderTableContainer"
                variant="outlined"
                sx={{
                    display: {xs: "none", sm: "initial"},
                    width: "100%",
                    borderRadius: "sm",
                    flexShrink: 1,
                    overflow: "auto",
                    minHeight: 0,
                }}>
                <Table
                    aria-labelledby="tableTitle"
                    stickyHeader
                    hoverRow
                    sx={{
                        "--TableCell-headBackground": "var(--joy-palette-background-level1)",
                        "--Table-headerUnderlineThickness": "1px",
                        "--TableRow-hoverBackground": "var(--joy-palette-background-level1)",
                        "--TableCell-paddingY": "4px",
                        "--TableCell-paddingX": "8px",
                    }}>
                    <thead>
                        <tr>
                            {isCheckbox && <th style={{width: 48, textAlign: "center", padding: "12px 6px"}}>
                                <Checkbox
                                    size="sm"
                                    indeterminate={
                                        selected.length > 0 && selected.length !== rows.length
                                    }
                                    checked={selected.length === rows.length}
                                    onChange={(event) => {
                                        setSelected(
                                            event.target.checked ? rows.map((row) => row.id) : [],
                                        )
                                    }}
                                    color={
                                        selected.length > 0 || selected.length === rows.length
                                            ? "primary"
                                            : undefined
                                    }
                                    sx={{verticalAlign: "text-bottom"}}/>
                            </th>}
                            <th style={{width: 100, padding: "12px 6px"}}>Name</th>
                            <th style={{width: 80, padding: "12px 6px"}}>Date</th>
                            <th style={{width: 100, padding: "12px 6px"}}>Id</th>
                            <th style={{width: 100, padding: "12px 6px"}}>Category Id</th>
                            <th style={{width: 60, padding: "12px 6px"}}>Amount</th>
                            {isRowMenu && <th style={{width: 30, padding: "12px 6px"}}></th>}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row) => (
                            <tr key={row.id}>
                                {isCheckbox && <td style={{textAlign: "center", width: 120}}>
                                    <Checkbox
                                        size="sm"
                                        checked={selected.includes(row.id)}
                                        color={selected.includes(row.id) ? "primary" : undefined}
                                        onChange={(event) => {
                                            setSelected((ids) =>
                                                event.target.checked
                                                    ? ids.concat(row.id)
                                                    : ids.filter((itemId) => itemId !== row.id),
                                            )
                                        }}
                                        slotProps={{checkbox: {sx: {textAlign: "left"}}}}
                                        sx={{verticalAlign: "text-bottom"}}
                                    />
                                </td>}
                                <td>
                                    <Typography style={style}
                                        level="body-xs"
                                        title={row.name}>
                                        {row.name}
                                    </Typography>
                                </td>
                                <td>
                                    <Typography level="body-xs">{minisToDate(row.transactionDate)}</Typography>
                                </td>
                                <td>
                                    <Typography style={style}
                                        level="body-xs"
                                        title={row.id}>
                                        {row.id}
                                    </Typography>
                                </td>
                                <td>
                                    <Typography style={style}
                                        level="body-xs"
                                        title={row.categoryId}>
                                        {row.categoryId}
                                    </Typography>
                                </td>
                                <td>
                                    <Typography level="body-xs">{thousandsNumber(row.amount)}</Typography>
                                </td>
                                {isRowMenu && <td>
                                    <Box sx={{display: "flex", gap: 2, alignItems: "center"}}>
                                        {menu(row.id)}
                                    </Box>
                                </td>}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Sheet>
            {isPagination && <BasePagination/>}
        </Fragment>
    )
}

BaseTable.propTypes = {
    rows: PropTypes.array.isRequired,
    isCheckbox: PropTypes.bool,
}

BaseTable.defaultProps = {
    isCheckbox: true,
    isRowMenu: true,
    isPagination: true,
}
