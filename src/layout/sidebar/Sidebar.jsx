import * as React from "react";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import {useNavigate} from "react-router-dom";

import {closeSidebar} from "@/contains/logic-sidebar.js";
import {List} from "@mui/material";
import {
    ListItem,
    ListItemContent,
    Typography,
    ListItemButton,
} from "@mui/joy";

export default function Sidebar() {
    const navigate = useNavigate();
    const routeTo = (link) => {
        navigate(link);
    };

    return (
        <Sheet
            sx={{
                position: "fixed",
                transform: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
                transition: "transform 0.4s, width 0.4s",
                zIndex: 10000,
                height: "100vh",
                width: "230px",
                top: 0,
                p: 2,
                display: "flex",
                flexDirection: "column",
                borderRight: "1px solid",
                borderColor: "divider",
            }}
        >
            <Box
                sx={{
                    position: "fixed",
                    zIndex: 9998,
                    top: 0,
                    left: "230px",
                    width: "100vw",
                    height: "100vh",
                    opacity: "var(--SideNavigation-slideIn)",
                    transition: "opacity 0.4s",
                    transform: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--sidebar-width, 0px)))",
                    backgroundColor: "var(--joy-palette-background-backdrop)",
                }}
                onClick={() => closeSidebar()}
            />
            <Box
                sx={{
                    overflow: "hidden auto",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <List
                    size="sm"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                        "--ListItem-paddingY": "8px",
                        "--ListItem-radius": (theme) => theme.vars.radius.sm,
                    }}
                >
                    <ListItem onClick={() => routeTo("/")}>
                        <ListItemButton sx={{display: "flex", gap: "8px"}}>
                            <HomeRoundedIcon sx={{marginLeft: "8px"}}/>
                            <ListItemContent sx={{marginRight: "8px"}}>
                                <Typography level="title-sm">Home</Typography>
                            </ListItemContent>
                        </ListItemButton>
                    </ListItem>

                    <ListItem onClick={() => routeTo("/dashboard")}>
                        <ListItemButton sx={{display: "flex", gap: "8px"}}>
                            <DashboardRoundedIcon sx={{marginLeft: "8px"}}/>
                            <ListItemContent sx={{marginRight: "8px"}}>
                                <Typography level="title-sm">Dashboard</Typography>
                            </ListItemContent>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Sheet>
    );
}
