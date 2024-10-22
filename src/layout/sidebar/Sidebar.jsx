import BrightnessAutoRoundedIcon from "@mui/icons-material/Paid"
import GroupRoundedIcon from "@mui/icons-material/GroupRounded"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded"
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded"
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"
import SupportRoundedIcon from "@mui/icons-material/SupportRounded"
import Avatar from "@mui/joy/Avatar"
import Box from "@mui/joy/Box"
import Divider from "@mui/joy/Divider"
import GlobalStyles from "@mui/joy/GlobalStyles"
import IconButton from "@mui/joy/IconButton"
import List from "@mui/joy/List"
import ListItem from "@mui/joy/ListItem"
import ListItemButton, { listItemButtonClasses } from "@mui/joy/ListItemButton"
import ListItemContent from "@mui/joy/ListItemContent"
import Sheet from "@mui/joy/Sheet"
import Typography from "@mui/joy/Typography"

import { useAuth } from "@/common/auth/use-auth.jsx"
import BaseDarkMod from "@/common/base/BaseDarkMod.jsx"
import { closeSidebar } from "@/contains/logic-sidebar.js"
import { CategoryRounded } from "@mui/icons-material"
import { Fragment, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useUserStore } from "@/state/user-store.js"
import { getToken } from "@/common/storage/local-storage.js"


function Toggle({ defaultExpanded = false, renderToggle, children }) {
    const [open, setOpen] = useState(defaultExpanded)
    return (
        <Fragment>
            {renderToggle({ open, setOpen })}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateRows: open ? "1fr" : "0fr",
                    transition: "0.2s ease",
                    "& > *": {
                        overflow: "hidden",
                    },
                }}
            >
                {children}
            </Box>
        </Fragment>
    )
}

