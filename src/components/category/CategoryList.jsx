import BaseTable from "@/common/base/table/BaseTable"
import Typography from "@mui/joy/Typography"
import Box from "@mui/joy/Box"
import { memo } from "react"

export default memo(CategoryList)

function CategoryList({ categories, menu }) {
    const style = {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",

    }

    const columns = [
        {
            name: "Id",
            valueGetter: (row) => (
                <Typography style={style}
                    level="body-xs"
                    title={row.id}>
                    {row.id}
                </Typography>
            )
        },
        {
            name: "Name",
            valueGetter: (row) => (
                <Typography style={style}
                    level="body-xs"
                    title={row.name}>
                    {row.name}
                </Typography>
            )
        },
        {
            name: "Action",
            valueGetter: (row) => (
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    {menu(row)}
                </Box>
            )
        }
    ]

    return (
        <>
            <BaseTable
                columns={columns}
                rows={categories}
                rowKey="id"
                checkboxSelection={true}
            />
        </>
    )
}
