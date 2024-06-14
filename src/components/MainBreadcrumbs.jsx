import { Breadcrumbs, Link, Typography } from "@mui/joy"
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded"
import HomeRoundedIcon from "@mui/icons-material/HomeRounded"

export default function MainBreadcrumbs({ breadcrumbTexts }) {
    return (
        <Breadcrumbs
            size="sm"
            aria-label="breadcrumbs"
            separator={<ChevronRightRoundedIcon fontSize="sm" />}
            sx={{ pl: 0 }}
        >
            <Link
                underline="none"
                color="neutral"
                href="#some-link"
                aria-label="Home"
            >
                <HomeRoundedIcon />
            </Link>
            {breadcrumbTexts.map((text, index) => (
                <Link
                    underline="hover"
                    color="neutral"
                    href="#some-link"
                    fontSize={12}
                    fontWeight={500}
                >
                    {text}
                </Link>
            ))}
        </Breadcrumbs>
    )
}