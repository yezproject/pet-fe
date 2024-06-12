import * as React from 'react';
import {Fragment} from 'react';
import IconButton from '@mui/joy/IconButton';
import Dropdown from "@mui/joy/Dropdown";
import MenuButton from "@mui/joy/MenuButton";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded.js";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import Divider from "@mui/joy/Divider";

export default function BaseMoreOption({menuItems, divider}) {
    return (
        <Dropdown>
            <MenuButton
                slots={{root: IconButton}}
                slotProps={{root: {variant: 'plain', color: 'neutral', size: 'sm'}}}
            >
                <MoreHorizRoundedIcon/>
            </MenuButton>
            <Menu size="sm" sx={{minWidth: 140}}>
                {menuItems.map((item, index) => (
                    <Fragment key={index}>
                        <MenuItem onClick={() => item.action()}>
                            {item.label}
                        </MenuItem>
                        {divider.includes(item.label) && <Divider/>}
                    </Fragment>
                ))}
            </Menu>
        </Dropdown>
    );
}
