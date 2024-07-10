import Box from "@mui/joy/Box"
import Button from "@mui/joy/Button"
import IconButton, { iconButtonClasses } from "@mui/joy/IconButton"

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import { useEffect, useState } from "react"

export default function BasePagination({ count, current, onClickPage, onClickNext, onClickPrevious }) {
    const [pages, setPages] = useState([])

    useEffect(() => {
        const pageContent = calculatePageContents(current, count).map(content => (
            {
                content: `${content}`,
                isActive: content == current,
            }
        ))

        setPages(pageContent)
    }, [count, current])

    const calculatePageContents = (current, count) => {
        if (count <= 7) {
            const result = []
            for (let i = 1; i <= count; i++) {
                result.push(i)
            }
            return result
        } else {
            const last = Number(count)
            const currentNum = Number(current)
            if (currentNum < 5) {
                return [1, 2, 3, 4, 5, "...", last]
            } else if (currentNum > last - 4) {
                return [1, "...", last - 4, last - 3, last - 2, last - 1, last]
            } else {
                return [1, "...", currentNum - 1, currentNum, currentNum + 1, "...", last]
            }
        }
    }

    const strategyStyle = (page) => {
        if (!Number(page?.content)) {
            return {
                variant: "plain",
                disabled: true,
            }
        }

        if (page?.isActive) {
            return {
                variant: "solid",
                disabled: true,
            }
        } else {
            return {
                variant: "outlined",
                disabled: false,
            }
        }

    }

    return (
        <>
            <Box
                className="Pagination-laptopUp"
                sx={{
                    pt: 2,
                    gap: 1,
                    [`& .${iconButtonClasses.root}`]: { borderRadius: "50%" },
                    display: "flex",
                }}
            >
                <Button
                    size="sm"
                    variant="outlined"
                    color="neutral"
                    startDecorator={<KeyboardArrowLeftIcon />}
                    onClick={onClickPrevious}
                >
                    Previous
                </Button>

                <Box sx={{ flex: 1 }} />
                {pages.map((page, index) => (
                    <IconButton
                        key={index}
                        size="sm"
                        color={page.isActive ? "primary" : "neutral"}
                        onClick={() => onClickPage(page.content)}
                        {...strategyStyle(page)}
                    >
                        {page.content}
                    </IconButton>
                ))}
                <Box sx={{ flex: 1 }} />

                <Button
                    size="sm"
                    variant="outlined"
                    color="neutral"
                    endDecorator={<KeyboardArrowRightIcon />}
                    onClick={onClickNext}
                >
                    Next
                </Button>
            </Box>
        </>
    )
}