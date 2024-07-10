import Typography from "@mui/joy/Typography"

function DefaultCell({ pureValue }) {
    const style = {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        cursor: "pointer",
    }
    return (
        <Typography style={style}
                    level="body-xs"
                    title={pureValue}>
            {pureValue}
        </Typography>
    )
}

function CustomCell({ valueGetter, row }) {
    return (
        valueGetter(row)
    )
}

export default function BaseTableCell({ col, row }) {
    if (col.field) return <DefaultCell pureValue={row[col.field]} />
    else if (col.valueGetter) return <CustomCell valueGetter={col.valueGetter} row={row} />
    else throw Error("Column require 'field' or 'valueGetter'")
}