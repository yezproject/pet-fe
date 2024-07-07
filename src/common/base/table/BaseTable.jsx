
import Checkbox from "@mui/joy/Checkbox"
import Sheet from "@mui/joy/Sheet"
import Table from "@mui/joy/Table"
import { useState } from "react"
import BaseTableCell from "./BaseTableCell.jsx"
export default function BaseTable({ columns, rows, rowKey, checkboxSelection = false }) {
    const [selected, setSelected] = useState([])

    return (
        <>
            <Sheet
                variant="outlined"
                sx={{
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
                            {checkboxSelection && <th style={{ width: 48, textAlign: "center", padding: "12px 6px" }}>
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
                                    sx={{ verticalAlign: "text-bottom" }} />
                            </th>}
                            {columns.map(col => (
                                <th key={col.name} style={{ width: 100, padding: "12px 6px" }}>{col.name}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(row => (
                            <tr key={row[rowKey]}>
                                {checkboxSelection && <td style={{ textAlign: "center", width: 48 }}>
                                    <Checkbox
                                        size="sm"
                                        checked={selected.includes(row.id)}
                                        onChange={(event) => {
                                            setSelected((ids) =>
                                                event.target.checked
                                                    ? ids.concat(row.id)
                                                    : ids.filter((itemId) => itemId !== row.id),
                                            )
                                        }}
                                        slotProps={{ checkbox: { sx: { textAlign: "left" } } }}
                                        sx={{ verticalAlign: "text-bottom" }}
                                    />
                                </td>}
                                {columns.map(col => (
                                    <td key={col.name}>
                                        <BaseTableCell col={col} row={row} />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Sheet>

        </>
    )
}