export default function Sidebar({ onChangeMenu }) {
    const location = useLocation()
    const navigate = useNavigate()
    const [selectedMenu, setSelectedMenu] = useState("")
    const { logout } = useAuth()

    const navigateTo = (pathName) => {
        navigate(`/${pathName}`)
        setSelectedMenu(pathName)
    }

    const fullName = useUserStore((state) => state.fullName)
    const email = useUserStore((state) => state.email)
    const setFullName = useUserStore((state) => state.setFullName)
    const setEmail = useUserStore((state) => state.setEmail)

    useEffect(() => {
        const token = getToken()
        const payloadBody = token.split(".")[1]
        const userInfo = JSON.parse(atob(payloadBody))
        setEmail(userInfo?.sub || "")
        setFullName(userInfo?.name || "")
    }, [])

    useEffect(() => {
        setSelectedMenu(location?.pathname?.split("/")[1])
    }, [location])

    useEffect(() => {
        onChangeMenu(selectedMenu)
    }, [selectedMenu])

    const onClickLogout = () => {
        logout()
    }

    return (
        <Sheet
            className="Sidebar"
            sx={{
                position: { xs: "fixed", md: "sticky" },
                transform: {
                    xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
                    md: "none",
                },
                transition: "transform 0.4s, width 0.4s",
                zIndex: 1,
                height: "100dvh",
                width: "var(--Sidebar-width)",
                top: 0,
                p: 2,
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                borderRight: "1px solid",
                borderColor: "divider",
            }}
        >
            <GlobalStyles
                styles={(theme) => ({
                    ":root": {
                        "--Sidebar-width": "220px",
                        [theme.breakpoints.up("lg")]: {
                            "--Sidebar-width": "240px",
                        },
                    },
                })}
            />
            <Box
                className="Sidebar-overlay"
                sx={{
                    position: "fixed",
                    zIndex: 9998,
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    opacity: "var(--SideNavigation-slideIn)",
                    backgroundColor: "var(--joy-palette-background-backdrop)",
                    transition: "opacity 0.4s",
                    transform: {
                        xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
                        lg: "translateX(-100%)",
                    },
                }}
                onClick={() => closeSidebar()}
            />
            <Box sx={{ display: "flex", gap: 1, alignItems: "center", mb: 5 }}>
                <IconButton variant="soft" color="primary" size="sm">
                    <BrightnessAutoRoundedIcon />
                </IconButton>
                <Typography level="title-lg">Ez Money</Typography>
                <BaseDarkMod sx={{ ml: "auto" }} />
            </Box>
            {/* <Input size="sm" startDecorator={<SearchRoundedIcon />} placeholder="Search" /> */}
            <Box
                sx={{
                    minHeight: 0,
                    overflow: "hidden auto",
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    [`& .${listItemButtonClasses.root}`]: {
                        gap: 1.5,
                    },
                }}
            >
                <List
                    size="sm"
                    sx={{
                        gap: 1,
                        "--List-nestedInsetStart": "30px",
                        "--ListItem-radius": (theme) => theme.vars.radius.sm,
                    }}
                >
                    {/* <ListItem>
                        <ListItemButton selected={selectedMenu === "home"} onClick={() => navigateTo("home")}>
                            <HomeRoundedIcon />
                            <ListItemContent>
                                <Typography level="title-sm">Home</Typography>
                            </ListItemContent>
                        </ListItemButton>
                    </ListItem> */}

                    <ListItem>
                        <ListItemButton selected={selectedMenu === "transaction"}
                                        onClick={() => navigateTo("transaction")}>
                            <ShoppingCartRoundedIcon />
                            <ListItemContent>
                                <Typography level="title-sm">Transaction</Typography>
                            </ListItemContent>
                        </ListItemButton>
                    </ListItem>

                    <ListItem>
                        <ListItemButton selected={selectedMenu === "category"} onClick={() => navigateTo("category")}>
                            <CategoryRounded />
                            <ListItemContent>
                                <Typography level="title-sm">Category</Typography>
                            </ListItemContent>
                        </ListItemButton>
                    </ListItem>

                    {/* <ListItem>
                        <ListItemButton selected={selectedMenu === "report"} onClick={() => navigateTo("report")}>
                            <DashboardRoundedIcon />
                            <ListItemContent>
                                <Typography level="title-sm">Report</Typography>
                            </ListItemContent>
                        </ListItemButton>
                    </ListItem> */}

                    <ListItem nested>
                        <Toggle
                            renderToggle={({ open, setOpen }) => (
                                <ListItemButton onClick={() => setOpen(!open)}>
                                    <GroupRoundedIcon />
                                    <ListItemContent>
                                        <Typography level="title-sm">Users</Typography>
                                    </ListItemContent>
                                    <KeyboardArrowDownIcon sx={{ transform: open ? "rotate(180deg)" : "none" }} />
                                </ListItemButton>
                            )}
                        >
                            <List sx={{ gap: 0.5 }}>
                                <ListItem sx={{ mt: 0.5 }}>
                                    <ListItemButton role="menuitem" component="a">
                                        My profile
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>Create a new user</ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>Roles & permission</ListItemButton>
                                </ListItem>
                            </List>
                        </Toggle>
                    </ListItem>
                </List>

                <List
                    size="sm"
                    sx={{
                        mt: "auto",
                        flexGrow: 0,
                        "--ListItem-radius": (theme) => theme.vars.radius.sm,
                        "--List-gap": "8px",
                        mb: 2,
                    }}
                >
                    <ListItem>
                        <ListItemButton>
                            <SupportRoundedIcon />
                            Support
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <SettingsRoundedIcon />
                            Settings
                        </ListItemButton>
                    </ListItem>
                </List>
                {/* <Card invertedColors variant="soft" color="warning" size="sm" sx={{ boxShadow: "none" }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography level="title-sm">Used space</Typography>
                        <IconButton size="sm">
                            <CloseRoundedIcon />
                        </IconButton>
                    </Stack>
                    <Typography level="body-xs">Your team has used 80% of your available space. Need more?</Typography>
                    <LinearProgress variant="outlined" value={80} determinate sx={{ my: 1 }} />
                    <Button size="sm" variant="solid">
                        Upgrade plan
                    </Button>
                </Card> */}
            </Box>
            <Divider />
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <Avatar
                    variant="outlined"
                    size="sm"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                />
                <Box sx={{ minWidth: 0, flex: 1 }}>
                    <Typography level="title-sm">{fullName}</Typography>
                    <Typography level="body-xs">{email}</Typography>
                </Box>
                <IconButton size="sm" variant="plain" color="neutral" onClick={() => onClickLogout()}>
                    <LogoutRoundedIcon />
                </IconButton>
            </Box>
        </Sheet>
    )
}
